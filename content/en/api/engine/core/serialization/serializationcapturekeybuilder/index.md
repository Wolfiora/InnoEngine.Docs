---
uid: api.inno.core.serialization.6f07b7634363d447
symbol: "engine:Inno.Core.Serialization:T:Inno.Core.Serialization.SerializationCaptureKeyBuilder"
source: xml
reviewed: 5367cd8e46c5222206639ba4ce0db7d45c288158b97aec06eadd5c4484255b68
title: "SerializationCaptureKeyBuilder"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
contracts:
- project.inno-core-serialization#operation-and-generation-contract
aliases: []
---

Builds an exact neutral key during one owned synchronous converter capture callback.

## Remarks

Only current Core identities, revisions, metadata stamps and neutral values enter the key. Key storage is not serialized or restored. Every failed TryAdd invalidates the whole key. The borrowed builder retires after the callback.
