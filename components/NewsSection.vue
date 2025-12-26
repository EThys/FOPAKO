<template>
  <section id="news" class="py-32 bg-gray-50 font-sans overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="text-center mb-24 animate-on-scroll">
        <h2 class="text-brand-700 font-[900] text-[15px] uppercase tracking-[0.3em] mb-6">Actualités</h2>
        <h3 class="text-[44px] md:text-[56px] font-[900] text-[#1a1a1b] leading-[1.05] tracking-tighter uppercase">Les Dernières Nouvelles</h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- News Item 1 -->
        <article class="bg-white overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-500 group animate-on-scroll delay-100 rounded-[2px]">
          <div class="relative h-64 overflow-hidden">
            <img src="~/assets/img/culture.jpg" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" alt="News 1">
            <div class="absolute top-6 left-6 bg-brand-700 text-white text-[12px] font-black px-4 py-2 uppercase tracking-widest shadow-xl">
              24 DÉC
            </div>
          </div>
          <div class="p-10 space-y-6">
            <h4 class="text-[24px] font-[900] text-[#1a1a1b] leading-tight group-hover:text-brand-700 transition-colors uppercase">Lancement de la campagne café</h4>
            <p class="text-gray-500 text-[15px] leading-relaxed font-medium line-clamp-3 opacity-80">
              La FOPAKO lance officiellement la campagne de récolte du café pour l'année 2025 avec de nouveaux objectifs ambitieux pour nos membres.
            </p>
            <a href="#" class="inline-flex items-center gap-3 text-brand-700 font-[900] text-[13px] uppercase tracking-widest hover:gap-4 transition-all">
              Lire la suite <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
            </a>
          </div>
        </article>

        <!-- News Item 2 -->
        <article class="bg-white overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-500 group animate-on-scroll delay-200 rounded-[2px]">
          <div class="relative h-64 overflow-hidden">
            <img src="~/assets/img/about2.jpg" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" alt="News 2">
            <div class="absolute top-6 left-6 bg-brand-700 text-white text-[12px] font-black px-4 py-2 uppercase tracking-widest shadow-xl">
              20 DÉC
            </div>
          </div>
          <div class="p-10 space-y-6">
            <h4 class="text-[24px] font-[900] text-[#1a1a1b] leading-tight group-hover:text-brand-700 transition-colors uppercase">Formation à Matadi</h4>
            <p class="text-gray-500 text-[15px] leading-relaxed font-medium line-clamp-3 opacity-80">
              Plus de 50 membres ont participé à notre atelier intensif sur les techniques agricoles durables et la gestion des coopératives.
            </p>
            <a href="#" class="inline-flex items-center gap-3 text-brand-700 font-[900] text-[13px] uppercase tracking-widest hover:gap-4 transition-all">
              Lire la suite <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
            </a>
          </div>
        </article>

        <!-- News Item 3 -->
        <article class="bg-white overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-500 group animate-on-scroll delay-300 rounded-[2px]">
          <div class="relative h-64 overflow-hidden">
            <img src="~/assets/img/hero1.jpeg" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" alt="News 3">
            <div class="absolute top-6 left-6 bg-brand-700 text-white text-[12px] font-black px-4 py-2 uppercase tracking-widest shadow-xl">
              15 DÉC
            </div>
          </div>
          <div class="p-10 space-y-6">
            <h4 class="text-[24px] font-[900] text-[#1a1a1b] leading-tight group-hover:text-brand-700 transition-colors uppercase">Partenariat Green Tech</h4>
            <p class="text-gray-500 text-[15px] leading-relaxed font-medium line-clamp-3 opacity-80">
              Un nouveau partenariat stratégique pour apporter des solutions d'irrigation solaire innovantes à nos zones rurales éloignées.
            </p>
            <a href="#" class="inline-flex items-center gap-3 text-brand-700 font-[900] text-[13px] uppercase tracking-widest hover:gap-4 transition-all">
              Lire la suite <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 5l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useScrollObserver } from '~/composables/useScrollObserver'

useScrollObserver()
</script>
