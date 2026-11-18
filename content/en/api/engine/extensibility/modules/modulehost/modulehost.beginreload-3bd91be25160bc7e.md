---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.3bd91be25160bc7e312ec319f5d208bc66ef46036e352d93391db3fdb1126f05
symbol: engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.ModuleHost.BeginReload(Inno.Extensibility.Modules.AssemblyModuleHandle,Inno.Extensibility.Modules.IModuleSource)
title: ModuleHost.BeginReload
kind: api
owners:
- Inno.Extensibility.Modules
apiSurface: source-clr
sourceFingerprint: 45fed7feca3f30befd32244224e389b54b92de4f43579e302d28445edb8006ef
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
