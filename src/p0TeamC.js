/*! p0TeamC v0.0.0 - MIT license */
'use strict';

var p0TeamC = function (sequence) {
  if(sequence.constructor !== Array) {
    return undefined;
  }

  total = 0;

  for(var i = 0; i < sequence.length; ++i) {
    sequence[i] = Modulo_3(Cube(sequence[i]));
  }

  sequence = modulo_first(sequence);

  for(var i = 0; i < sequence.length; ++i) {
    sequence[i] = running_total(sequence[i]);
  }

  sequence = decrement_if_less_than_first(sequence);

  sequence = diff(sequence);

  for(var i = 0; i < sequence.length; ++i) {
    sequence[i] = fact(sequence[i]);
  }

  for(var i = 0; i < sequence.length; ++i){
    sequence[i] = fizzbuzz(collatz(xor_21(sequence[i])));
  }

  return sequence;
}
