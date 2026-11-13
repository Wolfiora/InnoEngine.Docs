---
uid: api.6935c8572dae4ae88f8643e1a4cebf33b7138020aff94ea71cc5c00e01171341
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Input(System.String,InnoEditor.Rendering.Shaders.ShaderSourceType)"
source: xml
reviewed: 98e4a17abda97aa8c6965331adf89e4924262a7b85f61ef9c87e3266b6c26eb4
title: "Input"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Reads a named input from the enclosing typed function or stage interface.

**Parameter `name`:** Stable interface identity; it is not emitted as native source verbatim.

**Parameter `type`:** Complete non-void input type.

**Returns:** The shared input value for this name and type.

**Exception `T:System.ArgumentException`:** The name is empty, type is void, or this input was already declared with another type.
