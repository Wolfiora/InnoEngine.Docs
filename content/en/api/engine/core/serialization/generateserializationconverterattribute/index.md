---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.core.serialization.11812311c3a25ad5
symbol: engine:Inno.Core.Serialization:T:Inno.Core.Serialization.GenerateSerializationConverterAttribute
title: GenerateSerializationConverterAttribute
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
sourceFingerprint: 3342b28ab7146b42ae5b3c0dcad4ff59c36c0893a99dcef4a54de669de376220
contracts:
- project.inno-core-serialization#operation-and-generation-contract

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

The annotated type must implement `T:Inno.Core.Serialization.ISerializable`, expose a constructor that generated code can invoke, and use `T:Inno.Core.Serialization.SerializablePropertyAttribute` on every persisted member. Types with polymorphic identity, reference graphs, or custom restoration invariants must use an explicit converter instead.
