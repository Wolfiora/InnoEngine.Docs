---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ccabbfd5222343c04aa9d36dcf17832570a8359777985ad3364b1bff6b679c29
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeCMakeExecutor.FindOutput(Inno.Build.Toolchains.NativeBuildContext,System.String,System.String)
title: NativeCMakeExecutor.FindOutput
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 39b41420e3e6a00ea370a9b358d16e7dd0e523ee75ddbb5aa8c320dd7464bcf2
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The selected configuration and target generator policy.

**Parameter `buildDirectory`:** The component-owned CMake intermediate directory.

**Parameter `filePattern`:** The component's exact basename or bounded filename pattern.

## Returns

The sole matching output, or an explicit failure for a missing or ambiguous result.

## Exceptions

**Exception `T:System.IO.FileNotFoundException`:** The component did not produce exactly one expected output.
