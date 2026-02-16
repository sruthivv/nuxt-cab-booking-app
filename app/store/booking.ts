import { defineStore } from 'pinia'

export const useBookingStore = defineStore('booking', {
  state: () => ({
    pickup: '',
    dropoff: '',
    date: '',
    vehicle: null as null | {
      id: string
      name: string
      price: number
    },
    personalDetails: {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    },
    payment: {
      cardNumber: '',
      expiry: '',
      cvv: ''
    }
  }),

  getters: {
    totalPrice: (state) => {
      return state.vehicle?.price ?? 0
    }
  }
})
