<template>
  <UCard variant="soft" class="divide-hidden divide-y-0" :ui="{ footer:'p-2',header:'p-2', root:'divide-hidden' , body:'sm:p-4'}">
    <template #header>
      <h2 class="text-xl font-bold text-gray-900 mb-2">Passenger Details</h2>
      <USeparator />
    </template>
    <div class="grid grid-cols-2 gap-1">
      <div class="flex flex-col gap-2">
        <div>
          <h2 class="text-gray-500 text-sm">Name</h2>
          <p class="font-medium text-xs">James Anderson</p>
        </div>
        <div>
          <h2 class="text-gray-500 text-sm">email</h2>
          <p class="font-medium text-xs">you@gmail.com</p>
        </div>
        <div>
          <h2 class="text-gray-500 text-sm">phone</h2>
          <p class="font-medium text-xs">76787888</p>
        </div>
        <div class="flex flex-row gap-2">
          <UBadge color="info" variant="subtle">Adult #2</UBadge>
          <UBadge color="info" variant="subtle">Child #2</UBadge>
        </div>
      </div>
      <div class="flex flex-col gap-2" >
        <div class="">
          <p class="text-sm"><span class=""><UIcon name="i-lucide-users" />6</span><span class="m-2"><UIcon name="i-lucide-luggage" />2</span> <span class="m-2"><UIcon name="i-lucide-handbag" />2</span></p>
        </div>
        <div>
          <h2 class="text-gray-500 text-sm">Drivers Note</h2>
          <p class="font-medium text-xs">Quick stop (5 minutes) at nearby ATM</p>
        </div>
        <div>
          <h2 class="text-gray-500 text-sm">Pickup and Drop of extra details</h2>
          <p class="font-medium text-xs">Main hotel entrance</p>
        </div>
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

