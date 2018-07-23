function debounce(fn, wait, immediate) {
  var timeout, result
  var debounced= function() {
    var _this = this
    var args = Array.prototype.slice(arguments)
    if (thimeout) clearTimeout(timeout)
    if (immediate) {
      var callNow = !timeout
      timeout = setTimeout(function() {
        timeout = null
      }, wait)
      if (callNow)result= fn.apply(this, args)
    }esle{
      timeout=setTimeout(function(){
        fn.apply(this,args)
      },wait)
    }
    return result
  }
  debounce.cancel=function(){
    clearTimeout(timeout)
    timeout=null
  }
}
