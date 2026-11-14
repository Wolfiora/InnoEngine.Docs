---
uid: api.f4cf5e273a8aac5841e166b594bc6aa97f9aa397a979812b158ef9f9c327fdde
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeCMakeSource.ResolveDefinition(System.String)"
source: xml
reviewed: ec353a97fa477c1f8dbf17987d41b1231eb7eb81b3e4d618fba7f980233c5f4b
title: "NativeCMakeSource.ResolveDefinition"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Resolves declared input paths in one CMake definition without redirecting output or SDK locations.

## Parameters

**Parameter `argument`:** An ordered CMake argument; definition values may contain semicolon-separated paths.

## Returns

The definition with known input paths redirected, or the original nondefinition argument.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The argument is null.
