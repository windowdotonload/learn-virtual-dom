/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
    h,
} from "snabbdom";

// 创建出patch函数
const patch = init([classModule, propsModule, styleModule, eventListenersModule])

// 创建虚拟节点
const myVnode = h('div', { props: { href: '' } }, [
    h('div', 'this is div-sub1'),
    h('div', 'this is div-sub2')
])
console.log(myVnode)   //h函数返回一个vnode对象,用于patch渲染
const myVnode1 = h('div', { props: { href: '' } }, [
    h('div', 'this is div-sub1'),
    h('div', 'this is div-sub3'),
    h('div', 'this is div-sub2')
])

// 让虚拟节点上树
const btn = document.getElementById('btn')
const continer = document.getElementById('container')
btn.onclick = () => {
    patch(myVnode, myVnode1)
}
patch(continer, myVnode)