<template>
  <div class="min-h-screen bg-white flex items-center justify-center p-4">
    <UCard class="w-full max-w-md lg:shadow-xl" :ui="{ root:'ring-0 lg:ring lg:ring-default lg:py-8'}">
      
      <!-- Success Icon -->
      <div class="flex flex-col items-center text-center space-y-3">
        <div class="w-16 h-16 flex items-center justify-center rounded-full bg-green-100">
          <UIcon name="i-lucide-circle-check-big" class="text-green-600 w-10 h-10" />
        </div>

        <h1 class="text-2xl font-bold text-gray-800">
          Booking Confirmed!
        </h1>

        <p class="text-gray-500 text-sm">
          Your ride is on the way 🚗
        </p>
      </div>

      <!-- Divider -->
      <UDivider class="my-6" />

      <!-- Booking Details -->
      <div class="space-y-2 text-sm px-6 py-4 shadow-md rounded-md border border-gray-50 mt-2">
        <div class="flex justify-between">
          <span class="text-gray-500">Booking ID</span>
          <UBadge color="primary" variant="soft">
            {{ bookingId }}
          </UBadge>
        </div>

        <div class="flex justify-between">
          <span class="text-gray-500">Driver</span>
          <span class="font-medium">{{ driver.name }}</span>
        </div>

        <div class="flex justify-between">
          <span class="text-gray-500">Vehicle</span>
          <span class="font-medium">{{ driver.vehicle }}</span>
        </div>

        <div class="flex justify-between">
          <span class="text-gray-500">ETA</span>
          <span class="font-semibold text-green-600">
            {{ driver.eta }} mins
          </span>
        </div>
      </div>

      <!-- Actions -->
      <div class="mt-6 space-y-3">
        <UButton block class="rounded-full" color="primary" @click="goToTracking">
          Track Ride
        </UButton>

        <UButton
          block
          color="error"
          variant="soft"
          class="rounded-full"
          @click="cancelRide"
        >
          Cancel Ride
        </UButton>
      </div>

    </UCard>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
})
const route = useRoute()
const router = useRouter()

const bookingId = route.params.id

// Mock driver data (replace with API call)
const driver = ref({
  name: 'Rahul Sharma',
  vehicle: 'Swift Dzire - KA01AB1234',
  eta: 5
})

function cancelRide() {
  // Call API here
  router.push('/')
}

function goToTracking() {
  router.push(`/tracking/${bookingId}`)
}
</script>
