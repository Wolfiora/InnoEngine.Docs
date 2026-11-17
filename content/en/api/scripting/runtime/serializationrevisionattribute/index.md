---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.core.serialization.runtime-script.d5107e5e522f1c25
symbol: scripting:Inno.Core.Serialization:T:InnoEngine.Serialization.SerializationRevisionAttribute
title: SerializationRevisionAttribute
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
reviewed: f4587c8e0f4bb46849d7af281b711acc1878aba9a181f8ec473c5979431fca48
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

The member must return ulong or nullable ulong. Every relevant write must advance its value before mutation; null declines reuse. The counter is not serialized. Metadata providers explicitly opt into this declaration.
