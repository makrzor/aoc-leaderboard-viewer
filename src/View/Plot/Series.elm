module View.Plot.Series exposing (series)

import DayStar
import Plot as P
    exposing
        ( DataPoint
        , Interpolation(..)
        , Point
        , Series
        )
import Score exposing (maxScore, score)
import Svg.Attributes as SA
import Time exposing (Posix, Zone)
import Types exposing (..)
import View.Date as Date
import View.Name as View
import View.Plot.Axis exposing (verticalAxis)
import View.Plot.Dot exposing (dot)


series : Model -> Data -> DotOptions -> Bool -> String -> Member -> Series Data Msg
series model data dotOptions hasAxis color member =
    { axis =
        if hasAxis then
            verticalAxis model.zone dotOptions.yTick model.hover (Date.max data)

        else
            P.sometimesYouDoNotHaveAnAxis
    , interpolation = interpolation color
    , toDataPoints = dataPoints model.zone model.hover color member dotOptions
    }


interpolation : String -> Interpolation
interpolation color =
    Linear Nothing [ SA.stroke color ]


dataPoints :
    Zone
    -> Maybe Point
    -> String
    -> Member
    -> DotOptions
    -> Data
    -> List (DataPoint Msg)
dataPoints zone hover color member dotOptions data =
    member.completionTimes
        |> List.map (toDataPoint zone hover color member data dotOptions)


toDataPoint :
    Zone
    -> Maybe Point
    -> String
    -> Member
    -> Data
    -> DotOptions
    -> CompletionTime
    -> DataPoint Msg
toDataPoint zone hover color member data dotOptions (( day, star, time ) as completionTime) =
    let
        name =
            View.name member
    in
    dot
        zone
        dotOptions
        hover
        name
        color
        (toXY completionTime)
        (score data ( day, star ) name)
        (maxScore data)


toXY : CompletionTime -> ( Float, Float )
toXY ( day, star, time ) =
    ( DayStar.toFloat day star
    , toFloat <| Time.posixToMillis time
    )
