---
uid: api.bc53c2efa8c96e2202ec7e7c766e694919302de18abdbffbd864eaf31e39907e
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeLinkPlan.GetFileExtension(Inno.Build.Toolchains.NativeLibraryKind)"
source: xml
reviewed: ee46b4d8c388231b9c1da1523341bdccf60be081234472c48a994416d676d778
title: "NativeLinkPlan.GetFileExtension"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Resolves an explicitly supported linkage format before staging or generation begins.

## Parameters

**Parameter `kind`:** The component's requested linkage.

## Returns

The selected file extension; unsupported linkage fails immediately.

## Exceptions

**Exception `T:System.NotSupportedException`:** The platform does not contribute this linkage format.

**Exception `T:System.ArgumentOutOfRangeException`:** The linkage kind is not defined.
