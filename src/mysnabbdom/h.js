/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
import { vnode } from './vnode.js'

//  h函数返回一个vnode对象,并不负责渲染,调用patch才最终渲染到dom树上
export default function (sel, data, c) {
    if (arguments.length !== 3) {
        console.warn("Missing parameter")
        return
    }
    if (typeof c == 'string' || typeof c == 'number') {
        return vnode(sel, data, undefined, c, undefined)
    } else if (Array.isArray(c)) {
        const flag = c.every(item => {
            return typeof item === 'object'
        })
        if (flag) {
            return vnode(sel, data, c, undefined, undefined)
        }
    } else if (typeof c === 'object' && c.hasOwnProperty('sel')) {
        return vnode(sel, data, c)
    } else {
        console.error('错啦,饮茶先啦,干咩')
    }
}