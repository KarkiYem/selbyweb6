module.exports = {
  /*
   ** Headers of the page
   */
  router: {
    base: "/",
    linkExactActiveClass: "active",
  },
  head: {
    title: "Sellby",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.5, user-scalable=1, shrink-to-fit=no",
      },
      {
        hid: "Sellby",
        name: "Sellby",
        content: "Sellby",
      },
    ],
    link: [
      /*    { rel: "icon", type: "image/png", href: "icon.png" }, */
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.0.6/css/all.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
      },

      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css",
        crossorigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/sweetalert2@11.10.4/dist/sweetalert2.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
      },
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
        type: "text/javascript",
      },
      {
        hid: "rzpay",
        src: "https://checkout.razorpay.com/v1/checkout.js",
        defer: true,
      },
    ],
  },
  loading: { color: "#fff" },
  css: [
    "~/assets/font.css",
    /*  "~/assets/css/bootstrap.min.css",
    "~/assets/css/flex-slider.css",
    "~/assets/css/fontawesome.css",
    "~/assets/css/lightbox.css",
    "~/assets/css/owl.css",
    "~/assets/css/templatemo-eduwell-style.css", */
  ],

  plugins: [
    { src: "~/plugins/element.js" },
    { src: "~/plugins/icon.js" },
    { src: "~/plugins/vuecarousel.js" },
    { src: "~/plugins/pocketBase.js" },
    { src: "~/plugins/firebase.js" },
    { src: "~/plugins/vuex.js" },
  ],
  // modules: ["@nuxtjs/pwa","@nuxtjs/axios"],
  generate: {
    routes: [
      "/Attribute/:name?/:id?",
      "/Product/:name?/:subname?/:id?",
      "/Details/:id?",
    ],
  },

  ssr: false,
  target: "static",
  /*  loaders: {
    vue: {
      transformAssetUrls: {
        audio: "src",
      },
    },
  }, */
  build: {
    transpile: ["mdi-vue"],
    transpile: [/^element-ui/],
    loaders: {
      vue: {
        transformAssetUrls: {
          audio: "src",
        },
      },
    },

    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      });
    },
  },
};
