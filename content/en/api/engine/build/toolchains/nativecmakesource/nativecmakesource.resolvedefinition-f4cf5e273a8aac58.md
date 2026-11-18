---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f4cf5e273a8aac5841e166b594bc6aa97f9aa397a979812b158ef9f9c327fdde
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeCMakeSource.ResolveDefinition(System.String)
title: NativeCMakeSource.ResolveDefinition
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: fe548ec65669d7f3f38800508518c7d95dd28864eabd36e51f759f6cf1627585
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
