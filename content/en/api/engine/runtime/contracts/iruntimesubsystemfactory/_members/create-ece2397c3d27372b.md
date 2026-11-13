---
uid: api.ece2397c3d27372b4a399272668be2f647579f80d4c19138d27273ecd73f251b
symbol: "engine:Inno.Runtime.Contracts:M:Inno.Runtime.Contracts.IRuntimeSubsystemFactory.Create(Inno.Runtime.Contracts.RuntimeSubsystemContext)"
source: xml
reviewed: 58525a6d995e9dc42a493be750b930a1f33841944c7321762f59f2495cd51ee1
title: "Create"
kind: api
owners: [Inno.Runtime.Contracts]
apiSurface: source-clr
---

Creates a subsystem owned exclusively by the supplied construction scope.

**Parameter `context`:** Stable foundation services and a private factory lifetime. Register partial allocations and work here before callbacks can fail.

**Returns:** A new unattached runtime subsystem; after returning, its lifecycle belongs to the pipeline.
