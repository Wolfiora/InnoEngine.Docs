---
uid: api.be4db263ce21967328743bcd1d2b1de4622a217a1a62136fd897dc6723adcb2d
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderStorageType.Buffer(InnoEditor.Rendering.Shaders.ShaderSourceType,InnoEngine.Rendering.RenderStorageAccess)"
source: xml
reviewed: a41ecdb7b98020de0205724b515bb7e8206504d46cc84155a88e828925b3f91f
title: "ShaderStorageType.Buffer"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Creates a structured storage buffer with an explicit element layout.

## Parameters

**Parameter `element`:** Non-void value layout; resources cannot be embedded in buffer elements.

**Parameter `access`:** Permitted memory operations.

## Returns

An immutable storage buffer description.

## Exceptions

**Exception `T:System.ArgumentException`:** The element contains void or resource handles.
