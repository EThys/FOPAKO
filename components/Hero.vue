<template>
  <div class="relative h-[95vh] flex items-center overflow-hidden bg-[#1a1a1b] font-sans">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img 
        src="~/assets/img/hero1.jpeg" 
        alt="Agriculture Kongo Central" 
        class="w-full h-full object-cover opacity-80"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4">
      <div class="max-w-4xl text-left">
        <div class="flex items-center gap-3 mb-10 animate-fade-in-up">
           <div class="w-7 h-7 border-2 border-brand-700 rounded-full flex items-center justify-center text-brand-700">
             <span class="text-[12px] font-black">✓</span>
           </div>
           <span class="text-white font-[900] uppercase tracking-[0.3em] text-[14px]">Agriculture & Développement Durable</span>
        </div>
        
        <h1 class="text-[60px] md:text-[104px] font-[900] text-white mb-10 leading-[0.95] tracking-tighter animate-fade-in-up delay-200 uppercase">
          Ensemble,<br/>
          Cultivons l'avenir
        </h1>
        
        <p class="text-[17px] text-white/70 mb-14 max-w-xl leading-relaxed animate-fade-in-up delay-300 font-medium">
          La Force Paysanne du Kongo Central s'engage pour une agriculture moderne, respectueuse de l'environnement et créatrice de richesses pour nos communautés.
        </p>
        
        <div class="flex flex-wrap gap-4 animate-fade-in-up delay-400">
          <button class="px-12 py-5 bg-brand-700 text-white font-[900] text-[14px] tracking-[0.1em] hover:bg-brand-800 transition-all shadow-2xl uppercase rounded-[2px]">
            Découvrir nos actions
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
