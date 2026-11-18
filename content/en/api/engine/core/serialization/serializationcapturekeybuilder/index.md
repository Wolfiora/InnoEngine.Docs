---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.core.serialization.6f07b7634363d447
symbol: engine:Inno.Core.Serialization:T:Inno.Core.Serialization.SerializationCaptureKeyBuilder
title: SerializationCaptureKeyBuilder
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
sourceFingerprint: fa028cf88b8b1a3f925e3d3893477359182b3603270963b7e496b29806eeea97
contracts:
- project.inno-core-serialization#operation-and-generation-contract

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

Only current Core identities, revisions, metadata stamps and neutral values enter the key. Key storage is not serialized or restored. Every failed TryAdd invalidates the whole key. The borrowed builder retires after the callback.
