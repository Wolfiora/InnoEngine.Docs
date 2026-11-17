---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ece2397c3d27372b4a399272668be2f647579f80d4c19138d27273ecd73f251b
symbol: engine:Inno.Runtime.Contracts:M:Inno.Runtime.Contracts.IRuntimeSubsystemFactory.Create(Inno.Runtime.Contracts.RuntimeSubsystemContext)
title: IRuntimeSubsystemFactory.Create
kind: api
owners:
- Inno.Runtime.Contracts
apiSurface: source-clr
reviewed: 0571d6cd54fe16f58805d3b8f988d07c254f14ee60cdd901847f990b8d77cc97
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
