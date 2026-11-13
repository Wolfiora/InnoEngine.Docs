---
uid: api.inno.audio.runtime.a63dcfeede6e3455
symbol: "engine:Inno.Audio.Runtime:T:Inno.Audio.Runtime.MutedAudioDevice"
source: xml
reviewed: 830aa5e84e0f42b8dbe1d1541ea723aaa35ca2d05b16fc0aa0aad916bcfe1b06
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
