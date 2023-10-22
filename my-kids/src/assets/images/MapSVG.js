import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { getColorIcon } from "../../helpers/ModeHelpers"
export default function MapSVG({props, isActive, isDark}){
  return (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      d="M1.333 5v13.334L7.167 15l6.667 3.334L19.666 15V1.667L13.833 5 7.168 1.667 1.334 5zm5.834-3.333V15m6.667-10v13.333"
      strokeWidth={isActive ? 2 : 1}
      stroke={getColorIcon(isActive, isDark)}
    />
  </Svg>)
}