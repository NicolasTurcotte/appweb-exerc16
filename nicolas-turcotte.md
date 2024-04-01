# Nicolas Turcotte 

## Revue de code
**Code:**

````md
<script setup lang="ts">
function previousSong(){
  if(currentSong.value.id == 1){
    currentSong.value = allSongs.value[allSongs.value.length - 1]
  }
  else{
    currentSong.value = allSongs.value[currentSong.value.id - 2]
  }
  currentArtist.value = allArtists.value[currentSong.value.artistId - 1]
}

function shuffleSong(){
  let max = allSongs.value[allSongs.value.length - 1].id

  let newId = Math.floor(Math.random() * max)

  currentSong.value = allSongs.value[newId]

  currentArtist.value = allArtists.value[currentSong.value.artistId - 1]
}

function nextSong(){
  if(currentSong.value.id == allSongs.value.length){
    currentSong.value = allSongs.value[0]
  }
  else{
    currentSong.value = allSongs.value[currentSong.value.id]
  }
  currentArtist.value = allArtists.value[currentSong.value.artistId - 1]
} 

```
````
::: tip
**Remarque:**
Le code se trouve dans la classe APP. Les controles devraient être controlés par classe du controler.
:::

**Code:**

````md

<style scoped>
</style>./components/songsList.vue/index.ts./components/songInfos.vue/index.ts
```
````
::: tip
**Remarque:**
Une ligne de code non expliquer ou même inutile.
:::

**Code:**

````md
<script setup lang="ts">
const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}
```
````
::: tip
**Remarque:**
Code non expliquer et le retour est compliquer a comprendre.
:::

**Code:**

````md
<script setup lang="ts">
watch(()=>props.currentSong, (newSong) =>{
    if(newSong){
        props.audioSong.src = "./src/assets/files/songs/" + props.currentSong.fileName
        stop()
    }
},{
    immediate: true
})


watchEffect((onInvalidate) => {
  const videoOver = () => {
    if(props.audioSong.ended){
        stop()
    }
  }
}
```
````
::: tip
**Remarque:**
Code est compliquer et la méthode watch n'est pas expliquer.
:::
