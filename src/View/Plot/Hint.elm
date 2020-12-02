module View.Plot.Hint exposing (containerInner, hint)

import Date
import Html as H exposing (Html)
import Html.Attributes as HA
import Time exposing (Posix, Zone)
import View.Date as Date
import View.Score as Score


containerInner : Bool -> List (Html Never) -> Html Never
containerInner isLeft hints =
    H.div
        [ HA.class "container hint" ]
        (H.div [ HA.class "row row--header" ]
            [ H.div [ HA.class "col-sm col--member" ] [ H.text "Member" ]
            , H.div [ HA.class "col-sm col--solved" ] [ H.text "Solved" ]
            , H.div [ HA.class "col-sm col--score" ] [ H.text "Score" ]
            ]
            :: hints
        )


hint : Bool -> String -> Zone -> Float -> Float -> Maybe Int -> Int -> Html msg
hint striped name zone solutionDate dayStarFloat maybeScore maxScore =
    let
        solutionDatePosix : Posix
        solutionDatePosix =
            solutionDate
                |> round
                |> Time.millisToPosix
    in
    H.div
        (HA.class "row"
            :: Score.style striped maybeScore maxScore
        )
        [ H.div [ HA.class "col-sm col--member" ] [ H.text name ]
        , H.div [ HA.class "col-sm col--solved" ] [ H.text <| Date.formatWithSeconds zone solutionDatePosix ]
        , H.div [ HA.class "col-sm col--score" ] [ H.text <| Score.format maybeScore maxScore ]
        ]
