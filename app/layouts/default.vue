<template>
    <div class="pagina">

        <a href="#contingut" class="salta">Salta al contingut</a>

        <!-- HEADER -->
        <header class="capcalera">
            <div class="container capcalera-interior">

                <!-- LOGO -->
                <NuxtLink to="/" class="marca" aria-label="Colleccionista, inici">
                    <svg class="marca-icona" viewBox="0 0 34 34" aria-hidden="true">
                        <rect x="4" y="9" width="7" height="21" rx="1.5" class="llom llom-a" />
                        <rect x="13.5" y="3" width="7" height="27" rx="1.5" class="llom llom-b" />
                        <rect x="23" y="12" width="7" height="18" rx="1.5" class="llom llom-c" />
                        <rect x="2" y="31" width="30" height="2" rx="1" class="base" />
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
    --tinta: #10312c;
    --tinta-fosca: #0b231f;
    --llauto: #d9a441;
    --paper: #f4f6f3;
    --text-clar: #f1f5f2;
    --text-suau: #a9c0b8;
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
    outline: 2px solid var(--llauto);
    outline-offset: 3px;
    border-radius: 4px;
}

/* SALTA AL CONTINGUT (accessibilitat) */
.salta {
    position: absolute;
    left: 1rem;
    top: -4rem;
    background: var(--llauto);
    color: var(--tinta-fosca);
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
    background-color: var(--tinta);
    border-bottom: 2px solid var(--llauto);
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
    width: 38px;
    height: 38px;
    flex-shrink: 0;
}

.llom-a { fill: #7fa99b; }
.llom-b { fill: var(--llauto); }
.llom-c { fill: #cfe0d8; }
.base   { fill: var(--llauto); opacity: 0.45; }

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
    color: var(--text-clar);
}

.marca-lema {
    font-size: 0.8rem;
    color: var(--text-suau);
}

/* ENLLAÇOS DEL NAVBAR */
.menu {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.nav-enlace {
    position: relative;
    color: var(--text-suau);
    text-decoration: none;
    font-weight: 500;
    padding: 0.55rem 0.9rem;
    transition: color 0.2s;
}

.nav-enlace::after {
    content: '';
    position: absolute;
    left: 0.9rem;
    right: 0.9rem;
    bottom: 0.2rem;
    height: 2px;
    background-color: var(--llauto);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s ease;
}

.nav-enlace:hover {
    color: var(--text-clar);
}

/* PÀGINA ACTIVA (Inici només s'activa a "/") */
.nav-enlace.router-link-exact-active,
.nav-enlace.router-link-active:not([href='/']) {
    color: var(--text-clar);
}

.nav-enlace.router-link-exact-active::after,
.nav-enlace.router-link-active:not([href='/'])::after {
    transform: scaleX(1);
}

/* FOOTER */
.peu {
    background-color: var(--tinta-fosca);
    color: var(--text-suau);
    margin-top: auto;
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
    font-size: 1.25rem;
    color: var(--text-clar);
    margin: 0 0 0.4rem;
}

.peu-text {
    margin: 0;
    max-width: 38ch;
}

.peu-menu {
    display: flex;
    gap: 1.5rem;
}

.footer-enlace {
    color: var(--text-suau);
    text-decoration: none;
    transition: color 0.2s;
}

.footer-enlace:hover {
    color: var(--llauto);
}

.peu-copy {
    border-top: 1px solid rgba(169, 192, 184, 0.2);
    padding: 1rem 0;
    font-size: 0.85rem;
    text-align: center;
}

/* MÒBIL */
@media (max-width: 575.98px) {
    .capcalera-interior {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.4rem;
    }

    .menu {
        margin-left: -0.9rem;
    }
}

@media (prefers-reduced-motion: reduce) {
    .nav-enlace,
    .nav-enlace::after,
    .footer-enlace {
        transition: none;
    }
}
.container {
    max-width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
}

</style>