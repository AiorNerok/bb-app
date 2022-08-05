import json from '@assets/db.json'

export const useStoreData       = () => useState('data', () => json)
export const useStoreFilterTabs = () => useState('filterTabs', () => json)
export const useStoreSearch     = () => useState('search', () => '')
