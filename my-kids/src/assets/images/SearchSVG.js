import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function SearchSVG ({props, isDark}) {
    return (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      stroke={isDark ? "#fff" : '#000'}
      d="M11.458 19.792a8.333 8.333 0 1 0 0-16.667 8.333 8.333 0 0 0 0 16.667zm10.417 2.083-4.531-4.531"
    />
  </Svg>
)}

