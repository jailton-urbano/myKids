import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default function LogoBarSVG(props){
    return (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={156}
    height={156}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#3B7C88"
        d="m70.134 88.055 15.21-14.72H74.49l-11.403 11.35-8.109 8.088v15.647h8.109V94.91l1.294-1.294 11.58 14.804h10.53L70.133 88.055z"
      />
    </G>
    <G filter="url(#b)">
      <Path fill="#3B7C88" d="M63.075 0v73.207l-8.108 8.108V0h8.108z" />
    </G>
    <G filter="url(#c)">
      <Path
        fill="#ED8347"
        d="M99.481 55.08a5.11 5.11 0 0 0-3.748-1.56 5.316 5.316 0 0 0-5.253 5.23 5.307 5.307 0 0 0 5.3 5.335 5.006 5.006 0 0 0 3.71-1.56 5.116 5.116 0 0 0 1.559-3.748 5.004 5.004 0 0 0-1.568-3.697z"
      />
    </G>
    <G filter="url(#d)">
      <Path
        fill="#ED8347"
        d="M99.809 108.413V156H91.7v-47.587h.008V73.336h8.088v35.077h.012z"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
    }


