import { defineStore } from "pinia";

import dbjson from "~/assets/db.json";

export const useStore = defineStore("store", {
  state: () => ({
    DB: dbjson,
    Tabs: "",
    Search: "",
  }),
  getters: {
    filterDB: (state) => {
      let t = state.Tabs;
      let s = state.Search;
      return (pos = "") =>
        state.DB.filter(
          (el) =>
            el.implementation_type.includes(t) &&
            el.label.includes(s) &&
            el.pos === pos
        );
    },
  },
  actions: {
    setTabs(val) {
      this.Tabs = val;
    },
    setSearch(val) {
      this.Search = val;
    },
    updateDBItemPos(id, st, val) {


      let idx = this.DB.findIndex((el) => el._id === id);
      
      if (this.DB[idx]["pos"] === 'fav') {
        
      } else {
        this.DB[idx]["pos"] = val;
      }

      this.DB[idx]["statusType"] = st;

      // if (this.DB[idx]["statusType"] === "") {
      //   this.DB[idx]["statusType"] = "select";
      // } else {
      //   this.DB[idx]["statusType"] === "select";
      // }
    },
  },
});
