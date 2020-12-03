module View.Score exposing (format, style)

import Html exposing (Attribute)
import Html.Attributes as HA
import Html.Attributes.Extra as HAE


format : Maybe Int -> Int -> String
format maybeScore maxScore =
    maybeScore
        |> Maybe.map
            (\score ->
                String.fromInt score
                    ++ " "
                    ++ pts score
                    ++ " out of "
                    ++ String.fromInt maxScore
            )
        |> Maybe.withDefault ""


pts : Int -> String
pts score =
    if score > 1 then
        "pts"

    else
        "pt"


style : Bool -> Maybe Int -> Int -> List (Attribute msg)
style striped maybeScore maxScore =
    maybeScore
        |> Maybe.map (\score -> maxScore - score + 1)
        |> Maybe.map
            (\score ->
                [ HA.style "order" (String.fromInt score)
                , HAE.attributeIf (striped && modBy 2 score == 1) <|
                    HA.style "background-color" "rgba(0,0,0,.05)"
                ]
            )
        |> Maybe.withDefault []
