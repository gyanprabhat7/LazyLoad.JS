class LazyLoadVideo {
    constructor(selector) {
        this.videoElements = document.querySelectorAll(selector);
    }

    init() {
        if ('IntersectionObserver' in window) {
            this.observeWithIntersectionObserver();
        } else {
            this.loadVideoElementsImmediately();
        }
    }

    observeWithIntersectionObserver() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadVideoElement(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });

        this.videoElements.forEach(videoElement => {
            observer.observe(videoElement);
        });
    }

    loadVideoElementsImmediately() {
        this.videoElements.forEach(videoElement => this.loadVideoElement(videoElement));
    }

    loadVideoElement(element) {
        const dataSrc = element.getAttribute('data-src');
        if (dataSrc) {
            element.src = dataSrc;
        }
    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = LazyLoadVideo;
}
