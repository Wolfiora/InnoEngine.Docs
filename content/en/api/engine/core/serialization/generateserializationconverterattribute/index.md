---
uid: api.inno.core.serialization.11812311c3a25ad5
symbol: "engine:Inno.Core.Serialization:T:Inno.Core.Serialization.GenerateSerializationConverterAttribute"
source: xml
reviewed: 3cea48bc584e0732776719578b013f74fc392b397e08dcdadce03570ab15822a
title: "GenerateSerializationConverterAttribute"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
contracts:
- project.inno-core-serialization#operation-and-generation-contract
aliases: []
---

Requests a compile-time serialization converter for a closed data-transfer type.

## Remarks

The annotated type must implement `T:Inno.Core.Serialization.ISerializable`, expose a constructor that generated code can invoke, and use `T:Inno.Core.Serialization.SerializablePropertyAttribute` on every persisted member. Types with polymorphic identity, reference graphs, or custom restoration invariants must use an explicit converter instead.
