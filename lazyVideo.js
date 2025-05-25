/* NOTE: IT DO NOT WORK.

The tag `video` do not have a property named
`src` (as `img`). These tags need have one
(or more) sub-element named `source`.

<!-- wrong -->
<video src="foo-video.mp4"></video>

<!-- right -->
<video>
    <source src="foo-vide.mp4" type="video/mp4" />
</video>

Fonts:
* https://www.w3schools.com/tags/tag_video.asp
* https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video

*/

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
