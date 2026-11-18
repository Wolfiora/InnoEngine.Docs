---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.17de4cb3db3d8cf23226c912fe423b25890c8eb3d3b318dc623b18d841c1a040
symbol: engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.ModuleHost.Register(System.String,System.Collections.Generic.IReadOnlyList{System.Reflection.Assembly})
title: ModuleHost.Register
kind: api
owners:
- Inno.Extensibility.Modules
apiSurface: source-clr
sourceFingerprint: 1e967c1ef357bb7159234b863ebf896401e2f75bf49f3c51e52fbf9a2ba4857f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `moduleName`:** The module name text validated by the register operation.

**Parameter `assemblies`:** The assemblies consumed by register; ownership remains with the caller unless explicitly stated otherwise.

## Returns

The validated assembly module handle that represents the completed operation.
