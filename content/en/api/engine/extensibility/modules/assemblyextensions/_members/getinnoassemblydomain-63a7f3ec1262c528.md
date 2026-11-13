---
uid: api.63a7f3ec1262c5288a60cfa59a8afd64915b2b31e6f066b9324ad33c645011c1
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.AssemblyExtensions.GetInnoAssemblyDomain(System.Reflection.Assembly)"
source: xml
reviewed: 5312299a473be51b689679b496d54ff84a5d32f30629cede40ec4c14b8b234a0
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
