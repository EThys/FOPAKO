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
        <div class="relative bg-gradient-to-br from-brand-700 to-brand-800 text-white p-12">
          <button 
            @click="closeModal"
            class="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <h2 class="text-[36px] md:text-[48px] font-[900] leading-tight tracking-tighter uppercase mb-4">
            Soutenir l'Action
          </h2>
          <p class="text-white/80 text-[15px] font-medium leading-relaxed max-w-lg">
            Votre contribution fait la différence. Ensemble, cultivons un avenir durable pour le Kongo Central.
          </p>
        </div>

        <!-- Support Options -->
        <div class="p-12">
          <h3 class="text-[20px] font-[900] text-[#1a1a1b] uppercase tracking-wider mb-8">Comment soutenir la FOPAKO ?</h3>
          
          <!-- Tabs -->
          <div class="flex gap-4 mb-8 border-b border-gray-200">
            <button 
              @click="activeTab = 'financial'"
              :class="[
                'pb-4 px-2 text-[13px] font-[900] uppercase tracking-widest transition-colors border-b-2',
                activeTab === 'financial' ? 'border-brand-700 text-brand-700' : 'border-transparent text-gray-400 hover:text-gray-600'
              ]"
            >
              Don financier
            </button>
            <button 
              @click="activeTab = 'volunteer'"
              :class="[
                'pb-4 px-2 text-[13px] font-[900] uppercase tracking-widest transition-colors border-b-2',
                activeTab === 'volunteer' ? 'border-brand-700 text-brand-700' : 'border-transparent text-gray-400 hover:text-gray-600'
              ]"
            >
              Bénévolat
            </button>
            <button 
              @click="activeTab = 'partnership'"
              :class="[
                'pb-4 px-2 text-[13px] font-[900] uppercase tracking-widest transition-colors border-b-2',
                activeTab === 'partnership' ? 'border-brand-700 text-brand-700' : 'border-transparent text-gray-400 hover:text-gray-600'
              ]"
            >
              Partenariat
            </button>
          </div>

          <!-- Financial Support Tab -->
          <div v-if="activeTab === 'financial'" class="space-y-6">
            <p class="text-gray-600 text-[15px] font-medium leading-relaxed">
              Votre don nous permet de continuer nos activités de formation, d'équipement et d'accompagnement des agriculteurs.
            </p>

            <!-- Donation Amounts -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button 
                v-for="amount in [25, 50, 100, 250]" 
                :key="amount"
                @click="selectedAmount = amount"
                :class="[
                  'p-4 border-2 rounded-[2px] font-[900] text-[16px] transition-all',
                  selectedAmount === amount 
                    ? 'border-brand-700 bg-brand-50 text-brand-700' 
                    : 'border-gray-200 hover:border-brand-300'
                ]"
              >
                ${{ amount }}
              </button>
            </div>

            <!-- Custom Amount -->
            <div>
              <label class="block text-[12px] font-[900] text-[#1a1a1b] uppercase tracking-widest mb-2">Montant personnalisé (USD)</label>
              <input 
                v-model="customAmount"
                type="number" 
                min="1"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-[2px] focus:border-brand-700 focus:outline-none transition-colors font-medium text-[14px]"
                placeholder="Entrez un montant"
                @input="selectedAmount = null"
              >
            </div>

            <!-- Donor Information -->
            <form @submit.prevent="submitDonation" class="space-y-5 pt-6 border-t border-gray-100">
              <div class="grid md:grid-cols-2 gap-5">
                <div>
                  <label class="block text-[12px] font-[900] text-[#1a1a1b] uppercase tracking-widest mb-2">Nom *</label>
                  <input 
                    type="text" 
                    required
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-[2px] focus:border-brand-700 focus:outline-none transition-colors font-medium text-[14px]"
                  >
                </div>
                <div>
                  <label class="block text-[12px] font-[900] text-[#1a1a1b] uppercase tracking-widest mb-2">Email *</label>
                  <input 
                    type="email" 
                    required
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-[2px] focus:border-brand-700 focus:outline-none transition-colors font-medium text-[14px]"
                  >
                </div>
              </div>

              <div class="flex items-start gap-3">
                <input type="checkbox" id="anonymous" class="mt-1">
                <label for="anonymous" class="text-[13px] text-gray-600 font-medium">
                  Je souhaite rester anonyme
                </label>
              </div>

              <button 
                type="submit"
                class="w-full px-8 py-4 bg-brand-700 text-white font-[900] text-[13px] tracking-[0.1em] hover:bg-brand-800 transition-all shadow-lg uppercase rounded-[2px]"
              >
                Faire un don de ${{ selectedAmount || customAmount || 0 }}
              </button>
            </form>
          </div>

          <!-- Volunteer Tab -->
          <div v-if="activeTab === 'volunteer'" class="space-y-6">
            <p class="text-gray-600 text-[15px] font-medium leading-relaxed">
              Contribuez avec votre temps et vos compétences. Nous recherchons des bénévoles dans plusieurs domaines.
            </p>

            <!-- Volunteer Areas -->
            <div class="grid md:grid-cols-2 gap-4">
              <div class="p-6 border-2 border-gray-100 rounded-[2px] hover:border-brand-300 transition-colors">
                <h4 class="text-[14px] font-[900] text-[#1a1a1b] uppercase mb-2">Formation</h4>
                <p class="text-gray-600 text-[13px] font-medium">Animer des ateliers agricoles</p>
              </div>
              <div class="p-6 border-2 border-gray-100 rounded-[2px] hover:border-brand-300 transition-colors">
                <h4 class="text-[14px] font-[900] text-[#1a1a1b] uppercase mb-2">Communication</h4>
                <p class="text-gray-600 text-[13px] font-medium">Créer du contenu éducatif</p>
              </div>
              <div class="p-6 border-2 border-gray-100 rounded-[2px] hover:border-brand-300 transition-colors">
                <h4 class="text-[14px] font-[900] text-[#1a1a1b] uppercase mb-2">Logistique</h4>
                <p class="text-gray-600 text-[13px] font-medium">Organisation d'événements</p>
              </div>
              <div class="p-6 border-2 border-gray-100 rounded-[2px] hover:border-brand-300 transition-colors">
                <h4 class="text-[14px] font-[900] text-[#1a1a1b] uppercase mb-2">Technique</h4>
                <p class="text-gray-600 text-[13px] font-medium">Support IT et maintenance</p>
              </div>
            </div>

            <form @submit.prevent="submitVolunteer" class="space-y-5 pt-6 border-t border-gray-100">
              <div class="grid md:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  required
                  placeholder="Nom complet"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-[2px] focus:border-brand-700 focus:outline-none transition-colors font-medium text-[14px]"
                >
                <input 
                  type="email" 
                  required
                  placeholder="Email"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-[2px] focus:border-brand-700 focus:outline-none transition-colors font-medium text-[14px]"
                >
              </div>
              <textarea 
                rows="4"
                required
                placeholder="Parlez-nous de vos compétences et disponibilités..."
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-[2px] focus:border-brand-700 focus:outline-none transition-colors font-medium text-[14px] resize-none"
              ></textarea>
              <button 
                type="submit"
                class="w-full px-8 py-4 bg-brand-700 text-white font-[900] text-[13px] tracking-[0.1em] hover:bg-brand-800 transition-all shadow-lg uppercase rounded-[2px]"
              >
                Proposer ma candidature
              </button>
            </form>
          </div>

          <!-- Partnership Tab -->
          <div v-if="activeTab === 'partnership'" class="space-y-6">
            <p class="text-gray-600 text-[15px] font-medium leading-relaxed">
              Vous représentez une organisation et souhaitez collaborer avec la FOPAKO ? Discutons ensemble des opportunités.
            </p>

            <form @submit.prevent="submitPartnership" class="space-y-5">
              <input 
                type="text" 
                required
                placeholder="Nom de l'organisation"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-[2px] focus:border-brand-700 focus:outline-none transition-colors font-medium text-[14px]"
              >
              <div class="grid md:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  required
                  placeholder="Personne de contact"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-[2px] focus:border-brand-700 focus:outline-none transition-colors font-medium text-[14px]"
                >
                <input 
                  type="email" 
                  required
                  placeholder="Email professionnel"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-[2px] focus:border-brand-700 focus:outline-none transition-colors font-medium text-[14px]"
                >
              </div>
              <select 
                required
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-[2px] focus:border-brand-700 focus:outline-none transition-colors font-medium text-[14px]"
              >
                <option value="">Type de partenariat souhaité</option>
                <option value="financial">Financement</option>
                <option value="technical">Assistance technique</option>
                <option value="equipment">Don d'équipements</option>
                <option value="research">Recherche & Développement</option>
                <option value="other">Autre</option>
              </select>
              <textarea 
                rows="5"
                required
                placeholder="Décrivez votre projet de collaboration..."
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-[2px] focus:border-brand-700 focus:outline-none transition-colors font-medium text-[14px] resize-none"
              ></textarea>
              <button 
                type="submit"
                class="w-full px-8 py-4 bg-brand-700 text-white font-[900] text-[13px] tracking-[0.1em] hover:bg-brand-800 transition-all shadow-lg uppercase rounded-[2px]"
              >
                Soumettre la demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const activeTab = ref('financial')
const selectedAmount = ref<number | null>(50)
const customAmount = ref<number | null>(null)

const closeModal = () => {
  emit('update:modelValue', false)
}

const submitDonation = () => {
  alert('Merci pour votre générosité ! Vous serez redirigé vers notre plateforme de paiement sécurisée.')
  closeModal()
}

const submitVolunteer = () => {
  alert('Candidature reçue ! Nous vous contacterons rapidement.')
  closeModal()
}

const submitPartnership = () => {
  alert('Demande envoyée ! Notre équipe examinera votre proposition.')
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
