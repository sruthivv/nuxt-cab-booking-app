<script setup lang="ts">
const items = [
  'https://business.rolzo.com/api/cdn/storage/images/Qyq5ydzgja5etvA9v.png',
  'https://business.rolzo.com/api/cdn/storage/images/Qyq5ydzgja5etvA9v.png'  
]
const emit = defineEmits()

const itemsCard = ref(['System', 'Light', 'Dark'])
</script>
<template>
<div class="w-full relative">
  <div class="'mx-auto max-w-2xl shadow-2xl border border-gray-50 px-4 py-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <div class="flex flex-row justify-between">
      <p class="font-semibold text-md uppercase"> mercwdebce benzz</p>
      <div class="flex gap-2 items-center flex-row">
        <p class="font-semibold text-md"><UIcon name="i-lucide-user" class="size-3" />2</p>
        <p class="font-semibold text-md"><UIcon name="i-lucide-user" class="size-3" />4</p>
      </div>
      
    </div> 
    <UCarousel
      v-slot="{ item }"
      :items="items"
      dots
      class="w-full max-w-xs mx-auto"
      :ui="{dots:'-bottom-4' , root:'ring-0'}"
    >
      <img
        :src="item"
        width="320"
        height="320"
        class="rounded-lg object-cover"
      />
    </UCarousel>
    <div class="flex flex-row justify-between py-2 px-4">
      <UBadge class="font-bold rounded-full" variant="soft"> 165.00GBP</UBadge>
      <UButton icon="i-lucide-arrow-right" class="rounded-full"  @click="$emit('selectVehicle')" color="info" variant="subtle"></UButton>
    </div> 
    <div class="flex justify-center w-full">
      <UCollapsible class="w-full flex flex-col gap-2">
        <UButton
          color="neutral"
          variant="ghost"
          size="lg"
          trailing-icon="i-lucide-chevron-down"
          class="flex items-center justify-center rounded-full w-full"
          :ui="{
            trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200',
            content: 'w-full'
          }"
        />

        <template #content>
          <div class="h-48 w-full flex flex-row justify-between px-4">
            <div class="flex flex-col">
              <span>services and details</span>
              <URadioGroup indicator="hidden" color="info" variant="card" :items="itemsCard" />
            </div>
            <div class="flex flex-col">
              <span>services and details</span>
              <URadioGroup indicator="hidden" color="info" variant="card" :items="itemsCard" />
            </div>
            <div class="flex flex-col">
              <span>services and details</span>
              <URadioGroup indicator="hidden" color="info" variant="card" :items="itemsCard" />
            </div>
          </div>
        </template>
      </UCollapsible>
    </div>
  </div>
</div>
</template>

