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
const myVnode2 = h('h1', {}, 'this is h1')
const container = document.getElementById('container')
patch(container, myVnode1)
document.getElementById('btn').addEventListener('click', () => {
    console.log("this is changeClick")
    patch(myVnode1, myVnode2)
})

