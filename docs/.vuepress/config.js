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
