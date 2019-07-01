export const state = () => ({
  bloglist: [],
  projectlist: []
});

export const mutations = {
  setBlogList(state, posts) {
    state.bloglist = posts;
  },
  setProjectList(state, projects) {
    state.projectlist = projects;
  }
};

export const actions = {
  /*
    nuxtServerInit will run everytime the app is launched or navigated
    directly from the browser (not when using the <nuxt-link> component)
    This function will read the articles folder and commit to the store
    the attributes (maybe it will also store the article contents)
    so we can render the blog page in the right order and also
    navigate back to it
  */
  async nuxtServerInit({ commit, dispatch }) {
    var articles = await require.context("~/articles/", false, /\.md$/);
    let articlesList = await dispatch('prepareMarkdown', articles);
    await commit("setBlogList", articlesList);

    var projects = await require.context("~/projects/", false, /\.md$/);
    let projList = await dispatch('prepareMarkdown', projects);
    await commit("setProjectList", projList);
  },

  async prepareMarkdown({commit}, files) {
    const fm = require("front-matter");
    let posts = files.keys()
      .map(key => {
        var res = files(key);
        res.slug = key.slice(2, -3);
        return res;
      })
      .map(post => {
        let attributes = fm(post.default).attributes;
        attributes.slug = post.slug;
        return attributes;
      })
      .sort((a, b) => {
        return a.ctime < b.ctime;
      });
    return posts;
  }
};
