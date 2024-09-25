import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHeaderStore =
    defineStore('header', () => {
            const currentHeader = ref({
                service: '',
            })

            const resetActive = () => {
                currentHeader.value.service = ''
            }

            return {currentHeader, resetActive}
        }, {
            persist: {
                storage: sessionStorage,
                paths: ['currentHeader'],
                key: "currentHeader"
            }
        }
    )
