---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.extensibility.modules.8e422304490c709d
symbol: engine:Inno.Extensibility.Modules:T:Inno.Extensibility.Modules.AssemblyCatalogSnapshot
title: AssemblyCatalogSnapshot
kind: api
owners:
- Inno.Extensibility.Modules
apiSurface: source-clr
reviewed: 6b6486b1da558b642d403b42a8d800ae7426ab59c4ec72764711c7fcaa5eaa7b

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- project.inno-extensibility-modules#source-and-publication-contract
aliases: []
---

Represents an immutable view of the assemblies participating in one catalog generation.

## Remarks

A snapshot retains its assemblies. Consumers must not keep obsolete snapshots after a reload, because doing so can delay unloading a collectible assembly context.
