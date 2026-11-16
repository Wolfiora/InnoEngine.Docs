---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7a6ba0f8a0fa88c9de9bbdab7ba6153f26516ab9e15dd6a322eceb319f232885
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ToolchainEnvironment.ResolveExecutable(System.String)
title: ToolchainEnvironment.ResolveExecutable
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 2201d8872c4f274bc7b7df80d3bc8d283cb34ad40755d6cf4e39e273952a2b15
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `name`:** An executable path or a command name available on the current process PATH.

## Returns

The absolute executable path used for process execution and artifact identity.

## Exceptions

**Exception `T:System.ArgumentException`:** The name is empty.

**Exception `T:System.IO.FileNotFoundException`:** The executable is unavailable at the supplied path or on PATH.
