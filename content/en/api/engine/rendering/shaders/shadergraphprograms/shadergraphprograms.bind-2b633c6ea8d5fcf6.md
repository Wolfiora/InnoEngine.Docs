---
uid: api.2b633c6ea8d5fcf659a396fa8701c0a5221460b95af6108b824ccff0471c64e6
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphPrograms.Bind(Inno.Core.Graphs.GraphDocument,System.String,System.Collections.Generic.IEnumerable{Inno.Core.Graphs.GraphNodeId},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: 56a86745255a1b8b61be0fabf488594d48221988bdb9bd2b64b4ef0816c9ff35
title: "ShaderGraphPrograms.Bind"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Assigns existing shared stages to one pass in an atomic detached candidate.

**Parameter `graph`:** Source document, never modified.

**Parameter `pass`:** Existing pass identity.

**Parameter `stages`:** Existing stage output node identities; an empty set preserves an incomplete pass.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.

**Returns:** A candidate suitable for one shared History transaction.
