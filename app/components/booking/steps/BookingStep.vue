<template>
  <BookingLayoutStepLayout>
    <template #left>
      <BookingFormsBookingForm @change="showCard" />
    </template>

    <template #right>
      <BookingCardsVehicleCard v-if="vehicleCard" />
      <img v-else src="/assets/homepageimg-BDf4wDht.webp" />
    </template>
  </BookingLayoutStepLayout>
</template>
<script setup>
const vehicleCard = ref(false)
const showCard = (e) => {
vehicleCard.value = e.value
}
</script>