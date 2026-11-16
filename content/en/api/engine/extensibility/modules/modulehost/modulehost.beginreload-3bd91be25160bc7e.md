---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3bd91be25160bc7e312ec319f5d208bc66ef46036e352d93391db3fdb1126f05
symbol: engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.ModuleHost.BeginReload(Inno.Extensibility.Modules.AssemblyModuleHandle,Inno.Extensibility.Modules.IModuleSource)
title: ModuleHost.BeginReload
kind: api
owners:
- Inno.Extensibility.Modules
apiSurface: source-clr
reviewed: 96d1278901e17fcd306faa9350712d11960773e0b44c0f8b01241c11035328ff
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `module`:** The module consumed by begin reload; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `request`:** The validated immutable request that defines this operation.

## Returns

The validated assembly reload session that represents the completed operation.
