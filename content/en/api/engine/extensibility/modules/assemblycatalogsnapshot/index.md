---
uid: api.inno.extensibility.modules.8e422304490c709d
symbol: "engine:Inno.Extensibility.Modules:T:Inno.Extensibility.Modules.AssemblyCatalogSnapshot"
source: xml
reviewed: d5e8eaab68f11eb815106cf8598dceee4743080775a83a1cbe56fda867d3ee89
title: "AssemblyCatalogSnapshot"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
contracts:
- project.inno-extensibility-modules#source-and-publication-contract
aliases: []
---

Represents an immutable view of the assemblies participating in one catalog generation.

## Remarks

A snapshot retains its assemblies. Consumers must not keep obsolete snapshots after a reload, because doing so can delay unloading a collectible assembly context.
