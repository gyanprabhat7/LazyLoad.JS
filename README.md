
# Lazy Load JS

**Version:** 1.2.3

Lazy Load JS is a lightweight JavaScript library designed to enhance web page performance by implementing lazy loading for both images and videos. Images and videos are loaded only when they are about to become visible in the user's viewport, reducing initial page load times and saving bandwidth.

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Getting Started](#getting-started)
    - [Basic Usage](#basic-usage)
    - [Advanced Configuration](#advanced-configuration)
4. [API Reference](#api-reference)
    - [LazyLoadImage Class](#lazyloadimage-class)
        - [Constructor](#constructor)
        - [init()](#init)
        - [observeWithIntersectionObserver()](#observewithintersectionobserver)
        - [loadImageElementsImmediately()](#loadimageelementsimmediately)
        - [loadImageElement()](#loadimageelement)
    - [LazyLoadVideo Class](#lazyloadvideo-class)
        - [Constructor](#constructor-1)
        - [init()](#init-1)
        - [observeWithIntersectionObserver()](#observewithintersectionobserver-1)
        - [loadVideoElementsImmediately()](#loadvideoelementsimmediately)
        - [loadVideoElement()](#loadvideoelement)
5. [Examples](#examples)
6. [Browser Support](#browser-support)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction

Lazy Load JS aims to simplify the implementation of lazy loading for images and videos on websites. By deferring the loading of media elements until they are needed, the library contributes to a smoother user experience and faster page loads.

## Installation

You can include Lazy Load JS in your project using the following script tag:

```bash
<!--  For Images  -->

  <script src="https://cdn.jsdelivr.net/gh/gyanprabhat7/LazyLoad.JS/lazyImage.js"></script>

<!--  For Videos  -->

  <script src="https://cdn.jsdelivr.net/gh/gyanprabhat7/LazyLoad.JS/lazyVideo.js"></script>
```

## Getting Started

### Basic Usage
Lazy Load JS can be easily integrated into your web page. Simply add the lazy-load-image and/or lazy-load-video class to the images and videos you want to lazy load, and include the respective library in your script.

#### Lazy Load Images

```bash
<img src="placeholder.jpg" data-src="image-to-lazy-load.jpg" class="lazy-load-image" alt="Lazy-loaded Image">

<script src="https://cdn.jsdelivr.net/gh/gyanprabhat7/LazyLoad.JS/lazyimage.js"></script>
<script>
    const lazyImage = new LazyLoadImage('.lazy-load-image');
    lazyImage.init();
</script>
```

#### Lazy Load Videos

```bash
<video data-src="video-to-lazy-load.mp4" class="lazy-load-video" controls>
    Your browser does not support the video tag.
</video>

<script src="https://cdn.jsdelivr.net/gh/gyanprabhat7/LazyLoad.JS/lazyVideo.js"></script>
<script>
    const lazyVideo = new LazyLoadVideo('.lazy-load-video');
    lazyVideo.init();
</script>

```

### Advanced Configuration

#### Lazy Load Images
```bash
<script src="https://cdn.jsdelivr.net/gh/gyanprabhat7/LazyLoad.JS/lazyimage.js"></script>
<script>
    const lazyImage = new LazyLoadImage('.lazy-load-image');

    // Customize the loading strategy
    lazyImage.observeWithIntersectionObserver();

    // Optional: Provide a placeholder image
    lazyImage.placeholderImage = 'placeholder.jpg';

    lazyImage.init();
</script>
```

### Lazy Load Videos
```bash
<script src="https://cdn.jsdelivr.net/gh/gyanprabhat7/LazyLoad.JS/lazyLoadVideo.js"></script>
<script>
    const lazyVideo = new LazyLoadVideo('.lazy-load-video');

    // Customize the loading strategy
    lazyVideo.observeWithIntersectionObserver();

    // Optional: Provide a placeholder video
    lazyVideo.placeholderVideo = 'placeholder.mp4';

    lazyVideo.init();
</script>
```

## API Reference
### LazyLoadImage Class

#### Constructor
Creates a new LazyLoadImage instance.

```bash
const lazyImage = new LazyLoadImage(selector);
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

### LazyVideo Class

#### Constructor
Creates a new LazyLoadVideo instance.

```bash
const lazyVideo = new LazyLoadVideo(selector);
```

selector: A CSS selector for the videos you want to lazy load.



#### init()
Initializes the lazy loading functionality based on the browser's capabilities.

```bash
lazyImage.init();
```
#### observeWithIntersectionObserver()

Uses the Intersection Observer API to lazy load videos when they enter the viewport.

```bash
lazyVideo.observeWithIntersectionObserver();
```

#### loadVideoElementsImmediately()
Loads all videos immediately if Intersection Observer is not supported.
```bash
lazyVideo.loadVideoElementsImmediately();
```

#### loadVideoElement(element)
Loads a specific video.
```bash
lazyVideo.loadVideoElement(element);
```
element: The HTMLVideoElement to load.

## Browser Support
Lazy Load JS is compatible with modern web browsers that support the Intersection Observer API.


## Sponor

Sponsors are welcome: [UPI ](https://upipaylinks.com/links/5b743dee436eb6c) 

please drop your github username so we can mention you correctly.
reach out at [gyan@epiction.co](mailto:gyan@epiction.co)


## License

Lazy Load JS is licensed under the [MIT License ](https://mit-license.org/)


