<template>
  <!-- Modal Overlay -->
  <transition name="modal-fade">
    <div 
      v-if="modelValue" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      @click.self="closeModal"
    >
      <!-- Modal Content -->
      <div 
        class="bg-white rounded-[2px] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <!-- Header -->
        <div class="relative bg-brand-700 text-white p-12">
          <button 
            @click="closeModal"
            class="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <h2 class="text-[36px] md:text-[48px] font-[900] leading-tight tracking-tighter uppercase mb-4">
            Devenir Membre
          </h2>
          <p class="text-white/80 text-[15px] font-medium leading-relaxed max-w-lg">
            Rejoignez la force paysanne et bénéficiez de nos services, formations et opportunités.
          </p>
        </div>

        <!-- Benefits Section -->
        <div class="p-12 bg-gray-50 border-b border-gray-100">
          <h3 class="text-[20px] font-[900] text-[#1a1a1b] uppercase tracking-wider mb-6">Avantages de l'adhésion</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="flex gap-4">
              <div class="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-brand-700" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
              </div>
              <div>
                <h4 class="text-[14px] font-[900] text-[#1a1a1b] uppercase mb-1">Formations gratuites</h4>
                <p class="text-gray-600 text-[13px] font-medium">Accès aux ateliers techniques</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-brand-700" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
              </div>
              <div>
                <h4 class="text-[14px] font-[900] text-[#1a1a1b] uppercase mb-1">Assistance technique</h4>
                <p class="text-gray-600 text-[13px] font-medium">Support de nos experts</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-brand-700" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
              </div>
              <div>
                <h4 class="text-[14px] font-[900] text-[#1a1a1b] uppercase mb-1">Accès au marché</h4>
                <p class="text-gray-600 text-[13px] font-medium">Réseau de distribution</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-brand-700" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
              </div>
              <div>
                <h4 class="text-[14px] font-[900] text-[#1a1a1b] uppercase mb-1">Équipements</h4>
                <p class="text-gray-600 text-[13px] font-medium">Location à tarif réduit</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Form Section -->
        <div class="p-12">
          <h3 class="text-[20px] font-[900] text-[#1a1a1b] uppercase tracking-wider mb-6">Formulaire d'adhésion</h3>
          <form @submit.prevent="submitForm" class="space-y-5">
            <div class="grid md:grid-cols-2 gap-5">
              <div>
                <label class="block text-[12px] font-[900] text-[#1a1a1b] uppercase tracking-widest mb-2">Nom *</label>
                <input 
                  type="text" 
                  required
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-[2px] focus:border-brand-700 focus:outline-none transition-colors font-medium text-[14px]"
                  placeholder="Votre nom"
                >
              </div>
              <div>
                <label class="block text-[12px] font-[900] text-[#1a1a1b] uppercase tracking-widest mb-2">Prénom *</label>
                <input 
                  type="text" 
                  required
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-[2px] focus:border-brand-700 focus:outline-none transition-colors font-medium text-[14px]"
                  placeholder="Votre prénom"
                >
              </div>
            </div>

            <div>
              <label class="block text-[12px] font-[900] text-[#1a1a1b] uppercase tracking-widest mb-2">Email *</label>
              <input 
                type="email" 
                required
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-[2px] focus:border-brand-700 focus:outline-none transition-colors font-medium text-[14px]"
                placeholder="votre.email@exemple.com"
              >
            </div>

            <div>
              <label class="block text-[12px] font-[900] text-[#1a1a1b] uppercase tracking-widest mb-2">Téléphone *</label>
              <input 
                type="tel" 
                required
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-[2px] focus:border-brand-700 focus:outline-none transition-colors font-medium text-[14px]"
                placeholder="+243 ..."
              >
            </div>

            <div>
              <label class="block text-[12px] font-[900] text-[#1a1a1b] uppercase tracking-widest mb-2">District *</label>
              <select 
                required
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-[2px] focus:border-brand-700 focus:outline-none transition-colors font-medium text-[14px]"
              >
                <option value="">Sélectionnez votre district</option>
                <option value="matadi">Matadi</option>
                <option value="mbanza-ngungu">Mbanza-Ngungu</option>
                <option value="songololo">Songololo</option>
                <option value="lukula">Lukula</option>
                <option value="tshela">Tshela</option>
              </select>
            </div>

            <div>
              <label class="block text-[12px] font-[900] text-[#1a1a1b] uppercase tracking-widest mb-2">Type d'activité agricole *</label>
              <select 
                required
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-[2px] focus:border-brand-700 focus:outline-none transition-colors font-medium text-[14px]"
              >
                <option value="">Sélectionnez votre activité</option>
                <option value="culture">Culture vivrière</option>
                <option value="maraichage">Maraîchage</option>
                <option value="elevage">Élevage</option>
                <option value="pisciculture">Pisciculture</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label class="block text-[12px] font-[900] text-[#1a1a1b] uppercase tracking-widest mb-2">Superficie cultivée (hectares)</label>
              <input 
                type="number" 
                step="0.1"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-[2px] focus:border-brand-700 focus:outline-none transition-colors font-medium text-[14px]"
                placeholder="Ex: 2.5"
              >
            </div>

            <!-- Buttons -->
            <div class="flex gap-4 pt-4">
              <button 
                type="submit"
                class="flex-1 px-8 py-4 bg-brand-700 text-white font-[900] text-[13px] tracking-[0.1em] hover:bg-brand-800 transition-all shadow-lg uppercase rounded-[2px]"
              >
                Soumettre ma demande
              </button>
              <button 
                type="button"
                @click="closeModal"
                class="px-8 py-4 bg-gray-100 text-gray-700 font-[900] text-[13px] tracking-[0.1em] hover:bg-gray-200 transition-all uppercase rounded-[2px]"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const closeModal = () => {
  emit('update:modelValue', false)
}

const submitForm = () => {
  // Handle form submission
  alert('Demande soumise avec succès ! Nous vous contacterons bientôt.')
  closeModal()
}
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .bg-white,
.modal-fade-leave-active .bg-white {
  transition: transform 0.3s ease;
}

.modal-fade-enter-from .bg-white {
  transform: scale(0.9);
}

.modal-fade-leave-to .bg-white {
  transform: scale(0.9);
}
</style>
