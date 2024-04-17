import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAsideStore =
    defineStore('aside', () => {
            const currentAside = ref({
                active: '',
                isCollapse: false
            })

            const resetActive = () => {
                currentAside.value.active = ''
            }

            return {currentAside, resetActive}
        }, {
            persist: {
                storage: sessionStorage,
                paths: ['currentAside'],
                key: "currentAside"
            }
        }
    )
