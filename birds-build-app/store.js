import { defineStore } from 'pinia'

import db from './assets/db.json'

export const useStore = defineStore('storeData', {
    state: () => ({
        data: db,
        deals: [],
        fav: [],
        filterKey: '',
        searchValue: ''
    }),
    getters: {
        getFilteredData() {
            let arr = [...this.data]
            if (!!this.filterKey) {
                arr = arr.filter(el => el.implementation_type.toLowerCase() === this.filterKey.toLowerCase())
            }

            if (!!this.searchValue) {
                arr = arr.filter(el => el.label.toLowerCase().includes(this.searchValue.toLowerCase()))
            }
            return arr
        }
    },
    actions: {
        setDeals(v) {
            this.deals = [...this.deals, v]
        },
        setFav(v) {
            this.fav = [...this.fav, v]
        },
        setFilterKey(v) {
            this.filterKey = v
        },
        setSearchKey(v) {
            this.searchValue = v
        }
    }
})
