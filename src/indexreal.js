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

const res = h('div', { class: 'class' }, [
    h('a', { class: 'a' }, 'this is a'),
    h('a', { class: 'a' }, 'this is a'),
])

console.log(res)