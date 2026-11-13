---
uid: api.inno.core.serialization.runtime-script.d5107e5e522f1c25
symbol: "scripting:Inno.Core.Serialization:T:InnoEngine.Serialization.SerializationRevisionAttribute"
source: xml
reviewed: cf6465ffe71b0c4bd6077aca5e69e81fb61e6cf0726de1612f1f390a4fed7f5b
title: "SerializationRevisionAttribute"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-core-serialization#operation-and-generation-contract
aliases: []
---

Declares a sealed identity source's transient revision member, which covers all serialized state and pure getters.

## Remarks

The member must return ulong or nullable ulong. Every relevant write must advance its value before mutation; null declines reuse. The counter is not serialized. Metadata providers explicitly opt into this declaration.
