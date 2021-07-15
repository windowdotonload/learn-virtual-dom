/*
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
 */
/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
import h from './mysnabbdom/h.js'
import patch from './mysnabbdom/patch.js'

const myVnode1 = h('ul', {}, [
    h('li', { key: 'A' }, 'a'),
    h('li', { key: 'B' }, 'b'),
    h('li', { key: 'C' }, 'c'),
    h('li', { key: 'D' }, 'd'),
    h('li', { key: 'E' }, 'e'),
])
const myVnode2 = h('ul', {}, [
    h('li', { key: 'Q' }, 'Q'),
    h('li', { key: 'A' }, 'a'),
    h('li', { key: 'B' }, 'b'),
    h('li', { key: 'C' }, 'c'),
    h('li', { key: 'E' }, 'e'),
    h('li', { key: 'D' }, 'd'),
    h('li', { key: 'qq' }, 'qq'),
])
const container = document.getElementById('container')
patch(container, myVnode1)
document.getElementById('btn').addEventListener('click', () => {
    console.log("this is changeClick")
    patch(myVnode1, myVnode2)
})

