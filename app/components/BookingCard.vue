<script setup lang="ts">
import type { icons } from '@iconify-json/lucide/index.js'
import type { TimelineItem, FormError, FormSubmitEvent } from '@nuxt/ui'

const showCars = ref(false)
/* ---------- FORM STATE ---------- */
const state = reactive({
  pickup: '',
  dropoff: '',
  stops: [] as { value: string }[]
})

/* ---------- TIMELINE UI (derived) ---------- */
const timelineItems = computed<TimelineItem[]>(() => [
  {
    username: 'Pickup location',
    icon: 'i-lucide-circle-small',
    ui: { indicator: 'text-primary size-6' }
  },
  ...state.stops.map((_, index) => ({
    username: `VIA ${index + 1}:`,
    icon: 'i-lucide-circle-small',
    ui: { indicator: 'text-gray-600 size-6' }
  })),
  {
    username: 'Dropoff location',
    icon: 'i-lucide-circle-small',
    ui: { indicator: 'text-error size-6' }
  }
])

/* ---------- ACTIONS ---------- */
function addStop() {
  state.stops.push({ value: '' })
}

function removeStop(index: number) {
  state.stops.splice(index, 1)
}

/* ---------- VALIDATION ---------- */
function validate(): FormError[] {
  const errors: FormError[] = []

  if (!state.pickup)
    errors.push({ name: 'pickup', message: 'Pickup is required' })

  if (!state.dropoff)
    errors.push({ name: 'dropoff', message: 'Dropoff is required' })

  return errors
}

/* ---------- SUBMIT ---------- */
const toast = useToast()

function onSubmit(event: FormSubmitEvent<typeof state>) {
  showCars.value = true
  toast.add({
    title: 'Success',
    description: 'Cab search submitted',
    color: 'success'
  })

  console.log('FORM DATA:', event.data)
}
</script>
<template>
  <div class="min-h-screen lg:p-8 sm:p-2">
    <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
      <UPageCard class="w-full max-w-2xl bg-gray-50" :ui="{container:'w-full'}">
        <UForm
          :state="state"
          :validate="validate"
          class="space-y-6"
          @submit="onSubmit"
        >
          <UTimeline :items="timelineItems" size="xs" :ui="{separator:'bg-gray-200', wrapper:'pb-3'}" class="w-full">
            <template #date="{ item, index }">
              <!-- Pickup -->
              <UFormField
                v-if="item.username === 'Pickup location'"
                label="PICK UP LOCATION"
                name="pickup"
              >
                <UInput v-model="state.pickup" placeholder="City, Address, Airport, Hotel..." class="w-full" :ui="{base:'rounded-none'}">
                  <template #trailing>
                    <UButton
                      icon="i-lucide-map-pin"
                      variant="link"
                      size="sm"
                      class="text-[#a79779]"
                    />
                  </template>
                </UInput>
                <!-- Actions -->
                <div class="flex gap-2 my-1">
                  <UButton
                    variant="ghost"
                    size="sm"
                    @click="addStop"
                    icon="i-lucide-circle-plus"
                    class="text-[#a79779] hover:bg-gray-50"
                  >
                    Add Stop
                  </UButton>
                </div>
              </UFormField>

              <!-- Dropoff -->
              <UFormField
                v-else-if="item.username === 'Dropoff location'"
                name="dropoff"
                label="DROP OFF LOCATION"
              >
                <UInput v-model="state.dropoff" class="w-full" :ui="{base:'rounded-none'}" placeholder="City, Address, Airport, Hotel...">
                  <template #trailing>
                    <UButton
                      icon="i-lucide-map-pin"
                      variant="link"
                      size="sm"
                      class="text-[#a79779]"
                    />
                  </template>
                </UInput>
              </UFormField>

              <!-- Intermediate Stops -->
              <div v-else class="flex flex-row gap-2 w-full justify-between items-end">
                <UFormField :label="item.username" class="flex-1 basis-2/3">
                  <UInput v-model="item.value" placeholder="City, Address, Airport, Hotel..."  :ui="{base:'rounded-none'}">
                    <template #trailing>
                        <UButton
                          icon="i-lucide-map-pin"
                          variant="link"
                          size="sm"
                          class="text-[#a79779] w-[1/3]"
                        />
                      </template>
                  </UInput>
                </UFormField>

                <UButton
                  icon="i-lucide-x"
                  color="neutral"
                  variant="ghost"
                  size="sm"
                  class="shrink-0 hover:bg-gray-50 basis-1/3"
                  @click="removeStop(index - 1)"
                />
              </div>
            </template>
          </UTimeline>
          <UButton type="submit" class="w-full bg-[#a79779] hover:bg-[#a79779] justify-center rounded-full">
            Search Cab
          </UButton>
        </UForm>
      </UPageCard>
      <div v-if="showCars" class="grid-cols-1 relative">
        <car-details-card />
      </div>
      <img v-else src="/assets/homepageimg-BDf4wDht.webp" alt="home image" loading="lazy"/>
    </div>  
  </div>
</template>


