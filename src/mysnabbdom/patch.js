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
        // 判断新旧节点是否相等
        if (oldVnode === newVnode) return
        // 判断newnode有没有text属性
        if (newVnode.text != undefined && (newVnode.children == undefined || newVnode.children.length == 0)) {
            // 新节点有text属性
            // 如果新节点有text属性，不论oldVnode中是否有children还是text，只要不同就替换掉
            if (newVnode.text != oldVnode.text) {
                oldVnode.elm.innerText = newVnode.text
            }
        } else {
            // 新节点没有text属性
            // 判断oldVnode有没有children属性
            if (oldVnode.children != undefined && oldVnode.children.length >) {
                // 新老都有children
            } else {
                // oldVnode 没有children
                oldVnode.elm.innerHTML = ''
                for (let item of newVnode.children) {
                    let dom = createElement(item)
                    oldVnode.elm.appendChild(dom)
                }
            }
        }
    } else {
        // 不是同一个节点暴力删除
        const productionNode = createElement(newVnode)
        if (oldVnode.elm.parentNode != undefined && productionNode) {
            oldVnode.elm.parentNode.insertBefore(productionNode, oldVnode.elm)
        }
        oldVnode.elm.parentNode.removeChild(oldVnode.elm)
    }
}