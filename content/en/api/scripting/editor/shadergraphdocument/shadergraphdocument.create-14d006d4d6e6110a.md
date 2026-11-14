---
uid: api.14d006d4d6e6110ae0c109807690230961f9a4cbe08d3f3b9d5407f39887c264
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphDocument.Create(InnoEngine.Rendering.ShaderDefinition,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)"
source: xml
reviewed: 2ccf450681708bdaef0736abbc58113d04d4c68db1ddc7d6735e8caca8cb3c2a
title: "ShaderGraphDocument.Create"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Creates an empty graph with a source-free shader contract; incomplete graphs remain serializable.

## Parameters

**Parameter `definition`:** Material parameters, techniques and pass state.

**Parameter `serialization`:** The owner converter registry.

**Parameter `context`:** The complete owner reference context.

## Returns

A detached graph ready for authoring.
