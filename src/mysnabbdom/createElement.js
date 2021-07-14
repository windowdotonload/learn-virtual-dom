/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
// 始终要注意h函数返回的只是一个vnode对象，实际转化为dom依靠createElement
// h并不会递归，createElement递归了
// 创建节点不插入，插入在patch中进行
export default function createElement(vnode) {
    // 把虚拟节点插入
    let domNode = document.createElement(vnode.sel)
    if (vnode.text != '' && (vnode.children == undefined || vnode.children.length == 0)) {
        domNode.innerText = vnode.text
    } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
        for (let item of vnode.children) {
            let ch = item
            let chDom = createElement(ch)
            domNode.appendChild(chDom)
        }
    } else if (!Array.isArray(vnode.children) && typeof vnode.children == 'object') {
        domNode.appendChild(createElement(vnode.children))
    }
    vnode.elm = domNode
    return vnode.elm
}
