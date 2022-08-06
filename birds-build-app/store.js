import { ref } from 'vue'
import { defineStore } from 'pinia'

import db from './assets/db.json'

const state = () => ref({
    data: db,
    deals: [],
    fav: [],
    filterKey: '',
    searchValue: ''
})


const getters = () => ({
    all({ data, filterKey, searchValue }) {
        let returnData = []

        if (filterKey === "") {
            returnData = data
        } else {
            returnData = data.filter((i) => i.implementation_type === filterKey)
        }

        if (searchValue === "") {
        } else {
            returnData = data.filter((i) => i.label.toLowerCase().startsWith(searchValue.toLowerCase()))
        }
        return data
    },
    getFilterKey: (state) => state.filterKey
})

const action = () => ({
    setFilterKey: (val) => {
        state.filterKey = val
    }
})

// @ts-ignore
export const useStore = defineStore('storeData', { state, getters, action })
