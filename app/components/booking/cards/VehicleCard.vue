<script setup lang="ts">
const emit = defineEmits(['selectVehicle'])

const image = 'https://business.rolzo.com/api/cdn/storage/images/Qyq5ydzgja5etvA9v.png'

const isOpen = ref(false)

const services = [
  'Meet & Greet',
  'Top-of-the-range model',
  'WiFi',
  'On-board amenities'
]

const waitTimes = [
  'Meet & Greet',
  'Top-of-the-range model',
  'WiFi',
  'On-board amenities'
]

const cancellations = [
  'Meet & Greet',
  'Top-of-the-range model',
  'WiFi',
  'On-board amenities'
]

const selectedService = ref<string | null>(null)
const selectedWaitTime = ref<string | null>(null)
const selectedCancellation = ref<string | null>(null)

function toggleSelection(type: 'service' | 'wait' | 'cancel', item: string) {
  if (type === 'service') {
    selectedService.value = selectedService.value === item ? null : item
  } else if (type === 'wait') {
    selectedWaitTime.value = selectedWaitTime.value === item ? null : item
  } else {
    selectedCancellation.value = selectedCancellation.value === item ? null : item
  }
}
</script>

<template>
  <div class="w-full bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
    <!-- Header -->
    <div class="flex justify-between items-start mb-6">
      <h3 class="text-base font-semibold text-gray-900">Mercedes-Benz EQE</h3>
      <div class="flex items-center gap-4 text-gray-500 text-sm">
        <div class="flex items-center gap-1.5">
          <UIcon name="i-lucide-users" class="w-4 h-4" />
          <span class="font-medium">2</span>
        </div>
        <div class="flex items-center gap-1.5">
          <UIcon name="i-lucide-briefcase" class="w-4 h-4" />
          <span class="font-medium">2</span>
        </div>
      </div>
    </div>

    <!-- Static Image (Centered) -->
    <div class="mb-8 px-4 flex justify-center">
       <img 
         :src="image" 
         class="w-full max-w-sm h-40 object-contain" 
         draggable="false"
         alt="Vehicle Image"
       >
    </div>

    <!-- Action Bar -->
    <div class="flex items-center pt-2">
      <!-- Price (Left) -->
      <div class="flex-1">
        <div class="inline-block bg-green-100 text-green-700 font-bold px-3 py-1.5 rounded-lg text-sm">
          165.00 GBP
        </div>
      </div>

      <!-- Expand Toggle (Center) -->
      <div class="flex justify-center">
        <button 
          @click="isOpen = !isOpen"
          class="p-2 rounded-full hover:bg-gray-100 text-gray-400 transition-colors focus:outline-none flex items-center justify-center w-8 h-8"
        >
          <UIcon 
            name="i-lucide-chevron-down" 
            class="w-5 h-5 transition-transform duration-200"
            :class="[isOpen && 'rotate-180']"
          />
        </button>
      </div>

      <!-- Select Button (Right) -->
      <div class="flex-1 flex justify-end">
        <button 
          class="bg-[#A49372] hover:bg-[#938263] text-white font-medium px-8 py-2 rounded-full transition-colors text-sm shadow-sm"
          @click="$emit('selectVehicle')"
        >
          Select
        </button>
      </div>
    </div>

    <!-- Collapsible Details -->
    <div 
        v-if="isOpen"
        class="mt-6 pt-6 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600 animate-[fade-in_0.2s_ease-in-out]"
    >
        <!-- Services details -->
        <div class="space-y-3">
            <h4 class="font-medium text-gray-500">Services details</h4>
            <ul class="space-y-1">
                <li 
                  v-for="item in services" 
                  :key="item"
                  @click="toggleSelection('service', item)"
                  class="px-3 py-2 rounded-md cursor-pointer transition-colors font-medium"
                  :class="[
                    selectedService === item 
                      ? 'bg-sky-600 text-sky-100' 
                      : 'text-gray-900 hover:bg-gray-50'
                  ]"
                >
                  {{ item }}
                </li>
            </ul>
        </div>
        
        <!-- Free wait time -->
        <div class="space-y-3">
            <h4 class="font-medium text-gray-500">Free wait time</h4>
             <ul class="space-y-1">
                <li 
                  v-for="item in waitTimes" 
                  :key="item"
                  @click="toggleSelection('wait', item)"
                  class="px-3 py-2 rounded-md cursor-pointer transition-colors font-medium"
                  :class="[
                    selectedWaitTime === item 
                      ? 'bg-sky-600 text-sky-100' 
                      : 'text-gray-900 hover:bg-gray-50'
                  ]"
                >
                  {{ item }}
                </li>
            </ul>
        </div>

        <!-- Free Cancellation -->
        <div class="space-y-3">
            <h4 class="font-medium text-gray-500">Free Cancellation</h4>
             <ul class="space-y-1">
                <li 
                  v-for="item in cancellations" 
                  :key="item"
                  @click="toggleSelection('cancel', item)"
                  class="px-3 py-2 rounded-md cursor-pointer transition-colors font-medium"
                  :class="[
                    selectedCancellation === item 
                      ? 'bg-sky-600 text-sky-100' 
                      : 'text-gray-900 hover:bg-gray-50'
                  ]"
                >
                  {{ item }}
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
