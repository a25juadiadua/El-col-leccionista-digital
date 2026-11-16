
<script setup>
defineProps({
  pokemon: {
    type: Object,
    required: true
  }
})
</script>

<template>

    <NuxtLink
        :to="`/item/${pokemon.name}`"
        class="text-decoration-none"
    >

  <div class="card pokemon-card text-center shadow-sm border-0">
    <div class="card-body">

      <span class="pokemon-number">
        Pokémon
      </span>

      <img
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`"
        :alt="pokemon.name"
        class="pokemon-image"
      >

      <h5 class="pokemon-name text-capitalize">
        {{ pokemon.name }}
      </h5>

    </div>
  </div>
  
  </NuxtLink>
</template>

<style scoped>
.pokemon-card {
  background: #f4f6f8;
  border-radius: 18px;
  transition: transform 0.2s ease;
}

.pokemon-card:hover {
  transform: translateY(-6px);
}

.pokemon-number {
  color: #9299a1;
  font-size: 0.85rem;
  font-weight: 600;
}

.pokemon-image {
  width: 130px;
  height: 130px;
  object-fit: contain;
}

.pokemon-name {
  font-weight: 700;
  color: #343a40;
  margin-top: 10px;
}
</style>