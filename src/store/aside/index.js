import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAsideStore =
    defineStore('aside', () => {
            const currentAside = ref({
                active: '',
                isCollapse: false
            })

            return {currentAside}
        }, {
            persist: {
                storage: sessionStorage,
                paths: ['currentAside'],
                key: "currentAside"
            }
        }
    )
