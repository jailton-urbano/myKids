import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { getColorIcon } from "../../helpers/ModeHelpers"
export default function CalendarSVG({props, isActive, isDark}) {

  return (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      strokeWidth={isActive ? 2 : 1}
      stroke={getColorIcon(isActive, isDark)}
      d="M16.333 3.333H4.667C3.747 3.333 3 4.079 3 5v11.666c0 .92.746 1.667 1.667 1.667h11.666c.92 0 1.667-.746 1.667-1.667V5c0-.92-.746-1.667-1.667-1.667zm-2.499-1.666V5M7.167 1.667V5M3 8.333h15"
    />
  </Svg>)
}
