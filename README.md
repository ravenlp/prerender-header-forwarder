#prerender-header-forwarder

Prerender (https://github.com/prerender/prerender) plugin that enables you to specify a set of headers to be forwarded to phantomJs when present on the original request.

##How to use

In your local prerender project run:

    $ npm install prerender-header-forwarder --save
    
Then in the server.js that initializes the prerender:

```js
// Specifying the headers in the in code
server.use(require('prerender-header-forwarder')(['X-Override-Service', 'X-Example-Header']));
```

##Using External Configuration
You can use the environment variable FORWARD_HEADER

```bash
export FORWARD_HEADER=X-Override-Service,X-Example-Header
node server.js
# Or whatever you use to run your prerender server
```

The on the server.js
```js
server.use(require('prerender-header-forwarder')());
// Don't forget to include the '()'
```
