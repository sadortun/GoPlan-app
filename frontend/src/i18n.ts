import { createI18n } from 'vue-i18n'

// @ts-ignore @todo ??
import messages from '@intlify/vite-plugin-vue-i18n/messages'

export default createI18n({
  locale          : 'en',
  globalInjection : true,
  messages
})
