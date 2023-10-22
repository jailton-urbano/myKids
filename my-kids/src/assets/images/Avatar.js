import * as React from "react"
import Svg, { G, Rect, Defs, Pattern, Use } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default function AvatarSVG(props){
    return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={48}
          height={48}
          fill="none"
          {...props}
        >
          <G filter="url(#a)">
            <Rect width={40} height={40} x={4} fill="url(#b)" rx={20} />
          </G>
          <Defs>
            <Pattern
              id="b"
              width={1}
              height={1}
              patternContentUnits="objectBoundingBox"
            >
              <Use transform="scale(.002)" />
            </Pattern>
          </Defs>
        </Svg>
      )
} 

