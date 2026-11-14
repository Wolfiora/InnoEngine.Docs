---
uid: api.9197975214112e461aaa3e6479ba9bf0520bb3bc2c23e9640e051a21f93928a9
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphPrograms.RemovePass(InnoEngine.Graphs.GraphDocument,System.String,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: a15e6215416a4332eafa7036b96bad4feb71a714323f140bfff72cca30355b15
title: "ShaderGraphPrograms.RemovePass"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Removes a pass and only computations whose final referencing pass was removed.

**Parameter `graph`:** Source document, never modified.

**Parameter `pass`:** Existing pass identity.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.

**Returns:** A candidate preserving programs shared by other passes and their parameter declarations.
