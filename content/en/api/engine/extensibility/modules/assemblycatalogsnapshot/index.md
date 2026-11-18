---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.extensibility.modules.8e422304490c709d
symbol: engine:Inno.Extensibility.Modules:T:Inno.Extensibility.Modules.AssemblyCatalogSnapshot
title: AssemblyCatalogSnapshot
kind: api
owners:
- Inno.Extensibility.Modules
apiSurface: source-clr
sourceFingerprint: 7648bdc498e37e9d2b8e5c106aefa79bca1eec0f337740356cfc1b8420f3a8e4
contracts:
- project.inno-extensibility-modules#source-and-publication-contract

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

A snapshot retains its assemblies. Consumers must not keep obsolete snapshots after a reload, because doing so can delay unloading a collectible assembly context.
