import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function LogoutSVG({props, strokeColor}){
    return (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <Path
      d="M3.75 8.75H2.083a.833.833 0 0 1-.833-.833V2.083a.833.833 0 0 1 .833-.833H3.75m2.917 5.834L8.75 5 6.667 2.917M8.75 5h-5"
      stroke={strokeColor}
    />
  </Svg>
)}

