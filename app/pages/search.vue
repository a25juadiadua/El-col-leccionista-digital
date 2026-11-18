<script setup>
import { getPokemon } from '~/services/communicationManager'

// 1. DATOS
const todosLosPokemon = ref([])                            // lista completa que llega de la API
const textoBusqueda = useState('textoBusqueda', () => '')  // lo que escribe el usuario

// 2. LISTA FILTRADA: solo los Pokémon cuyo nombre contiene el texto
const pokemonFiltrados = computed(() => {
  const texto = textoBusqueda.value.trim().toLowerCase()
  return todosLosPokemon.value.filter(p => p.name.includes(texto))
})

// 3. ¿La búsqueda no ha encontrado nada?
const sinResultados = computed(() => {
  return todosLosPokemon.value.length > 0 && pokemonFiltrados.value.length === 0
})

// 4. AL ENTRAR EN LA PÁGINA: cargar la lista (usa la caché del servicio)
onMounted(async () => {
  const data = await getPokemon()
  todosLosPokemon.value = data.results
})
</script>

<template>
  <div class="container py-4">
    <h2 class="text-center mb-4">Pokédex</h2>

    <div class="toolbar">
      <input
        v-model="textoBusqueda"
        type="text"
        placeholder="Busca un Pokémon, p. ej. pikachu"
        class="search-input"
      >
      <NuxtLink to="/favorites" class="btn-fav">Preferits</NuxtLink>
    </div>

    <p v-if="sinResultados" class="empty">
      No hay ningún Pokémon con ese nombre.
    </p>

    <div class="pokemon-grid">
      <PokemonCard
        v-for="pokemon in pokemonFiltrados"
        :key="pokemon.name"
        :pokemon="pokemon"
      />
    </div>
  </div>
</template>

<style scoped>
.toolbar {
  display: flex;
  gap: 12px;
  max-width: 850px;
  margin: 0 auto 25px;
}

.search-input {
  flex: 1;
  padding: 10px 18px;
  color: #fff;
  background: #202c3c;
  border: 1px solid rgba(255, 203, 5, 0.3);
  border-radius: 30px;
  outline: none;
}

.search-input:focus {
  border-color: #ffcb05;
}

.btn-fav {
  padding: 10px 22px;
  font-weight: bold;
  text-decoration: none;
  color: #202c3c;
  background: #ffcb05;
  border: none;
  border-radius: 30px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.btn-fav:hover {
  background: #ffe066;
  transform: translateY(-3px);
}

.pokemon-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  max-width: 850px;
  margin: 0 auto;
}

.empty {
  text-align: center;
  color: #9299a1;
}

@media (max-width: 700px) {
  .pokemon-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>