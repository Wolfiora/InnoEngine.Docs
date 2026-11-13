---
uid: api.inno.audio.runtime-script.233245aa9fe3551a
symbol: "scripting:Inno.Audio:T:InnoEngine.Audio.AudioContentProviderContext"
source: xml
reviewed: cf9c49f56c9d0468af252ad8ffb9d573a82caac11f8c6f63d83a4920b4b161d5
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
