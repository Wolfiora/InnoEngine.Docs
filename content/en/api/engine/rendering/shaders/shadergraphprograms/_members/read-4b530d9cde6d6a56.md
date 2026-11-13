---
uid: api.4b530d9cde6d6a5627d6e4e62657012399f6b6067cc1d7b6ccaaf0680de88869
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphPrograms.Read(Inno.Core.Graphs.GraphDocument,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: f59279286517a2aadeb3a2e3f252141077ad2f0acbc9bfafb497319412719b86
title: "Read"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Reads detached pass-to-stage references, including unresolved authored identities.

**Parameter `graph`:** Shader authoring document.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.

**Returns:** Detached native references; corrupt or missing program metadata is an error.
