---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.core.serialization.839fb78ae8c26a3e
symbol: engine:Inno.Core.Serialization:T:Inno.Core.Serialization.SerializationSnapshot
title: SerializationSnapshot
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
sourceFingerprint: 7c7b7aaa6c27fc968fce90fcd0eddf7c5f064f9f4a5077c0e3b260d0dff8c121
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
