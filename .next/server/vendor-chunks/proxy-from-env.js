"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/proxy-from-env";
exports.ids = ["vendor-chunks/proxy-from-env"];
exports.modules = {

/***/ "(ssr)/./node_modules/proxy-from-env/index.js":
/*!**********************************************!*\
  !*** ./node_modules/proxy-from-env/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar parseUrl = (__webpack_require__(/*! url */ \"url\").parse);\n\nvar DEFAULT_PORTS = {\n  ftp: 21,\n  gopher: 70,\n  http: 80,\n  https: 443,\n  ws: 80,\n  wss: 443,\n};\n\nvar stringEndsWith = String.prototype.endsWith || function(s) {\n  return s.length <= this.length &&\n    this.indexOf(s, this.length - s.length) !== -1;\n};\n\n/**\n * @param {string|object} url - The URL, or the result from url.parse.\n * @return {string} The URL of the proxy that should handle the request to the\n *  given URL. If no proxy is set, this will be an empty string.\n */\nfunction getProxyForUrl(url) {\n  var parsedUrl = typeof url === 'string' ? parseUrl(url) : url || {};\n  var proto = parsedUrl.protocol;\n  var hostname = parsedUrl.host;\n  var port = parsedUrl.port;\n  if (typeof hostname !== 'string' || !hostname || typeof proto !== 'string') {\n    return '';  // Don't proxy URLs without a valid scheme or host.\n  }\n\n  proto = proto.split(':', 1)[0];\n  // Stripping ports in this way instead of using parsedUrl.hostname to make\n  // sure that the brackets around IPv6 addresses are kept.\n  hostname = hostname.replace(/:\\d*$/, '');\n  port = parseInt(port) || DEFAULT_PORTS[proto] || 0;\n  if (!shouldProxy(hostname, port)) {\n    return '';  // Don't proxy URLs that match NO_PROXY.\n  }\n\n  var proxy =\n    getEnv('npm_config_' + proto + '_proxy') ||\n    getEnv(proto + '_proxy') ||\n    getEnv('npm_config_proxy') ||\n    getEnv('all_proxy');\n  if (proxy && proxy.indexOf('://') === -1) {\n    // Missing scheme in proxy, default to the requested URL's scheme.\n    proxy = proto + '://' + proxy;\n  }\n  return proxy;\n}\n\n/**\n * Determines whether a given URL should be proxied.\n *\n * @param {string} hostname - The host name of the URL.\n * @param {number} port - The effective port of the URL.\n * @returns {boolean} Whether the given URL should be proxied.\n * @private\n */\nfunction shouldProxy(hostname, port) {\n  var NO_PROXY =\n    (getEnv('npm_config_no_proxy') || getEnv('no_proxy')).toLowerCase();\n  if (!NO_PROXY) {\n    return true;  // Always proxy if NO_PROXY is not set.\n  }\n  if (NO_PROXY === '*') {\n    return false;  // Never proxy if wildcard is set.\n  }\n\n  return NO_PROXY.split(/[,\\s]/).every(function(proxy) {\n    if (!proxy) {\n      return true;  // Skip zero-length hosts.\n    }\n    var parsedProxy = proxy.match(/^(.+):(\\d+)$/);\n    var parsedProxyHostname = parsedProxy ? parsedProxy[1] : proxy;\n    var parsedProxyPort = parsedProxy ? parseInt(parsedProxy[2]) : 0;\n    if (parsedProxyPort && parsedProxyPort !== port) {\n      return true;  // Skip if ports don't match.\n    }\n\n    if (!/^[.*]/.test(parsedProxyHostname)) {\n      // No wildcards, so stop proxying if there is an exact match.\n      return hostname !== parsedProxyHostname;\n    }\n\n    if (parsedProxyHostname.charAt(0) === '*') {\n      // Remove leading wildcard.\n      parsedProxyHostname = parsedProxyHostname.slice(1);\n    }\n    // Stop proxying if the hostname ends with the no_proxy host.\n    return !stringEndsWith.call(hostname, parsedProxyHostname);\n  });\n}\n\n/**\n * Get the value for an environment variable.\n *\n * @param {string} key - The name of the environment variable.\n * @return {string} The value of the environment variable.\n * @private\n */\nfunction getEnv(key) {\n  return process.env[key.toLowerCase()] || process.env[key.toUpperCase()] || '';\n}\n\nexports.getProxyForUrl = getProxyForUrl;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcHJveHktZnJvbS1lbnYvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsZUFBZSw2Q0FBb0I7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLGVBQWU7QUFDMUIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGthcnRpXFxPbmVEcml2ZVxcRGVza3RvcFxcUG9rZW1vbldlYkFwcFxcbXktcG9rZW1vbi1hcHBcXG5vZGVfbW9kdWxlc1xccHJveHktZnJvbS1lbnZcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHBhcnNlVXJsID0gcmVxdWlyZSgndXJsJykucGFyc2U7XG5cbnZhciBERUZBVUxUX1BPUlRTID0ge1xuICBmdHA6IDIxLFxuICBnb3BoZXI6IDcwLFxuICBodHRwOiA4MCxcbiAgaHR0cHM6IDQ0MyxcbiAgd3M6IDgwLFxuICB3c3M6IDQ0Myxcbn07XG5cbnZhciBzdHJpbmdFbmRzV2l0aCA9IFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGggfHwgZnVuY3Rpb24ocykge1xuICByZXR1cm4gcy5sZW5ndGggPD0gdGhpcy5sZW5ndGggJiZcbiAgICB0aGlzLmluZGV4T2YocywgdGhpcy5sZW5ndGggLSBzLmxlbmd0aCkgIT09IC0xO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHVybCAtIFRoZSBVUkwsIG9yIHRoZSByZXN1bHQgZnJvbSB1cmwucGFyc2UuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBVUkwgb2YgdGhlIHByb3h5IHRoYXQgc2hvdWxkIGhhbmRsZSB0aGUgcmVxdWVzdCB0byB0aGVcbiAqICBnaXZlbiBVUkwuIElmIG5vIHByb3h5IGlzIHNldCwgdGhpcyB3aWxsIGJlIGFuIGVtcHR5IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZ2V0UHJveHlGb3JVcmwodXJsKSB7XG4gIHZhciBwYXJzZWRVcmwgPSB0eXBlb2YgdXJsID09PSAnc3RyaW5nJyA/IHBhcnNlVXJsKHVybCkgOiB1cmwgfHwge307XG4gIHZhciBwcm90byA9IHBhcnNlZFVybC5wcm90b2NvbDtcbiAgdmFyIGhvc3RuYW1lID0gcGFyc2VkVXJsLmhvc3Q7XG4gIHZhciBwb3J0ID0gcGFyc2VkVXJsLnBvcnQ7XG4gIGlmICh0eXBlb2YgaG9zdG5hbWUgIT09ICdzdHJpbmcnIHx8ICFob3N0bmFtZSB8fCB0eXBlb2YgcHJvdG8gIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuICcnOyAgLy8gRG9uJ3QgcHJveHkgVVJMcyB3aXRob3V0IGEgdmFsaWQgc2NoZW1lIG9yIGhvc3QuXG4gIH1cblxuICBwcm90byA9IHByb3RvLnNwbGl0KCc6JywgMSlbMF07XG4gIC8vIFN0cmlwcGluZyBwb3J0cyBpbiB0aGlzIHdheSBpbnN0ZWFkIG9mIHVzaW5nIHBhcnNlZFVybC5ob3N0bmFtZSB0byBtYWtlXG4gIC8vIHN1cmUgdGhhdCB0aGUgYnJhY2tldHMgYXJvdW5kIElQdjYgYWRkcmVzc2VzIGFyZSBrZXB0LlxuICBob3N0bmFtZSA9IGhvc3RuYW1lLnJlcGxhY2UoLzpcXGQqJC8sICcnKTtcbiAgcG9ydCA9IHBhcnNlSW50KHBvcnQpIHx8IERFRkFVTFRfUE9SVFNbcHJvdG9dIHx8IDA7XG4gIGlmICghc2hvdWxkUHJveHkoaG9zdG5hbWUsIHBvcnQpKSB7XG4gICAgcmV0dXJuICcnOyAgLy8gRG9uJ3QgcHJveHkgVVJMcyB0aGF0IG1hdGNoIE5PX1BST1hZLlxuICB9XG5cbiAgdmFyIHByb3h5ID1cbiAgICBnZXRFbnYoJ25wbV9jb25maWdfJyArIHByb3RvICsgJ19wcm94eScpIHx8XG4gICAgZ2V0RW52KHByb3RvICsgJ19wcm94eScpIHx8XG4gICAgZ2V0RW52KCducG1fY29uZmlnX3Byb3h5JykgfHxcbiAgICBnZXRFbnYoJ2FsbF9wcm94eScpO1xuICBpZiAocHJveHkgJiYgcHJveHkuaW5kZXhPZignOi8vJykgPT09IC0xKSB7XG4gICAgLy8gTWlzc2luZyBzY2hlbWUgaW4gcHJveHksIGRlZmF1bHQgdG8gdGhlIHJlcXVlc3RlZCBVUkwncyBzY2hlbWUuXG4gICAgcHJveHkgPSBwcm90byArICc6Ly8nICsgcHJveHk7XG4gIH1cbiAgcmV0dXJuIHByb3h5O1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIGdpdmVuIFVSTCBzaG91bGQgYmUgcHJveGllZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaG9zdG5hbWUgLSBUaGUgaG9zdCBuYW1lIG9mIHRoZSBVUkwuXG4gKiBAcGFyYW0ge251bWJlcn0gcG9ydCAtIFRoZSBlZmZlY3RpdmUgcG9ydCBvZiB0aGUgVVJMLlxuICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGhlIGdpdmVuIFVSTCBzaG91bGQgYmUgcHJveGllZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNob3VsZFByb3h5KGhvc3RuYW1lLCBwb3J0KSB7XG4gIHZhciBOT19QUk9YWSA9XG4gICAgKGdldEVudignbnBtX2NvbmZpZ19ub19wcm94eScpIHx8IGdldEVudignbm9fcHJveHknKSkudG9Mb3dlckNhc2UoKTtcbiAgaWYgKCFOT19QUk9YWSkge1xuICAgIHJldHVybiB0cnVlOyAgLy8gQWx3YXlzIHByb3h5IGlmIE5PX1BST1hZIGlzIG5vdCBzZXQuXG4gIH1cbiAgaWYgKE5PX1BST1hZID09PSAnKicpIHtcbiAgICByZXR1cm4gZmFsc2U7ICAvLyBOZXZlciBwcm94eSBpZiB3aWxkY2FyZCBpcyBzZXQuXG4gIH1cblxuICByZXR1cm4gTk9fUFJPWFkuc3BsaXQoL1ssXFxzXS8pLmV2ZXJ5KGZ1bmN0aW9uKHByb3h5KSB7XG4gICAgaWYgKCFwcm94eSkge1xuICAgICAgcmV0dXJuIHRydWU7ICAvLyBTa2lwIHplcm8tbGVuZ3RoIGhvc3RzLlxuICAgIH1cbiAgICB2YXIgcGFyc2VkUHJveHkgPSBwcm94eS5tYXRjaCgvXiguKyk6KFxcZCspJC8pO1xuICAgIHZhciBwYXJzZWRQcm94eUhvc3RuYW1lID0gcGFyc2VkUHJveHkgPyBwYXJzZWRQcm94eVsxXSA6IHByb3h5O1xuICAgIHZhciBwYXJzZWRQcm94eVBvcnQgPSBwYXJzZWRQcm94eSA/IHBhcnNlSW50KHBhcnNlZFByb3h5WzJdKSA6IDA7XG4gICAgaWYgKHBhcnNlZFByb3h5UG9ydCAmJiBwYXJzZWRQcm94eVBvcnQgIT09IHBvcnQpIHtcbiAgICAgIHJldHVybiB0cnVlOyAgLy8gU2tpcCBpZiBwb3J0cyBkb24ndCBtYXRjaC5cbiAgICB9XG5cbiAgICBpZiAoIS9eWy4qXS8udGVzdChwYXJzZWRQcm94eUhvc3RuYW1lKSkge1xuICAgICAgLy8gTm8gd2lsZGNhcmRzLCBzbyBzdG9wIHByb3h5aW5nIGlmIHRoZXJlIGlzIGFuIGV4YWN0IG1hdGNoLlxuICAgICAgcmV0dXJuIGhvc3RuYW1lICE9PSBwYXJzZWRQcm94eUhvc3RuYW1lO1xuICAgIH1cblxuICAgIGlmIChwYXJzZWRQcm94eUhvc3RuYW1lLmNoYXJBdCgwKSA9PT0gJyonKSB7XG4gICAgICAvLyBSZW1vdmUgbGVhZGluZyB3aWxkY2FyZC5cbiAgICAgIHBhcnNlZFByb3h5SG9zdG5hbWUgPSBwYXJzZWRQcm94eUhvc3RuYW1lLnNsaWNlKDEpO1xuICAgIH1cbiAgICAvLyBTdG9wIHByb3h5aW5nIGlmIHRoZSBob3N0bmFtZSBlbmRzIHdpdGggdGhlIG5vX3Byb3h5IGhvc3QuXG4gICAgcmV0dXJuICFzdHJpbmdFbmRzV2l0aC5jYWxsKGhvc3RuYW1lLCBwYXJzZWRQcm94eUhvc3RuYW1lKTtcbiAgfSk7XG59XG5cbi8qKlxuICogR2V0IHRoZSB2YWx1ZSBmb3IgYW4gZW52aXJvbm1lbnQgdmFyaWFibGUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZS5cbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHZhbHVlIG9mIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldEVudihrZXkpIHtcbiAgcmV0dXJuIHByb2Nlc3MuZW52W2tleS50b0xvd2VyQ2FzZSgpXSB8fCBwcm9jZXNzLmVudltrZXkudG9VcHBlckNhc2UoKV0gfHwgJyc7XG59XG5cbmV4cG9ydHMuZ2V0UHJveHlGb3JVcmwgPSBnZXRQcm94eUZvclVybDtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/proxy-from-env/index.js\n");

/***/ })

};
;