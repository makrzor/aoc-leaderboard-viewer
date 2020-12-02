module View.Plot.Type.AllInOne exposing (allInOne)

import Colors exposing (colorsList)
import Html as H exposing (Html)
import Plot as P
    exposing
        ( DataPoint
        , JunkCustomizations
        , PlotSummary
        , Series
        )
import Types exposing (..)
import View.Plot.Junk.Legend as Junk
import View.Plot.PlotCustomizations exposing (plotCustomizations)
import View.Plot.Series exposing (series)


allInOne : Model -> Data -> List (Html Msg)
allInOne model data =
    [ P.viewSeriesCustom
        (plotCustomizations model data (junk data))
        (seriesList model data)
        data
    ]


seriesList : Model -> Data -> List (Series Data Msg)
seriesList model data =
    List.map3 (series model data dotOptions)
        (data |> List.indexedMap (\i _ -> i == 0))
        (colorsList (List.length data))
        (data |> List.sortBy (.localScore >> negate))


junk : Data -> PlotSummary -> List (JunkCustomizations Msg)
junk data _ =
    [ Junk.legend data ]


dotOptions : DotOptions
dotOptions =
    { xLine = True
    , yLine = True
    , xTick = True
    , yTick = True
    , stripedHint = True
    }
