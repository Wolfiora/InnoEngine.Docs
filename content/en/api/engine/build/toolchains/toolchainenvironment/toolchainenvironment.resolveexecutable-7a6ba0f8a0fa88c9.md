---
uid: api.7a6ba0f8a0fa88c9de9bbdab7ba6153f26516ab9e15dd6a322eceb319f232885
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ToolchainEnvironment.ResolveExecutable(System.String)"
source: xml
reviewed: fda3ccb74caf7cdf89161664366432de8ab9c7bd9c5ed4b96595a9b383864a89
title: "ToolchainEnvironment.ResolveExecutable"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Resolves one explicitly selected executable before it becomes a build input.

**Parameter `name`:** An executable path or a command name available on the current process PATH.

**Returns:** The absolute executable path used for process execution and artifact identity.

**Exception `T:System.ArgumentException`:** The name is empty.

**Exception `T:System.IO.FileNotFoundException`:** The executable is unavailable at the supplied path or on PATH.
