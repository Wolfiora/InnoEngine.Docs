---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.audio.runtime-script.233245aa9fe3551a
symbol: scripting:Inno.Audio:T:InnoEngine.Audio.AudioContentProviderContext
title: AudioContentProviderContext
kind: api
owners:
- Inno.Audio
apiSurface: editor-script
reviewed: 4b2844c57560aefc36c8c94b385a096393467bd8d10a9a1beb1cabd678f6898d
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
