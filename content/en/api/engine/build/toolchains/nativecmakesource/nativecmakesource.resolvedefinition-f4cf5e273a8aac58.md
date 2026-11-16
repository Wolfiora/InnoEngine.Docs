---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f4cf5e273a8aac5841e166b594bc6aa97f9aa397a979812b158ef9f9c327fdde
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeCMakeSource.ResolveDefinition(System.String)
title: NativeCMakeSource.ResolveDefinition
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 2cb0616926b38284e1910447a10949c4304e457648c43beaccfbca2b09bcbcdf
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `argument`:** An ordered CMake argument; definition values may contain semicolon-separated paths.

## Returns

The definition with known input paths redirected, or the original nondefinition argument.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The argument is null.
