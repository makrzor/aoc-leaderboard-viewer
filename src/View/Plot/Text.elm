module View.Plot.Text exposing (..)

import Colors exposing (colors)
import Svg exposing (Attribute)
import Svg.Attributes as SA


attributes : List (Attribute msg)
attributes =
    [ SA.fill colors.darkGrey
    , SA.fontSize "10px"
    ]


italic : String
italic =
    "font-style: italic"


alignRight : String
alignRight =
    "text-anchor: end"


color : String -> String
color colorString =
    "fill: " ++ colorString


yOffset : Float -> Attribute msg
yOffset offset =
    SA.y (String.fromFloat offset ++ "px")


styles : List String -> Attribute msg
styles s =
    s
        |> String.join ";"
        |> SA.style
