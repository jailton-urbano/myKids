import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { getColorIcon } from "../../helpers/ModeHelpers"

export default function NotifBellSVG({props, isDark}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <Path
        stroke={getColorIcon(false, isDark)}
        strokeWidth={2}
        d="M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9zm-4.27 13a1.999 1.999 0 0 1-3.46 0"
      />
    </Svg>
  )
}

