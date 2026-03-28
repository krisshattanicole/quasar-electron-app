<template>
  <q-page class="flex flex-center">
    <div class="text-center">
      <q-icon name="bolt" size="120px" color="primary" />
      <h2 class="q-mt-md">Welcome to Quasar Electron</h2>
      <p class="q-mt-md">Your desktop app is ready!</p>
      <q-btn 
        color="primary" 
        label="Click Me" 
        @click="showNotification"
        class="q-mt-md"
      />
    </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from 'quasar'

const $q = useQuasar()

const showNotification = () => {
  $q.notify({
    message: 'Hello from Quasar Electron!',
    color: 'positive',
    position: 'top'
  })
}
</script>
