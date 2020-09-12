Function.prototype.bind = function(context: any) {
  var args = Array.prototype.call(arguments, 1)
  var _this = this
  function Gbound() {}
  function Bound() {
    var boundArgs = Array.prototype.call(arguments)
    return _this.apply(this instanceof Gbound ? this : context, args.concat(boundArgs))
  }
  Gbound.prototype = this.prototype
  Bound.prototype = new Gbound()
  return Bound
}
