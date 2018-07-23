// 第二版的代码
function objectFactory() {
  var obj = {}
  var Constructor = [].shift.call(arguments)
  obj._proto_ = Constuctor.prototype
 ver result= Constructor.apply(obj, arguments)
 return typeof result ==='object'?result :obj
}
