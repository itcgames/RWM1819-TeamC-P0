/*! p0TeamC v0.0.0 - MIT license */
'use strict';

var p0TeamC = function (sequence) {
  if(sequence.constructor !== Array) {
    return undefined;
  }
  for(var i = 0; i < sequence.length; ++i) {
    sequence[i] = running_total(Modulo_3(Cube(sequence[i])));
  }
  return sequence;
}
