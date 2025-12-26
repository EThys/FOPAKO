<template>
  <nav class="sticky top-0 w-full z-50 bg-white shadow-sm border-b border-gray-100 py-2 font-sans">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-20">
        
        <!-- Logo -->
        <nuxt-link to="/" class="flex-shrink-0 flex items-center gap-4 group cursor-pointer">
          <div class="h-16 w-16 overflow-hidden rounded-full border-2 border-brand-700/20 group-hover:border-brand-700 transition-all">
            <img src="~/assets/img/logo.jpg" alt="Logo FOPAKO" class="h-full w-full object-cover">
          </div>
          <div class="flex flex-col">
             <span class="text-[24px] font-[900] text-[#1a1a1b] leading-[0.8] tracking-tighter uppercase">FOPAKO</span>
             <span class="text-[10px] text-brand-700 font-black uppercase tracking-[0.2em] mt-1"></span>
          </div>
        </nuxt-link>

        <!-- Desktop Menu - Centered -->
        <div class="hidden lg:flex items-center space-x-10">
          <nuxt-link to="/" class="text-[14px] font-[800] text-[#1a1a1b] hover:text-brand-700 transition-colors uppercase tracking-widest">Accueil</nuxt-link>
          <nuxt-link to="/about" class="text-[14px] font-[800] text-[#1a1a1b] hover:text-brand-700 transition-colors uppercase tracking-widest">À Propos</nuxt-link>
          <a href="/#services" class="text-[14px] font-[800] text-[#1a1a1b] hover:text-brand-700 transition-colors uppercase tracking-widest">Services</a>
          <nuxt-link to="/blog" class="text-[14px] font-[800] text-[#1a1a1b] hover:text-brand-700 transition-colors uppercase tracking-widest">Blog</nuxt-link>
          <nuxt-link to="/news" class="text-[14px] font-[800] text-[#1a1a1b] hover:text-brand-700 transition-colors uppercase tracking-widest">Actualités</nuxt-link>
          <nuxt-link to="/contact" class="text-[14px] font-[800] text-[#1a1a1b] hover:text-brand-700 transition-colors uppercase tracking-widest">Contact</nuxt-link>
        </div>

        <!-- Desktop Button - Right -->
        <div class="hidden lg:flex">
          <button @click="showSupportModal = true" class="px-7 py-3.5 bg-brand-700 text-white font-[800] text-[12px] hover:bg-brand-800 transition-all rounded-[3px] shadow-sm uppercase tracking-[0.1em]">
            Soutenir l'Action
          </button>
        </div>

        <!-- Mobile Button -->
        <div class="lg:hidden flex items-center">
          <button @click="isOpen = !isOpen" class="focus:outline-none text-brand-900 p-2">
             <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu with Transition -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div v-if="isOpen" class="lg:hidden bg-white border-t border-gray-100 shadow-2xl absolute w-full left-0">
        <div class="px-6 py-8 space-y-4">
          <nuxt-link to="/" @click="isOpen = false" class="block text-[18px] font-[900] text-[#1a1a1b] hover:text-brand-700 uppercase tracking-widest">Accueil</nuxt-link>
          <nuxt-link to="/about" @click="isOpen = false" class="block text-[18px] font-[900] text-[#1a1a1b] hover:text-brand-700 uppercase tracking-widest">À propos</nuxt-link>
          <a href="/#services" @click="isOpen = false" class="block text-[18px] font-[900] text-[#1a1a1b] hover:text-brand-700 uppercase tracking-widest">Services</a>
          <nuxt-link to="/blog" @click="isOpen = false" class="block text-[18px] font-[900] text-[#1a1a1b] hover:text-brand-700 uppercase tracking-widest">Blog</nuxt-link>
          <nuxt-link to="/news" @click="isOpen = false" class="block text-[18px] font-[900] text-[#1a1a1b] hover:text-brand-700 uppercase tracking-widest">Actualités</nuxt-link>
          <nuxt-link to="/contact" @click="isOpen = false" class="block text-[18px] font-[900] text-[#1a1a1b] hover:text-brand-700 uppercase tracking-widest">Contact</nuxt-link>
          <div class="pt-6 border-t border-gray-100">
            <button @click="showSupportModal = true; isOpen = false" class="w-full bg-brand-700 text-white py-5 font-[900] text-[14px] shadow-xl uppercase tracking-[0.1em] rounded-[2px]">
              Soutenir l'Action
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Modals -->
    <SupportModal v-model="showSupportModal" />
    <MemberModal v-model="showMemberModal" />
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const showSupportModal = ref(false)
const showMemberModal = ref(false)
</script>
