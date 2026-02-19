<template>
  <div class="p-4 flex flex-col">
    <div>
      <h2 class="font-bold text-gray-900 text-xl">Payment Details</h2>
      <p class="text-xs font-normal text-gray-500">Complete your booking by providing your payment details</p>
    </div>
    <div class="my-6">
      <p class="font-semibold text-sm text-gray-800 my-2">Select Payment Method</p>
      <URadioGroup 
        v-model="selectedPaymentMethod"
        indicator="end" 
        orientation="horizontal" 
        variant="card" 
        color="info" 
        :items="items" 
      />
    </div>

    <!-- Conditional Card Details Form -->
    <div v-if="selectedPaymentMethod === 'Debit/Credit Card'" class="mb-6 space-y-4">
      <div class="flex items-center justify-between">
        <p class="font-semibold text-sm text-gray-800">Card Details</p>
      </div>
      
      <UFormField name="cardName">
        <UInput placeholder="Name(optional)" color="info" class="w-full" :ui="{ base:'h-10' }" />
      </UFormField>

      <UFormField name="cardNumber">
        <UInput placeholder="Card Number" icon="i-lucide-credit-card"  v-maska="'#### #### #### ####'" color="info" class="w-full" :ui="{ base:'h-10' }">
           <template #trailing>
             <span class="font-bold text-xs">VISA</span>
           </template>
        </UInput>
      </UFormField>

      <div class="flex gap-4">
        <UFormField name="expiryDate" class="w-1/2">
          <UInput icon="i-lucide-calendar" placeholder="MM/YY" v-maska="'##/##'" color="info" class="w-full" :ui="{ base:'h-10' }" />
        </UFormField>
        <UFormField name="cvv" class="w-1/2">
          <UInput placeholder="CVV" color="info" type="password" v-maska="'###'" class="w-full" :ui="{ base:'h-10' }" />
        </UFormField>
      </div>
    </div>

    <div>
      <UBadge size="lg" color="neutral" :ui="{ base:'w-full justify-center h-10 bg-sky-100 font-bold text-lg text-gray-900'}">284.00 GBP</UBadge>
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
      <p class="text-center mt-2 text-xs text-gray-500">By clicking 'Complete booking', you agree to our terms and conditions and privacy policy.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { vMaska } from 'maska/vue'
const router = useRouter()
const items = ref(['Debit/Credit Card', 'Pay in Cash'])
const selectedPaymentMethod = ref('Debit/Credit Card')

const completeBooking = () => {
  router.push(`/booking/abc123/confirmed`)
}
</script>