/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
import patchVnode from "./patchVnode"
import createElement from "./createElement"

function checkSameVndoe(a, b) {
    return a.sel == b.sel && a.key == b.key
}

export default function updateChildren(parentElm, oldCh, newCh) {
    let oldStartIdx = 0
    let newStartIdx = 0
    let oldEndIdx = oldCh.length - 1
    let newEndIdx = oldCh.length - 1
    let oldStartVnode = oldCh[0]
    let newStartVnode = newCh[0]
    let oldEndVnode = oldCh[oldEndIdx]
    let newEndVnode = newCh[newEndIdx]

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        // 新前与旧前
        if (checkSameVndoe(oldStartVnode, newStartVnode)) {
            console.log('新前与旧前')
            patchVnode(oldStartVnode, newStartVnode)
            oldStartVnode = oldCh[++oldStartIdx]
            newStartVnode = newCh[++newStartIdx]
        } else if (checkSameVndoe(oldEndVnode, newEndVnode)) {
            // 新后与旧后
            console.log('新后与旧后')
            patchVnode(oldStartVnode, newStartVnode)
            oldEndVnode = oldCh[--oldStartIdx]
            newEndVnode = newCh[--newStartIdx]
        } else if (checkSameVndoe(oldStartVnode, newEndVnode)) {
            // 新后与旧前
            console.log('新后与旧前')
            patchVnode(oldStartVnode, newEndVnode)
            // 移动节点
            parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling)
            oldStartVnode = oldCh[++oldStartIdx]
            newEndVnode = newCh[--newEndIdx]
        } else if (checkSameVndoe(newStartVnode, oldEndVnode)) {
            // 新前与旧后
            console.log('新前与旧后')
            patchVnode(newStartVnode, oldEndVnode)
            // 移动节点
            parentElm.insertBefore(oldEndVnode.elm, oldEndVnode.elm)
            oldEndVnode = oldCh[--oldEndIdx]
            newStartVnode = newCh[++newStartIdx]
        } else {
            // 都没有找到
        }
    }
    // 循坏结束后继续看看有没有剩余的节点
    if (newStartIdx <= newEndIdx) {

    }
}
