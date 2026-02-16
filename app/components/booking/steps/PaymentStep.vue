<template>
  <BookingLayoutStepLayout>
    <template #left>
      <div class="space-y-6">
        <BookingCardsBookingSummaryCard />
        <BookingCardsPersonalDetailsCard />
      </div>
    </template>

    <template #right>
      <BookingFormsPaymentForm />
    </template>
  </BookingLayoutStepLayout>
</template>