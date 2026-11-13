---
uid: api.inno.core.serialization.runtime-script.d4d504dd725db198
symbol: "scripting:Inno.Core.Serialization:T:InnoEngine.Serialization.SerializationCaptureKeyBuilder"
source: xml
reviewed: caefc2015fe3f170ec0fd314f53c70a8fac23602c7c4bf3040bf65e5c95a0134
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
