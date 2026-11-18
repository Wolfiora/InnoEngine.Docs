---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.bc53c2efa8c96e2202ec7e7c766e694919302de18abdbffbd864eaf31e39907e
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeLinkPlan.GetFileExtension(Inno.Build.Toolchains.NativeLibraryKind)
title: NativeLinkPlan.GetFileExtension
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 5f2d86151723404f2a009dca9bd9f2457c9d87a319b48f8fd4669e8480d34389
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
