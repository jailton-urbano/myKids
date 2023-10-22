import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { getColorIcon } from "../../helpers/ModeHelpers"
export default function BookSVG ({props, isActive, width, height, isDark}){

  return (<Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        {...props}
      >
        <Path strokeWidth={isActive ? 2 : 1} stroke={getColorIcon(isActive, isDark)} d="M3.833 16.25a2.083 2.083 0 0 1 2.084-2.083h11.25" />
        <Path
          strokeWidth={isActive ? 2 : 1}
          stroke={getColorIcon(isActive, isDark)}
          d="M5.917 1.667h11.25v16.667H5.917a2.083 2.083 0 0 1-2.083-2.084V3.75a2.083 2.083 0 0 1 2.083-2.083z"
        />
      </Svg>
    )
}

