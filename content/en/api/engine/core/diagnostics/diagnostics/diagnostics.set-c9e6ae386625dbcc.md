---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c9e6ae386625dbcc1504d7c52b39c5ca93733dafca5e9f65cf7fa6a4a25f9b06
symbol: engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.Diagnostics.Set(System.String,Inno.Core.Diagnostics.Diagnostic)
title: Diagnostics.Set
kind: api
owners:
- Inno.Core.Diagnostics
apiSurface: source-clr
reviewed: ed9c64add86945fe0d451c1f45c674ecca62ff7fb6b3bd1dde2319301608b0c1

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `group`:** The non-empty responsibility name scoped to the calling type.

**Parameter `diagnostic`:** The single current diagnostic. It replaces every previous entry in the group.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `group` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `diagnostic` is `null`.
