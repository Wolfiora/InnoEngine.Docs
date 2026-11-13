---
uid: api.98b80c6e4f99f0f67df9ba121cf6a3eeaa1ef05183c40ae6052346b1f3aa329e
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.AssemblyExtensions.GetInnoAssemblyScope(System.Reflection.Assembly)"
source: xml
reviewed: 97b3ad3a1c19c9bbdc60a5c053a273a878256af666beb7b6b27cfc3e5ba4987f
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
