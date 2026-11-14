---
uid: api.11a428b8ec3420d31a8d67bf5ccc0fcfdfb3a4412d27447c89b0bfc4df317539
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderSourceType.Structure(System.String,System.Collections.Generic.IEnumerable{Inno.Rendering.Shaders.ShaderSourceField})"
source: xml
reviewed: aad57b06e7a5421a954a798532b89957fb95546884ede20a64e38ed922a95b9a
title: "ShaderSourceType.Structure"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Creates a nominal structure with a validated immutable field layout.

**Parameter `id`:** Public structure identity shared by alternative implementations.

**Parameter `fields`:** Unique named fields in declaration order.

**Returns:** An immutable structure type.

**Exception `T:System.ArgumentException`:** The identity is reserved, or fields are empty, null, or duplicated.
