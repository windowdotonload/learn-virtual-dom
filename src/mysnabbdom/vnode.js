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
export function vnode(sel, data, children, text, elm) {
    const key = data.key
    return { sel, data, children, text, elm, key }
}