---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fbd45ee7e7243031339d028eca80712985ed2a3aea281a9ca0ece57115dbbdcc
symbol: engine:Inno.Runtime.Contracts:M:Inno.Runtime.Contracts.IRuntimeSubsystemActivator.Create(Inno.Runtime.Contracts.RuntimeSubsystemContext)
title: IRuntimeSubsystemActivator.Create
kind: api
owners:
- Inno.Runtime.Contracts
apiSurface: source-clr
sourceFingerprint: 6bd83f094c7e1b731b66365527226c9d3241b24ef3b99c8386dc1e317a206bca
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
