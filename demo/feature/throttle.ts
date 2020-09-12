function throttle(func, wait, options) {
  var timeout,
    args,
    preTime = 0
  _this
  function later() {
    preTime = options.leading === false ? 0 : +new Date()
    timeout = null
    func.apply(_this, args)
    if (!timeout) _this = args = null
  }
  function throtted() {
    _this = this
    var now = +new Date()
    if (!preTime && options.leading === false) preTime = now
    var remaining = wait - (now - preTime)
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      preTime = now
      func.apply(this, args)
      if (!timeout) args = _this = null
    } else if (!timeout && options.tariling === true) {
      timeout = setTimeout(later, remaining)
    }
  }
  throttled.cancel = function() {
    clearTimeout(timeout)
    previous = 0
    timeout = null
    if (!timeout) args = _this = null
  }

  return throttled
}
