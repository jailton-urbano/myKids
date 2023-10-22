import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function BurgerMenuSVG({props, isDark}) {
    return(
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        fill="none"
        {...props}
    >
        <Path
        stroke={!isDark ? "#000" : '#fff'}
        strokeWidth={2}
        d="M3.125 12.5h18.75M3.125 6.25H12.5m-9.375 12.5H12.5"
        />
    </Svg>
)}