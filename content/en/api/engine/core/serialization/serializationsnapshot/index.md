---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.core.serialization.839fb78ae8c26a3e
symbol: engine:Inno.Core.Serialization:T:Inno.Core.Serialization.SerializationSnapshot
title: SerializationSnapshot
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
reviewed: 569e9d464b2e9717575819a28a1044aac88686b30d280f3c6e75fa7b57f9199c
contracts:
- project.inno-core-serialization#operation-and-generation-contract

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

Capture again through ```M:Inno.Core.Serialization.SerializationRegistry.CaptureSnapshot``1(``0,Inno.Core.Serialization.SerializationContext,Inno.Core.Serialization.SerializationSnapshot)``` to reuse unchanged values. Readers may share a snapshot across threads. It owns only scalar values, strings and copied binary data, never source instances, metadata, converters or delegates. It is transient and is not a persistence format.
