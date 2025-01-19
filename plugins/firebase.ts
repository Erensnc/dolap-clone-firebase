// plugins/firebase.ts
import { defineNuxtPlugin } from '#app'
import { initializeApp } from 'firebase/app'
import { getFirestore, Firestore } from 'firebase/firestore'
import type { FirebaseApp } from 'firebase/app'

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyAHlzPqbaF52kjx1RQr9Fnt9O-edcj5G4g",
    authDomain: "webodevi-a4067.firebaseapp.com",
    projectId: "webodevi-a4067",
    storageBucket: "webodevi-a4067.appspot.com",
    messagingSenderId: "85919359114",
    appId: "1:85919359114:web:da24da084741be4a6a8d73",
    measurementId: "G-JNLXW2H2LT",
  }

  // Firebase App'i başlat
  const firebaseApp: FirebaseApp = initializeApp(firebaseConfig)

  // Firestore örneğini oluştur
  const db: Firestore = getFirestore(firebaseApp)

  // Nuxt app'e firebaseApp ve db'yi enjekte et
  nuxtApp.provide('firebase', firebaseApp)
  nuxtApp.provide('db', db)
})
