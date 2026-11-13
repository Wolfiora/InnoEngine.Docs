---
uid: api.inno.core.serialization.cece4bab5907d676
symbol: "engine:Inno.Core.Serialization:T:Inno.Core.Serialization.SerializationRevisionAttribute"
source: xml
reviewed: 4a636f42fd422016d2371920ad57e1b0194411c1d220b5260055a0bbc9739926
title: "SerializationRevisionAttribute"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
contracts:
- project.inno-core-serialization#operation-and-generation-contract
aliases: []
---

Declares a sealed identity source's transient revision member, which covers all serialized state and pure getters.

## Remarks

The member must return ulong or nullable ulong. Every relevant write must advance its value before mutation; null declines reuse. The counter is not serialized. Metadata providers explicitly opt into this declaration.
