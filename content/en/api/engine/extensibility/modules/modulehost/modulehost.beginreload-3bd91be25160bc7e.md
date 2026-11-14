---
uid: api.3bd91be25160bc7e312ec319f5d208bc66ef46036e352d93391db3fdb1126f05
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.ModuleHost.BeginReload(Inno.Extensibility.Modules.AssemblyModuleHandle,Inno.Extensibility.Modules.IModuleSource)"
source: xml
reviewed: c3c522ae54ee726b4484cfc35bf489958f5e1f808789872c37424aca13e4f25e
title: "ModuleHost.BeginReload"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
---

Stages and validates a replacement generation without publishing it.

## Parameters

**Parameter `module`:** The module consumed by begin reload; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `request`:** The validated immutable request that defines this operation.

## Returns

The validated assembly reload session that represents the completed operation.
