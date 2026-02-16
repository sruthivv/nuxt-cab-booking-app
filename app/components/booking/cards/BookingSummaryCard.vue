<template>
  <UCard variant="soft" class="divide-hidden divide-y-0" :ui="{ footer:'p-2',header:'p-2' , root:'divide-hidden' , body:'sm:p-4'}">
    <template #header>
      <h2 class="text-xl font-bold text-gray-900 mb-2">Booking Summary</h2>
      <USeparator />
    </template>
    <div class="grid lg:grid-cols-3 grid-cols-1 gap-1">
      <div class="flex flex-col col-span-2 gap-2">
        <div class="">
          <p class="text-sm"><span class=""><UIcon name="i-lucide-calendar" />17 April 2026</span><span class="m-2"><UIcon name="i-lucide-clock" />Pick up 09.30 am</span></p>
        </div>
        <div>
          <h2 class="text-gray-500 text-sm">pickup location</h2>
          <p class="font-medium text-xs">CN Tower Travellers Home, Grange Avenue, Toronto, ON, M5T 1C6, Canada</p>
        </div>
        <div>
          <h2 class="text-gray-500 text-sm">dropoff location</h2>
          <p class="font-medium text-xs">Toronto Pearson International Airport (YYZ), Silver Dart Drive, Mississauga, ON, L5P 1B2, Canada</p>
        </div>
        <div class="space-y-2 text-sm px-1 py-1 mt-2">
          <div class="flex justify-between">
            <span class="text-gray-500">Vehicle</span>
            <span class="font-medium">Mercedez Benz,5</span>
          </div>

          <div class="flex justify-between">
            <span class="text-gray-500">Distance</span>
            <span class="font-medium">18.00 KM</span>
          </div>

          <div class="flex justify-between">
            <span class="text-gray-500">Duration</span>
            <span class="font-semibold text-green-600">
              16 minutes
            </span>
          </div>
        </div>
      </div>
      <div>
        <img
        src="https://business.rolzo.com/api/cdn/storage/images/Qyq5ydzgja5etvA9v.png"
        width="220"
        height="220"
        class="rounded-lg object-cover"
      />
      </div>
    </div>
    <template #footer>
      <div class="flex flex-row gap-2">
        <UButton icon="i-lucide-pen" size="sm" color="neutral" variant="outline" class="rounded-full">edit</UButton>
        <UButton icon="i-lucide-trash" size="sm" color="neutral" variant="outline" class="rounded-full">remove</UButton>
      </div>
    </template>
  </UCard>
</template>

