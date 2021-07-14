/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
import { vnode } from "./vnode";
import createElement from './createElement'
export default function (oldVnode, newVnode) {
    // 判断是真实的Dom还是虚拟Node
    if (oldVnode.sel == '' || oldVnode.sel == undefined) {
        // 将真实的Dom包装为虚拟node
        oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode)
    }
    // 判断oldvnode和newVnode是否是同一个节点
    if (oldVnode.key == newVnode.key && oldVnode.sel == newVnode.sel) {
        // 同一个节点进行精细比较
    } else {
        // 不是同一个节点暴力删除
        console.log('ok')
        const productionNode = createElement(newVnode)
        // if (oldVnode.elm.parentNode != undefined && productionNode) {
        //     oldVnode.elm.parentNode.insertBefore(productionNode, oldVnode)
        // }
    }
}