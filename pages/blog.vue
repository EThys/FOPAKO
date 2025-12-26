<template>
  <div class="bg-white font-sans overflow-hidden">
    <!-- Hero Section -->
    <header class="relative h-[50vh] flex items-center justify-center text-center overflow-hidden bg-brand-900">
      <img src="~/assets/img/culture.jpg" alt="Blog Hero" class="absolute inset-0 w-full h-full object-cover opacity-40">
      <div class="absolute inset-0 bg-gradient-to-b from-brand-900/80 to-brand-900/60"></div>
      
      <div class="relative z-10 container mx-auto px-4 mt-12">
        <h1 class="text-[56px] md:text-[84px] font-[900] text-white leading-none tracking-tighter uppercase mb-6">
          Articles & Récits
        </h1>
        <p class="text-white/80 text-[18px] max-w-2xl mx-auto font-medium mb-8">
          Découvrez nos histoires, analyses et actualités sur l'agriculture durable au Kongo Central.
        </p>
        <div class="flex items-center justify-center gap-2 text-white/60 font-black uppercase tracking-[0.2em] text-[12px]">
          <nuxt-link to="/" class="hover:text-white transition-colors">Accueil</nuxt-link>
          <span class="opacity-30">>></span>
          <span class="text-white">Blog</span>
        </div>
      </div>
    </header>

    <!-- Blog Grid Section -->
    <section class="py-32 container mx-auto px-4">
      <!-- Filter/Category Tabs -->
      <div class="flex flex-wrap gap-4 justify-center mb-20">
        <button class="px-8 py-3 bg-brand-700 text-white font-[900] text-[12px] tracking-[0.15em] uppercase rounded-[2px] shadow-md">
          Tous
        </button>
        <button class="px-8 py-3 bg-gray-100 text-gray-600 font-[900] text-[12px] tracking-[0.15em] uppercase rounded-[2px] hover:bg-brand-50 transition-all">
          Agriculture
        </button>
        <button class="px-8 py-3 bg-gray-100 text-gray-600 font-[900] text-[12px] tracking-[0.15em] uppercase rounded-[2px] hover:bg-brand-50 transition-all">
          Économie
        </button>
        <button class="px-8 py-3 bg-gray-100 text-gray-600 font-[900] text-[12px] tracking-[0.15em] uppercase rounded-[2px] hover:bg-brand-50 transition-all">
          Innovation
        </button>
        <button class="px-8 py-3 bg-gray-100 text-gray-600 font-[900] text-[12px] tracking-[0.15em] uppercase rounded-[2px] hover:bg-brand-50 transition-all">
          Communauté
        </button>
      </div>

      <!-- Blog Posts Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        
        <!-- Blog Post 1 -->
        <article class="group cursor-pointer">
          <div class="relative h-[300px] mb-8 overflow-hidden rounded-[2px] shadow-lg">
            <img src="~/assets/img/culture.jpg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Blog 1">
            <div class="absolute top-4 left-4 bg-brand-700 text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-widest">Agriculture</div>
          </div>
          <div class="space-y-4">
            <span class="text-[12px] text-gray-400 font-bold uppercase tracking-widest">24 Octobre 2024</span>
            <h3 class="text-[24px] font-[900] text-[#1a1a1b] leading-tight group-hover:text-brand-700 transition-colors uppercase">L'impact de l'agroécologie</h3>
            <p class="text-gray-500 text-[15px] leading-relaxed font-medium line-clamp-3 opacity-80">
              Comment les nouvelles pratiques transforment le rendement de nos membres dans le Kongo Central. Une révolution verte qui change la donne.
            </p>
            <div class="pt-4 flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center font-black text-brand-700 text-[12px]">JM</div>
              <span class="text-[13px] font-black text-[#1a1a1b] uppercase tracking-wider">Jean Makosso</span>
            </div>
            <div class="pt-2">
              <span class="text-brand-700 font-[900] text-[12px] uppercase tracking-widest hover:gap-3 inline-flex items-center gap-2 transition-all">
                Lire la suite <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </div>
          </div>
        </article>

        <!-- Blog Post 2 -->
        <article class="group cursor-pointer">
          <div class="relative h-[300px] mb-8 overflow-hidden rounded-[2px] shadow-lg">
            <img src="~/assets/img/hero1.jpeg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Blog 2">
            <div class="absolute top-4 left-4 bg-brand-700 text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-widest">Économie</div>
          </div>
          <div class="space-y-4">
            <span class="text-[12px] text-gray-400 font-bold uppercase tracking-widest">18 Octobre 2024</span>
            <h3 class="text-[24px] font-[900] text-[#1a1a1b] leading-tight group-hover:text-brand-700 transition-colors uppercase">Marché du Cacao 2024</h3>
            <p class="text-gray-500 text-[15px] leading-relaxed font-medium line-clamp-3 opacity-80">
              Analyse des tendances de prix et opportunités pour les producteurs locaux du Kongo Central. Les perspectives s'annoncent prometteuses.
            </p>
            <div class="pt-4 flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center font-black text-brand-700 text-[12px]">MK</div>
              <span class="text-[13px] font-black text-[#1a1a1b] uppercase tracking-wider">Marie Kapinga</span>
            </div>
            <div class="pt-2">
              <span class="text-brand-700 font-[900] text-[12px] uppercase tracking-widest hover:gap-3 inline-flex items-center gap-2 transition-all">
                Lire la suite <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </div>
          </div>
        </article>

        <!-- Blog Post 3 -->
        <article class="group cursor-pointer">
          <div class="relative h-[300px] mb-8 overflow-hidden rounded-[2px] shadow-lg">
            <img src="~/assets/img/about2.jpg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Blog 3">
            <div class="absolute top-4 left-4 bg-brand-700 text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-widest">Innovation</div>
          </div>
          <div class="space-y-4">
            <span class="text-[12px] text-gray-400 font-bold uppercase tracking-widest">12 Octobre 2024</span>
            <h3 class="text-[24px] font-[900] text-[#1a1a1b] leading-tight group-hover:text-brand-700 transition-colors uppercase">Irrigation Solaire</h3>
            <p class="text-gray-500 text-[15px] leading-relaxed font-medium line-clamp-3 opacity-80">
              Une solution durable et économique pour les périodes de sécheresse en milieu rural. L'innovation au service de l'agriculture.
            </p>
            <div class="pt-4 flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center font-black text-brand-700 text-[12px]">PD</div>
              <span class="text-[13px] font-black text-[#1a1a1b] uppercase tracking-wider">Paul Diop</span>
            </div>
            <div class="pt-2">
              <span class="text-brand-700 font-[900] text-[12px] uppercase tracking-widest hover:gap-3 inline-flex items-center gap-2 transition-all">
                Lire la suite <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </div>
          </div>
        </article>

        <!-- Blog Post 4 -->
        <article class="group cursor-pointer">
          <div class="relative h-[300px] mb-8 overflow-hidden rounded-[2px] shadow-lg">
            <img src="~/assets/img/femmes.jpeg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Blog 4">
            <div class="absolute top-4 left-4 bg-brand-700 text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-widest">Communauté</div>
          </div>
          <div class="space-y-4">
            <span class="text-[12px] text-gray-400 font-bold uppercase tracking-widest">05 Octobre 2024</span>
            <h3 class="text-[24px] font-[900] text-[#1a1a1b] leading-tight group-hover:text-brand-700 transition-colors uppercase">Les femmes piliers de l'agriculture</h3>
            <p class="text-gray-500 text-[15px] leading-relaxed font-medium line-clamp-3 opacity-80">
              Portrait de nos membres féminines qui révolutionnent l'agriculture familiale dans la province. Des histoires inspirantes.
            </p>
            <div class="pt-4 flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center font-black text-brand-700 text-[12px]">GN</div>
              <span class="text-[13px] font-black text-[#1a1a1b] uppercase tracking-wider">Grace Nzuzi</span>
            </div>
            <div class="pt-2">
              <span class="text-brand-700 font-[900] text-[12px] uppercase tracking-widest hover:gap-3 inline-flex items-center gap-2 transition-all">
                Lire la suite <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </div>
          </div>
        </article>

        <!-- Blog Post 5 -->
        <article class="group cursor-pointer">
          <div class="relative h-[300px] mb-8 overflow-hidden rounded-[2px] shadow-lg">
            <img src="~/assets/img/hero2.jpg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Blog 5">
            <div class="absolute top-4 left-4 bg-brand-700 text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-widest">Agriculture</div>
          </div>
          <div class="space-y-4">
            <span class="text-[12px] text-gray-400 font-bold uppercase tracking-widest">28 Septembre 2024</span>
            <h3 class="text-[24px] font-[900] text-[#1a1a1b] leading-tight group-hover:text-brand-700 transition-colors uppercase">Rotation des cultures : bilan positif</h3>
            <p class="text-gray-500 text-[15px] leading-relaxed font-medium line-clamp-3 opacity-80">
              Les résultats après 2 ans d'expérimentation au sein de nos coopératives. Une technique ancestrale remise au goût du jour.
            </p>
            <div class="pt-4 flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center font-black text-brand-700 text-[12px]">TL</div>
              <span class="text-[13px] font-black text-[#1a1a1b] uppercase tracking-wider">Thomas Luyindula</span>
            </div>
            <div class="pt-2">
              <span class="text-brand-700 font-[900] text-[12px] uppercase tracking-widest hover:gap-3 inline-flex items-center gap-2 transition-all">
                Lire la suite <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </div>
          </div>
        </article>

        <!-- Blog Post 6 -->
        <article class="group cursor-pointer">
          <div class="relative h-[300px] mb-8 overflow-hidden rounded-[2px] shadow-lg">
            <img src="~/assets/img/hero3.jpg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Blog 6">
            <div class="absolute top-4 left-4 bg-brand-700 text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-widest">Innovation</div>
          </div>
          <div class="space-y-4">
            <span class="text-[12px] text-gray-400 font-bold uppercase tracking-widest">15 Septembre 2024</span>
            <h3 class="text-[24px] font-[900] text-[#1a1a1b] leading-tight group-hover:text-brand-700 transition-colors uppercase">Technologies numériques agricoles</h3>
            <p class="text-gray-500 text-[15px] leading-relaxed font-medium line-clamp-3 opacity-80">
              Comment les applications mobiles aident nos producteurs à mieux gérer leurs exploitations. Le digital au service des champs.
            </p>
            <div class="pt-4 flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center font-black text-brand-700 text-[12px]">AK</div>
              <span class="text-[13px] font-black text-[#1a1a1b] uppercase tracking-wider">Antoine Kongo</span>
            </div>
            <div class="pt-2">
              <span class="text-brand-700 font-[900] text-[12px] uppercase tracking-widest hover:gap-3 inline-flex items-center gap-2 transition-all">
                Lire la suite <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </div>
          </div>
        </article>

      </div>

      <!-- Load More Button -->
      <div class="text-center mt-20">
        <button class="px-12 py-5 bg-brand-700 text-white font-[900] text-[14px] tracking-[0.1em] hover:bg-brand-800 transition-all shadow-lg uppercase rounded-[2px]">
          Charger plus d'articles
        </button>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Blog - FOPAKO | Articles & Récits',
  meta: [
    { name: 'description', content: 'Découvrez nos articles sur l\'agriculture durable, l\'innovation et les success stories de nos membres.' }
  ]
})
</script>
