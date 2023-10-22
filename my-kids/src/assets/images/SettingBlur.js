import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"

/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default function SettingBlur(props) {
    return (
      <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={395}
      height={832}
      fill="none"
      {...props}
    >
      <G filter="url(#a)">
        <Path fill="#fff" d="M10 8h375v812H10z" />
        <Path stroke="#949494" d="M10.5 8.5h374v811h-374z" />
      </G>
      <Defs></Defs>
    </Svg>
)

}


