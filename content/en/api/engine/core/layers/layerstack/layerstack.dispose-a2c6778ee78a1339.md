---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a2c6778ee78a1339dc5441ebc5b4a8804d99f305470cfe194d38609fa35af3c8
symbol: engine:Inno.Core.Layers:M:Inno.Core.Layers.LayerStack.Dispose
title: LayerStack.Dispose
kind: api
owners:
- Inno.Core.Layers
apiSurface: source-clr
reviewed: 0909a4ef3816b0c68951ff946c7fdcee6ee5244587fe3d95fddf6ab9542e653f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A layer still owns live work. The current and lower layers remain owned until disposal is retried.

**Exception `T:System.AggregateException`:** Thrown after cleanup completes when multiple layers fail to detach.
