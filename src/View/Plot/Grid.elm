module View.Plot.Grid exposing (date, dayStar)

import Colors exposing (colors)
import Day exposing (day, startOfAoC)
import Plot as P
    exposing
        ( Grid
        , GridLineCustomizations
        , Point
        )
import Svg.Attributes as SA


dayStar : Maybe Point -> Float -> Grid
dayStar hover maxDayStar =
    gridX hover 1.0 maxDayStar 0.5


date : Float -> Grid
date maxDate =
    gridY startOfAoC maxDate day


gridX :
    Maybe Point
    -> Float
    -> Float
    -> Float
    -> Grid
gridX hover min max delta =
    grid (gridLineX hover) min max delta


gridY :
    Float
    -> Float
    -> Float
    -> Grid
gridY min max delta =
    grid gridLineY min max delta


grid :
    (Float -> GridLineCustomizations)
    -> Float
    -> Float
    -> Float
    -> Grid
grid gridLineFn min max delta =
    P.customGrid
        (\summary ->
            Day.findTicks min max delta
                |> List.map gridLineFn
        )


gridLineY : Float -> GridLineCustomizations
gridLineY tick =
    { attributes = [ SA.stroke colors.grey ]
    , position = tick
    }


gridLineX : Maybe Point -> Float -> GridLineCustomizations
gridLineX hover tick =
    { attributes =
        [ SA.stroke <|
            if isHovering tick hover then
                colors.darkGrey

            else
                colors.grey
        ]
    , position = tick
    }


isHovering : Float -> Maybe Point -> Bool
isHovering tick hover =
    hover
        |> Maybe.map (\{ x, y } -> x == tick)
        |> Maybe.withDefault False
