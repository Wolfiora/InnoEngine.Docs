---
uid: api.inno.audio.runtime.a63dcfeede6e3455
symbol: "engine:Inno.Audio.Runtime:T:Inno.Audio.Runtime.MutedAudioDevice"
source: xml
reviewed: b58c707c4778706808243f83454785a7bc9e93df7746ca5d6482a55ccb2672af
title: "MutedAudioDevice"
kind: api
owners: [Inno.Audio.Runtime]
apiSurface: source-clr
contracts:
- project.inno-audio-runtime#composition-and-lifetime-contract
aliases: []
---

Advances deterministic audio state without opening an operating-system output device.

## Remarks

This device is used for headless tests and explicit no-device recovery. It never claims audible output.
