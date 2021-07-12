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
const myVnode = h('a', { props: { href: '' } }, h('div', { class: { class1: true } }, 'this is div'))
console.log(myVnode)   //h函数返回一个vnode对象,用于patch渲染

// 让虚拟节点上树
const continer = document.getElementById('container')
patch(continer, myVnode)