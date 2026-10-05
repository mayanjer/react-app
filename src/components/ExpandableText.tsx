
import {useState} from 'react'
interface Props {
    children: string;
    maxChars?:number

}



function ExpandableText({ children, maxChars=100 }: Props) {
    const [expanded, setExpanded] = useState(false)
    if (children.length <= maxChars) return <h1>{children}</h1>
    const text = expanded ? children : children.substring(0, maxChars)
    return <p>{ text }...<button onClick = {()=>{setExpanded(!expanded)}}>{expanded ? "less" : "more"}</button></p>

} 
export default ExpandableText;
