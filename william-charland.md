# Revue du code de William Charland

## Le code

### Song
```
<script setup lang = "ts">
function songRandom(){
  let max = allSongs.value.length;
  let randNumber = Math.floor(Math.random() * max);

  selectedSong.value = allSongs.value[randNumber]
  selectedArtiste.value = allArtistes.value[selectedSong.value.artistId -1]
}
```

```
function songPrevious(){
  if(selectedSong.value.id != 1){
    selectedSong.value = allSongs.value[selectedSong.value.id - 2]
    selectedArtiste.value = allArtistes.value[selectedSong.value.artistId -1]
  }
}
```

```
function songNext(){
  if(selectedSong.value.id != allSongs.value.length){
    selectedSong.value = allSongs.value[selectedSong.value.id]
    selectedArtiste.value = allArtistes.value[selectedSong.value.artistId -1]
  }
}
```

### Props

```
defineProps<{
    selectedSong: Song | undefined
    currentAudioTime: number | undefined
    maxAudioTime: number | undefined
}>()
```

## Spécification erreur

### Song

::: tip
[Tell don't ask](https://martinfowler.com/bliki/TellDontAsk.html) :melting_face:
C'est plutôt la classe SongPlayerControls.vue qui devrait controller les controlles des chansons
:::

### Props

::: tip
Les songs sont initialisé par défault dans le code précédant, mais sont assigné undefined dans les props
:::
