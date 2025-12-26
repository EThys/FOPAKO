<template>
  <section id="gallery" class="py-32 bg-white font-sans overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
          <h2 class="text-brand-700 font-[900] text-[15px] uppercase tracking-[0.3em] mb-6">Galerie</h2>
          <h3 class="text-[44px] md:text-[56px] font-[900] text-[#1a1a1b] leading-[1.05] tracking-tighter uppercase">Nos Terres, Notre Fierté</h3>
        </div>
        <a href="#" class="hidden md:flex items-center text-brand-700 font-[900] text-[12px] uppercase tracking-widest hover:text-brand-800 transition-colors mt-4 md:mt-0">
          Voir toute la galerie
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 h-[700px] animate-on-scroll delay-200">
        <!-- Large Item -->
        <div class="col-span-2 row-span-2 relative group overflow-hidden rounded-[2px] shadow-lg">
          <img src="~/assets/img/culture.jpg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Cultures">
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <span class="text-white font-[900] text-[14px] uppercase tracking-[0.2em] border-b-2 border-brand-700 pb-2">Nos Champs</span>
          </div>
        </div>
        
        <!-- Standard Items -->
        <div class="relative group overflow-hidden rounded-[2px] shadow-lg">
          <img src="~/assets/img/femmes.jpeg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Femmes FOPAKO">
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        <div class="relative group overflow-hidden rounded-[2px] shadow-lg">
           <img src="~/assets/img/hero1.jpeg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Agriculture">
           <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        <div class="relative group overflow-hidden rounded-[2px] shadow-lg">
          <img src="~/assets/img/hero2.jpg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Membres">
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        <div class="relative group overflow-hidden rounded-[2px] shadow-lg">
           <img src="~/assets/img/hero3.jpg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Kongo Central">
           <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
      
      <div class="mt-12 text-center md:hidden">
         <a href="#" class="inline-flex items-center text-brand-700 font-[900] text-[12px] uppercase tracking-widest">
          Voir toute la galerie
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useScrollObserver } from '~/composables/useScrollObserver'

useScrollObserver()
</script>
