/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
import parse from "./parse"
var template = `<div>
        <h1> this is h1</h1>
        <ul>
            <li>this is li</li>
        </ul>
</div>
`
const ast = parse(template)
console.log(ast)

