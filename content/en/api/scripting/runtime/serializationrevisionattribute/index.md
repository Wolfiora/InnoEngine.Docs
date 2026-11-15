---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.core.serialization.runtime-script.d5107e5e522f1c25
symbol: scripting:Inno.Core.Serialization:T:InnoEngine.Serialization.SerializationRevisionAttribute
title: SerializationRevisionAttribute
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
reviewed: ccb27a8926df24ab8cb04633f53b8b7b091a2249ff95e7b1680f51af217e552c
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- manual.scripting.use-script-api
- project.inno-core-serialization#operation-and-generation-contract
aliases: []
---

## Remarks

The member must return ulong or nullable ulong. Every relevant write must advance its value before mutation; null declines reuse. The counter is not serialized. Metadata providers explicitly opt into this declaration.
