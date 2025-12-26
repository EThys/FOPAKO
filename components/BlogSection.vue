<template>
  <section id="blog" class="py-32 bg-white font-sans overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="text-center mb-24 animate-on-scroll">
        <h2 class="text-brand-700 font-[900] text-[15px] uppercase tracking-[0.3em] mb-6">Blog</h2>
        <h3 class="text-[44px] md:text-[56px] font-[900] text-[#1a1a1b] leading-[1.05] tracking-tighter uppercase">Articles & Récits</h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        
        <!-- Blog Post 1 -->
        <article class="group animate-on-scroll delay-100 cursor-pointer">
          <div class="relative h-[300px] mb-8 overflow-hidden rounded-[2px] shadow-lg">
            <img src="~/assets/img/culture.jpg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Blog 1">
            <div class="absolute top-4 left-4 bg-brand-700 text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-widest">Agriculture</div>
          </div>
          <div class="space-y-4">
            <span class="text-[12px] text-gray-400 font-bold uppercase tracking-widest">24 Octobre 2024</span>
            <h4 class="text-[24px] font-[900] text-[#1a1a1b] leading-tight group-hover:text-brand-700 transition-colors uppercase">L'impact de l'agroécologie</h4>
            <p class="text-gray-500 text-[15px] leading-relaxed font-medium line-clamp-2 opacity-80">
              Comment les nouvelles pratiques transforment le rendement de nos membres dans le Kongo Central.
            </p>
            <div class="pt-4 flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center font-black text-brand-700 text-[12px]">JM</div>
              <span class="text-[13px] font-black text-[#1a1a1b] uppercase tracking-wider">Jean Makosso</span>
            </div>
          </div>
        </article>

         <!-- Blog Post 2 -->
        <article class="group animate-on-scroll delay-200 cursor-pointer">
          <div class="relative h-[300px] mb-8 overflow-hidden rounded-[2px] shadow-lg">
            <img src="~/assets/img/hero1.jpeg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Blog 2">
            <div class="absolute top-4 left-4 bg-brand-700 text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-widest">Économie</div>
          </div>
          <div class="space-y-4">
            <span class="text-[12px] text-gray-400 font-bold uppercase tracking-widest">18 Octobre 2024</span>
            <h4 class="text-[24px] font-[900] text-[#1a1a1b] leading-tight group-hover:text-brand-700 transition-colors uppercase">Marché du Cacao 2024</h4>
            <p class="text-gray-500 text-[15px] leading-relaxed font-medium line-clamp-2 opacity-80">
              Analyse des tendances de prix et opportunités pour les producteurs locaux du Kongo Central.
            </p>
            <div class="pt-4 flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center font-black text-brand-700 text-[12px]">MK</div>
              <span class="text-[13px] font-black text-[#1a1a1b] uppercase tracking-wider">Marie Kapinga</span>
            </div>
          </div>
        </article>

         <!-- Blog Post 3 -->
        <article class="group animate-on-scroll delay-300 cursor-pointer">
          <div class="relative h-[300px] mb-8 overflow-hidden rounded-[2px] shadow-lg">
            <img src="~/assets/img/about2.jpg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Blog 3">
            <div class="absolute top-4 left-4 bg-brand-700 text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-widest">Innovation</div>
          </div>
          <div class="space-y-4">
            <span class="text-[12px] text-gray-400 font-bold uppercase tracking-widest">12 Octobre 2024</span>
            <h4 class="text-[24px] font-[900] text-[#1a1a1b] leading-tight group-hover:text-brand-700 transition-colors uppercase">Irrigation Solaire</h4>
            <p class="text-gray-500 text-[15px] leading-relaxed font-medium line-clamp-2 opacity-80">
              Une solution durable et économique pour les périodes de sécheresse en milieu rural.
            </p>
            <div class="pt-4 flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center font-black text-brand-700 text-[12px]">PD</div>
              <span class="text-[13px] font-black text-[#1a1a1b] uppercase tracking-wider">Paul Diop</span>
            </div>
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
