<template>
  <div>
    <UPageCard class="w-full max-w-2xl bg-gray-50" :ui="{container:'w-full'}">
        <UForm
          :state="state"
          :validate="validate"
          class="space-y-6"
          @submit="onSubmit"
        >
          <UFormField
            label="Pick up date"
            name="Pick up date"
            class="ml-8"
          >
            <UInputDate ref="inputDate" class="w-full">
              <template #trailing>
                <UPopover :reference="inputDate?.inputsRef[3]?.$el">
                  <UButton
                    color="info"
                    variant="link"
                    size="sm"
                    icon="i-lucide-calendar"
                    aria-label="Select a date"
                    class="px-0"
                  />

                  <template #content>
                    <UCalendar v-model="modelValue" color="info" class="p-2" />
                  </template>
                </UPopover>
              </template>
            </UInputDate>
          </UFormField>
          <UFormField
            label="Pick up time"
            name="Pick up time"
            class="ml-8"
          >
            <UInput
              v-model="time"
              type="time"
              color="info"
              class="w-full"
            />
          </UFormField>
          <UTimeline :items="timelineItems" size="xs" :ui="{separator:'bg-gray-200', wrapper:'pb-3'}" class="w-full">
            <template #date="{ item, index }">
              <!-- Pickup -->
              <UFormField
                v-if="item.username === 'Pickup location'"
                label="Pick up location"
              >
                <UInput v-model="state.pickup" placeholder="City, Address, Airport, Hotel..." class="w-full" color="info" :ui="{base:'rounded-none'}">
                  <template #trailing>
                    <UButton
                      icon="i-lucide-map-pin"
                      variant="link"
                      size="sm"
                      color="info"
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
                    color="info"
                    class="rounded-full"
                  >
                    Add Stop
                  </UButton>
                </div>
              </UFormField>

              <!-- Dropoff -->
              <UFormField
                v-else-if="item.username === 'Dropoff location'"
                label="Drop off location"
              >
                <UInput v-model="state.dropoff" class="w-full" :ui="{base:'rounded-none'}" color="info" placeholder="City, Address, Airport, Hotel...">
                  <template #trailing>
                    <UButton
                      icon="i-lucide-map-pin"
                      variant="link"
                      size="sm"
                      color="info"
                    />
                  </template>
                </UInput>
              </UFormField>

              <!-- Intermediate Stops -->
              <div v-else class="flex flex-row gap-2 w-full justify-between items-end">
                <UFormField :label="item.username" class="flex-1 basis-11/12">
                  <UInput v-model="item.value" placeholder="City, Address, Airport, Hotel..." class="w-full" color="info" :ui="{base:'rounded-none'}">
                    <template #trailing>
                        <UButton
                          icon="i-lucide-map-pin"
                          variant="link"
                          size="sm"
                          color="info"
                        />
                      </template>
                  </UInput>
                </UFormField>

                <UButton
                  icon="i-lucide-x"
                  color="neutral"
                  variant="ghost"
                  size="sm"
                  class="shrink-0 hover:bg-gray-50 basis-1/12 justify-center"
                  @click="removeStop(index - 1)"
                />
              </div>
            </template>
          </UTimeline>
          <UButton type="button" @click="onClick" color="info" class="w-full justify-center rounded-full">
            Search Cab
          </UButton>
        </UForm>
      </UPageCard>
  </div>
</template>
<script setup lang="ts">
import type { icons } from '@iconify-json/lucide/index.js'
import type { TimelineItem, FormError, FormSubmitEvent } from '@nuxt/ui'

const showCars = ref(false)
const emit = defineEmits('change')
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

const onClick = () => {
  showCars.value = true
  emit('change',showCars)
}
</script>

<style>

</style>