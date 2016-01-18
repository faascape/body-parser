var util = require("util")
var Transform = require("stream").Transform

var BytesCounter = exports.BytesCounter = function() {
  if (!(this instanceof BytesCounter)) {
    return new BytesCounter()
  }
  Transform.call(this)
  this.bytes = 0
}

util.inherits(BytesCounter, Transform)

BytesCounter.prototype._transform = function (chunk, encoding, cb) {
  this.bytes += chunk.length
  this.push(chunk)
  cb()
}


