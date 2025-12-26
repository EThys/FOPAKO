<template>
  <div class="bg-white font-sans overflow-hidden">
    <!-- Hero Section with Featured Image -->
    <header class="relative h-[60vh] flex items-end overflow-hidden bg-brand-900">
      <img src="~/assets/img/culture.jpg" alt="Blog Hero" class="absolute inset-0 w-full h-full object-cover opacity-50">
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      
      <div class="relative z-10 container mx-auto px-4 pb-16">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 text-white/60 font-black uppercase tracking-[0.2em] text-[11px] mb-6">
          <nuxt-link to="/" class="hover:text-white transition-colors">Accueil</nuxt-link>
          <span class="opacity-30">>></span>
          <nuxt-link to="/blog" class="hover:text-white transition-colors">Blog</nuxt-link>
          <span class="opacity-30">>></span>
          <span class="text-white">Article</span>
        </div>
        
        <!-- Category & Date -->
        <div class="flex items-center gap-4 mb-6">
          <span class="bg-brand-700 text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-widest">Agriculture</span>
          <span class="text-white text-[13px] font-bold uppercase tracking-widest">24 Octobre 2024</span>
        </div>
        
        <!-- Title -->
        <h1 class="text-[48px] md:text-[72px] font-[900] text-white leading-[0.95] tracking-tighter uppercase max-w-5xl">
          L'impact de l'agroécologie sur nos rendements
        </h1>
      </div>
    </header>

    <!-- Article Content -->
    <article class="py-20 container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Author Info -->
        <div class="flex items-center gap-6 pb-12 mb-12 border-b border-gray-200">
          <div class="w-20 h-20 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
            <span class="font-black text-brand-700 text-[20px]">JM</span>
          </div>
          <div>
            <h3 class="text-[18px] font-[900] text-[#1a1a1b] uppercase tracking-wider mb-1">Jean Makosso</h3>
            <p class="text-gray-500 text-[14px] font-medium">Agronome & Formateur FOPAKO</p>
          </div>
          
          <!-- Share Buttons -->
          <div class="ml-auto flex gap-3">
            <button class="w-12 h-12 rounded-full bg-gray-100 hover:bg-brand-700 hover:text-white transition-all flex items-center justify-center">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </button>
            <button class="w-12 h-12 rounded-full bg-gray-100 hover:bg-brand-700 hover:text-white transition-all flex items-center justify-center">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </button>
            <button class="w-12 h-12 rounded-full bg-gray-100 hover:bg-brand-700 hover:text-white transition-all flex items-center justify-center">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </button>
          </div>
        </div>

        <!-- Article Content -->
        <div class="prose prose-lg max-w-none">
          
          <!-- Introduction -->
          <p class="text-[18px] text-gray-600 leading-relaxed font-medium mb-10">
            L'agroécologie transforme progressivement les pratiques agricoles au Kongo Central. Au cours des deux dernières années, nous avons observé une amélioration significative des rendements chez nos membres qui ont adopté ces nouvelles techniques. Cette révolution verte ne se limite pas aux chiffres, elle touche également la qualité des sols et la durabilité de nos exploitations.
          </p>

          <!-- Section 1 -->
          <h2 class="text-[32px] font-[900] text-[#1a1a1b] uppercase tracking-tight mb-6 mt-16">
            Une approche respectueuse de l'environnement
          </h2>
          <p class="text-[16px] text-gray-600 leading-relaxed font-medium mb-6">
            L'agroécologie repose sur des principes simples mais efficaces : respecter les cycles naturels, favoriser la biodiversité et réduire la dépendance aux intrants chimiques. Dans nos zones d'intervention, nous avons constaté que les agriculteurs qui appliquent ces principes voient leurs coûts de production diminuer de 30% en moyenne.
          </p>
          <p class="text-[16px] text-gray-600 leading-relaxed font-medium mb-10">
            Les techniques de compostage, de rotation des cultures et d'association de plantes complémentaires permettent non seulement d'améliorer la fertilité des sols, mais aussi de protéger naturellement les cultures contre les ravageurs.
          </p>

          <!-- Image Insert -->
          <figure class="my-12">
            <img src="~/assets/img/about2.jpg" alt="Agroécologie en pratique" class="w-full rounded-[2px] shadow-lg">
            <figcaption class="text-[13px] text-gray-500 font-medium mt-4 text-center uppercase tracking-wider">
              Formation pratique sur les techniques agroécologiques avec les membres FOPAKO
            </figcaption>
          </figure>

          <!-- Section 2 -->
          <h2 class="text-[32px] font-[900] text-[#1a1a1b] uppercase tracking-tight mb-6 mt-16">
            Des résultats mesurables
          </h2>
          <p class="text-[16px] text-gray-600 leading-relaxed font-medium mb-6">
            Les données collectées auprès de 150 agriculteurs pilotes montrent une augmentation moyenne de 40% des rendements après 18 mois de transition agroécologique. Ces chiffres sont particulièrement encourageants pour les cultures de manioc, de maïs et de légumineuses.
          </p>

          <!-- Stats Grid -->
          <div class="grid md:grid-cols-3 gap-6 my-12 p-10 bg-brand-50 rounded-[2px]">
            <div class="text-center">
              <div class="text-[48px] font-[900] text-brand-700 uppercase">+40%</div>
              <div class="text-[13px] text-gray-600 font-bold uppercase tracking-wider">Augmentation des rendements</div>
            </div>
            <div class="text-center">
              <div class="text-[48px] font-[900] text-brand-700 uppercase">-30%</div>
              <div class="text-[13px] text-gray-600 font-bold uppercase tracking-wider">Réduction des coûts</div>
            </div>
            <div class="text-center">
              <div class="text-[48px] font-[900] text-brand-700 uppercase">150</div>
              <div class="text-[13px] text-gray-600 font-bold uppercase tracking-wider">Agriculteurs formés</div>
            </div>
          </div>

          <!-- Section 3 -->
          <h2 class="text-[32px] font-[900] text-[#1a1a1b] uppercase tracking-tight mb-6 mt-16">
            Témoignages de nos membres
          </h2>
          
          <!-- Quote -->
          <blockquote class="border-l-4 border-brand-700 pl-8 py-6 my-10 bg-gray-50 italic">
            <p class="text-[18px] text-gray-700 leading-relaxed font-medium mb-4">
              "Avant, je dépensais beaucoup en engrais chimiques sans voir de vrais résultats. Depuis que j'ai adopté les techniques agroécologiques enseignées par la FOPAKO, mes récoltes sont meilleures et mes sols plus riches."
            </p>
            <footer class="text-[14px] font-[900] text-[#1a1a1b] uppercase tracking-wider not-italic">
              — Mama Thérèse, Agricultrice à Mbanza-Ngungu
            </footer>
          </blockquote>

          <!-- Conclusion -->
          <h2 class="text-[32px] font-[900] text-[#1a1a1b] uppercase tracking-tight mb-6 mt-16">
            Perspectives d'avenir
          </h2>
          <p class="text-[16px] text-gray-600 leading-relaxed font-medium mb-6">
            Fort de ces résultats encourageants, la FOPAKO prévoit d'étendre le programme de formation en agroécologie à 500 nouveaux agriculteurs d'ici 2025. Nous travaillons également sur des partenariats avec des universités locales pour documenter ces pratiques et créer un référentiel adapté au contexte du Kongo Central.
          </p>
          <p class="text-[16px] text-gray-600 leading-relaxed font-medium mb-10">
            L'avenir de notre agriculture passe par l'adoption de pratiques durables qui respectent à la fois notre environnement et les besoins économiques de nos producteurs.
          </p>
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-3 py-12 border-t border-gray-200 mt-16">
          <span class="text-[11px] font-black text-gray-400 uppercase tracking-widest">Tags:</span>
          <span class="px-4 py-2 bg-gray-100 text-gray-700 text-[11px] font-bold uppercase tracking-wider rounded-[2px]">Agroécologie</span>
          <span class="px-4 py-2 bg-gray-100 text-gray-700 text-[11px] font-bold uppercase tracking-wider rounded-[2px]">Formation</span>
          <span class="px-4 py-2 bg-gray-100 text-gray-700 text-[11px] font-bold uppercase tracking-wider rounded-[2px]">Rendement</span>
          <span class="px-4 py-2 bg-gray-100 text-gray-700 text-[11px] font-bold uppercase tracking-wider rounded-[2px]">Durabilité</span>
        </div>
      </div>
    </article>

    <!-- Related Articles -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-[36px] md:text-[48px] font-[900] text-[#1a1a1b] uppercase tracking-tighter mb-16 text-center">
          Articles Similaires
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <!-- Related Article 1 -->
          <nuxt-link to="/blog/2" class="group cursor-pointer">
            <div class="relative h-[250px] mb-6 overflow-hidden rounded-[2px] shadow-lg">
              <img src="~/assets/img/hero1.jpeg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Related 1">
            </div>
            <span class="text-[11px] text-gray-400 font-bold uppercase tracking-widest block mb-3">18 Octobre 2024</span>
            <h3 class="text-[20px] font-[900] text-[#1a1a1b] leading-tight group-hover:text-brand-700 transition-colors uppercase">
              Marché du Cacao 2024
            </h3>
          </nuxt-link>

          <!-- Related Article 2 -->
          <nuxt-link to="/blog/3" class="group cursor-pointer">
            <div class="relative h-[250px] mb-6 overflow-hidden rounded-[2px] shadow-lg">
              <img src="~/assets/img/about2.jpg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Related 2">
            </div>
            <span class="text-[11px] text-gray-400 font-bold uppercase tracking-widest block mb-3">12 Octobre 2024</span>
            <h3 class="text-[20px] font-[900] text-[#1a1a1b] leading-tight group-hover:text-brand-700 transition-colors uppercase">
              Irrigation Solaire
            </h3>
          </nuxt-link>

          <!-- Related Article 3 -->
          <nuxt-link to="/blog/4" class="group cursor-pointer">
            <div class="relative h-[250px] mb-6 overflow-hidden rounded-[2px] shadow-lg">
              <img src="~/assets/img/femmes.jpeg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Related 3">
            </div>
            <span class="text-[11px] text-gray-400 font-bold uppercase tracking-widest block mb-3">5 Octobre 2024</span>
            <h3 class="text-[20px] font-[900] text-[#1a1a1b] leading-tight group-hover:text-brand-700 transition-colors uppercase">
              Femmes Piliers de l'Agriculture
            </h3>
          </nuxt-link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'L\'impact de l\'agroécologie - Blog FOPAKO',
  meta: [
    { name: 'description', content: 'Comment les nouvelles pratiques transforment le rendement de nos membres dans le Kongo Central.' }
  ]
})
</script>
