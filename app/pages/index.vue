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
</script>

<template>
  <div class="full p-4">
    <UStepper :items="items" ref="stepper" :ui="{ content:'lg:p-8 p-2 mx-auto'}" class="w-full" size="sm" color="neutral">
      <template #Vehicle>
        <BookingStepsBookingStep />
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
    <BookingLayoutStepLayout>
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
</template>

