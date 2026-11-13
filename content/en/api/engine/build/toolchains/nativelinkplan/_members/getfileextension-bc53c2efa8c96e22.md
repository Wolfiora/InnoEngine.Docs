---
uid: api.bc53c2efa8c96e2202ec7e7c766e694919302de18abdbffbd864eaf31e39907e
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeLinkPlan.GetFileExtension(Inno.Build.Toolchains.NativeLibraryKind)"
source: xml
reviewed: 5696715c5c80718a76e742968a1a605c38353e0d5540786174c2903d65e7ea37
title: "GetFileExtension"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Resolves an explicitly supported linkage format before staging or generation begins.

**Parameter `kind`:** The component's requested linkage.

**Returns:** The selected file extension; unsupported linkage fails immediately.

**Exception `T:System.NotSupportedException`:** The platform does not contribute this linkage format.

**Exception `T:System.ArgumentOutOfRangeException`:** The linkage kind is not defined.
