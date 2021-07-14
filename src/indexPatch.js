/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
import h from './mysnabbdom/h.js'
import patch from './mysnabbdom/patch.js'

const myVnode1 = h('h1', {}, [
    h('div', {}, 'this is sub-div1'),
    h('div', {}, 'this is sub-div1'),
    h('div', {}, h('div', {}, 'this is div-s-sub'))
])
const container = document.getElementById('container')
patch(container, myVnode1)


