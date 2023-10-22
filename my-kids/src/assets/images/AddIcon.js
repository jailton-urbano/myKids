import * as React from "react"
import Svg, { G, Path, Rect, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default function AddIcon(props) {
    return (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={46}
    height={46}
    fill="none"
    {...props}
  >
    <G stroke="#499DA7" filter="url(#a)">
      <Path d="M23.375 15v8.75M19 19.375h8.75" x={-8} y={-4}/>
      <Rect width={30} height={30} x={0.5} y={0.5} rx={14.5} />
    </G>
    <Defs></Defs>
  </Svg>
)}