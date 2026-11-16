---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.17de4cb3db3d8cf23226c912fe423b25890c8eb3d3b318dc623b18d841c1a040
symbol: engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.ModuleHost.Register(System.String,System.Collections.Generic.IReadOnlyList{System.Reflection.Assembly})
title: ModuleHost.Register
kind: api
owners:
- Inno.Extensibility.Modules
apiSurface: source-clr
reviewed: 6e11e57cbeca3b67bf15dc040c378b9e93aac9ebd767e312a3a8f6ba7b3e7d93
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
