module Score exposing (maxScore, score)

import Dict exposing (Dict)
import Dict.Extra
import Time exposing (Posix)
import Types exposing (..)
import View.Name as View


score : Data -> ( Day, Star ) -> String -> Maybe Int
score data ( day, star ) wantedName =
    let
        allSolutions =
            groupedTimes data
                |> Dict.get ( day, star )
                |> Maybe.withDefault []

        maxSolutionPoints =
            List.length data
    in
    allSolutions
        |> List.sortBy (Tuple.second >> Time.posixToMillis)
        |> List.indexedMap (\a b -> ( a, b ))
        |> List.filter (\( i, ( name, date ) ) -> name == wantedName)
        |> List.head
        -- first one gets (length) points, second (length - 1), ...
        |> Maybe.map (\( i, ( name, date ) ) -> maxSolutionPoints - i)


maxScore : Data -> Int
maxScore data =
    List.length data


groupedTimes : Data -> Dict ( Day, Star ) (List ( String, Posix ))
groupedTimes data =
    -- TODO refactor
    data
        |> List.map (\member -> ( View.name member, member.completionTimes ))
        |> List.concatMap (\( name, times ) -> List.map (Tuple.pair name) times)
        |> Dict.Extra.groupBy (\( name, ( day, star, time ) ) -> ( day, star ))
        |> Dict.map
            (\_ list ->
                List.map
                    (\( name, ( day, star, time ) ) -> ( name, time ))
                    list
            )
