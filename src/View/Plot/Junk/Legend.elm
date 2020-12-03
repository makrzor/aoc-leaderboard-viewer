module View.Plot.Junk.Legend exposing (legend)

import Colors exposing (colorsList)
import Day exposing (day)
import Plot as P exposing (JunkCustomizations)
import Svg as S exposing (Svg)
import Types exposing (..)
import View.Date as Date
import View.Member as Member
import View.Plot.Text as Text


legend : Data -> JunkCustomizations Msg
legend data =
    P.junk
        (svg data)
        1.1
        (Date.max data - 0.76 * day)


svg : Data -> Svg msg
svg data =
    let
        sortedData =
            data |> List.sortBy (.localScore >> negate)
    in
    S.g []
        (List.map3 memberSvg
            (List.map Member.description sortedData)
            (List.indexedMap yOffset sortedData)
            (colorsList (List.length data))
        )


yOffset : Int -> Member -> Float
yOffset position _ =
    toFloat position * 13.5


memberSvg : String -> Float -> String -> Svg msg
memberSvg memberString yOffset_ color =
    P.viewLabel
        (Text.styles [ Text.italic, Text.color color ]
            :: Text.yOffset yOffset_
            :: Text.attributes
        )
        memberString
