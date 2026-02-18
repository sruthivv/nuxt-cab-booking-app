<script setup lang="ts">
import type { StepperItem } from '@nuxt/ui'

const items = [
  {
    slot: 'Vehicle' as const,
    title: 'Choose your vehicle',
    description: '',
    icon: 'i-lucide-car'
  }, {
    slot: 'Address' as const,
    title: 'Add your details',
    icon: 'i-lucide-home'
  }, {
    slot: 'complete' as const,
    title: 'Complete your booking',
    icon: 'i-lucide-circle-check'
  }
] satisfies StepperItem[]

const stepper = useTemplateRef('stepper')
const selectVeh = (e) => {
 stepper.value.next()
}
</script>

<template>
  <div class="w-full min-h-screen bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="text-center mb-12">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl uppercase tracking-widest">Cabmatics</h1>
      </div>

      <UStepper :items="items" ref="stepper" :ui="{ content:'lg:mt-12 mt-6' }" class="w-full" size="sm" color="neutral">
        <template #Vehicle>
          <BookingStepsBookingStep @selected="selectVeh" />
        </template>

        <template #Address>
          <Placeholder class="aspect-video">
            <BookingStepsDetailsStep />
          </Placeholder>
        </template>

        <template #complete>
          <BookingStepsPaymentStep />
        </template>
      </UStepper>

      <BookingLayoutStepLayout v-if="items[stepper?.modelValue]?.slot !== 'Vehicle'">
        <template #right>
          <div class="flex gap-2 justify-between mt-4 px-8">
            <UButton
              v-if="stepper?.hasPrev && stepper?.hasNext"
              icon="i-lucide-chevron-left"
              :disabled="!stepper?.hasPrev"
              @click="stepper?.prev()"
              color="info"
              variant="ghost"
              size="lg"
              class="rounded-full"
            >back </UButton>
            <UButton
              v-if="stepper?.hasNext && stepper?.hasPrev"
              class="rounded-full"
              :disabled="!stepper?.hasNext"
              @click="stepper?.next()"
              color="info"
              size="lg"
            >Continue </UButton>
          </div>  
        </template>
      </BookingLayoutStepLayout>
    </div>
  </div>
</template>

