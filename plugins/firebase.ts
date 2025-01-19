// plugins/firebase.ts
import { defineNuxtPlugin } from '#app'
import { initializeApp } from 'firebase/app'
import { getFirestore, Firestore } from 'firebase/firestore'
import type { FirebaseApp } from 'firebase/app'

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyDSRTg1sfYP1C3yR5N6d1VVFWWiuwtpjek",
    authDomain: "dolapweb-be614.firebaseapp.com",
    projectId: "dolapweb-be614",
    storageBucket: "dolapweb-be614.firebasestorage.app",
    messagingSenderId: "826683114902",
    appId: "1:826683114902:web:6b5352d21d0aa2de1489b7",
    measurementId: "G-ZPK9QGW7CB"
  }

  // Firebase App'i başlat
  const firebaseApp: FirebaseApp = initializeApp(firebaseConfig)

  // Firestore örneğini oluştur
  const db: Firestore = getFirestore(firebaseApp)

  // Nuxt app'e firebaseApp ve db'yi enjekte et
  nuxtApp.provide('firebase', firebaseApp)
  nuxtApp.provide('db', db)
})
