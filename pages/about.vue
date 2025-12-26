<template>
  <div class="bg-white font-sans overflow-hidden">
    <!-- 1. Hero Section -->
    <header class="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
      <img src="~/assets/img/hero3.jpg" alt="About Hero" class="absolute inset-0 w-full h-full object-cover">
      <div class="absolute inset-0 bg-brand-900/60 transition-opacity"></div>
      
      <div class="relative z-10 container mx-auto px-4 mt-20">
        <h1 class="text-[56px] md:text-[84px] font-[900] text-white leading-none tracking-tighter uppercase mb-6 animate-on-scroll">
          À Propos de Nous
        </h1>
        <p class="text-white/80 text-[18px] max-w-2xl mx-auto font-medium mb-8 animate-on-scroll delay-100">
          Découvrez la force paysanne qui transforme durablement l'agriculture au Kongo Central depuis des décennies.
        </p>
        <div class="flex items-center justify-center gap-2 text-white/60 font-black uppercase tracking-[0.2em] text-[12px] animate-on-scroll delay-200">
           <nuxt-link to="/" class="hover:text-white transition-colors">Accueil</nuxt-link>
           <span class="opacity-30">>></span>
           <span class="text-white">À Propos</span>
        </div>
      </div>
    </header>

    <!-- 2. Story Section (Asymmetrical Grid) -->
    <section class="py-32 container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-20 items-center">
        <!-- Left: Text & Stats -->
        <div class="space-y-12 animate-on-scroll">
          <div>
            <span class="text-brand-700 font-black uppercase tracking-[0.3em] text-[12px] mb-4 block">Notre Identité</span>
            <h2 class="text-[44px] md:text-[64px] font-[900] text-[#1a1a1b] leading-[1.02] tracking-tighter uppercase mb-8">
              Une Force Paysanne <br/> Engagée & Durable
            </h2>
            <p class="text-gray-500 text-[18px] leading-relaxed max-w-xl font-medium">
              Depuis sa création, la FOPAKO se dresse comme le pilier central du développement agricole au Kongo Central. Nous croyons en une agriculture qui respecte la terre tout en nourrissant les populations.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-8 pt-8">
            <div class="border-l-4 border-brand-700 pl-6">
              <span class="block text-[36px] font-[900] text-[#1a1a1b] tracking-tighter">10,000+</span>
              <span class="text-[12px] text-gray-400 font-black uppercase tracking-widest">Membres Actifs</span>
            </div>
            <div class="border-l-4 border-brand-700 pl-6">
              <span class="block text-[36px] font-[900] text-[#1a1a1b] tracking-tighter">94%</span>
              <span class="text-[12px] text-gray-400 font-black uppercase tracking-widest">De Satisfaction</span>
            </div>
            <div class="border-l-4 border-brand-700 pl-6">
              <span class="block text-[36px] font-[900] text-[#1a1a1b] tracking-tighter">Top 10</span>
              <span class="text-[12px] text-gray-400 font-black uppercase tracking-widest">ONG Agricoles</span>
            </div>
            <div class="border-l-4 border-brand-700 pl-6">
              <span class="block text-[36px] font-[900] text-[#1a1a1b] tracking-tighter">7+</span>
              <span class="text-[12px] text-gray-400 font-black uppercase tracking-widest">Districts Couverts</span>
            </div>
          </div>
          
          <div class="pt-4">
            <button class="px-10 py-4 bg-brand-700 text-white font-[900] text-[13px] tracking-[0.1em] hover:bg-brand-900 transition-all rounded-[2px] shadow-lg uppercase">
              Découvrir Notre Mission
            </button>
          </div>
        </div>

        <!-- Right: Asymmetrical Image Collage -->
        <div class="relative h-[600px] animate-on-scroll delay-200">
           <!-- Main Large Image -->
           <div class="absolute inset-0 w-4/5 h-[80%] rounded-[2px] overflow-hidden shadow-2xl z-0">
              <img src="~/assets/img/about.jpg" class="w-full h-full object-cover" alt="Agriculture 1">
           </div>
           <!-- Top Right Image -->
           <div class="absolute top-0 right-0 w-1/2 h-1/2 rounded-[2px] overflow-hidden shadow-2xl border-[12px] border-white z-10 translate-x-10 translate-y-[-20px]">
              <img src="~/assets/img/about2.jpg" class="w-full h-full object-cover" alt="Agriculture 2">
           </div>
           <!-- Floating Label Card -->
           <div class="absolute top-1/2 right-10 bg-brand-700 p-8 rounded-[2px] shadow-2xl z-20 max-w-[200px] translate-y-20">
              <div class="flex items-center gap-4 text-white mb-4">
                 <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <p class="text-white font-[900] text-[14px] leading-tight uppercase tracking-wider">
                 Préserver nos traditions agricoles
              </p>
           </div>
           <!-- Bottom Image -->
           <div class="absolute bottom-0 right-1/4 w-3/5 h-[40%] rounded-[2px] overflow-hidden shadow-2xl border-[8px] border-white z-10 mt-20">
              <img src="~/assets/img/culture.jpg" class="w-full h-full object-cover" alt="Agriculture 3">
           </div>
        </div>
      </div>
    </section>

    <!-- 3. Middle Banner Section (Immersive) -->
    <section class="relative py-48 overflow-hidden">
      <img src="~/assets/img/hero2.jpg" class="absolute inset-0 w-full h-full object-cover scale-110" alt="Immersive Banner">
      <div class="absolute inset-0 bg-brand-900/60 transition-opacity"></div>
      
      <div class="relative z-10 container mx-auto px-4 text-center">
        <span class="text-brand-50 font-black uppercase tracking-[0.4em] text-[12px] mb-8 block animate-on-scroll">Découvrir la FOPAKO</span>
        <h2 class="text-[44px] md:text-[72px] font-[900] text-white leading-[1.02] tracking-tighter uppercase mb-12 max-w-4xl mx-auto animate-on-scroll delay-100">
          Une beauté infinie, un charme naturel.
        </h2>
        <button class="px-12 py-5 bg-white text-brand-900 font-[900] text-[14px] tracking-[0.2em] hover:bg-brand-50 transition-all shadow-2xl uppercase rounded-[2px] animate-on-scroll delay-200">
           Explorer Notre Travail
        </button>
      </div>
    </section>

    <!-- 4. Values/Why Us Section -->
    <section class="py-32 bg-gray-50 overflow-hidden">
       <div class="container mx-auto px-4">
          <div class="text-center mb-24 animate-on-scroll">
             <span class="text-brand-700 font-black uppercase tracking-[0.3em] text-[12px] mb-4 block">Pourquoi la FOPAKO ?</span>
             <h2 class="text-[44px] md:text-[64px] font-[900] text-[#1a1a1b] leading-[1.02] tracking-tighter uppercase">
                Destination idéale pour <br/> une croissance durable
             </h2>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
             <!-- Value Card 1 -->
             <div class="bg-white p-12 rounded-[2px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all animate-on-scroll group">
                <div class="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center text-brand-700 mb-8 group-hover:bg-brand-700 group-hover:text-white transition-colors">
                   <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h4 class="text-[20px] font-[900] text-[#1a1a1b] uppercase tracking-wider mb-6">Solidaire</h4>
                <p class="text-gray-500 font-medium leading-relaxed">
                   Un accompagnement financier et technique accessible à tous nos membres pour maximiser leurs profits.
                </p>
             </div>
             
             <!-- Value Card 2 -->
             <div class="bg-white p-12 rounded-[2px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all animate-on-scroll delay-100 group">
                <div class="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center text-brand-700 mb-8 group-hover:bg-brand-700 group-hover:text-white transition-colors">
                   <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <h4 class="text-[20px] font-[900] text-[#1a1a1b] uppercase tracking-wider mb-6">Durable</h4>
                <p class="text-gray-500 font-medium leading-relaxed">
                   Une destination naturelle où chaque pratique agricole est pensée pour préserver l'avenir de nos terres.
                </p>
             </div>
             
             <!-- Value Card 3 -->
             <div class="bg-white p-12 rounded-[2px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all animate-on-scroll delay-200 group">
                <div class="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center text-brand-700 mb-8 group-hover:bg-brand-700 group-hover:text-white transition-colors">
                   <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
                <h4 class="text-[20px] font-[900] text-[#1a1a1b] uppercase tracking-wider mb-6">Communautaire</h4>
                <p class="text-gray-500 font-medium leading-relaxed">
                   Une communauté soudée et chaleureuse qui permet de transformer chaque défi en opportunité collective.
                </p>
             </div>
          </div>
       </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useScrollObserver } from '~/composables/useScrollObserver'

useScrollObserver()
</script>
