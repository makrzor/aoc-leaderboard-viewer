module View.DayStar exposing
    ( format
    , hintLabel
    , label
    )

import DayStar
import Plot as P
    exposing
        ( LabelCustomizations
        , Point
        )
import Types exposing (..)
import View.Plot.Text as Text


label : Float -> LabelCustomizations
label position =
    { position = position
    , view =
        position
            |> DayStar.fromFloat
            |> format
            |> P.viewLabel Text.attributes
    }


hintLabel : Maybe Point -> (Point -> Float) -> List LabelCustomizations
hintLabel hover toValue =
    hover
        |> Maybe.map (\point -> [ label (toValue point) ])
        |> Maybe.withDefault []


format : ( Day, Star ) -> String
format ( day, star ) =
    String.fromInt day ++ "-" ++ String.fromInt star
