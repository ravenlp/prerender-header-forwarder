
/**
 * @param keys Array containing each header to forward to phantomjs, 
 * this argument is overriden by the env var FORWARD_HEADER (a comma separated string)
 */
module.exports = function(keys){
    return{
        onPhantomPageCreate: function(phantom, req, res, next) {
            if(req.method !== 'GET') {
                return next();
            }
            if((!keys || !keys.length) && process.env.FORWARD_HEADER) {
                keys = process.env.FORWARD_HEADER.split(',') || [];
            }
            var customHeaders = {}
            for(var i = 0; i < keys.length; i++) {
                if(req.headers[keys[i]] || req.headers[keys[i].toLowerCase()]) {
                    customHeaders[keys[i]] = (req.headers[keys[i]]) ? req.headers[keys[i]] : req.headers[keys[i].toLowerCase()];
                }
            }
            req.prerender.page.set('customHeaders', customHeaders);
            return next();
        },
    }
};