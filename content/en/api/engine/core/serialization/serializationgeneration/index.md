---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.core.serialization.629826818c1ca289
symbol: engine:Inno.Core.Serialization:T:Inno.Core.Serialization.SerializationGeneration
title: SerializationGeneration
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
reviewed: f8d4c214addc3943b93daa8ea0edbcc9699fd7d7d231e3a4efbd81d1b3e1fb1d
contracts:
- project.inno-core-serialization#operation-and-generation-contract

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

A generation may execute operations from any thread after it has been captured. The owner must dispose it when the surrounding transaction completes so collectible extension generations can unload.
