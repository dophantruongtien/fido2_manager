import {
  startRegistration,
  startAuthentication,
} from '@simplewebauthn/browser'

export async function registerPasskey(options) {
  return await startRegistration({
    optionsJSON: options,
  })
}

export async function loginPasskey(options) {
  return await startAuthentication({
    optionsJSON: options,
  })
}