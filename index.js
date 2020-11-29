// module.exports.template = function () {};


// square JSPlus.square(n)
module.exports.template = function (n) { return n * n };

// sleep JSPlus.sleep(ms)
module.exports.sleep = function (milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
};

// separator JSPlus.separator(separator)
module.exports.separator = function (separator) {
   var result = ''; // initialize list
   var i;
   // iterate through arguments
   for (i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
   }
   return result;
};
