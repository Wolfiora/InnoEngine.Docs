---
uid: api.63a7f3ec1262c5288a60cfa59a8afd64915b2b31e6f066b9324ad33c645011c1
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.AssemblyExtensions.GetInnoAssemblyDomain(System.Reflection.Assembly)"
source: xml
reviewed: 866c5c239ff00500e624c1090b26a67641a0f04cea28db1c5ae2668b469c4e48
title: "GetInnoAssemblyDomain"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
---

Resolves the reload domain declared by an assembly.

**Parameter `assembly`:** The assembly whose metadata should be inspected.

**Returns:** The declared assembly domain.

**Exception `T:System.ArgumentNullException`:** Thrown when `assembly` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the metadata is absent or invalid.
