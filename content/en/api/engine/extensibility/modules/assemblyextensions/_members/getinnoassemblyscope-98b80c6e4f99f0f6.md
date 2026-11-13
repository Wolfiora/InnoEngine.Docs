---
uid: api.98b80c6e4f99f0f67df9ba121cf6a3eeaa1ef05183c40ae6052346b1f3aa329e
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.AssemblyExtensions.GetInnoAssemblyScope(System.Reflection.Assembly)"
source: xml
reviewed: 5ff605b6a8a8fb392ade5783392915492fc2e725a2264c6b119d815f8c574e97
title: "GetInnoAssemblyScope"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
---

Resolves the dependency scope declared by an assembly.

**Parameter `assembly`:** The assembly whose metadata should be inspected.

**Returns:** The declared assembly scope.

**Exception `T:System.ArgumentNullException`:** Thrown when `assembly` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the metadata is absent or invalid.
