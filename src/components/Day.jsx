import React from 'react'

export default props => <>
    <li className="flora passado odd">
        <span className="count">{props.count}</span> <span className="date">{props.children}</span>
    </li>
</>