import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import { getColorIcon } from "../../helpers/ModeHelpers"
export default function HomeSVG({props, isActive, isDark}) {
    return(
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={20}
        fill="none"
        {...props}
    >
        <G filter="url(#a)">
        <Path
            strokeWidth={isActive ? 2 : 1}
            stroke={getColorIcon(isActive, isDark)}
            d="m3 7.5 7.5-5.833L18 7.5v9.167a1.667 1.667 0 0 1-1.667 1.667H4.667A1.667 1.667 0 0 1 3 16.667V7.5z"
        />
        </G>
        <G filter="url(#b)">
        <Path strokeWidth={isActive ? 2 : 1}
            stroke={getColorIcon(isActive, isDark)} d="M8 18.333V10h5v8.333" />
        </G>
        <Defs></Defs>
    </Svg>
    )
}
