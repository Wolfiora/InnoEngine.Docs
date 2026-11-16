---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.390699412dceae0d516db2319a4c2a059e6bb270acbad9fe05ff452368e6a029
symbol: engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.ModuleHost.Unload(System.Collections.Generic.IReadOnlyList{Inno.Extensibility.Modules.AssemblyModuleHandle})
title: ModuleHost.Unload
kind: api
owners:
- Inno.Extensibility.Modules
apiSurface: source-clr
reviewed: 22b54c9107c254627204777770a646ee17656f96fa73539e987b106d361f3133
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `modules`:** The distinct active module handles to remove.

## Returns

A monitor that completes after every collectible context becomes unreachable.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `modules` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when a handle is duplicated or is not active.
