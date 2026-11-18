<script setup>
const props = defineProps({
  pokemon: {
    type: Object,
    required: true
  }
})

const id = computed(() => props.pokemon.url.split('/').filter(Boolean).pop())

const number = computed(() => `#${String(id.value).padStart(3, '0')}`)

const image = computed(
  () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id.value}.png`
)
</script>

<template>
  <NuxtLink :to="`/item/${pokemon.name}`" class="card-link">
    <article class="pokemon-card">
      <span class="pokemon-number">{{ number }}</span>

      <div class="image-wrapper">
        <div class="glow" aria-hidden="true"></div>
        <img
          :src="image"
          :alt="pokemon.name"
          class="pokemon-image"
          loading="lazy"
        >
      </div>

      <h5 class="pokemon-name">{{ pokemon.name }}</h5>

      <span class="pokemon-cta">
        Ver detalles <span aria-hidden="true">→</span>
      </span>
    </article>
  </NuxtLink>
</template>

<style scoped>
.card-link {
  display: block;
  text-decoration: none;
}

.pokemon-card {
  position: relative;
  overflow: hidden;
  padding: 18px 18px 22px;
  text-align: center;
  color: #fff;
  background: linear-gradient(145deg, #202c3c, #101820);
  border: 1px solid rgba(255, 203, 5, 0.12);
  border-radius: 22px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.pokemon-card:hover {
  transform: translateY(-8px);
  border-color: rgba(255, 203, 5, 0.6);
  box-shadow: 0 14px 30px rgba(255, 203, 5, 0.15);
}

.card-link:focus-visible .pokemon-card {
  outline: 3px solid #ffcb05;
  outline-offset: 3px;
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
  height: 160px;
  margin-top: 18px;
}

.glow {
  position: absolute;
  width: 130px;
  height: 130px;
  background: radial-gradient(circle, rgba(255, 203, 5, 0.35), transparent 70%);
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.pokemon-card:hover .glow {
  transform: scale(1.25);
}

.pokemon-image {
  position: relative;
  width: 140px;
  height: 140px;
  object-fit: contain;
  filter: drop-shadow(0 8px 10px rgba(0, 0, 0, 0.45));
  transition: transform 0.3s ease;
}

.pokemon-card:hover .pokemon-image {
  transform: scale(1.1) rotate(-3deg);
}

.pokemon-name {
  margin: 14px 0 6px;
  font-size: 1.25rem;
  font-weight: 800;
  text-transform: capitalize;
  letter-spacing: 0.5px;
}

.pokemon-cta {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 600;
  color: #ffcb05;
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.pokemon-card:hover .pokemon-cta {
  opacity: 1;
  transform: translateY(0);
}
</style>