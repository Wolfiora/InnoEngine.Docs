---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.bc53c2efa8c96e2202ec7e7c766e694919302de18abdbffbd864eaf31e39907e
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeLinkPlan.GetFileExtension(Inno.Build.Toolchains.NativeLibraryKind)
title: NativeLinkPlan.GetFileExtension
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 4ef175cbdf53f3b3c763e3d2d1c8944f88294beed6ede80d38aa1b848c3ba4a9
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `kind`:** The component's requested linkage.

## Returns

The selected file extension; unsupported linkage fails immediately.

## Exceptions

**Exception `T:System.NotSupportedException`:** The platform does not contribute this linkage format.

**Exception `T:System.ArgumentOutOfRangeException`:** The linkage kind is not defined.
