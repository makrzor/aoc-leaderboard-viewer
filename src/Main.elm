module Main exposing (main)

import Browser
import Html
import Types exposing (..)
import Update exposing (..)
import View exposing (..)


main : Program Flags Model Msg
main =
    Browser.document
        { init = init
        , update = update
        , view = view
        , subscriptions = subscriptions
        }
