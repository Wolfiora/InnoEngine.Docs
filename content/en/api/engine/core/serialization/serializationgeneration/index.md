---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.core.serialization.629826818c1ca289
symbol: engine:Inno.Core.Serialization:T:Inno.Core.Serialization.SerializationGeneration
title: SerializationGeneration
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
reviewed: b55573797d639f8c2bef16dad4c8bdf45ad0896ed9df0345c789a4b56d0a8952

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- project.inno-core-serialization#operation-and-generation-contract
aliases: []
---

## Remarks

A generation may execute operations from any thread after it has been captured. The owner must dispose it when the surrounding transaction completes so collectible extension generations can unload.
