---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b365d0694e8e7f9cdada1f517f080530cb8f077acdff57a415b37c580e642644
symbol: scripting:Inno.Editor.Shaders:M:InnoEditor.Shaders.ShaderParameterPresentation.Write(InnoEngine.Graphs.GraphDocument,InnoEngine.Rendering.ShaderPropertyId,InnoEditor.Shaders.ShaderParameterPresentation,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)
title: ShaderParameterPresentation.Write
kind: api
owners:
- Inno.Editor.Shaders
apiSurface: editor-script
reviewed: 11f30651960f2f224f3c9dcb5b6981cc16b15134a3b4d06118e451368b1ab5b4
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `graph`:** Detached graph owned by the caller's History transaction.

**Parameter `propertyId`:** Stable parameter identity.

**Parameter `presentation`:** Detached Inspector settings.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner serialization context.

## Exceptions

**Exception `T:System.ArgumentException`:** The identity or range is invalid, or a bound cannot be represented by a scalar Shader Float.
