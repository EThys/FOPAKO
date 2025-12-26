<template>
  <div class="bg-white font-sans overflow-hidden">
    <!-- Hero Section with Featured Image -->
    <header class="relative h-[60vh] flex items-end overflow-hidden bg-brand-900">
      <img src="~/assets/img/hero2.jpg" alt="News Hero" class="absolute inset-0 w-full h-full object-cover opacity-50">
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      
      <div class="relative z-10 container mx-auto px-4 pb-16">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 text-white/60 font-black uppercase tracking-[0.2em] text-[11px] mb-6">
          <nuxt-link to="/" class="hover:text-white transition-colors">Accueil</nuxt-link>
          <span class="opacity-30">>></span>
          <nuxt-link to="/news" class="hover:text-white transition-colors">Actualités</nuxt-link>
          <span class="opacity-30">>></span>
          <span class="text-white">Article</span>
        </div>
        
        <!-- Category & Date -->
        <div class="flex items-center gap-4 mb-6">
          <span class="bg-red-600 text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-widest">Important</span>
          <span class="text-white text-[13px] font-bold uppercase tracking-widest">26 Décembre 2024</span>
        </div>
        
        <!-- Title -->
        <h1 class="text-[48px] md:text-[72px] font-[900] text-white leading-[0.95] tracking-tighter uppercase max-w-5xl">
          Nouvelle coopérative lancée à Matadi
        </h1>
      </div>
    </header>

    <!-- Article Content -->
    <article class="py-20 container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Meta Info -->
        <div class="flex items-center justify-between pb-12 mb-12 border-b border-gray-200">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 rounded-full bg-brand-700 flex items-center justify-center flex-shrink-0">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-[16px] font-[900] text-[#1a1a1b] uppercase tracking-wider mb-1">FOPAKO Communication</h3>
              <p class="text-gray-500 text-[13px] font-medium">Publié le 26 Décembre 2024 à 10:30</p>
            </div>
          </div>
          
          <!-- Share Buttons -->
          <div class="flex gap-3">
            <button class="w-12 h-12 rounded-full bg-gray-100 hover:bg-brand-700 hover:text-white transition-all flex items-center justify-center">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </button>
            <button class="w-12 h-12 rounded-full bg-gray-100 hover:bg-brand-700 hover:text-white transition-all flex items-center justify-center">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </button>
          </div>
        </div>

        <!-- Article Content -->
        <div class="prose prose-lg max-w-none">
          
          <!-- Lead Paragraph -->
          <p class="text-[20px] text-gray-700 leading-relaxed font-semibold mb-10">
            La FOPAKO franchit une nouvelle étape dans son développement avec l'ouverture d'une coopérative agricole dans la région de Matadi. Cette initiative permettra à 500 agriculteurs supplémentaires de bénéficier de nos services, formations et accompagnement technique.
          </p>

          <!-- Section 1 -->
          <h2 class="text-[32px] font-[900] text-[#1a1a1b] uppercase tracking-tight mb-6 mt-16">
            Un projet attendu depuis longtemps
          </h2>
          <p class="text-[16px] text-gray-600 leading-relaxed font-medium mb-6">
            La ville de Matadi et ses environs comptent une importante population d'agriculteurs qui, jusqu'à présent, n'avaient pas accès aux services de la FOPAKO. Cette nouvelle coopérative répond à une demande croissante de formation et d'accompagnement dans la région.
          </p>
          <p class="text-[16px] text-gray-600 leading-relaxed font-medium mb-10">
            Le site choisi se trouve à 15 kilomètres du centre-ville, dans une zone à fort potentiel agricole. Les infrastructures comprennent un centre de formation moderne, un magasin d'intrants agricoles et un espace de stockage pour les récoltes.
          </p>

          <!-- Image Insert -->
          <figure class="my-12">
            <img src="~/assets/img/about.jpg" alt="Inauguration coopérative Matadi" class="w-full rounded-[2px] shadow-lg">
            <figcaption class="text-[13px] text-gray-500 font-medium mt-4 text-center uppercase tracking-wider">
              Vue du nouveau centre de formation de la coopérative de Matadi
            </figcaption>
          </figure>

          <!-- Section 2 -->
          <h2 class="text-[32px] font-[900] text-[#1a1a1b] uppercase tracking-tight mb-6 mt-16">
            Des services complets pour les agriculteurs
          </h2>
          <p class="text-[16px] text-gray-600 leading-relaxed font-medium mb-6">
            La nouvelle coopérative offrira l'ensemble des services FOPAKO :
          </p>

          <!-- Services List -->
          <div class="space-y-4 my-10 pl-6">
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 bg-brand-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
              </div>
              <div>
                <h4 class="text-[16px] font-[900] text-[#1a1a1b] uppercase mb-2">Formations techniques</h4>
                <p class="text-[15px] text-gray-600 font-medium">Ateliers pratiques sur les techniques agricoles modernes, l'agroécologie et la gestion post-récolte.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 bg-brand-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
              </div>
              <div>
                <h4 class="text-[16px] font-[900] text-[#1a1a1b] uppercase mb-2">Accès aux intrants</h4>
                <p class="text-[15px] text-gray-600 font-medium">Semences certifiées, outils agricoles et équipements à prix préférentiels pour les membres.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 bg-brand-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
              </div>
              <div>
                <h4 class="text-[16px] font-[900] text-[#1a1a1b] uppercase mb-2">Commercialisation</h4>
                <p class="text-[15px] text-gray-600 font-medium">Mise en relation avec des acheteurs et organisation de circuits de vente directs.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 bg-brand-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
              </div>
              <div>
                <h4 class="text-[16px] font-[900] text-[#1a1a1b] uppercase mb-2">Accompagnement personnalisé</h4>
                <p class="text-[15px] text-gray-600 font-medium">Visites sur le terrain et conseils adaptés à chaque type d'exploitation.</p>
              </div>
            </div>
          </div>

          <!-- Stats Highlight -->
          <div class="bg-brand-700 text-white p-12 rounded-[2px] my-16">
            <div class="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div class="text-[56px] font-[900] mb-2">500</div>
                <div class="text-[13px] font-bold uppercase tracking-widest opacity-90">Nouveaux membres</div>
              </div>
              <div>
                <div class="text-[56px] font-[900] mb-2">3</div>
                <div class="text-[13px] font-bold uppercase tracking-widest opacity-90">Formateurs dédiés</div>
              </div>
              <div>
                <div class="text-[56px] font-[900] mb-2">1200m²</div>
                <div class="text-[13px] font-bold uppercase tracking-widest opacity-90">Surface du centre</div>
              </div>
            </div>
          </div>

          <!-- Section 3 -->
          <h2 class="text-[32px] font-[900] text-[#1a1a1b] uppercase tracking-tight mb-6 mt-16">
            Une inauguration en présence des autorités
          </h2>
          <p class="text-[16px] text-gray-600 leading-relaxed font-medium mb-6">
            L'inauguration officielle s'est déroulée ce mardi 24 décembre 2024 en présence du Ministre provincial de l'Agriculture, du Gouverneur de la province et des représentants des organisations partenaires. Plus de 200 personnes ont participé à cette cérémonie qui marque un tournant dans le développement agricole de la région.
          </p>

          <!-- Quote -->
          <blockquote class="border-l-4 border-brand-700 pl-8 py-6 my-10 bg-gray-50 italic">
            <p class="text-[18px] text-gray-700 leading-relaxed font-medium mb-4">
              "Cette coopérative est le fruit d'un travail de longue haleine. Elle représente notre engagement à soutenir tous les agriculteurs du Kongo Central, où qu'ils se trouvent. Matadi était une priorité, et nous sommes fiers d'y être aujourd'hui."
            </p>
            <footer class="text-[14px] font-[900] text-[#1a1a1b] uppercase tracking-wider not-italic">
              — Joseph Nkulu, Président FOPAKO
            </footer>
          </blockquote>

          <!-- Conclusion -->
          <h2 class="text-[32px] font-[900] text-[#1a1a1b] uppercase tracking-tight mb-6 mt-16">
            Comment rejoindre la coopérative ?
          </h2>
          <p class="text-[16px] text-gray-600 leading-relaxed font-medium mb-6">
            Les agriculteurs de la région de Matadi intéressés par l'adhésion à la coopérative peuvent se rendre sur place du lundi au vendredi de 8h à 16h. L'adhésion est ouverte à tous les agriculteurs, qu'ils soient producteurs de cultures vivrières, maraîchers ou éleveurs.
          </p>
          <p class="text-[16px] text-gray-600 leading-relaxed font-medium mb-10">
            Les premières formations débuteront dès janvier 2025 avec un programme intensif sur les techniques de maraîchage et l'agroécologie. Les inscriptions sont d'ores et déjà ouvertes.
          </p>

          <!-- Call to Action Box -->
          <div class="bg-brand-50 p-10 rounded-[2px] border-2 border-brand-200 my-12">
            <h3 class="text-[24px] font-[900] text-[#1a1a1b] uppercase mb-4">Informations pratiques</h3>
            <div class="space-y-3 text-[15px] text-gray-700 font-medium">
              <p><strong class="font-black">Adresse :</strong> Route Nationale N°1, Km 15, Matadi</p>
              <p><strong class="font-black">Téléphone :</strong> +243 81 234 5678</p>
              <p><strong class="font-black">Email :</strong> matadi@fopako.org</p>
              <p><strong class="font-black">Horaires :</strong> Lundi - Vendredi, 8h00 - 16h00</p>
            </div>
          </div>
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-3 py-12 border-t border-gray-200 mt-16">
          <span class="text-[11px] font-black text-gray-400 uppercase tracking-widest">Tags:</span>
          <span class="px-4 py-2 bg-gray-100 text-gray-700 text-[11px] font-bold uppercase tracking-wider rounded-[2px]">Coopérative</span>
          <span class="px-4 py-2 bg-gray-100 text-gray-700 text-[11px] font-bold uppercase tracking-wider rounded-[2px]">Matadi</span>
          <span class="px-4 py-2 bg-gray-100 text-gray-700 text-[11px] font-bold uppercase tracking-wider rounded-[2px]">Expansion</span>
          <span class="px-4 py-2 bg-gray-100 text-gray-700 text-[11px] font-bold uppercase tracking-wider rounded-[2px]">Développement</span>
        </div>
      </div>
    </article>

    <!-- Related News -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-[36px] md:text-[48px] font-[900] text-[#1a1a1b] uppercase tracking-tighter mb-16 text-center">
          Autres Actualités
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <!-- Related News 1 -->
          <nuxt-link to="/news/2" class="group cursor-pointer bg-white border border-gray-100 rounded-[2px] overflow-hidden hover:shadow-xl transition-all">
            <div class="relative h-[200px] overflow-hidden">
              <img src="~/assets/img/culture.jpg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Related 1">
            </div>
            <div class="p-6">
              <span class="text-[11px] text-gray-400 font-bold uppercase tracking-widest block mb-3">20 Déc 2024</span>
              <h3 class="text-[18px] font-[900] text-[#1a1a1b] leading-tight group-hover:text-brand-700 transition-colors uppercase">
                100 paysans formés aux techniques modernes
              </h3>
            </div>
          </nuxt-link>

          <!-- Related News 2 -->
          <nuxt-link to="/news/3" class="group cursor-pointer bg-white border border-gray-100 rounded-[2px] overflow-hidden hover:shadow-xl transition-all">
            <div class="relative h-[200px] overflow-hidden">
              <img src="~/assets/img/about.jpg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Related 2">
            </div>
            <div class="p-6">
              <span class="text-[11px] text-gray-400 font-bold uppercase tracking-widest block mb-3">15 Déc 2024</span>
              <h3 class="text-[18px] font-[900] text-[#1a1a1b] leading-tight group-hover:text-brand-700 transition-colors uppercase">
                Foire agricole annuelle 2024
              </h3>
            </div>
          </nuxt-link>

          <!-- Related News 3 -->
          <nuxt-link to="/news/4" class="group cursor-pointer bg-white border border-gray-100 rounded-[2px] overflow-hidden hover:shadow-xl transition-all">
            <div class="relative h-[200px] overflow-hidden">
              <img src="~/assets/img/hero1.jpeg" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Related 3">
            </div>
            <div class="p-6">
              <span class="text-[11px] text-gray-400 font-bold uppercase tracking-widest block mb-3">10 Déc 2024</span>
              <h3 class="text-[18px] font-[900] text-[#1a1a1b] leading-tight group-hover:text-brand-700 transition-colors uppercase">
                Record de production de manioc
              </h3>
            </div>
          </nuxt-link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Nouvelle coopérative à Matadi - Actualités FOPAKO',
  meta: [
    { name: 'description', content: 'La FOPAKO annonce l\'ouverture d\'une nouvelle coopérative agricole dans la région de Matadi.' }
  ]
})
</script>
