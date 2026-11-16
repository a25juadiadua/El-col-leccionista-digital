
<script setup>
import { getPokemonById } from '~/services/communicationManager'

const route = useRoute()

const pokemon = ref(null)

onMounted(async () => {
    pokemon.value = await getPokemonById(route.params.nombrePokemon)
})
</script>


<template>
    <div v-if="pokemon" class="container py-4 text-center">

        <h1 class="text-capitalize">{{ pokemon.name }}</h1>

        <img
            :src="pokemon.sprites.other['official-artwork'].front_default"
            :alt="pokemon.name"
            width="250"
        >

        <p>Número: {{ pokemon.id }}</p>
        <p>Altura: {{ pokemon.height / 10 }} m</p>
        <p>Peso: {{ pokemon.weight / 10 }} kg</p>

    </div>
</template>
