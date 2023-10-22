import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function SvgComponent({props, isDark}) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="none"
            {...props}
        >
            <Path stroke={isDark ? '#fff' : "#000"} strokeWidth={2} d="m12.5 15-5-5 5-5" />
        </Svg>
    )
}

