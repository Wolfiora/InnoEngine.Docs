---
uid: api.f4cf5e273a8aac5841e166b594bc6aa97f9aa397a979812b158ef9f9c327fdde
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeCMakeSource.ResolveDefinition(System.String)"
source: xml
reviewed: 2bc65936e101d8bdb617812e13f9f98cabfd2328c192ed440ea4766d526a7e31
title: "ResolveDefinition"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Resolves declared input paths in one CMake definition without redirecting output or SDK locations.

**Parameter `argument`:** An ordered CMake argument; definition values may contain semicolon-separated paths.

**Returns:** The definition with known input paths redirected, or the original nondefinition argument.

**Exception `T:System.ArgumentNullException`:** The argument is null.
