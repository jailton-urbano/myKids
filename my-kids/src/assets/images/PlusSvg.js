import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function PlusSVG({props, color}) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={17}
            fill="none"
            {...props}
        >
            <Path stroke={color ? "#3B7C88" : ''} strokeWidth={1} d="M8.5 1v15M1 8.5h15" />
        </Svg>
    )
}

