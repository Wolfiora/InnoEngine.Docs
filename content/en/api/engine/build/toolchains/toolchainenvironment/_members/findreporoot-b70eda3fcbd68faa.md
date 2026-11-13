---
uid: api.b70eda3fcbd68faa3cf6b7fbcd0fab05691ccdb43966c58766a290773ff4c5ef
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ToolchainEnvironment.FindRepoRoot"
source: xml
reviewed: 57757c7e8a762c18af0daf0af43e6f6c0190966c709850e4ef97eb6304ed1b9e
title: "FindRepoRoot"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Resolves the repository containing the currently executing toolchain assembly.

**Returns:** The absolute path of the repository root.

**Exception `T:System.InvalidOperationException`:** Thrown when no repository marker exists above the toolchain assembly directory.
