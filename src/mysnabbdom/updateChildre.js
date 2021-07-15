/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
import patchVnode from "./patchVnode"
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
            patchVnode(oldStartVnode, newStartVnode)
            oldStartVnode = oldCh[++oldStartIdx]
            newStartVnode = newCh[++newStartIdx]
        } else if (checkSameVndoe(oldEndVnode, newEndVnode)) {
            // 新后与旧后
            patchVnode(oldStartVnode, newStartVnode)
            oldStartVnode = oldCh[--oldStartIdx]
            newStartVnode = newCh[--newStartIdx]
        }
    }
}
