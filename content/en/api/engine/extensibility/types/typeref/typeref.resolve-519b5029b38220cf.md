---
uid: api.519b5029b38220cf6a642d59d81aeb3acea142367b8d41e79bbe16730233a4ce
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRef.Resolve(Inno.Extensibility.Types.TypeCacheSnapshot)"
source: xml
reviewed: e9fdebe8c09f475cd83d88dcc9e58fa8273ab5d22e5192027f32836506215cc9
title: "TypeRef.Resolve"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Resolves this reference against a specific immutable type-cache snapshot.

**Parameter `snapshot`:** The snapshot that defines the required assembly generation.

**Returns:** The CLR type represented by this reference in `snapshot`.

**Exception `T:System.ArgumentNullException`:** Thrown when `snapshot` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the reference is empty or the logical type does not exist in the snapshot.
