
<script setup>
import { getPokemon } from '~/services/communicationManager';

const pokemonList = ref([]);

onMounted(async () => {
    pokemonList.value = await getPokemon()
});
</script>

<template>
    <div class="container py-4">

        <h2 class="text-center mb-4">Pokédex</h2>

        <div class="pokemon-grid">
            <PokemonCard
                v-for="pokemon in pokemonList.results"
                :key="pokemon.name"
                :pokemon="pokemon"
            />
        </div>

    </div>
</template>

<style scoped>
.pokemon-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    max-width: 850px;
    margin: 0 auto;
}
</style>
