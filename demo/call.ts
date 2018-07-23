call
Function.prototype.call = function(context) {
  var context = context || window
  context.fn = this
  var args = []
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('argsments[' + i + ']')
  }
  var result = context.fn(eval('context.fn(' + args + ')'))
  delete context.fn
  return result
}
