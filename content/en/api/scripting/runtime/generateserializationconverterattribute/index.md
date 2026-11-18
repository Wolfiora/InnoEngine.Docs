---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.core.serialization.runtime-script.9ae87b269132ef77
symbol: scripting:Inno.Core.Serialization:T:InnoEngine.Serialization.GenerateSerializationConverterAttribute
title: GenerateSerializationConverterAttribute
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
sourceFingerprint: 8a6e21fb0863d69f3126387d7dd1206203dfc45ae5e59caea1b67e7c2dd70a7b
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-core-serialization#operation-and-generation-contract

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

The annotated type must implement `T:InnoEngine.Serialization.ISerializable`, expose a constructor that generated code can invoke, and use `T:InnoEngine.Serialization.SerializablePropertyAttribute` on every persisted member. Types with polymorphic identity, reference graphs, or custom restoration invariants must use an explicit converter instead.
