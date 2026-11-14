---
uid: api.a76942786bf6b4f4fca48e3a6318cc1b3e8c2c158f5de3213695581e5724361d
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderNodeDescriptionContext.Read\u0060\u00601(System.String,\u0060\u00600)"
source: xml
reviewed: 60252a60009de0462aefc7cd865a715d3c8b10f45ee6e2e2973f714804fba958
title: "ShaderNodeDescriptionContext.Read"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Reads a property using the owner's converter generation and complete reference resolver context.

**Type parameter `T`:** Declared property type supported by the native serializer.

**Parameter `id`:** Stable property identity.

**Parameter `defaultValue`:** Value used only when the property is absent, never after corrupt-data failure.

**Returns:** The deserialized value or the supplied absent-property default.
