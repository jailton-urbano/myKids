import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default function LogoSettingTop(props){
    return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={116}
          height={37}
          fill="none"
          {...props}
        >
          <G filter="url(#a)">
            <Path
              fill="#3B7C88"
              d="m9.596 26.72 4.791-24.144L22.2 20.038l8.09-17.462 4.304 24.144h-3.523l-2.196-13.552-6.733 14.6-6.546-14.6L13.15 26.72H9.596z"
            />
          </G>
          <G filter="url(#b)">
            <Path
              fill="#3B7C88"
              d="M43.306 24.086 36.85 12.55h3.846l4.393 8.147 4.098-8.147h3.744L41.493 34.432H37.7l5.605-10.346z"
            />
          </G>
          <G filter="url(#c)">
            <Path
              fill="#ED8347"
              d="M61.338 2.897v13.884l3.384-3.326V2.897h-3.384zm6.328 16.658 6.348-6.057h-4.536l-4.756 4.672-3.384 3.33v6.437h3.384v-5.56l.528-.531 4.843 6.091h4.39l-6.817-8.382z"
            />
          </G>
          <G filter="url(#d)">
            <Path
              fill="#ED8347"
              d="M76.662 13.498v14.44h3.378v-14.44h-3.378zm3.242-7.518a2.138 2.138 0 0 0-1.563-.638 2.227 2.227 0 0 0-1.541.634 2.17 2.17 0 0 0-.654 1.516 2.159 2.159 0 0 0 .642 1.55 2.214 2.214 0 0 0 1.567.646 2.12 2.12 0 0 0 1.549-.639 2.109 2.109 0 0 0 .647-1.543 2.038 2.038 0 0 0-.647-1.526z"
            />
          </G>
          <G filter="url(#e)">
            <Path
              fill="#ED8347"
              d="M95.1 2.897v12.276c-1.353-1.38-2.884-2.071-4.59-2.073a6.336 6.336 0 0 0-2.707.543 6.26 6.26 0 0 0-2.206 1.638c-1.315 1.441-1.971 3.24-1.97 5.396 0 2.196.656 4.04 1.97 5.511a6.432 6.432 0 0 0 2.249 1.622 6.51 6.51 0 0 0 2.733.53c1.688 0 3.19-.646 4.52-1.926v1.512h3.4V2.897h-3.4zm-.945 21.201a3.914 3.914 0 0 1-3.032 1.271 3.75 3.75 0 0 1-1.612-.332 3.706 3.706 0 0 1-1.307-.99c-.749-.87-1.124-1.995-1.126-3.375a4.794 4.794 0 0 1 1.16-3.26 3.74 3.74 0 0 1 1.302-.976 3.785 3.785 0 0 1 1.598-.336 3.866 3.866 0 0 1 1.652.312c.52.224.983.56 1.356.982a4.879 4.879 0 0 1 1.16 3.347 4.887 4.887 0 0 1-1.151 3.357z"
            />
          </G>
          <G filter="url(#f)">
            <Path
              fill="#ED8347"
              d="M111.273 20.92c-.618-.638-1.827-1.34-3.616-2.104-1.302-.54-1.952-1.086-1.952-1.64a1.01 1.01 0 0 1 .328-.779c.215-.2.501-.31.797-.306.647 0 1.195.447 1.639 1.334l2.789-1.465c-.907-1.904-2.305-2.863-4.17-2.863a4.608 4.608 0 0 0-3.248 1.234c-.426.398-.763.88-.988 1.415a4.07 4.07 0 0 0-.317 1.69c-.032.838.24 1.66.766 2.317.397.478 1.093.947 2.067 1.43.354.173.705.333 1.042.488.336.154.678.323 1.02.492.885.51 1.32 1.065 1.32 1.657 0 1.034-.58 1.543-1.708 1.543a2.104 2.104 0 0 1-1.476-.572 6.19 6.19 0 0 1-.914-1.317l-2.882 1.317c1.022 2.368 2.762 3.55 5.22 3.547a5.34 5.34 0 0 0 3.662-1.334 4.52 4.52 0 0 0 1.174-1.578c.27-.605.403-1.26.389-1.92-.011-1.074-.316-1.939-.942-2.585z"
            />
          </G>
          <Defs></Defs>
        </Svg>
      )
} 


