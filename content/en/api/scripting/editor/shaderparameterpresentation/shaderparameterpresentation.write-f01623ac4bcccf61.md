---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f01623ac4bcccf6116a1976507277c61346aed5a2d34501b121b68b317f28805
symbol: scripting:Inno.Editor.Shaders:M:InnoEditor.Shaders.ShaderParameterPresentation.Write(InnoEngine.Graphs.GraphDocument,InnoEngine.Rendering.ShaderPropertyID,InnoEditor.Shaders.ShaderParameterPresentation,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)
title: ShaderParameterPresentation.Write
kind: api
owners:
- Inno.Editor.Shaders
apiSurface: editor-script
sourceFingerprint: 46aee9e9d4a5667c0028d0643c1bc09d2aea7d37c269f76f0f0400999b0c0b5d
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `graph`:** Detached graph owned by the caller's History transaction.

**Parameter `propertyID`:** Stable parameter identity.

**Parameter `presentation`:** Detached Inspector settings.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner serialization context.

## Exceptions

**Exception `T:System.ArgumentException`:** The identity or range is invalid, or a bound cannot be represented by a scalar Shader Float.
