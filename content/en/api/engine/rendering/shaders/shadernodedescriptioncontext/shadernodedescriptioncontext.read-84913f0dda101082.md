---
uid: api.84913f0dda101082bac37d137960a3cb04c9ac17e172762092a927203add1bf7
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderNodeDescriptionContext.Read\u0060\u00601(System.String,\u0060\u00600)"
source: xml
reviewed: c000bcd5f6c50aee8bcc883383f1549b8a3331c84ec45bc1151b2dc25e7e5757
title: "ShaderNodeDescriptionContext.Read"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Reads a property using the owner's converter generation and complete reference resolver context.

**Type parameter `T`:** Declared property type supported by the native serializer.

**Parameter `id`:** Stable property identity.

**Parameter `defaultValue`:** Value used only when the property is absent, never after corrupt-data failure.

**Returns:** The deserialized value or the supplied absent-property default.
