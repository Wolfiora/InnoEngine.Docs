---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c9e6ae386625dbcc1504d7c52b39c5ca93733dafca5e9f65cf7fa6a4a25f9b06
symbol: engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.Diagnostics.Set(System.String,Inno.Core.Diagnostics.Diagnostic)
title: Diagnostics.Set
kind: api
owners:
- Inno.Core.Diagnostics
apiSurface: source-clr
reviewed: 1094a9414353c90ee116f536ce986ca100bf65ab95f1214d3b302c5ff1790f53
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `group`:** The non-empty responsibility name scoped to the calling type.

**Parameter `diagnostic`:** The single current diagnostic. It replaces every previous entry in the group.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `group` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `diagnostic` is `null`.
