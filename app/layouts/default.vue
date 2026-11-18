<template>
    <div class="pagina">

        <a href="#contingut" class="salta">Salta al contingut</a>

        <!-- HEADER -->
        <header class="capcalera">
            <div class="container capcalera-interior">

                <!-- LOGO -->
                <NuxtLink to="/" class="marca" aria-label="Colleccionista, inici">
                    <svg class="marca-icona" viewBox="0 0 40 40" aria-hidden="true">
                        <circle cx="20" cy="20" r="18" class="ball-fons" />
                        <path d="M2 20a18 18 0 0 1 36 0z" class="ball-dalt" />
                        <rect x="2" y="18.5" width="36" height="3" class="ball-banda" />
                        <circle cx="20" cy="20" r="6" class="ball-centre" />
                        <circle cx="20" cy="20" r="2.5" class="ball-punt" />
                    </svg>
                    <span class="marca-text">
                        <span class="marca-nom">Colleccionista</span>
                        <span class="marca-lema">La teva col·lecció personal</span>
                    </span>
                </NuxtLink>

                <!-- NAVBAR -->
                <nav class="menu" aria-label="Navegació principal">
                    <NuxtLink to="/" class="nav-enlace">Inici</NuxtLink>
                    <NuxtLink to="/search" class="nav-enlace">Cerca</NuxtLink>
                    <NuxtLink to="/favorites" class="nav-enlace">Preferits</NuxtLink>
                </nav>

            </div>
        </header>

        <!-- CONTINGUT -->
        <main id="contingut" class="container py-5">
            <slot></slot>
        </main>

        <!-- FOOTER -->
        <footer class="peu">
            <div class="container peu-interior">

                <div class="peu-marca">
                    <p class="peu-titol">Colleccionista</p>
                    <p class="peu-text">
                        Explora, descobreix i guarda els teus elements preferits.
                    </p>
                </div>

                <nav class="peu-menu" aria-label="Navegació del peu">
                    <p class="peu-subtitol">Navegació</p>
                    <NuxtLink to="/" class="footer-enlace">Inici</NuxtLink>
                    <NuxtLink to="/search" class="footer-enlace">Cerca</NuxtLink>
                    <NuxtLink to="/favorites" class="footer-enlace">Preferits</NuxtLink>
                </nav>

            </div>

            <div class="peu-copy">
                <div class="container">
                    © 2026 Colleccionista · Tots els drets reservats
                </div>
            </div>
        </footer>

    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Hanken+Grotesk:wght@400;500;600&display=swap');

:root {
    --blau: #202c3c;
    --blau-fosc: #101820;
    --groc: #ffcb05;
    --groc-clar: #ffe066;
    --vermell: #e63946;
    --paper: #f4f6f3;
    --text-clar: #f1f5f9;
    --text-suau: #9fb0c4;
}

body {
    font-family: 'Hanken Grotesk', system-ui, -apple-system, sans-serif;
    margin: 0;
}
</style>

<style scoped>
.pagina {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--paper);
}

main {
    flex: 1;
}

a:focus-visible {
    outline: 2px solid var(--groc);
    outline-offset: 3px;
    border-radius: 6px;
}

/* SALTA AL CONTINGUT (accessibilitat) */
.salta {
    position: absolute;
    left: 1rem;
    top: -4rem;
    background: var(--groc);
    color: var(--blau);
    padding: 0.5rem 1rem;
    border-radius: 6px;
    z-index: 20;
    text-decoration: none;
    font-weight: 600;
}

.salta:focus {
    top: 1rem;
}

/* HEADER */
.capcalera {
    position: sticky;
    top: 0;
    z-index: 10;
    background: linear-gradient(135deg, var(--blau), var(--blau-fosc));
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
}

.capcalera::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--groc), var(--groc-clar), var(--groc));
}

.capcalera-interior {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 0.9rem;
    padding-bottom: 0.9rem;
}

/* LOGO */
.marca {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    text-decoration: none;
}

.marca-icona {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
    transition: transform 0.4s ease;
}

.marca:hover .marca-icona {
    transform: rotate(180deg);
}

.ball-fons   { fill: #fff; }
.ball-dalt   { fill: var(--vermell); }
.ball-banda  { fill: var(--blau-fosc); }
.ball-centre { fill: #fff; stroke: var(--blau-fosc); stroke-width: 3; }
.ball-punt   { fill: var(--groc); }

.marca-text {
    display: flex;
    flex-direction: column;
    line-height: 1.15;
}

.marca-nom {
    font-family: 'Fraunces', Georgia, serif;
    font-weight: 600;
    font-size: 1.45rem;
    letter-spacing: -0.01em;
    color: var(--groc);
}

.marca-lema {
    font-size: 0.8rem;
    color: var(--text-suau);
}

/* ENLLAÇOS DEL NAVBAR */
.menu {
    display: flex;
    align-items: center;
    gap: 0.4rem;
}

.nav-enlace {
    color: var(--text-clar);
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1.1rem;
    border-radius: 30px;
    transition: background-color 0.25s, color 0.25s, transform 0.25s;
}

.nav-enlace:hover {
    background-color: rgba(255, 203, 5, 0.15);
    color: var(--groc);
}

/* PÀGINA ACTIVA (Inici només s'activa a "/") */
.nav-enlace.router-link-exact-active,
.nav-enlace.router-link-active:not([href='/']) {
    background-color: var(--groc);
    color: var(--blau);
    font-weight: 600;
}

/* FOOTER */
.peu {
    position: relative;
    margin-top: auto;
    background: linear-gradient(135deg, var(--blau), var(--blau-fosc));
    color: var(--text-suau);
}

.peu::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--groc), var(--groc-clar), var(--groc));
}

.peu-interior {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding-top: 2.5rem;
    padding-bottom: 2rem;
}

.peu-titol {
    font-family: 'Fraunces', Georgia, serif;
    font-weight: 600;
    font-size: 1.35rem;
    color: var(--groc);
    margin: 0 0 0.4rem;
}

.peu-text {
    margin: 0;
    max-width: 38ch;
}

.peu-menu {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.peu-subtitol {
    margin: 0 0 0.2rem;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-clar);
}

.footer-enlace {
    color: var(--text-suau);
    text-decoration: none;
    transition: color 0.2s, transform 0.2s;
}

.footer-enlace:hover {
    color: var(--groc);
    transform: translateX(4px);
}

.peu-copy {
    border-top: 1px solid rgba(255, 203, 5, 0.15);
    padding: 1rem 0;
    font-size: 0.85rem;
    text-align: center;
}

/* MÒBIL */
@media (max-width: 575.98px) {
    .capcalera-interior {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.6rem;
    }

    .menu {
        margin-left: -0.4rem;
    }
}

@media (prefers-reduced-motion: reduce) {
    .nav-enlace,
    .footer-enlace,
    .marca-icona {
        transition: none;
    }
}

.container {
    max-width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
}
</style>