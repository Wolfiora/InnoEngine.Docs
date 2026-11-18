---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.core.serialization.cece4bab5907d676
symbol: engine:Inno.Core.Serialization:T:Inno.Core.Serialization.SerializationRevisionAttribute
title: SerializationRevisionAttribute
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
sourceFingerprint: 58c5a4b0dea62163055ec90055e0ba6d3e4f68bd1e5c5bad1e6a760ab20596ad
contracts:
- project.inno-core-serialization#operation-and-generation-contract

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

The member must return ulong or nullable ulong. Every relevant write must advance its value before mutation; null declines reuse. The counter is not serialized. Metadata providers explicitly opt into this declaration.
