import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {

    const favorites = ref([])

    function addFavorite(pokemon) {
        if (!isFavorite(pokemon.name)) {
            favorites.value.push(pokemon)
        }
    }

    function removeFavorite(name) {
        favorites.value = favorites.value.filter(
            pokemon => pokemon.name !== name
        )
    }

    function isFavorite(name) {
        return favorites.value.some(
            pokemon => pokemon.name === name
        )
    }

    return {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite
    }
})