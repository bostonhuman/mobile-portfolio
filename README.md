## Website Performance Optimization portfolio project

## [Go to demo website](http://bostonhuman.github.io/mobile-portfolio)

This challenge, in particular, optimize the critical rendering path and make this page render as quickly as possible [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started

#### Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

* Check out the repository
* Clone the repository 

  ```
  git clone https://github.com/bostonhuman/mobile-portfolio
  
  ```
* Visit live demo go to [demo site](http://bostonhuman.github.io/mobile-portfolio)
* Test page speed with [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)

To optimize views/pizza.html, we will need to modify views/js/main.js until our frames per second rate is 60 fps or higher. We will find instructive comments in main.js.  

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

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

### Optimization index.html

The index.html originally had a page speed score about 27/100 for mobile
and 29/100 for desktop. So there is a chance that we can optimize our 
website to load faster above 90/100 for both mobile and desktop.

### CSS

* Inline style.css into the <head> of index.html.
* Add attribute media="print" attribute to all script tags so the browser understands when to use print.css.

### JavaScript

* We added the `async` attribute to all script tags. So this technique tells the browser that it does not have to block DOM construction. And it doesn't block on CSSOM, so the script can't block the critical rendering path.

### The build tool Grunt

* Minify and compress: HTML, CSS and JS.
* Minify and compress: all images.

### Optimization main.js

* Reduced the number of pizza element
* Restore the width and height as the background pizzas

![1](https://cloud.githubusercontent.com/assets/18538482/15685539/1b1038da-273a-11e6-8963-999d598c5aa3.png)

* Improved animation

![2](https://cloud.githubusercontent.com/assets/18538482/15685783/4f8211c8-273b-11e6-9796-9887b25e8f8d.png)
![3](https://cloud.githubusercontent.com/assets/18538482/15657655/c88ccf4c-2680-11e6-81d5-ef58d01b3bb7.png)

* Resized pizzas: resize the pizzas in under 5ms
Using getElementsByClassName() is faster than querySelector() or querySelectorAll().
* Use `elements[0]` is better than `document.getElementsByClassName("randomPizzaContainer")`. This technique
is to avoid accessing the DOM multiple times.

![3](https://cloud.githubusercontent.com/assets/18538482/15686266/7a67e514-273d-11e6-8c8f-98a19d6339f0.png)

* Prefer getElementById() over querySelector()

![4](https://cloud.githubusercontent.com/assets/18538482/15686365/e71ace1a-273d-11e6-8326-6afba0d3e351.png)

* We declared the `pizzasDiv` variable outside the loop, so the function only makes one DOM call.

![5](https://cloud.githubusercontent.com/assets/18538482/15686454/6afa20f0-273e-11e6-8f28-eb088f2d7c62.png)

### Test PageSpeed Insights by Google

![6](https://cloud.githubusercontent.com/assets/18538482/15658017/6799f700-2685-11e6-8e71-3037e6c75472.png)
![7](https://cloud.githubusercontent.com/assets/18538482/15658032/99522c18-2685-11e6-8bd2-9b59cfc3576d.png)
