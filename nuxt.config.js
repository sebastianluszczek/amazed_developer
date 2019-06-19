// glob is a small module to read 'globs', useful to get
// a filtered file list
const glob = require("glob");
// we acquire an array containing the filenames
// in the articles directory
let files = glob.sync("**/*.md", { cwd: "articles" });

// We define a function to trim the '.md' from the filename
// and return the correct path.
// This function will be used later
function getSlugs(post, _) {
  let slug = post.substr(0, post.lastIndexOf("."));
  return `/blog/${slug}`;
}

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "AmazedDeveloper",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/jpeg", href: "/img/amazedbear.jpeg" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/assets/scss/main.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        use: ["raw-loader"]
      });
    }
  },
  generate: {
    routes: function() {
      return files.map(getSlugs);
    }
  }
};
