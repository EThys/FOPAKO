<template>
  <section class="py-32 bg-white relative overflow-hidden font-sans">
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-24 animate-on-scroll">
        <h2 class="text-brand-700 font-[900] text-[15px] uppercase tracking-[0.3em] mb-6">Notre Mission</h2>
        <h3 class="text-[44px] md:text-[56px] font-[900] text-[#1a1a1b] leading-[1.05] tracking-tighter uppercase">
          Un Engagement Total <br/> envers nos Membres
        </h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Card 1: Capacity Building -->
        <div class="bg-white p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-500 group animate-on-scroll delay-100 rounded-[4px]">
          <div class="w-16 h-16 bg-brand-700 text-white flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-brand-700/20">
             <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          </div>
          <h4 class="text-[24px] font-[900] text-[#1a1a1b] mb-6 tracking-tight uppercase">Renforcement des Capacités</h4>
          <p class="text-gray-500 leading-relaxed mb-8 font-medium">
            Notre mission est de renforcer les capacités techniques et opérationnelles de nos membres pour une agriculture plus performante.
          </p>
          <div class="bg-gray-50 p-6 rounded-sm border-l-4 border-brand-700">
            <p class="text-[14px] text-gray-700 font-bold">
              <span class="mr-2">🤝</span> Appui stratégique de notre partenaire <strong class="text-brand-700">Trias</strong>.
            </p>
          </div>
        </div>

        <!-- Card 2: Environment -->
        <div class="bg-white p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-500 group animate-on-scroll delay-200 rounded-[4px]">
          <div class="w-16 h-16 bg-brand-900 text-white flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-brand-900/20">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h4 class="text-[24px] font-[900] text-[#1a1a1b] mb-6 tracking-tight uppercase">Agroécologie Durable</h4>
          <ul class="space-y-4 text-gray-500 font-medium">
            <li class="flex items-center gap-3">
              <span class="w-2.5 h-2.5 bg-brand-700 rounded-full"></span>
              Protection des sols et anti-érosion
            </li>
            <li class="flex items-center gap-3">
              <span class="w-2.5 h-2.5 bg-brand-700 rounded-full"></span>
              Gestion intégrée des nuisibles
            </li>
            <li class="flex items-center gap-3">
              <span class="w-2.5 h-2.5 bg-brand-700 rounded-full"></span>
              Enfouissement et Compostage bio
            </li>
          </ul>
        </div>

        <!-- Card 3: Commercialisation -->
        <div class="bg-white p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-500 group animate-on-scroll delay-300 rounded-[4px]">
          <div class="w-16 h-16 bg-brand-700 text-white flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-brand-700/20">
             <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
          </div>
          <h4 class="text-[24px] font-[900] text-[#1a1a1b] mb-6 tracking-tight uppercase">Commercialisation</h4>
          <p class="text-gray-500 leading-relaxed mb-8 font-medium">
            Nous facilitons l'accès aux marchés pour nos <span class="text-brand-700 font-[900]">178 unions</span> membres.
          </p>
          <div class="border-t border-gray-100 pt-6">
             <p class="text-[13px] text-gray-400 italic font-medium">"Dynamiser l'économie locale par l'action collective."</p>
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

<style scoped>
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
</style>
