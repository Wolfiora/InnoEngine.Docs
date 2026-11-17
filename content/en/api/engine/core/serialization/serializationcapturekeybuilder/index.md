---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.core.serialization.6f07b7634363d447
symbol: engine:Inno.Core.Serialization:T:Inno.Core.Serialization.SerializationCaptureKeyBuilder
title: SerializationCaptureKeyBuilder
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
reviewed: 078b5ef54b5246f780217cd92db7b3679945b16ac8ace1bd1d997cd7d1dfba89
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
