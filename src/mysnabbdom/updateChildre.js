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
        // 首先判断是否为undefined，略过加上undefined标记的
        if (oldStartVnode == undefined) {
            oldStartVnode = oldCh[++oldStartIdx]
        } else if (oldEndVnode == undefined) {
            oldEndVnode = oldCh[--oldEndIdx]
        } else if (newStartVnode == undefined) {
            newStartVnode = newCh[++newStartIdx]
        } else if (newEndVnode == undefined) {
            newEndVnode = newCh[--newEndIdx]
        } else if (checkSameVndoe(oldStartVnode, newStartVnode)) {
            // 新前与旧前
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
            parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm)
            oldEndVnode = oldCh[--oldEndIdx]
            newStartVnode = newCh[++newStartIdx]
        } else {
            // 都没有找到
            let keyMap = undefined
            if (!keyMap) {
                keyMap = {}
                for (let i = oldStartIdx; i < oldEndIdx; i++) {
                    const key = oldCh[i].key
                    if (key != undefined) {
                        keyMap[key] = i
                    }
                }
                console.log(keyMap)
            }
            const idxInOld = keyMap[newStartVnode.key]  // {A:0,B:1}  key-index
            if (idxInOld == undefined) {
                // 如果为undefined代表为全新的项直接插入
                parentElm.insertBefore(createElement(newStartVnode), oldStartVnode.elm)
            } else {
                // 如果不是undefined则代表要移动
                const elmToMove = oldCh[idxInOld]
                if (elmToMove) {
                    patchVnode(elmToMove, newStartVnode)
                    oldCh[idxInOld] = undefined
                    // 调用insertBefore也可以实现移动
                    parentElm.insertBefore(elmToMove.elm, oldStartVnode.elm)
                }
            }
            newStartVnode = newCh[++newStartIdx]
        }
    }
    // 循坏结束后继续看看有没有剩余的节点
    if (newStartIdx <= newEndIdx) {
        // newVnode没有结束则添加节点
        const before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm

        for (let i = newStartIdx; i <= newEndIdx; i++) {
            // 如果before为null，那么自动添加到尾部
            parentElm.insertBefore(createElement(newCh[i]), before)
        }
    } else if (oldStartIdx <= oldEndIdx) {
        // oldVnode没有结束则删除节点
        for (let i = oldStartIdx; i < oldEndIdx; i++) {
            if (oldCh[i].elm) {
                parentElm.removeChild(oldCh[i].elm)
            }
        }
    }
}
