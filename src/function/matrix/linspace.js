'use strict'

function factory (type, config, load, typed) {
  /** 
   * Generate an array with evenly spaced elements over a specified interval. 
   * 
   * Syntax:
   * 
   *    math.linspace(start, end [, num=100])
   * 
   * Examples:
   * 
   *    math.linspace()
   *    math.linspace()
   *    math.linspace()
   * 
   * See also:
   * 
   *    range
   * 
   * @param   {number}  start     Starting number of interval.
   * @param   {number}  end       Last number of interval.
   * @param   {number}  num       Number of samples to generate. Default is 100. Must be non-negative.
   * @param   {boolean} endpoint  If True, `end` is the last sample. Otherwise it is not included. Default is True.
   * @return  {Array}             Returns an array of evenly spaced numbers over a specified interval.
  */

  const linspace = typed('linspace', {
    'number, number': function (start, end) {

    },
    'number, number, number': function(start, end, num) {

    },
    'BigNumber, BigNumber': function (start, end) {

    },
    'BigNumber, BigNumber, BigNumber': function(start, end, num) {

    }
  }

  )

  linspace.toTex = undefined // use default template

  return linspace

  function _out (arr) {
    return config.matrix === 'Array' ? arr : matrix(arr)
  }

  function _linspace(start, end, num) {
    
  }
}


exports.name = 'linspace'
exports.factory = factory