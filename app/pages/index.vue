<template>
    <div class="home-container">

        <div class="home-content">
            <div class="pokeball">⚪</div>

            <h1>Pokédex <span>Collection</span></h1>

            <h2>¡Hazte con todos!</h2>

            <p>
                Descubre el fascinante mundo Pokémon.
                Explora nuevas criaturas, conoce sus características
                y crea tu propia colección de favoritos.
            </p>

            <NuxtLink to="/search" class="btn-explore">
                Explorar Pokémon →
            </NuxtLink>
        </div>

        <div class="decoration decoration-1"></div>
        <div class="decoration decoration-2"></div>

    </div>
</template>

<style scoped>
.home-container {
    min-height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #202c3c, #101820);
    border-radius: 20px;
    color: white;
    padding: 40px 20px;
}

.home-content {
    max-width: 650px;
    z-index: 1;
}

.pokeball {
    font-size: 65px;
    margin-bottom: 20px;
}

h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 15px;
}

h1 span {
    color: #ffcb05;
}

h2 {
    font-size: 1.8rem;
    color: #ffcb05;
    margin-bottom: 20px;
}

p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #d1d5db;
    margin-bottom: 35px;
}

.btn-explore {
    display: inline-block;
    background-color: #ffcb05;
    color: #202c3c;
    padding: 14px 30px;
    border-radius: 30px;
    font-weight: bold;
    font-size: 1.1rem;
    text-decoration: none;
    transition: 0.3s;
}

.btn-explore:hover {
    background-color: #ffe066;
    transform: translateY(-4px);
}

.decoration {
    position: absolute;
    border: 2px solid rgba(255, 203, 5, 0.12);
    border-radius: 50%;
}

.decoration-1 {
    width: 300px;
    height: 300px;
    top: -120px;
    right: -80px;
}

.decoration-2 {
    width: 450px;
    height: 450px;
    bottom: -250px;
    left: -150px;
}

@media (max-width: 600px) {
    h1 {
        font-size: 2.4rem;
    }

    h2 {
        font-size: 1.4rem;
    }
}
</style>