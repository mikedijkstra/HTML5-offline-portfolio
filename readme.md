# HTML5 Offline Portfolio Web App

Easily create an offline HTML5 portfolio on your iPad or iPhone to take to job interviews or to show to prospective clients.

View the example at: [portfolio.micdijkstra.com][http://portfolio.micdijkstra.com]

## Features

* Uses jQuery mobile
* Responsive design
* Home page with square thumbnails
* Flip transition to portfolio pages and back to home page
* Swipe left and right through portfolio pages
* Custom portfolio pages
* HTML5 offline storage can not be over 5mb


## Usage

1. Update page title and meta content
2. Update favicon.ico
3. Update apple-touch-icon.png
4. Update HTML code for thumbnails and images (see [jquery mobile docs][http://jquerymobile.com/demos/1.0b1/#/demos/1.0b1/])
5. Add all new files to main.manifest (see below)
6. Publish to a live server
7. Browse to your site on your iPhone or iPad
8. Save on your iPad by clicking 'Add to Home Screen'


## main.manifest

### File

The manifest file specifies the resources—such as HTML, JavaScript, CSS, and image files —to downloaded and store in the application cache. It's important to remember:
* The first line must contain the text CACHE MANIFEST
* The URLs are file paths to resources you want to download and cache locally
* All files must be referenced in the main.manifest file
* Any incorrect references will cause the offline storage to silently fail (be prepared to pull your hair out)
* You can find out more at [HTML 5 Offline Application Cache][http://developer.apple.com/library/safari/#documentation/iPhone/Conceptual/SafariJSDatabaseGuide/OfflineApplicationCache/OfflineApplicationCache.html]

### Serving

The manifest file must be served with type text/cache-manifest so if you are hosting your app on an apache server you might need to add the following to your .htaccess

    AddType text/cache-manifest manifest
    ExpiresActive On
    ExpiresDefault "access"

## Thanks to

jQuery - http://jquery.com/
jQuery mobile - http://jquerymobile.com/
HTML5 Reset - http://html5reset.org/
Ethan Marcotte's Responsive Web Design - http://www.alistapart.com/articles/responsive-web-design/