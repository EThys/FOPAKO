<template>
  <div class="bg-white font-sans overflow-hidden">
    <!-- Hero Section -->
    <header class="relative h-[50vh] flex items-center justify-center text-center overflow-hidden bg-brand-900">
      <img src="~/assets/img/femmes.jpeg" alt="News Hero" class="absolute inset-0 w-full h-full object-cover opacity-40">
      <div class="absolute inset-0 bg-gradient-to-b from-brand-900/80 to-brand-900/60"></div>
      
      <div class="relative z-10 container mx-auto px-4 mt-12">
        <h1 class="text-[56px] md:text-[84px] font-[900] text-white leading-none tracking-tighter uppercase mb-6">
          Actualités
        </h1>
        <p class="text-white/80 text-[18px] max-w-2xl mx-auto font-medium mb-8">
          Suivez l'actualité de la FOPAKO et du secteur agricole au Kongo Central.
        </p>
        <div class="flex items-center justify-center gap-2 text-white/60 font-black uppercase tracking-[0.2em] text-[12px]">
          <nuxt-link to="/" class="hover:text-white transition-colors">Accueil</nuxt-link>
          <span class="opacity-30">>></span>
          <span class="text-white">Actualités</span>
        </div>
      </div>
    </header>

    <!-- News Grid Section -->
    <section class="py-32 container mx-auto px-4">
      <!-- Latest News Highlight -->
      <div class="mb-24">
        <span class="text-brand-700 font-black uppercase tracking-[0.3em] text-[12px] mb-6 block">À la une</span>
        <nuxt-link to="/news/1" class="grid md:grid-cols-2 gap-12 items-center bg-gray-50 p-12 rounded-[2px] shadow-lg hover:shadow-xl transition-all group">
          <div class="h-[400px] overflow-hidden rounded-[2px]">
            <img src="~/assets/img/hero2.jpg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Featured News">
          </div>
          <div class="space-y-6">
            <div class="flex items-center gap-4">
              <span class="bg-brand-700 text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-widest rounded-[2px]">Important</span>
              <span class="text-[12px] text-gray-400 font-bold uppercase tracking-widest">26 Décembre 2024</span>
            </div>
            <h2 class="text-[36px] md:text-[48px] font-[900] text-[#1a1a1b] leading-tight tracking-tighter uppercase group-hover:text-brand-700 transition-colors">
              Nouvelle coopérative lancée à Matadi
            </h2>
            <p class="text-gray-600 text-[16px] leading-relaxed font-medium">
              La FOPAKO annonce l'ouverture d'une nouvelle coopérative agricole dans la région de Matadi, permettant à 500 agriculteurs supplémentaires de bénéficier de nos services et formations.
            </p>
            <button class="px-10 py-4 bg-brand-700 text-white font-[900] text-[13px] tracking-[0.1em] hover:bg-brand-800 transition-all rounded-[2px] shadow-lg uppercase">
              Lire l'article complet
            </button>
          </div>
        </nuxt-link>
      </div>

      <!-- News Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        <!-- News 1 -->
        <nuxt-link to="/news/2" class="block group cursor-pointer bg-white border border-gray-100 rounded-[2px] overflow-hidden hover:shadow-xl transition-all">
          <div class="relative h-[250px] overflow-hidden">
            <img src="~/assets/img/culture.jpg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="News 1">
          </div>
          <div class="p-8 space-y-4">
            <div class="flex items-center gap-3">
              <span class="bg-brand-100 text-brand-700 text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded-[2px]">Formation</span>
              <span class="text-[11px] text-gray-400 font-bold uppercase tracking-widest">20 Déc 2024</span>
            </div>
            <h3 class="text-[20px] font-[900] text-[#1a1a1b] leading-tight group-hover:text-brand-700 transition-colors uppercase">
              100 paysans formés aux techniques modernes
            </h3>
            <p class="text-gray-500 text-[14px] leading-relaxed font-medium line-clamp-2">
              Session de formation intensive organisée en partenariat avec Trias sur les méthodes d'irrigation avancées.
            </p>
            <div class="pt-2">
              <span class="text-brand-700 font-[900] text-[11px] uppercase tracking-widest inline-flex items-center gap-2">
                En savoir plus >
              </span>
            </div>
          </div>
        </nuxt-link>

        <!-- News 2 -->
        <nuxt-link to="/news/3" class="block group cursor-pointer bg-white border border-gray-100 rounded-[2px] overflow-hidden hover:shadow-xl transition-all">
          <div class="relative h-[250px] overflow-hidden">
            <img src="~/assets/img/about.jpg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="News 2">
          </div>
          <div class="p-8 space-y-4">
            <div class="flex items-center gap-3">
              <span class="bg-brand-100 text-brand-700 text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded-[2px]">Événement</span>
              <span class="text-[11px] text-gray-400 font-bold uppercase tracking-widest">15 Déc 2024</span>
            </div>
            <h3 class="text-[20px] font-[900] text-[#1a1a1b] leading-tight group-hover:text-brand-700 transition-colors uppercase">
              Foire agricole annuelle 2024
            </h3>
            <p class="text-gray-500 text-[14px] leading-relaxed font-medium line-clamp-2">
              Plus de 2000 visiteurs attendus pour découvrir les innovations de nos membres et partenaires.
            </p>
            <div class="pt-2">
              <span class="text-brand-700 font-[900] text-[11px] uppercase tracking-widest inline-flex items-center gap-2">
                En savoir plus >
              </span>
            </div>
          </div>
        </nuxt-link>

        <!-- News 3 -->
        <nuxt-link to="/news/4" class="block group cursor-pointer bg-white border border-gray-100 rounded-[2px] overflow-hidden hover:shadow-xl transition-all">
          <div class="relative h-[250px] overflow-hidden">
            <img src="~/assets/img/hero1.jpeg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="News 3">
          </div>
          <div class="p-8 space-y-4">
            <div class="flex items-center gap-3">
              <span class="bg-brand-100 text-brand-700 text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded-[2px]">Récolte</span>
              <span class="text-[11px] text-gray-400 font-bold uppercase tracking-widest">10 Déc 2024</span>
            </div>
            <h3 class="text-[20px] font-[900] text-[#1a1a1b] leading-tight group-hover:text-brand-700 transition-colors uppercase">
              Record de production de manioc
            </h3>
            <p class="text-gray-500 text-[14px] leading-relaxed font-medium line-clamp-2">
              Les coopératives FOPAKO enregistrent une hausse de 35% de la production cette saison.
            </p>
            <div class="pt-2">
              <span class="text-brand-700 font-[900] text-[11px] uppercase tracking-widest inline-flex items-center gap-2">
                En savoir plus >
              </span>
            </div>
          </div>
        </nuxt-link>

        <!-- News 4 -->
        <nuxt-link to="/news/5" class="block group cursor-pointer bg-white border border-gray-100 rounded-[2px] overflow-hidden hover:shadow-xl transition-all">
          <div class="relative h-[250px] overflow-hidden">
            <img src="~/assets/img/hero3.jpg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="News 4">
          </div>
          <div class="p-8 space-y-4">
            <div class="flex items-center gap-3">
              <span class="bg-brand-100 text-brand-700 text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded-[2px]">Partenariat</span>
              <span class="text-[11px] text-gray-400 font-bold uppercase tracking-widest">05 Déc 2024</span>
            </div>
            <h3 class="text-[20px] font-[900] text-[#1a1a1b] leading-tight group-hover:text-brand-700 transition-colors uppercase">
              Accord de collaboration avec l'université
            </h3>
            <p class="text-gray-500 text-[14px] leading-relaxed font-medium line-clamp-2">
              Recherche et développement de nouvelles variétés de cultures adaptées au climat local.
            </p>
            <div class="pt-2">
              <span class="text-brand-700 font-[900] text-[11px] uppercase tracking-widest inline-flex items-center gap-2">
                En savoir plus >
              </span>
            </div>
          </div>
        </nuxt-link>

        <!-- News 5 -->
        <nuxt-link to="/news/6" class="block group cursor-pointer bg-white border border-gray-100 rounded-[2px] overflow-hidden hover:shadow-xl transition-all">
          <div class="relative h-[250px] overflow-hidden">
            <img src="~/assets/img/femmes.jpeg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="News 5">
          </div>
          <div class="p-8 space-y-4">
            <div class="flex items-center gap-3">
              <span class="bg-brand-100 text-brand-700 text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded-[2px]">Reconnaissance</span>
              <span class="text-[11px] text-gray-400 font-bold uppercase tracking-widest">28 Nov 2024</span>
            </div>
            <h3 class="text-[20px] font-[900] text-[#1a1a1b] leading-tight group-hover:text-brand-700 transition-colors uppercase">
              Prix national d'excellence agricole
            </h3>
            <p class="text-gray-500 text-[14px] leading-relaxed font-medium line-clamp-2">
              La FOPAKO récompensée pour son impact sur le développement rural durable.
            </p>
            <div class="pt-2">
              <span class="text-brand-700 font-[900] text-[11px] uppercase tracking-widest inline-flex items-center gap-2">
                En savoir plus >
              </span>
            </div>
          </div>
        </nuxt-link>

        <!-- News 6 -->
        <nuxt-link to="/news/7" class="block group cursor-pointer bg-white border border-gray-100 rounded-[2px] overflow-hidden hover:shadow-xl transition-all">
          <div class="relative h-[250px] overflow-hidden">
            <img src="~/assets/img/about2.jpg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="News 6">
          </div>
          <div class="p-8 space-y-4">
            <div class="flex items-center gap-3">
              <span class="bg-brand-100 text-brand-700 text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded-[2px]">Infrastructure</span>
              <span class="text-[11px] text-gray-400 font-bold uppercase tracking-widest">22 Nov 2024</span>
            </div>
            <h3 class="text-[20px] font-[900] text-[#1a1a1b] leading-tight group-hover:text-brand-700 transition-colors uppercase">
              Nouveau centre de stockage inauguré
            </h3>
            <p class="text-gray-500 text-[14px] leading-relaxed font-medium line-clamp-2">
              Une infrastructure moderne pour mieux conserver les récoltes et réduire les pertes post-récolte.
            </p>
            <div class="pt-2">
              <span class="text-brand-700 font-[900] text-[11px] uppercase tracking-widest inline-flex items-center gap-2">
                En savoir plus >
              </span>
            </div>
          </div>
        </nuxt-link>

      </div>

      <!-- Load More -->
      <div class="text-center mt-20">
        <button class="px-12 py-5 bg-brand-700 text-white font-[900] text-[14px] tracking-[0.1em] hover:bg-brand-800 transition-all shadow-lg uppercase rounded-[2px]">
          Charger plus d'actualités
        </button>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Actualités - FOPAKO | Nouvelles et Événements',
  meta: [
    { name: 'description', content: 'Suivez toute l\'actualité de la FOPAKO et du secteur agricole au Kongo Central.' }
  ]
})
</script>
