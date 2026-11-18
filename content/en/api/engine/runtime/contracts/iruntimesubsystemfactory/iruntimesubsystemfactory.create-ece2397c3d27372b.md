---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ece2397c3d27372b4a399272668be2f647579f80d4c19138d27273ecd73f251b
symbol: engine:Inno.Runtime.Contracts:M:Inno.Runtime.Contracts.IRuntimeSubsystemFactory.Create(Inno.Runtime.Contracts.RuntimeSubsystemContext)
title: IRuntimeSubsystemFactory.Create
kind: api
owners:
- Inno.Runtime.Contracts
apiSurface: source-clr
sourceFingerprint: 0746df615b0188b9bf55a0074843029471bab33bad81f563a28e5c1243c10870
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** Stable foundation services and a private factory lifetime. Register partial allocations and work here before callbacks can fail.

## Returns

A new unattached runtime subsystem; after returning, its lifecycle belongs to the pipeline.
