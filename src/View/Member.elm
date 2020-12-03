module View.Member exposing (description)

import Types exposing (..)
import View.Name as View


description : Member -> String
description member =
    View.name member
        ++ (" (stars: " ++ String.fromInt member.stars)
        ++ (", local score: " ++ String.fromInt member.localScore)
        ++ ")"
