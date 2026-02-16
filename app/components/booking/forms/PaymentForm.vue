<template>
  <div class="p-4 flex flex-col">
    <div>
      <h2 class="font-bold text-gray-900 text-xl">Payment Details</h2>
      <p class="text-xs font-normal text-gray-500">Complete your booking by providing your payment details</p>
    </div>
    <div class="my-6">
      <p class="font-semibold text-sm text-gray-800 my-2">Select Payment Method</p>
      <URadioGroup indicator="end" orientation="horizontal" variant="card" default-value="Debit/Credit Card" color="info" :items="items" >
      </URadioGroup>
    </div>
    <div>
      <UBadge size="lg" color="" :ui="{ base:'w-full justify-center h-10 bg-sky-100 font-bold text-lg'}">284.00 GBP</UBadge>
    </div>
    <div class="my-4">
      <UFormField
        name="voucherCode"
        label="Enter voucher code if you have"
      >
        <UInput class="w-full" color="info" :ui="{ base:'rounded-none h-10'}">
          <template #trailing>
            <UButton
              variant="link"
              size="sm"
              color="info"
            >Apply </UButton>
          </template>
        </UInput>
      </UFormField>
    </div>
    <div class="my-4">
      <UButton
        color="info"
        class="rounded-full uppercase w-full justify-center h-10"
        @click="completeBooking"
      >Complete Booking </UButton>
      <p class="text-center mt-2 text-xs">By clicking 'Complete booking', you agree to ourterms and conditions and privacy policy.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const items = ref(['Debit/Credit Card', 'Pay in Cash'])
const completeBooking = () => {
  router.push(`/booking/abc123/confirmed`)
}
</script>