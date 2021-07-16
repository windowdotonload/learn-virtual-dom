/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
export default function parse(template) {
    let index = 0
    let rest = ''
    let tagReg = /^\<([a-z]+[1-6]?)(\s[^\<]+)?\>/
    let tagEndReg = /^\<\/([a-z]+[1-6]?)\>/
    let wordRegExp = /^([^\<]+)\<\/([a-z]+[1-6]?)\>/
    // 准备两个栈
    let stack1 = []
    let stack2 = [{ children: [] }]
    while (index < template.length - 1) {
        // 识别遍历到的是不是一个开始标签
        rest = template.substring(index)
        if (tagReg.test(rest)) {
            let tag = rest.match(tagReg)[1]
            let attrString = rest.match(tagReg)[2]
            const attrStringLength = rest.match(tagReg)[2] == undefined ? 0 : attrString.length
            console.log(tag)
            // 将开始标记推入栈1中
            stack1.push(tag)
            // 将空数组推入栈2中
            stack2.push({ tag: tag, children: [] })
            index += tag.length + 2
        } else if (tagEndReg.test(rest)) {
            let tag = rest.match(tagEndReg)[1]

            console.log(tag)
            if (tag == stack1[stack1.length - 1]) {
                let pop_tag = stack1.pop()
                let pop_arr = stack2.pop()
                if (stack2.length > 0) {
                    stack2[stack2.length - 1].children.push(pop_arr)
                }
            } else {
                throw new Error('标签没有封闭')
            }
            console.log(stack1)
            index += tag.length + 3
        } else if (wordRegExp.test(rest)) {
            let word = rest.match(wordRegExp)[1]
            if (!/^\s+$/.test(word)) {
                // 文字不全为空的时候操作
                // 推入stack2栈顶
                console.log(word)
                stack2[stack2.length - 1].children.push({ text: word, type: 3 })
            }
            index += word.length
        }
        else {
            // 标签中的文字
            index++
        }
    }
    return stack2[0].children[0]
}