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

![reduced pizza element](https://cloud.githubusercontent.com/assets/18538482/15657494/59c28382-267f-11e6-808a-119d1fe0ecdd.png)

* Improved animation
 The best option is making two loops, one for the phases (0 to 4) and the other for the positions (0 to items.length).

![2](https://cloud.githubusercontent.com/assets/18538482/15657653/c3ea561c-2680-11e6-84d8-cabaaddf3cf1.png)
![3](https://cloud.githubusercontent.com/assets/18538482/15657655/c88ccf4c-2680-11e6-81d5-ef58d01b3bb7.png)

* Resized pizzas: resize the pizzas in under 5ms
Using getElementsByClassName() is faster than querySelector() or querySelectorAll().

![4](https://cloud.githubusercontent.com/assets/18538482/15657737/cfa53f70-2681-11e6-8a96-2e26c47f284e.png)

* Prefer getElementById() over querySelector()

![5](https://cloud.githubusercontent.com/assets/18538482/15657956/43f3b814-2684-11e6-9d20-f4310dca6e22.png)

### Test PageSpeed Insights by Google

![6](https://cloud.githubusercontent.com/assets/18538482/15658017/6799f700-2685-11e6-8e71-3037e6c75472.png)
![7](https://cloud.githubusercontent.com/assets/18538482/15658032/99522c18-2685-11e6-8bd2-9b59cfc3576d.png)
