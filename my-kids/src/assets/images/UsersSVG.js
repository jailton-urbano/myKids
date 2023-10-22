import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { getColorIcon } from "../../helpers/ModeHelpers"
export default function UserSVG({props, isActive, isDark}){
return(<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      d="M14.667 17.5v-1.667a3.333 3.333 0 0 0-3.333-3.333H4.667a3.333 3.333 0 0 0-3.333 3.333V17.5M8 9.167A3.333 3.333 0 1 0 8 2.5a3.333 3.333 0 0 0 0 6.667zM19.666 17.5v-1.667a3.333 3.333 0 0 0-2.5-3.225m-3.332-10a3.334 3.334 0 0 1 0 6.459"
      strokeWidth={isActive ? 2 : 1}
      stroke={getColorIcon(isActive, isDark)}
    />
  </Svg>)
}