---
uid: api.inno.core.serialization.839fb78ae8c26a3e
symbol: "engine:Inno.Core.Serialization:T:Inno.Core.Serialization.SerializationSnapshot"
source: xml
reviewed: a9376223a553ae4a3cdd76982c3b16ab751c43b445a0c361246cce8f909b910e
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
