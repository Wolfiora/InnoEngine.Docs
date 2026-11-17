---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.extensibility.modules.8e422304490c709d
symbol: engine:Inno.Extensibility.Modules:T:Inno.Extensibility.Modules.AssemblyCatalogSnapshot
title: AssemblyCatalogSnapshot
kind: api
owners:
- Inno.Extensibility.Modules
apiSurface: source-clr
reviewed: d31b1cd8a543bb097107449e164d9e2552b1df3af632d50bd7529b404d7ed5ef
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
