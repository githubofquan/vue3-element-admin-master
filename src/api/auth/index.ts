import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { CaptchaResult, LoginData, LoginResult } from './types';

/**
 * 登录API
 *
 * @param data {LoginData}
 * @returns
 */
export function loginApi(data: LoginData): Promise<LoginResult> {
  return new Promise<LoginResult>((resolve, reject) => {
    resolve({
      accessToken: '123',
      expires: 123,
      refreshToken: '123',
      tokenType: '123'

    } as LoginResult)
  })
  // return request({
  //   url: '/api/v1/auth/login',
  //   method: 'post',
  //   params: data
  // });
}

/**
 * 注销API
 */
export function logoutApi() {
  return request({
    url: '/api/v1/auth/logout',
    method: 'delete'
  });
}



/**
 * 获取验证码
 */
export function getCaptchaApi(): Promise<CaptchaResult> {
  return new Promise<CaptchaResult>((resolve, reject) => {
    resolve(
      {
        verifyCodeKey: Math.random().toString(36).substr(2, 5),
        verifyCodeBase64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='
      } as CaptchaResult
    )
  })
  // return request({
  //   url: '/api/v1/auth/captcha',
  //   method: 'get'
  // });
}
