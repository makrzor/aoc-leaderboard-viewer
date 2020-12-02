module View.Plot exposing (fromString, plot, toString)

import Example
import Html as H exposing (Html)
import Http exposing (Error(..))
import RemoteData exposing (RemoteData(..))
import Types exposing (..)
import View.Plot.Type.AllInOne as View
import View.Plot.Type.OneForEachMember as View


toString : Plot -> String
toString plot_ =
    case plot_ of
        OneForEachMember ->
            "OneForEachMember"

        AllInOne ->
            "AllInOne"


fromString : String -> Result String Plot
fromString string =
    case string of
        "OneForEachMember" ->
            Ok OneForEachMember

        "AllInOne" ->
            Ok AllInOne

        _ ->
            Err <| "wrong plot type snapshot: " ++ string


plot : Model -> Html Msg
plot model =
    H.div []
        (case model.data of
            NotAsked ->
                if Example.shouldShow model then
                    plotView
                        { model | data = Success Example.data }
                        Example.data

                else
                    [ H.text "" ]

            Loading ->
                [ viewLoading ]

            Failure err ->
                [ viewFailure err ]

            Success realData ->
                plotView
                    model
                    realData
        )


plotView : Model -> Data -> List (Html Msg)
plotView model data =
    case model.plot of
        AllInOne ->
            View.allInOne model data

        OneForEachMember ->
            View.oneForEachMember model data


viewLoading : Html Msg
viewLoading =
    H.text "Loading from the AoC site..."


viewFailure : Http.Error -> Html Msg
viewFailure err =
    H.text <| "Error: " ++ httpErrorToString err


httpErrorToString : Http.Error -> String
httpErrorToString err =
    case err of
        Timeout ->
            "Timeout exceeded"

        NetworkError ->
            "Network error"

        BadStatus code ->
            "Bad status: " ++ String.fromInt code

        BadBody e ->
            "Bad body: " ++ e

        BadUrl url ->
            "Bad URL: " ++ url
