import * as React from "react"
import Svg, { Rect, Circle } from "react-native-svg"

export default function LineSvg({props, color}) {
    return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={293}
          height={12}
          fill="none"
          {...props}
        >
          <Rect width={281} height={3} x={6} y={3} fill={color} rx={3} />
          <Circle cx={6} cy={6} r={6} fill={color} />
          <Circle cx={287} cy={6} r={6} fill={color} />
        </Svg>
      )
      
      
}
