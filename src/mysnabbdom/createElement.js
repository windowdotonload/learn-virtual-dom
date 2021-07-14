/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
// 创建节点不插入，插入在patch中进行
export default function createElement(vnode) {
    // 把虚拟节点插入
    let domNode = document.createElement(vnode.sel)
    if (vnode.text != '' && (vnode.children == undefined || vnode.children.length == 0)) {
        domNode.innerText = vnode.text
        vnode.elm = domNode
    } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
        console.log('ok')
        for (let item of vnode.children) {
            let ch = item
            console.log(ch)
            let chDom = createElement(ch)
        }
    }

    return vnode.elm
}
