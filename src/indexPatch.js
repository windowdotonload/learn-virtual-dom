/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
import h from './mysnabbdom/h.js'
import patch from './mysnabbdom/patch.js'

const myVnode1 = h('h1', {}, '你好')
const container = document.getElementById('container')
console.log('this iscontiner', container)
patch(container, myVnode1)


