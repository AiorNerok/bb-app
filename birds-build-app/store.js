import { defineStore } from 'pinia'

import db from './assets/db.json'

function FilteredData(db, fk, sk) {
    let arr = [...db]
    if (!!fk) {
        arr = arr.filter(el => el.implementation_type.toLowerCase() === fk.toLowerCase())
    }

    if (!!sk) {
        arr = arr.filter(el => el.label.toLowerCase().includes(sk.toLowerCase()))
    }
    return arr
}

export const useStore = defineStore('storeData', {
    state: () => ({
        data: db,
        deals: [],
        fav: [],
        filterKey: '',
        searchKey: ''
    }),
    getters: {
        getFilteredData() {
            return FilteredData(this.data, this.filterKey, this.searchKey)
        },
        getFilteredDeals() {
            return FilteredData(this.deals, this.filterKey, this.searchKey)
        },
        getFilteredFav() {
            return FilteredData(this.fav, this.filterKey, this.searchKey)
        }
    },
    actions: {
        setDeals(v) { this.deals = [...this.deals, v] },
        setFav(v) { this.fav = [...this.fav, v] },
        setFilterKey(v) { this.filterKey = v },
        setSearchKey(v) { this.searchKey = v }
    }
})
