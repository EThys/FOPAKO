<template>
  <section class="py-32 relative overflow-hidden font-sans bg-brand-900">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <img src="~/assets/img/hero2.jpg" class="w-full h-full object-cover opacity-20 filter grayscale" alt="FOPAKO Action" />
      <div class="absolute inset-0 bg-gradient-to-b from-brand-900 via-transparent to-brand-900"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10 text-center animate-on-scroll">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-[44px] md:text-[64px] font-[900] text-white mb-10 leading-[1.02] tracking-tighter uppercase">
          Prêt à Cultiver <br/> le Changement ?
        </h2>
        <p class="text-[18px] text-white/70 mb-14 max-w-2xl mx-auto leading-relaxed font-medium">
          Rejoignez la FOPAKO aujourd'hui et participez activement au renouveau agricole de notre province. Ensemble, construisons un avenir durable.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <button class="px-12 py-5 bg-brand-700 text-white font-[900] text-[14px] tracking-[0.1em] hover:bg-brand-800 transition-all shadow-2xl uppercase rounded-[2px]">
            Devenir Membre
          </button>
          <button class="px-12 py-5 bg-white text-brand-900 font-[900] text-[14px] tracking-[0.1em] hover:bg-gray-100 transition-all shadow-2xl uppercase rounded-[2px]">
            Soutenir l'Action
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useScrollObserver } from '~/composables/useScrollObserver'

useScrollObserver()
</script>
