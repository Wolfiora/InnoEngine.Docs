---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.core.serialization.629826818c1ca289
symbol: engine:Inno.Core.Serialization:T:Inno.Core.Serialization.SerializationGeneration
title: SerializationGeneration
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
sourceFingerprint: f36fdf72a7f389c45aec635840724326959c1b21a8babb55da669f50478cb937
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
