---
uid: api.6935c8572dae4ae88f8643e1a4cebf33b7138020aff94ea71cc5c00e01171341
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderIrBuilder.Input(System.String,InnoEditor.Rendering.Shaders.ShaderSourceType)"
source: xml
reviewed: 9aacc6c12da15dac1d0278ce115f0dd93f501d76c60d954e77a3deb63eca25d2
title: "ShaderIrBuilder.Input"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Reads a named input from the enclosing typed function or stage interface.

## Parameters

**Parameter `name`:** Stable interface identity; it is not emitted as native source verbatim.

**Parameter `type`:** Complete non-void input type.

## Returns

The shared input value for this name and type.

## Exceptions

**Exception `T:System.ArgumentException`:** The name is empty, type is void, or this input was already declared with another type.
