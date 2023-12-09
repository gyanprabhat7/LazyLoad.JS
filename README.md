
# Lazy Load JS

**Version:** 1.0.0

Lazy Load JS is a lightweight JavaScript library designed to enhance web page performance by implementing lazy loading for images. Images are loaded only when they are about to become visible in the user's viewport, reducing initial page load times and saving bandwidth.

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Getting Started](#getting-started)
    - [Basic Usage](#basic-usage)
    - [Advanced Configuration](#advanced-configuration)
4. [API Reference](#api-reference)
    - [LazyImage Class](#lazyimage-class)
        - [Constructor](#constructor)
        - [init()](#init)
        - [observeWithIntersectionObserver()](#observewithintersectionobserver)
        - [loadImagesImmediately()](#loadimagesimmediately)
        - [loadImage()](#loadimage)
5. [Examples](#examples)
6. [Browser Support](#browser-support)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction

Lazy Load JS aims to simplify the implementation of lazy loading for images on websites. By deferring the loading of images until they are needed, the library contributes to a smoother user experience and faster page loads.

## Installation

You can include Lazy Load JS in your project using the following script tag:

```bash
  <script src="https://cdn.jsdelivr.net/gh/gyanprabhat7/LazyLoad.JS/lazyImage.js"></script>
```

## Getting Started

### Basic Usage
Lazy Load JS can be easily integrated into your web page. Simply add the lazy-load class to the images you want to lazy load and include the library in your script.

```bash
<img src="placeholder.jpg" data-src="image-to-lazy-load.jpg" class="lazy-load" alt="Lazy-loaded Image">

<script src="https://cdn.jsdelivr.net/gh/gyanprabhat7/LazyLoad.JS/lazyImage.js"></script>
<script>
    const lazyImage = new LazyImage('.lazy-load');
    lazyImage.init();
</script>
```
### Advanced Configuration

```bash
<script src="https://cdn.jsdelivr.net/gh/gyanprabhat7/LazyLoad.JS/lazyImage.js"></script>
<script>
    const lazyImage = new LazyImage('.lazy-load');

    // Customize the loading strategy
    lazyImage.observeWithIntersectionObserver();

    // Optional: Provide a placeholder image
    lazyImage.placeholderImage = 'placeholder.jpg';

    lazyImage.init();
</script>
```

## API Reference
### LazyImage Class

#### Constructor
Creates a new LazyImage instance.

```bash
const lazyImage = new LazyImage(selector);
```

selector: A CSS selector for the images you want to lazy load.



#### init()
Initializes the lazy loading functionality based on the browser's capabilities.

```bash
lazyImage.init();
```
#### observeWithIntersectionObserver()

Uses the Intersection Observer API to lazy load images when they enter the viewport.

```bash
lazyImage.observeWithIntersectionObserver();
```

#### loadImagesImmediately()
Loads all images immediately if Intersection Observer is not supported.
```bash
lazyImage.loadImagesImmediately();
```

#### loadImage(image)
Loads a specific image.
```bash
lazyImage.loadImage(image);
image: The HTMLImageElement to load.
```

## Browser Support
Lazy Load JS is compatible with modern web browsers that support the Intersection Observer API.


## License

Lazy Load JS is licensed under the [MIT License ](https://mit-license.org/)
