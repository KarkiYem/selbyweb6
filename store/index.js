const cookieparser = process.server ? require("cookieparser") : undefined;
export const state = () => ({
  expert: "",
  blog: "",
  product: [],
  category: [],
  setUser: null,
  phone: "",
});
export const mutations = {
  expert(state, expert) {
    state.expert = expert;
  },
  blog(state, blog) {
    state.blog = blog;
  },
  product(state, product) {
    state.product = product;
  },
  category(state, category) {
    state.category = category;
  },
  setUser(state, setUser) {
    state.setUser = setUser;
  },
  phone(state, phone) {
    state.phone = phone;
  },
};

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let setUser = null;
    if (req && req.headers && req.headers.cookie) {
      try {
        const parsed = cookieparser.parse(req.headers.cookie);
        setUser = JSON.parse(JSON.stringify(parsed.setUser));
      } catch (err) {}
    }
    commit("setUser", setUser);
  },
};
