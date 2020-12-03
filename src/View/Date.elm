module View.Date exposing (..)

import Day exposing (comfortableRange, endOfAoC)
import Time exposing (Month(..), Posix, Zone)
import Types exposing (..)


parseDate :
    Zone
    -> Posix
    ->
        { day : String
        , hour : String
        , minute : String
        , second : String
        }
parseDate zone date =
    { day = date |> Time.toDay zone |> String.fromInt
    , hour = date |> Time.toHour zone |> String.fromInt |> String.pad 2 '0'
    , minute = date |> Time.toMinute zone |> String.fromInt |> String.pad 2 '0'
    , second = date |> Time.toSecond zone |> String.fromInt |> String.pad 2 '0'
    }


format : Zone -> Posix -> String
format zone posix =
    let
        { day, hour, minute } =
            parseDate zone posix
    in
    "Dec " ++ day ++ ", " ++ hour ++ ":" ++ minute


formatWithSeconds : Zone -> Posix -> String
formatWithSeconds zone posix =
    let
        { day, hour, minute, second } =
            parseDate zone posix
    in
    "Dec " ++ day ++ ", " ++ hour ++ ":" ++ minute ++ ":" ++ second


max : Data -> Float
max data =
    data
        |> List.concatMap .completionTimes
        |> List.map (\( _, _, time ) -> Time.posixToMillis time |> toFloat)
        |> List.maximum
        |> Maybe.withDefault endOfAoC
        |> comfortableRange
        |> Tuple.second
