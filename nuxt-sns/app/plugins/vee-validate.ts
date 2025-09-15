import { configure, defineRule, Form, Field, ErrorMessage } from 'vee-validate'
import { localize, setLocale } from '@vee-validate/i18n'
import ja from '@vee-validate/i18n/dist/locale/ja.json'
import * as AllRules from '@vee-validate/rules'

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
    ValidationForm: typeof Form
    ValidationField: typeof Field
    ValidationErrorMessage: typeof ErrorMessage
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    Object.entries(AllRules).forEach(([id, validator]) => {
        if (typeof validator === 'function') {
            defineRule(id, validator)
        }
    })

    nuxtApp.vueApp.component('ValidationForm', Form)
    nuxtApp.vueApp.component('ValidationField', Field)
    nuxtApp.vueApp.component('ValidationErrorMessage', ErrorMessage)

    configure({
    generateMessage: localize({ ja }),
    })
    setLocale('ja')
})
