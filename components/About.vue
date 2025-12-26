<template>
  <section id="about" class="py-32 bg-white overflow-hidden font-sans">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <!-- Left: Image Layout -->
        <div class="relative animate-on-scroll">
          <div class="rounded-[2px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]">
            <img src="~/assets/img/about.jpg" class="w-full h-[580px] object-cover" alt="Notre Travail" />
          </div>
          <!-- Inset Image -->
          <div class="absolute -bottom-10 -right-10 w-[70%] h-[320px] border-[12px] border-white shadow-2xl rounded-[2px] overflow-hidden hidden md:block group z-10">
            <img src="~/assets/img/about2.jpg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Membres FOPAKO" />
          </div>
        </div>

        <!-- Right: Content -->
        <div class="lg:pl-16 space-y-10 animate-on-scroll delay-200">
          <div class="space-y-5">
            <h2 class="text-brand-700 font-[900] text-[15px] uppercase tracking-[0.3em]">À Propos de Nous</h2>
            <h3 class="text-[54px] font-[900] text-[#1a1a1b] leading-[1.05] tracking-tighter uppercase">
               Expertise & <br/>
               Engagement <br/>
               Agricole.
            </h3>
          </div>

          <p class="text-gray-500 leading-relaxed text-[17px] max-w-lg mb-12 font-medium opacity-80">
             La Force Paysanne du Kongo Central (FOPAKO) est une plateforme dédiée au développement rural et à l'autonomisation des agriculteurs locaux à travers des méthodes innovantes et durables.
          </p>

          <!-- Stats Row -->
          <div class="grid grid-cols-3 gap-10 border-t border-gray-100 pt-16">
            <div class="space-y-3">
              <span class="block text-[42px] font-[900] text-[#1a1a1b] leading-none tracking-tighter">550 +</span>
              <span class="text-[12px] text-gray-500 font-extrabold uppercase tracking-[0.1em] opacity-80">Projets Réalisés</span>
            </div>
            <div class="space-y-3">
              <span class="block text-[42px] font-[900] text-[#1a1a1b] leading-none tracking-tighter">100 +</span>
              <span class="text-[12px] text-gray-500 font-extrabold uppercase tracking-[0.1em] opacity-80">Équipe Pro</span>
            </div>
            <div class="space-y-3">
              <span class="block text-[42px] font-[900] text-[#1a1a1b] leading-none tracking-tighter">99 %</span>
              <span class="text-[12px] text-gray-500 font-extrabold uppercase tracking-[0.1em] opacity-80">Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useScrollObserver } from '~/composables/useScrollObserver'

useScrollObserver()
</script>
