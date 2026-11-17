---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.core.serialization.runtime-script.d4d504dd725db198
symbol: scripting:Inno.Core.Serialization:T:InnoEngine.Serialization.SerializationCaptureKeyBuilder
title: SerializationCaptureKeyBuilder
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
reviewed: 4a696fb91103aac59c522ee637a1761c583c6235d009036fb8d4a0862560219f
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-core-serialization#operation-and-generation-contract

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

Only current Core identities, revisions, metadata stamps and neutral values enter the key. Key storage is not serialized or restored. Every failed TryAdd invalidates the whole key. The borrowed builder retires after the callback.
