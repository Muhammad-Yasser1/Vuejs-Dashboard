import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pages: [
      {
        id: 1,
        Title: "Lorem ipsum dolor sit.",
        Author: "John Smith",
        Date: "01.01.2019"
      },
      {
        id: 2,
        Title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        Author: "John Smith",
        Date: "01.01.2019"
      },
      {
        id: 3,
        Title: "Lorem ipsum dolor sit.",
        Author: "John Smith",
        Date: "01.01.2019"
      },
      {
        id: 4,
        Title: "Lorem ipsum dolor sit amet consectetur.",
        Author: "John Smith",
        Date: "01.01.2019"
      },
      {
        id: 5,
        Title: "Lorem ipsum dolor sit.",
        Author: "John Smith",
        Date: "01.01.2019"
      }
    ]
  },
  mutations: {
  },
  actions: {}
});
