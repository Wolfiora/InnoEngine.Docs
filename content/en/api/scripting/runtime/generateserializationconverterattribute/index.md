---
uid: api.inno.core.serialization.runtime-script.9ae87b269132ef77
symbol: "scripting:Inno.Core.Serialization:T:InnoEngine.Serialization.GenerateSerializationConverterAttribute"
source: xml
reviewed: e52c5f8a4f986c57fa5754fdf2a832373bfd897d9c5ace1e98b8975753a09030
title: "GenerateSerializationConverterAttribute"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-core-serialization#operation-and-generation-contract
aliases: []
---

Requests a compile-time serialization converter for a closed data-transfer type.

## Remarks

The annotated type must implement `T:InnoEngine.Serialization.ISerializable`, expose a constructor that generated code can invoke, and use `T:InnoEngine.Serialization.SerializablePropertyAttribute` on every persisted member. Types with polymorphic identity, reference graphs, or custom restoration invariants must use an explicit converter instead.
