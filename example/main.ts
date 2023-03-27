/* main.ts */
import { createApp } from 'vue'
import App from './app.vue'

import CustomButton from '@custom-ui/components/button'

const app = createApp(App)

app.use(CustomButton)

app.mount('#app')
