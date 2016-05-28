## Website Performance Optimization portfolio project

## [Go to demo website](http://bostonhuman.github.io/mobile-portfolio)

This challenge, in particular, optimize the critical rendering path and make this page render as quickly as possible[Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
2. Clone the repository 

  ```
  git clone https://github.com/bostonhuman/mobile-portfolio
  
  ```

1. Visit live demo go to [demo site](http://bostonhuman.github.io/mobile-portfolio)
2. Test page speed with [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, we will need to modify views/js/main.js until our frames per second rate is 60 fps or higher. We will find instructive comments in main.js. 

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

## Optimization index.html

The index.html originally had a page speed score about 27/100 for mobile
and 29/100 for desktop. So there is a chance that we can optimize our 
website to load faster above 90/100 for both mobile and desktop.

### CSS

* Inline style.css into the <head> of index.html.
* Add attribute ```media="print"``` attribute to the external print.css    	stylesheet so that the browser understand when it needs print.css.

### JavaScript

* We added the ```async``` attribute to all <script>tags. So this technique tells the browser that it does not have to block DOM construction. And it doesn't block on CSSOM, so the script can't block the critical rendering path.

### The build tool Grunt

* Minify and compress: HTML, CSS and JS.
* Minify and compress: all images.


### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>














