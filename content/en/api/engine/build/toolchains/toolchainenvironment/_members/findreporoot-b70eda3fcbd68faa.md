---
uid: api.b70eda3fcbd68faa3cf6b7fbcd0fab05691ccdb43966c58766a290773ff4c5ef
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ToolchainEnvironment.FindRepoRoot"
source: xml
reviewed: 69c5ac8e8213ac56f919fb500a6a2c6832d3de64a2612d12d33ff7397957a795
title: "FindRepoRoot"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Resolves the repository containing the currently executing toolchain assembly.

**Returns:** The absolute path of the repository root.

**Exception `T:System.InvalidOperationException`:** Thrown when no repository marker exists above the toolchain assembly directory.
