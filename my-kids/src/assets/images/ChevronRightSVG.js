import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function ChevronRightSVG({props, isDark, style, color}) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="none"
            {...props}
            {...style}
        >
            <Path stroke={color ? color : isDark ? '#fff' : "#000"} strokeWidth={2} d="m7.5 5 5 5-5 5" />
        </Svg>
    )
}