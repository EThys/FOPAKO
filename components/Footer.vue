<template>
  <footer class="bg-[#1a1a1b] text-white pt-32 pb-12 font-sans overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        
        <!-- Brand -->
        <div class="space-y-8">
          <div class="flex items-center gap-4 group cursor-pointer">
            <div class="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-700 shadow-xl group-hover:scale-110 transition-transform">
              <img src="~/assets/img/logo.jpg" alt="FOPAKO Logo" class="w-full h-full object-cover" />
            </div>
            <div class="flex flex-col">
              <span class="text-[28px] font-[900] tracking-tighter leading-none">FOPAKO</span>
              <span class="text-[10px] text-brand-700 font-black uppercase tracking-[0.2em] mt-1">Force Paysanne</span>
            </div>
          </div>
          <p class="text-gray-400 leading-relaxed text-[15px] font-medium opacity-80 max-w-xs">
            Conscience, Unité, Travail. <br/>
            La force paysanne au service du développement durable du Kongo Central.
          </p>
          <div class="flex space-x-3">
            <a href="https://www.facebook.com/fopakongo" target="_blank" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-700 transition-all group">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-700 transition-all">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-700 transition-all">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.33 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.351-.2 6.77-2.618 6.97-6.981.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-[14px] font-[900] mb-8 text-white uppercase tracking-[0.2em]">Navigation</h4>
          <ul class="space-y-4 text-gray-400 font-medium text-[15px]">
            <li><nuxt-link to="/" class="hover:text-brand-700 transition-colors">Accueil</nuxt-link></li>
            <li><nuxt-link to="/about" class="hover:text-brand-700 transition-colors">À Propos</nuxt-link></li>
            <li><a href="/#services" class="hover:text-brand-700 transition-colors">Nos Services</a></li>
            <li><a href="/#news" class="hover:text-brand-700 transition-colors">Actualités</a></li>
            <li><a href="/#blog" class="hover:text-brand-700 transition-colors">Blog</a></li>
          </ul>
        </div>

        <!-- Contact -->
         <div>
          <h4 class="text-[14px] font-[900] mb-8 text-white uppercase tracking-[0.2em]">Contact</h4>
          <ul class="space-y-6 text-gray-400 font-medium text-[15px]">
            <li class="flex items-start gap-4">
              <svg class="w-5 h-5 text-brand-700 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span>123 Avenue de la Révolution, <br/> Matadi, Kongo Central</span>
            </li>
            <li class="flex items-center gap-4 text-brand-700 font-black">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <a href="mailto:contact@fopako.org" class="hover:underline">contact@fopako.org</a>
            </li>
            <li class="flex items-center gap-4">
              <svg class="w-5 h-5 text-brand-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <span>+243 81 234 5678</span>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
           <h4 class="text-[14px] font-[900] mb-8 text-white uppercase tracking-[0.2em]">Newsletter</h4>
           <div class="flex flex-col gap-4">
             <input type="email" placeholder="Votre email" class="bg-white/5 border border-white/10 rounded-[2px] px-6 py-4 focus:outline-none focus:border-brand-700 text-white w-full font-medium transition-colors" />
             <button class="bg-brand-700 text-white font-[900] text-[12px] px-6 py-4 rounded-[2px] hover:bg-brand-800 transition-all uppercase tracking-widest shadow-lg">
               S'abonner
             </button>
           </div>
        </div>

      </div>

      <div class="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[13px] font-bold uppercase tracking-widest">
        <p>&copy; {{ new Date().getFullYear() }} FOPAKO. Tous droits réservés.</p>
        <div class="flex space-x-8 mt-6 md:mt-0">
          <a href="#" class="hover:text-white transition-colors">Mentions Légales</a>
          <a href="#" class="hover:text-white transition-colors">Confidentialité</a>
        </div>
      </div>
    </div>
  </footer>
</template>
