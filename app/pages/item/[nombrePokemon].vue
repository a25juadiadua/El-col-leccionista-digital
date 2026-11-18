<script setup>
import { getPokemonById } from '~/services/communicationManager'

const route = useRoute()

// 1. DATOS
const pokemon = ref(null)   // null = todavía no ha llegado
const error = ref(false)    // true = ha fallado la petición

// 2. COLORES de cada tipo
const typeColors = {
  normal: '#a8a77a', fire: '#ee8130', water: '#6390f0', electric: '#f7d02c',
  grass: '#7ac74c', ice: '#96d9d6', fighting: '#c22e28', poison: '#a33ea1',
  ground: '#e2bf65', flying: '#a98ff3', psychic: '#f95587', bug: '#a6b91a',
  rock: '#b6a136', ghost: '#735797', dragon: '#6f35fc', dark: '#705746',
  steel: '#b7b7ce', fairy: '#d685ad'
}

// 3. AL ENTRAR EN LA PÁGINA: pedir el Pokémon
onMounted(async () => {
  try {
    pokemon.value = await getPokemonById(route.params.nombrePokemon)
  } catch (e) {
    error.value = true
  }
})
</script>

<template>
  <div class="container py-4">

    <!-- Error -->
    <p v-if="error" class="status">No se ha podido cargar este Pokémon.</p>

    <!-- Cargando -->
    <p v-else-if="!pokemon" class="status">Cargando Pokémon...</p>

    <!-- Tarjeta -->
    <article v-else class="detail-card">
      <span class="pokemon-number">#{{ pokemon.id }}</span>

      <div class="image-wrapper">
        <div class="glow" aria-hidden="true"></div>
        <img
          :src="pokemon.sprites.other['official-artwork'].front_default"
          :alt="pokemon.name"
          class="pokemon-image"
        >
      </div>

      <h1 class="pokemon-name">{{ pokemon.name }}</h1>

      <div class="types">
        <span
          v-for="t in pokemon.types"
          :key="t.type.name"
          class="type-badge"
          :style="{ backgroundColor: typeColors[t.type.name] }"
        >
          {{ t.type.name }}
        </span>
      </div>

      <div class="info-grid">
        <div class="info-box">
          <span class="info-label">Altura</span>
          <strong>{{ pokemon.height / 10 }} m</strong>
        </div>
        <div class="info-box">
          <span class="info-label">Peso</span>
          <strong>{{ pokemon.weight / 10 }} kg</strong>
        </div>
      </div>

      <section class="block">
        <h2>Estadísticas</h2>
        <div v-for="s in pokemon.stats" :key="s.stat.name" class="stat-row">
          <span class="stat-name">{{ s.stat.name }}</span>
          <span class="stat-value">{{ s.base_stat }}</span>
          <div class="stat-bar">
            <div class="stat-fill" :style="{ width: s.base_stat / 2 + '%' }"></div>
          </div>
        </div>
      </section>

      <section class="block">
        <h2>Habilidades</h2>
        <div class="abilities">
          <span
            v-for="a in pokemon.abilities"
            :key="a.ability.name"
            class="ability"
          >
            {{ a.ability.name }}
          </span>
        </div>
      </section>
    </article>

    <!-- Botón volver (siempre visible) -->
    <div class="back">
      <NuxtLink to="/search" class="btn-back">
        <span aria-hidden="true">←</span> Volver a los Pokémon
      </NuxtLink>
    </div>

  </div>
</template>

<style scoped>
.status {
  text-align: center;
  color: #9299a1;
}

.back {
  text-align: center;
}

.detail-card {
  position: relative;
  overflow: hidden;
  max-width: 380px;
  margin: 0 auto;
  padding: 20px 20px 22px;
  text-align: center;
  color: #fff;
  background: linear-gradient(145deg, #202c3c, #101820);
  border: 1px solid rgba(255, 203, 5, 0.15);
  border-radius: 20px;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.3);
}

.pokemon-number {
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 3px 10px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #202c3c;
  background: #ffcb05;
  border-radius: 20px;
}

.image-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  margin-top: 8px;
}

.glow {
  position: absolute;
  width: 130px;
  height: 130px;
  background: radial-gradient(circle, rgba(255, 203, 5, 0.35), transparent 70%);
  border-radius: 50%;
}

.pokemon-image {
  position: relative;
  width: 140px;
  height: 140px;
  object-fit: contain;
  filter: drop-shadow(0 8px 10px rgba(0, 0, 0, 0.5));
}

.pokemon-name {
  margin: 6px 0 8px;
  font-size: 1.7rem;
  font-weight: 800;
  text-transform: capitalize;
}

.types {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
}

.type-badge {
  padding: 3px 12px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: capitalize;
  color: #fff;
  border-radius: 20px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 16px;
}

.info-box {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 12px;
}

.info-label {
  font-size: 0.7rem;
  color: #9299a1;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.info-box strong {
  font-size: 1.05rem;
  color: #ffcb05;
}

.block {
  margin-top: 14px;
  text-align: left;
}

.block h2 {
  margin-bottom: 8px;
  font-size: 0.95rem;
  font-weight: 700;
  color: #ffcb05;
}

.stat-row {
  display: grid;
  grid-template-columns: 110px 30px 1fr;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
  font-size: 0.8rem;
}

.stat-name {
  color: #d1d5db;
  text-transform: capitalize;
}

.stat-value {
  font-weight: 700;
  text-align: right;
}

.stat-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  overflow: hidden;
}

.stat-fill {
  height: 100%;
  background: linear-gradient(90deg, #ffcb05, #ffe066);
  border-radius: 6px;
  transition: width 0.6s ease;
}

.abilities {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.ability {
  padding: 4px 12px;
  font-size: 0.78rem;
  text-transform: capitalize;
  color: #ffcb05;
  border: 1px solid rgba(255, 203, 5, 0.4);
  border-radius: 20px;
}

.btn-back {
  display: inline-block;
  margin-top: 22px;
  padding: 10px 24px;
  font-size: 0.95rem;
  font-weight: bold;
  text-decoration: none;
  color: #202c3c;
  background-color: #ffcb05;
  border-radius: 30px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.btn-back:hover {
  background-color: #ffe066;
  transform: translateY(-3px);
}

.btn-back:focus-visible {
  outline: 3px solid #fff;
  outline-offset: 3px;
}
</style>