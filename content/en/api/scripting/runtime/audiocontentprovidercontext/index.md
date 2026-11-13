---
uid: api.inno.audio.runtime-script.233245aa9fe3551a
symbol: "scripting:Inno.Audio:T:InnoEngine.Audio.AudioContentProviderContext"
source: xml
reviewed: 47f33c2da69ac1084fe0b69c1cadce1a458fe01da9a8f86627d90ed9d0704aef
title: "AudioContentProviderContext"
kind: api
owners: [Inno.Audio]
apiSurface: editor-script
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-audio#playback-and-device-contract
aliases: []
---

Collects one bounded, atomic provider contribution on the owning control thread.

## Remarks

The host disposes this borrowed context when the provider returns. A rejected submission invalidates the entire contribution, even if the provider catches the exception. The context does not own the content scope.
