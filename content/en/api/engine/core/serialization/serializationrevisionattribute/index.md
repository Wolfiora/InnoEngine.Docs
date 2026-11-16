---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.core.serialization.cece4bab5907d676
symbol: engine:Inno.Core.Serialization:T:Inno.Core.Serialization.SerializationRevisionAttribute
title: SerializationRevisionAttribute
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
reviewed: 743aafaa90671eb585758acd62f634c4ffa09c5edc0bad9db17e49511e612d9a
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
