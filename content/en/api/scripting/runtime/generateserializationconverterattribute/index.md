---
uid: api.inno.core.serialization.runtime-script.9ae87b269132ef77
symbol: "scripting:Inno.Core.Serialization:T:InnoEngine.Serialization.GenerateSerializationConverterAttribute"
source: xml
reviewed: fa679fdeedbda366eee916d1265344beccce22b69dd46ea47e98c307c9775712
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
