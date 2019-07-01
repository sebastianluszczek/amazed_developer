// glob is a small module to read 'globs', useful to get
// a filtered file list
const glob = require("glob");
// we acquire an array containing the filenames
// in the articles directory
let articles = glob.sync("**/*.md", { cwd: "articles" });
let projects = glob.sync("**/*.md", { cwd: "projects" });

// We define a function to trim the '.md' from the filename
// and return the correct path.
// This function will be used later
function getBlogs(post) {
  let slug = post.substr(0, post.lastIndexOf("."));
    return `/blog/${slug}`;
}

function getProjects(post) {
  let slug = post.substr(0, post.lastIndexOf("."));
  return `/portfolio/${slug}`;
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
    link: [{ rel: "icon", type: "image/png", href: "/img/amazed_favicon.png" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "@/assets/scss/main.scss",
    { src: "~/node_modules/highlight.js/styles/monokai.css", lang: "css" }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "nuxt-fontawesome",
    //OR like this
    [
      "nuxt-fontawesome",
      {
        component: "fa",
        imports: [
          //import whole set
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          }
        ]
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        use: [{ loader: "raw-loader" }]
      });
    }
  },
  generate: {
    routes: function() {
      // return files.map(getSlugs());
      let blog = articles.map(getBlogs);
      let port = projects.map(getProjects);
      let both = blog.concat(port);
      return both;
    }
  }
};
