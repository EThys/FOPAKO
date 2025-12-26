<template>
  <section class="py-32 bg-gray-50 font-sans overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="text-center mb-24 animate-on-scroll">
        <span class="text-brand-700 font-black uppercase tracking-[0.3em] text-[12px] mb-4 block">Nos Partenaires</span>
        <h2 class="text-[44px] md:text-[64px] font-[900] text-[#1a1a1b] leading-[1.02] tracking-tighter uppercase">
          Ensemble pour <br/> un avenir durable
        </h2>
        <p class="text-gray-500 text-[18px] max-w-2xl mx-auto mt-8 font-medium leading-relaxed">
          La FOPAKO collabore avec des partenaires de confiance pour maximiser son impact sur le développement agricole du Kongo Central.
        </p>
      </div>

      <div class="flex justify-center items-center animate-on-scroll delay-200">
        <div class="bg-white p-16 rounded-[2px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 group max-w-md">
          <div class="flex flex-col items-center">
            <div class="w-48 h-48 mb-8 overflow-hidden flex items-center justify-center bg-gray-50 rounded-[2px] group-hover:bg-white transition-colors">
              <img src="~/assets/img/partenaire.jpeg" alt="Trias - Partenaire FOPAKO" class="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <h3 class="text-[28px] font-[900] text-[#1a1a1b] uppercase tracking-wider mb-4 group-hover:text-brand-700 transition-colors">Trias</h3>
            <p class="text-gray-500 font-medium leading-relaxed text-center text-[15px]">
              Partenaire stratégique soutenant nos initiatives de développement agricole et de renforcement des capacités des communautés paysannes.
            </p>
            <div class="mt-8 pt-8 border-t border-gray-100 w-full text-center">
              <span class="text-[12px] text-brand-700 font-black uppercase tracking-widest">Partenaire depuis 2018</span>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="text-center mt-20 animate-on-scroll delay-300">
        <p class="text-gray-400 font-bold uppercase tracking-[0.2em] text-[11px] mb-6">Vous souhaitez devenir partenaire ?</p>
        <button class="px-10 py-4 bg-brand-700 text-white font-[900] text-[13px] tracking-[0.1em] hover:bg-brand-800 transition-all rounded-[2px] shadow-lg uppercase">
          Contactez-nous
        </button>
      </div> -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { useScrollObserver } from '~/composables/useScrollObserver'

useScrollObserver()
</script>
