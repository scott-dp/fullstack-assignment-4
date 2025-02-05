import { defineStore } from 'pinia'

export const useNameAndEmailStore = defineStore('token', {
  state: () => ({
    name: '',
    email: '',
  }),

  actions: {
    async saveNameAndMailInStore(name: string, email:string) {
      try {
        this.name = name;
        this.email = email;
      } catch (err) {
        console.log(err)
      }
    },
  },
})
