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
import createElement from "./createElement"
import updateChildren from "./updateChildre"
export default function patchVnode(oldVnode, newVnode) {
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
        if (oldVnode.children != undefined && oldVnode.children.length > 0) {
            // 新老都有children
            updateChildren(oldVnode.elm, oldVnode.children, newVnode.children)
        } else {
            // oldVnode 没有children
            oldVnode.elm.innerHTML = ''
            for (let item of newVnode.children) {
                let dom = createElement(item)
                oldVnode.elm.appendChild(dom)
            }
        }
    }
}