---
uid: api.inno.core.serialization.runtime-script.d4d504dd725db198
symbol: "scripting:Inno.Core.Serialization:T:InnoEngine.Serialization.SerializationCaptureKeyBuilder"
source: xml
reviewed: e30020e037817d7fcb6618ba5dfbf02e1437945a8a24a0a84fcbfa6e1d3aeaf4
title: "SerializationCaptureKeyBuilder"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-core-serialization#operation-and-generation-contract
aliases: []
---

Builds an exact neutral key during one owned synchronous converter capture callback.

## Remarks

Only current Core identities, revisions, metadata stamps and neutral values enter the key. Key storage is not serialized or restored. Every failed TryAdd invalidates the whole key. The borrowed builder retires after the callback.
