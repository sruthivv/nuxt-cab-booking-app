<template>
  <div class="p-4 flex flex-col">
    <div>
      <h2 class="font-bold text-gray-900 text-xl">Passenger Details</h2>
      <p class="text-xs font-normal text-gray-500">Provide the deatails for passengers</p>
    </div>
    <div class="my-6 flex flex-col gap-3">
      <UFormField
        name="username"
        label="Full Name"
      >
        <UInput class="w-full" color="info" :ui="{ base:'rounded-none h-10'}">
          <template #trailing>
            <UButton
              icon="i-lucide-user"
              variant="link"
              size="sm"
              color="info"
            ></UButton>
          </template>
        </UInput>
      </UFormField>
      <UFormField
        name="email"
        label="Email ID"
      >
        <UInput class="w-full" color="info" :ui="{ base:'rounded-none h-10'}">
          <template #trailing>
            <UButton
              icon="i-lucide-at-sign"
              variant="link"
              size="sm"
              color="info"
            ></UButton>
          </template>
        </UInput>
      </UFormField>
      <UFormField
        name="Phone"
        label="Phone Number"
      >
        <UInput class="w-full" color="info" :ui="{ base:'rounded-none h-10'}">
          <template #trailing>
            <UButton
              icon="i-lucide-phone"
              variant="link"
              size="sm"
              color="info"
            ></UButton>
          </template>
        </UInput>
      </UFormField>
      <div class="flex flex-row gap-3 justify-between">
        <UFormField
          name="luggage"
          label="Passengers"
        >
        <UInputNumber color="info" :ui="{ base:'rounded-none h-10'}" />
        </UFormField>
        <UFormField
          name="handLuggage"
          label="Hand Luggage"
        >
        <UInputNumber color="info" :ui="{ base:'rounded-none h-10'}" />
        </UFormField>
        <UFormField
          name="Phone"
          label="Checkin Luggage"
        >
          <UInputNumber color="info" :ui="{ base:'rounded-none h-10'}" />
        </UFormField>
      </div>
      <UFormField
        name="Pinfo"
        label="Pickup Extra information"
      >
        <UInput class="w-full" color="info" :ui="{ base:'rounded-none h-10'}">
          <template #trailing>
            <UButton
              icon="i-lucide-phone"
              variant="link"
              size="sm"
              color="info"
            ></UButton>
          </template>
        </UInput>
      </UFormField>
      <UFormField
        name="Dinfo"
        label="Drop Off Extra Information"
      >
        <UInput class="w-full" color="info" :ui="{ base:'rounded-none h-10'}">
          <template #trailing>
            <UButton
              icon="i-lucide-phone"
              variant="link"
              size="sm"
              color="info"
            ></UButton>
          </template>
        </UInput>
      </UFormField>
    </div>
    <div class="my-4 text-end">
      <UButton
        color="info"
        class="rounded-full uppercase justify-center h-10"
      >continue </UButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>