import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { UserModel } from '../models/user.model'

export const useUserStore = defineStore('sign-up', () => {
  const user = ref<UserModel | undefined>(undefined);
  const setUser = (userData: UserModel) => {
    user.value = userData;
  };

  return { user, setUser };
})
