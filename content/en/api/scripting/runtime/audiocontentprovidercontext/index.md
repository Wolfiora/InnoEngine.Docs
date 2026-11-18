---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.audio.runtime-script.233245aa9fe3551a
symbol: scripting:Inno.Audio:T:InnoEngine.Audio.AudioContentProviderContext
title: AudioContentProviderContext
kind: api
owners:
- Inno.Audio
apiSurface: editor-script
sourceFingerprint: 42b19a52875433a560675311887e6c0d09dbd06a443c4dbf742e54b3f9a71c8f
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-audio#playback-and-device-contract

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

The host disposes this borrowed context when the provider returns. A rejected submission invalidates the entire contribution, even if the provider catches the exception. The context does not own the content scope.
