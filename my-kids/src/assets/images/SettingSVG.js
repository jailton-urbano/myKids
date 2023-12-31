import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function SettingSVG({props, isDark}){
    return (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      stroke={isDark ? '#fff' :'#000'}
      d="M7.5 9.375a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75z"
    />
    <Path
      stroke={isDark ? '#fff' :'#000'}
      d="M12.125 9.375a1.032 1.032 0 0 0 .206 1.137l.038.038a1.25 1.25 0 1 1-1.769 1.769l-.037-.038a1.032 1.032 0 0 0-1.138-.206 1.031 1.031 0 0 0-.625.944v.106a1.25 1.25 0 0 1-2.5 0v-.056a1.031 1.031 0 0 0-.675-.944 1.032 1.032 0 0 0-1.138.206l-.037.038A1.25 1.25 0 1 1 2.681 10.6l.038-.037a1.031 1.031 0 0 0 .206-1.138 1.031 1.031 0 0 0-.944-.625h-.106a1.25 1.25 0 0 1 0-2.5h.056a1.031 1.031 0 0 0 .944-.675 1.031 1.031 0 0 0-.206-1.138L2.63 4.45A1.25 1.25 0 1 1 4.4 2.681l.037.038a1.031 1.031 0 0 0 1.138.206h.05a1.031 1.031 0 0 0 .625-.944v-.106a1.25 1.25 0 0 1 2.5 0v.056a1.031 1.031 0 0 0 .625.944 1.031 1.031 0 0 0 1.137-.206l.038-.038A1.25 1.25 0 1 1 12.319 4.4l-.038.037a1.032 1.032 0 0 0-.206 1.138v.05a1.031 1.031 0 0 0 .944.625h.106a1.25 1.25 0 0 1 0 2.5h-.056a1.03 1.03 0 0 0-.944.625z"
    />
  </Svg>)
}

