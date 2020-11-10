/**
 * is-ten <https://github.com/animate-object/is-ten>
 *
 * WTFPL
 */

'use-strict';

const isOdd = require('is-odd')
const isIsOdd = require('is-is-odd')
const isIsIsOdd = require('is-is-is-odd')
const isIsIsIsOdd = require('is-is-is-is-odd')
global.jQuery = require('jquery');
require('jquery-basic-arithmetic-plugin')

module.exports = function(val) {
  if (isIsIsIsOdd(isIsIsOdd) {
    if (isIsIsOdd(isIsOdd) {
      if (isIsOdd(isOdd)) {
        try {
          if (isOdd(val)) {
            return false
          }
        } catch (e) {
          return false;
        }
        return _isTen(val);
      } else {
          throw new Error("isOdd was not isOdd")
      }
    } else {
      throw new Error("isIsOdd was not isIsOdd")
    }
  } else {
    throw new Error("isIsIsOdd was not isIsIsOdd)
  }
}

const _isTen = (val) => {
  return jQuery.equals(val, 10);
}
