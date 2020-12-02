module View.Plot.Junk.Title exposing (title)

import Day exposing (day)
import Plot as P exposing (JunkCustomizations)
import Svg exposing (Svg)
import Types exposing (..)
import View.Plot.Text as Text


title : String -> Float -> JunkCustomizations Msg
title titleString y =
    P.junk
        (svg titleString)
        1.1
        (y + 0.3 * day)


svg : String -> Svg msg
svg titleString =
    P.viewLabel
        (Text.styles [ Text.italic ] :: Text.attributes)
        titleString
