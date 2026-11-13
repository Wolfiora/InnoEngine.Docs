---
uid: api.89406d095c7fdb63008ccdf5ae862f834767aa388a042177b6c9c722c7d4a422
symbol: "engine:Inno.Audio.Runtime:M:Inno.Audio.Runtime.AudioRuntime.EnterExecutionScope"
source: xml
reviewed: 04e80f2962fccd6038f31d10baa8719e221e3ff36048ce876c507b06462306e8
title: "EnterExecutionScope"
kind: api
owners: [Inno.Audio.Runtime]
apiSurface: source-clr
---

Binds this runtime to script-facing audio APIs for the current asynchronous flow.

**Returns:** A strict last-in-first-out execution scope owned by the caller.

**Exception `T:System.ObjectDisposedException`:** Thrown when this runtime has been disposed.
