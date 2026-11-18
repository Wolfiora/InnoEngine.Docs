---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.core.serialization.runtime-script.d4d504dd725db198
symbol: scripting:Inno.Core.Serialization:T:InnoEngine.Serialization.SerializationCaptureKeyBuilder
title: SerializationCaptureKeyBuilder
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
sourceFingerprint: dbb602a6542ecf1fccc4ccc7345e318f9710a6e8ea7c130eac0d51675945af70
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
