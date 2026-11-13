---
uid: api.d72e80b3044a52636867f9a0f73d454cf953b67ccd5f5d13c2be603d329d71f8
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphPrograms.RemovePass(Inno.Core.Graphs.GraphDocument,System.String,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: 404b7f368533d62aaa1d9804397ac1edec052147f58bd88dc3fca8acd7a6ee86
title: "RemovePass"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Removes a pass and only computations whose final referencing pass was removed.

**Parameter `graph`:** Source document, never modified.

**Parameter `pass`:** Existing pass identity.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.

**Returns:** A candidate preserving programs shared by other passes and their parameter declarations.
