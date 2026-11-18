---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.57a69b90e40d98322a117a98b5f78855b1fddb476cdd0105a9de6123e59c07c5
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeCMakeSource.ResolvePath(System.String)
title: NativeCMakeSource.ResolvePath
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 7efee4c3c22d9f8a28c4ee3edc097710e298b220faac143b92fba0c569f8a8cd
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** An absolute recipe input path. External SDK paths retain their original location.

## Returns

The copied checkout or binding input, or the unchanged external SDK location.

## Exceptions

**Exception `T:System.ArgumentException`:** The path is empty or relative.

**Exception `T:System.InvalidOperationException`:** A checkout or selected binding path was not declared by the recipe.
