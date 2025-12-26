<template>
  <div class="bg-white font-sans overflow-hidden">
    <!-- Hero Section -->
    <header class="relative h-[50vh] flex items-center justify-center text-center overflow-hidden bg-brand-900">
      <img src="~/assets/img/hero3.jpg" alt="Contact Hero" class="absolute inset-0 w-full h-full object-cover opacity-40">
      <div class="absolute inset-0 bg-gradient-to-b from-brand-900/80 to-brand-900/60"></div>
      
      <div class="relative z-10 container mx-auto px-4 mt-12">
        <h1 class="text-[56px] md:text-[84px] font-[900] text-white leading-none tracking-tighter uppercase mb-6">
          Contactez-nous
        </h1>
        <p class="text-white/80 text-[18px] max-w-2xl mx-auto font-medium mb-8">
          Nous sommes à votre écoute. Partagez vos questions, suggestions ou demandes d'information.
        </p>
        <div class="flex items-center justify-center gap-2 text-white/60 font-black uppercase tracking-[0.2em] text-[12px]">
          <nuxt-link to="/" class="hover:text-white transition-colors">Accueil</nuxt-link>
          <span class="opacity-30">>></span>
          <span class="text-white">Contact</span>
        </div>
      </div>
    </header>

    <!-- Contact Section -->
    <section class="py-32 container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-20">
        
        <!-- Contact Form -->
        <div>
          <span class="text-brand-700 font-black uppercase tracking-[0.3em] text-[12px] mb-4 block">Envoyez-nous un message</span>
          <h2 class="text-[44px] md:text-[56px] font-[900] text-[#1a1a1b] leading-[1.05] tracking-tighter uppercase mb-8">
            Nous serions ravis de vous entendre
          </h2>
          <p class="text-gray-500 text-[16px] leading-relaxed font-medium mb-12">
            Remplissez le formulaire ci-dessous et notre équipe vous répondra dans les plus brefs délais.
          </p>

          <form class="space-y-6">
            <!-- Name -->
            <div>
              <label class="block text-[13px] font-[900] text-[#1a1a1b] uppercase tracking-widest mb-3">Nom complet *</label>
              <input 
                type="text" 
                required
                class="w-full px-6 py-4 border-2 border-gray-200 rounded-[2px] focus:border-brand-700 focus:outline-none transition-colors font-medium text-[15px]"
                placeholder="Entrez votre nom"
              >
            </div>

            <!-- Email -->
            <div>
              <label class="block text-[13px] font-[900] text-[#1a1a1b] uppercase tracking-widest mb-3">Email *</label>
              <input 
                type="email" 
                required
                class="w-full px-6 py-4 border-2 border-gray-200 rounded-[2px] focus:border-brand-700 focus:outline-none transition-colors font-medium text-[15px]"
                placeholder="votre.email@exemple.com"
              >
            </div>

            <!-- Phone -->
            <div>
             <label class="block text-[13px] font-[900] text-[#1a1a1b] uppercase tracking-widest mb-3">Téléphone</label>
              <input 
                type="tel" 
                class="w-full px-6 py-4 border-2 border-gray-200 rounded-[2px] focus:border-brand-700 focus:outline-none transition-colors font-medium text-[15px]"
                placeholder="+243 ..."
              >
            </div>

            <!-- Subject -->
            <div>
              <label class="block text-[13px] font-[900] text-[#1a1a1b] uppercase tracking-widest mb-3">Sujet *</label>
              <select 
                required
                class="w-full px-6 py-4 border-2 border-gray-200 rounded-[2px] focus:border-brand-700 focus:outline-none transition-colors font-medium text-[15px]"
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="membership">Adhésion</option>
                <option value="partnership">Partenariat</option>
                <option value="training">Formation</option>
                <option value="general">Question générale</option>
                <option value="other">Autre</option>
              </select>
            </div>

            <!-- Message -->
            <div>
              <label class="block text-[13px] font-[900] text-[#1a1a1b] uppercase tracking-widest mb-3">Message *</label>
              <textarea 
                required
                rows="6"
                class="w-full px-6 py-4 border-2 border-gray-200 rounded-[2px] focus:border-brand-700 focus:outline-none transition-colors font-medium text-[15px] resize-none"
                placeholder="Écrivez votre message ici..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button 
              type="submit"
              class="w-full px-12 py-5 bg-brand-700 text-white font-[900] text-[14px] tracking-[0.1em] hover:bg-brand-800 transition-all shadow-lg uppercase rounded-[2px]"
            >
              Envoyer le message
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="space-y-12">
          <div>
            <span class="text-brand-700 font-black uppercase tracking-[0.3em] text-[12px] mb-4 block">Informations de contact</span>
            <h3 class="text-[36px] font-[900] text-[#1a1a1b] leading-tight tracking-tighter uppercase mb-8">
              Nos coordonnées
            </h3>
          </div>

          <!-- Address -->
          <div class="flex gap-6">
            <div class="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-7 h-7 text-brand-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <div>
              <h4 class="text-[18px] font-[900] text-[#1a1a1b] uppercase tracking-wider mb-2">Adresse</h4>
              <p class="text-gray-600 text-[15px] font-medium leading-relaxed">
                123 Avenue de la Révolution,<br>
                Matadi, Kongo Central<br>
                République Démocratique du Congo
              </p>
            </div>
          </div>

          <!-- Email -->
          <div class="flex gap-6">
            <div class="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-7 h-7 text-brand-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <div>
              <h4 class="text-[18px] font-[900] text-[#1a1a1b] uppercase tracking-wider mb-2">Email</h4>
              <a href="mailto:contact@fopako.org" class="text-brand-700 text-[15px] font-black hover:underline">
                contact@fopako.org
              </a>
              <p class="text-gray-600 text-[14px] font-medium mt-1">
                info@fopako-rdc.com
              </p>
            </div>
          </div>

          <!-- Phone -->
          <div class="flex gap-6">
            <div class="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-7 h-7 text-brand-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <div>
              <h4 class="text-[18px] font-[900] text-[#1a1a1b] uppercase tracking-wider mb-2">Téléphone</h4>
              <p class="text-brand-700 text-[15px] font-black">
                +243 81 234 5678
              </p>
              <p class="text-gray-600 text-[14px] font-medium mt-1">
                Lun - Ven : 8h00 - 17h00
              </p>
            </div>
          </div>

          <!-- Social Media -->
          <div class="pt-8 border-t border-gray-100">
            <h4 class="text-[18px] font-[900] text-[#1a1a1b] uppercase tracking-wider mb-6">Suivez-nous</h4>
            <div class="flex space-x-4">
              <a href="https://www.facebook.com/fopakongo" target="_blank" class="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center hover:bg-brand-700 hover:text-white transition-all group">
                <svg class="w-5 h-5 text-brand-700 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center hover:bg-brand-700 hover:text-white transition-all group">
                <svg class="w-5 h-5 text-brand-700 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center hover:bg-brand-700 hover:text-white transition-all group">
                <svg class="w-5 h-5 text-brand-700 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.33 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.351-.2 6.77-2.618 6.97-6.981.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Map Section (Optional) -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 text-center">
        <div class="bg-gray-200 h-[400px] rounded-[2px] flex items-center justify-center">
          <p class="text-gray-500 font-[900] uppercase tracking-widest text-[14px]">
            [Carte Google Maps - Matadi, Kongo Central]
          </p>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Contact - FOPAKO | Contactez-nous',
  meta: [
    { name: 'description', content: 'Contactez la FOPAKO pour toute question ou demande d\'information. Nous sommes à votre écoute.' }
  ]
})
</script>
