import { onMounted, onUnmounted } from 'vue'

export const useScrollObserver = (selector = '.animate-on-scroll', options = {}) => {
    let observer: IntersectionObserver | null = null

    onMounted(() => {
        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible')
                    // Optional: Stop observing once visible if you only want it to animate once
                    // observer?.unobserve(entry.target)
                }
            })
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
            ...options
        })

        document.querySelectorAll(selector).forEach((el) => {
            observer?.observe(el)
        })
    })

    onUnmounted(() => {
        observer?.disconnect()
    })
}
