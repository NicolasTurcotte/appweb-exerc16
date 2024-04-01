import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Exercice 16",
  description: "Revue de code",
  base: '/appweb-exer16/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Revue du code de William', link: '/william-charland' }
    ],

    sidebar: [
      {
        text: 'Nos nom',
        items: [
          { text: 'Nicolas', link: '/nicolas-turcotte' },
          { text: 'William', link: '/william-charland' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
