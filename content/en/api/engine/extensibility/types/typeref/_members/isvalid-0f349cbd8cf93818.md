---
uid: api.0f349cbd8cf9381808114cb6726239d05909a470e2961eba5bca74ea2bd1b94e
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRef.IsValid(Inno.Extensibility.Types.TypeCatalog)"
source: xml
reviewed: c17ff947948be240f4803e5591505fceeabc501ca3a2004f28052fddf9ead0f8
title: "IsValid"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Determines whether one type catalog currently resolves this reference.

**Parameter `catalog`:** The catalog whose active immutable generation should be queried.

**Returns:** `true` when the reference is non-empty and currently resolvable.

**Exception `T:System.ArgumentNullException`:** Thrown when `catalog` is null.
