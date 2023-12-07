# Lazy Load JS

**Version:** 1.0.0

Lazy Load JS is a lightweight JavaScript library for lazy loading images on web pages. It helps improve page performance by loading images only when they are about to become visible in the user's viewport.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
    - [Basic Usage](#basic-usage)
    - [Advanced Configuration](#advanced-configuration)
3. [API Reference](#api-reference)
    - [LazyImage Class](#lazyimage-class)
        - [Constructor](#constructor)
        - [init()](#init)
        - [observeWithIntersectionObserver()](#observewithintersectionobserver)
        - [loadImagesImmediately()](#loadimagesimmediately)
        - [loadImage()](#loadimage)
4. [Examples](#examples)
5. [Browser Support](#browser-support)
6. [Contributing](#contributing)
7. [License](#license)

## Installation

You can include Lazy Load JS in your project by adding the following script tag to your HTML file:


<script src="https://cdn.jsdelivr.net/gh/gyanprabhat7/LazyLoad.JS/lazyImage.js"></script>

Usage
Basic Usage
Lazy Load JS can be easily integrated into your web page. Simply add the lazy-load class to the images you want to lazy load, and include the library in your script.

html
Copy code
<img src="placeholder.jpg" data-src="image-to-lazy-load.jpg" class="lazy-load" alt="Lazy-loaded Image">

<script src="https://cdn.jsdelivr.net/gh/gyanprabhat7/LazyLoad.JS/lazyImage.js"></script>
<script>
    const lazyImage = new LazyImage('.lazy-load');
    lazyImage.init();
</script>
Advanced Configuration
Lazy Load JS provides advanced configuration options for developers who want more control over the lazy loading behavior. You can customize the loading strategy, use placeholder images, and more.

html
Copy code
<script src="https://cdn.jsdelivr.net/gh/gyanprabhat7/LazyLoad.JS/lazyImage.js"></script>
<script>
    const lazyImage = new LazyImage('.lazy-load');

    // Customize the loading strategy
    lazyImage.observeWithIntersectionObserver();

    // Optional: Provide a placeholder image
    lazyImage.placeholderImage = 'placeholder.jpg';

    lazyImage.init();
</script>
API Reference
LazyImage Class
Constructor
Creates a new LazyImage instance.

javascript
Copy code
const lazyImage = new LazyImage(selector);
selector: A CSS selector for the images you want to lazy load.
init()
Initializes the lazy loading functionality based on the browser's capabilities.

javascript
Copy code
lazyImage.init();
observeWithIntersectionObserver()
Uses the Intersection Observer API to lazy load images when they enter the viewport.

javascript
Copy code
lazyImage.observeWithIntersectionObserver();
loadImagesImmediately()
Loads all images immediately if Intersection Observer is not supported.

javascript
Copy code
lazyImage.loadImagesImmediately();
loadImage(image)
Loads a specific image.

javascript
Copy code
lazyImage.loadImage(image);
image: The HTMLImageElement to load.
Examples
For more examples and use cases, check out the examples directory in the repository.

Browser Support
Lazy Load JS is compatible with modern web browsers that support the Intersection Observer API. Check the browser support section for more details.

Contributing
If you'd like to contribute to Lazy Load JS, please follow the contributing guidelines.

License
Lazy Load JS is licensed under the MIT License.
