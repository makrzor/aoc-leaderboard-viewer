module Types exposing (..)

import Plot
    exposing
        ( DataPoint
        , Point
        )
import RemoteData exposing (WebData)
import Time exposing (Posix, Zone)


type alias Snapshot =
    { url : String
    , cookie : String
    , plot : String
    }


type alias Flags =
    { currentTime : Int
    , snapshot : Maybe Snapshot
    }


type alias Model =
    { url : String
    , cookie : String
    , data : WebData Data
    , timeOfFetch : Posix
    , hover : Maybe Point
    , plot : Plot
    , zone : Zone
    }


type Msg
    = SetUrl String
    | SetCookie String
    | Fetch String String
    | FetchResult (WebData Data)
    | CurrentTime Posix
    | CurrentZone Zone
    | Hover (Maybe Point)
    | ShowPlot Plot


type alias Data =
    List Member


type alias Member =
    { name : Maybe String
    , id : String
    , localScore : Int
    , globalScore : Int
    , stars : Int
    , completionTimes : List CompletionTime
    }


type alias CompletionTime =
    ( Day, Star, Posix )


type alias Day =
    Int


type alias Star =
    Int


type Plot
    = OneForEachMember
    | AllInOne


type alias DotOptions =
    { xLine : Bool
    , yLine : Bool
    , xTick : Bool
    , yTick : Bool
    , stripedHint : Bool
    }
