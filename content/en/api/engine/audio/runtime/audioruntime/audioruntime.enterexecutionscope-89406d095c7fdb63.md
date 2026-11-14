---
uid: api.89406d095c7fdb63008ccdf5ae862f834767aa388a042177b6c9c722c7d4a422
symbol: "engine:Inno.Audio.Runtime:M:Inno.Audio.Runtime.AudioRuntime.EnterExecutionScope"
source: xml
reviewed: e7a5ab23f83a65a5b42ab5f2c7dfe0d1d6f86995c69ec59043a0e8a60e41da41
title: "AudioRuntime.EnterExecutionScope"
kind: api
owners: [Inno.Audio.Runtime]
apiSurface: source-clr
---

Binds this runtime to script-facing audio APIs for the current asynchronous flow.

## Returns

A strict last-in-first-out execution scope owned by the caller.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown when this runtime has been disposed.
