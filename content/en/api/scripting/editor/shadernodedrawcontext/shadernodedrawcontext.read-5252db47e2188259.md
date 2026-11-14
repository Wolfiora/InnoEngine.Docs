---
uid: api.5252db47e2188259e54bf5171dba1148b4edeaa7ef72d9b9932e12f8aac56133
symbol: "scripting:Inno.Editor.Shaders.ImGui:M:InnoEditor.Shaders.ShaderNodeDrawContext.Read\u0060\u00601(System.String,\u0060\u00600)"
source: xml
reviewed: 5994337fd1135a230861f3a4a733d3febc8026484f8a9f5e84c9ac45595dcfbf
title: "ShaderNodeDrawContext.Read"
kind: api
owners: [Inno.Editor.Shaders.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Reads a detached property value; missing values use the node's declared default.

## Type parameters

**Type parameter `T`:** Native serializable property type.

## Parameters

**Parameter `key`:** Stable node-local property key.

**Parameter `defaultValue`:** Default used only when the property is absent.

## Returns

The detached value. Malformed stored data is not silently replaced.
