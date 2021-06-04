module.exports = {
    title: 'Mi Landing Page',
    description: 'Landing Page',
    base: '/', // /curriculum/
    dest: 'pages',
    plugins: [
      [
        "@mr-hope/pwa",
        {
          showInstall: true,
          favicon: '/favicon.ico',
          cachePic: true,
          manifest: {
            background_color: "#c8ddff",
            theme_color: "#c8ddff",
            lang: "es-ES",
            "icons": [
              {
                "src": "./img/icons/android-chrome-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
              },
              {
                "src": "./img/icons/android-chrome-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
              },
              {
                "src": "./img/icons/android-chrome-maskable-192x192.png",
                "sizes": "192x192",
                "type": "image/png",
                "purpose": "maskable"
              },
              {
                "src": "./img/icons/android-chrome-maskable-512x512.png",
                "sizes": "512x512",
                "type": "image/png",
                "purpose": "maskable"
              }
            ]
          },
        },
      ],
    ],
    themeConfig: {
        nav: [
          { text: 'Inicio', link: '/' },
          { text: 'Mi CV', link: '/views/' },
          { text: 'Mi Libros', link: 'https://www.laserrania.org/autor/enrique-marin-fernandez/' },
          { text: 'Mi GitHub', link: 'https://github.com/emarifer/' },
          { text: 'Mi Web Site', link: 'https://emarifer-pwa.netlify.app/' }
        ],
        sidebar: {
            '/views/': [
                ''
            ]
        }
      }
  }


  /**
   * DOCUMENTACION:
   * 
   * SOBRE @MR-HOPE/VUEPRESS-PLUGIN-PWA (ES EL PLUGIN QUE FUNCIONA CON VUEPRESS):
   * https://vuepress-theme-hope.github.io/pwa/
   * 
   * SOBRE EL PLUGIN PWA DE VUEPRESS:
   * https://vuepress2.netlify.app/reference/plugin/pwa.html#web-app-manifests
   * 
   * DOCUMENTACION OFICIAL DE VUEPRESS SOBRE EL PLUGIN PWA:
   * https://vuepress.vuejs.org/plugin/official/plugin-pwa.html
   * 
   * DESPLIEGUE DE UNA SPA REALIZADA CON VUEPRESS EN NETLIFY:
   * https://blog.michaelbrooks.dev/deploying-your-vuepress-blog-to-netlify/
   * 
   * PROBLEMAS EN EL DESPLIEGUE EN NETLIFY:
   * https://github.com/nuxt/nuxt.js/issues/6823#issuecomment-568435309
   * 
   * SOBRE EL PACKAGE.LOCK.JSON:
   * https://rubensa.wordpress.com/2019/11/27/pero-que-demonios-es-package-lock-json/
   * https://elabismodenull.wordpress.com/2017/07/07/el-fichero-package-lock-json-tengo-que-versionarlo/
   * 
   * DESPLIEGUE EN GITHUB PAGES:
   * https://learnvue.co/2020/09/how-to-deploy-your-vue-app-to-github-pages/
   * https://www.smashingmagazine.com/2016/08/sghpa-single-page-app-hack-github-pages/
   */