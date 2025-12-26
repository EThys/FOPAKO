<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 font-sans overflow-hidden">
    <!-- Left: Solid Green Content -->
     <div class="bg-brand-700 text-white p-8 lg:p-24 animate-on-scroll">
  <div class="mb-12 lg:mb-16">
    <h2 class="text-white font-[900] text-[15px] uppercase tracking-[0.25em] mb-4 opacity-70">Ce que nous offrons</h2>
    <h3 class="text-[36px] lg:text-[48px] font-[900] mb-6 max-w-xl leading-[1.1] tracking-tight uppercase">
      Donner un souffle nouveau à nos terres.
    </h3>
    <p class="text-white/80 max-w-xl leading-relaxed text-[15px] font-medium opacity-90">
      Nous mettons en place des stratégies innovantes pour transformer le secteur agricole du Kongo Central et améliorer les conditions de vie.
    </p>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8">
    
    <!-- Service 1 -->
    <div class="p-8 border border-white/20 hover:bg-white/10 transition-all duration-500 cursor-pointer group rounded-lg bg-white/5">
      <div class="mb-8 w-14 h-14 flex items-center justify-center rounded-full border border-white/30 group-hover:border-white transition-colors">
        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
      </div>
      <h4 class="text-[20px] font-[800] mb-4 tracking-tight uppercase leading-tight">Cultures & Récoltes</h4>
      <p class="text-[15px] text-white/70 leading-relaxed font-medium">Optimisation des rendements du semis à la récolte.</p>
    </div>

    <!-- Service 2 -->
    <div class="p-8 border border-white/20 hover:bg-white/10 transition-all duration-500 cursor-pointer group rounded-lg bg-white/5">
      <div class="mb-8 w-14 h-14 flex items-center justify-center rounded-full border border-white/30 group-hover:border-white transition-colors">
        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
        </svg>
      </div>
      <h4 class="text-[20px] font-[800] mb-4 tracking-tight uppercase leading-tight">Irrigation & Eau</h4>
      <p class="text-[15px] text-white/70 leading-relaxed font-medium">Systèmes d'irrigation pour une agriculture toute saison.</p>
    </div>

    <!-- Service 3 -->
    <div class="p-8 border border-white/20 hover:bg-white/10 transition-all duration-500 cursor-pointer group rounded-lg bg-white/5">
      <div class="mb-8 w-14 h-14 flex items-center justify-center rounded-full border border-white/30 group-hover:border-white transition-colors">
        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
        </svg>
      </div>
      <h4 class="text-[20px] font-[800] mb-4 tracking-tight uppercase leading-tight">Outillage Agricole</h4>
      <p class="text-[15px] text-white/70 leading-relaxed font-medium">Appui à la mécanisation et entretien du matériel.</p>
    </div>

    <!-- Service 4 -->
    <div class="p-8 border border-white/20 hover:bg-white/10 transition-all duration-500 cursor-pointer group rounded-lg bg-white/5">
      <div class="mb-8 w-14 h-14 flex items-center justify-center rounded-full border border-white/30 group-hover:border-white transition-colors">
        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
        </svg>
      </div>
      <h4 class="text-[20px] font-[800] mb-4 tracking-tight uppercase leading-tight">Amélioration Sols</h4>
      <p class="text-[15px] text-white/70 leading-relaxed font-medium">Enrichissement des sols pour une productivité durable.</p>
    </div>

  </div>
</div>


    <!-- Right: Video Player -->
    <div class="h-[600px] lg:h-auto relative overflow-hidden bg-black">
      <video 
        ref="videoPlayer"
        :controls="hasStarted"
        :muted="!isUnmuted"
        loop 
        playsinline 
        class="w-full h-full object-cover"
        @play="isPlaying = true"
        @pause="isPlaying = false"
      >
        <source src="~/assets/img/video.mp4" type="video/mp4" />
        Votre navigateur ne prend pas en charge la vidéo.
      </video>

      <!-- Custom Play Overlay -->
      <div 
        v-if="!isPlaying" 
        class="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors cursor-pointer group/play"
        @click="handlePlay"
      >
        <div class="w-24 h-24 rounded-full bg-brand-700/90 text-white flex items-center justify-center shadow-2xl scale-100 hover:scale-110 transition-transform duration-500">
           <svg class="w-10 h-10 ml-1.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
        </div>
        <div class="absolute bottom-10 text-white font-[900] text-[12px] uppercase tracking-[0.3em] animate-pulse">
           Cliquez pour lancer la vidéo
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useScrollObserver } from '~/composables/useScrollObserver'

const videoPlayer = ref<HTMLVideoElement | null>(null)
const isPlaying = ref(false)
const isUnmuted = ref(false)
const hasStarted = ref(false)

const handlePlay = () => {
  if (videoPlayer.value) {
    videoPlayer.value.muted = false
    isUnmuted.value = true
    videoPlayer.value.play()
    isPlaying.value = true
    hasStarted.value = true
  }
}

useScrollObserver()
</script>
