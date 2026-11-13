---
uid: api.inno.core.serialization.839fb78ae8c26a3e
symbol: "engine:Inno.Core.Serialization:T:Inno.Core.Serialization.SerializationSnapshot"
source: xml
reviewed: b5c5db5eef3396ddc244d61d1ca61b22f481564e8bb3b71826fdc9d51d8388a9
title: "SerializationSnapshot"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
contracts:
- project.inno-core-serialization#operation-and-generation-contract
aliases: []
---

Holds an immutable, neutral capture of serialized values without retaining the source object or its generation.

## Remarks

Capture again through ```M:Inno.Core.Serialization.SerializationRegistry.CaptureSnapshot``1(``0,Inno.Core.Serialization.SerializationContext,Inno.Core.Serialization.SerializationSnapshot)``` to reuse unchanged values. Readers may share a snapshot across threads. It owns only scalar values, strings and copied binary data, never source instances, metadata, converters or delegates. It is transient and is not a persistence format.
