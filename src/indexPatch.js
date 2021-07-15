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

const myVnode1 = h('h1', {}, [
    h('div', { key: 'A' }, 'this is sub-div1======'),
    h('div', { key: 'B' }, 'this is sub-div2------'),
])
const myVnode2 = h('h1', {}, [
    h('div', { key: 'B' }, 'this is sub-div2'),
    h('div', { key: 'A' }, 'this is sub-div1'),
])
const container = document.getElementById('container')
patch(container, myVnode1)
document.getElementById('btn').addEventListener('click', () => {
    console.log("this is changeClick")
    patch(myVnode1, myVnode2)
})

