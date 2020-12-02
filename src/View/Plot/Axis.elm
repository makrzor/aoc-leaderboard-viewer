module View.Plot.Axis exposing
    ( horizontalAxis
    , verticalAxis
    )

import Colors exposing (colors)
import Day exposing (..)
import DayStar
import Plot as P
    exposing
        ( Axis
        , AxisSummary
        , LabelCustomizations
        , Point
        )
import Svg.Attributes as SA
import Time exposing (Zone)
import View.Date as Date
import View.DayStar as DayStar
import View.Plot.Text as Text


horizontalAxis : Maybe Point -> Float -> Axis
horizontalAxis hover maxDayStar =
    axis
        True
        hover
        ( 1.0, maxDayStar )
        .x
        (DayStar.fromFloat >> DayStar.format)
        (always (findTicks 1.0 maxDayStar 1.0))


verticalAxis : Zone -> Bool -> Maybe Point -> Float -> Axis
verticalAxis zone showOnlyOneOnHover hover maxDate =
    axis
        showOnlyOneOnHover
        hover
        ( startOfAoC, maxDate )
        .y
        (round >> Time.millisToPosix >> Date.format zone)
        (always (findTicks startOfAoC maxDate (2 * day)))


axis : Bool -> Maybe Point -> ( Float, Float ) -> (Point -> Float) -> (Float -> String) -> (AxisSummary -> List Float) -> Axis
axis showOnlyOneOnHover hover ( min, max ) toValue makeString toTicks =
    -- TODO refactor or document
    P.customAxis <|
        \summary ->
            let
                ticks =
                    toTicks summary

                makeLabel position =
                    { position = position
                    , view =
                        position
                            |> makeString
                            |> P.viewLabel Text.attributes
                    }
            in
            { position = P.closestToZero
            , axisLine =
                Just
                    { attributes = [ SA.stroke colors.darkGrey ]
                    , start = min
                    , end =
                        ticks
                            |> List.reverse
                            |> List.head
                            |> Maybe.withDefault max
                    }
            , ticks =
                if showOnlyOneOnHover then
                    hoveredOrTicks hover toValue P.simpleTick ticks

                else
                    List.map P.simpleTick ticks
            , labels =
                if showOnlyOneOnHover then
                    hoveredOrTicks hover toValue makeLabel ticks

                else
                    List.map makeLabel ticks
            , flipAnchor = False
            }


hoveredOrTicks : Maybe Point -> (Point -> Float) -> (Float -> a) -> List Float -> List a
hoveredOrTicks hover toValue makeStuff ticks =
    hover
        |> Maybe.map (\p -> [ makeStuff (toValue p) ])
        |> Maybe.withDefault (List.map makeStuff ticks)
