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
    <div class="flex gap-2 justify-between mt-4 px-8">
      <UButton
        leading-icon="i-lucide-chevron-left"
        :disabled="!stepper?.hasPrev"
        @click="stepper?.prev()"
        color="neutral"
        variant="soft"
        size="lg"
        class="rounded-full"
      />
      <UButton
      class="rounded-full"
        trailing-icon="i-lucide-chevron-right"
        :disabled="!stepper?.hasNext"
        @click="stepper?.next()"
        color="neutral"
        size="lg"
        variant="soft"
      />
    </div>
  </div>
</template>

