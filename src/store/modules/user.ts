import { defineStore } from 'pinia';

import { loginApi, logoutApi } from '@/api/auth';
import { getUserInfo } from '@/api/user';
import { resetRouter } from '@/router';
import { store } from '@/store';

import { LoginData } from '@/api/auth/types';
import { UserInfo } from '@/api/user/types';

import { useStorage } from '@vueuse/core';

export const useUserStore = defineStore('user', () => {
  // state
  const token = useStorage('accessToken', '');
  const nickname = ref('');
  const avatar = ref('');
  const roles = ref<Array<string>>([]); // User role code set → determine routing authority
  const perms = ref<Array<string>>([]); // User permission code set → judge button permission

  /**
   *
   * @param {LoginData}
   * @returns
   */
  function login(loginData: LoginData) {
    return new Promise<void>((resolve, reject) => {
      loginApi(loginData)
        .then(data => {
          const { tokenType, accessToken } = data;
          
          token.value = tokenType + ' ' + accessToken; // Bearer eyJhbGciOiJIUzI1NiJ9.xxx.xxx
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  function getInfo() {
    return new Promise<UserInfo>((resolve, reject) => {
      getUserInfo()
        .then((data) => {
          if (!data) {
            return reject('Verification failed, please Login again.');
          }
          if (!data.roles || data.roles.length <= 0) {
            reject('getUserInfo: roles must be a non-null array!');
          }
          nickname.value = data.nickname;
          avatar.value = data.avatar;
          roles.value = data.roles;
          perms.value = data.perms;
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  function logout() {
    return new Promise<void>((resolve, reject) => {
      logoutApi()
        .then(() => {
          resetRouter();
          resetToken();
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  function resetToken() {
    token.value = '';
    nickname.value = '';
    avatar.value = '';
    roles.value = [];
    perms.value = [];
  }
  return {
    token,
    nickname,
    avatar,
    roles,
    perms,
    login,
    getInfo,
    logout,
    resetToken
  };
});

export function useUserStoreHook() {
  return useUserStore(store);
}
