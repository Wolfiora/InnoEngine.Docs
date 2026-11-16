---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.core.serialization.runtime-script.9ae87b269132ef77
symbol: scripting:Inno.Core.Serialization:T:InnoEngine.Serialization.GenerateSerializationConverterAttribute
title: GenerateSerializationConverterAttribute
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
reviewed: 0a86ee52fba46f72549035b5d05654273e7b9b2e13f9760c0bcbcfa98837bc37
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
