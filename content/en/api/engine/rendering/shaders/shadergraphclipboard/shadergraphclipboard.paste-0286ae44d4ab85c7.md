---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0286ae44d4ab85c75bc4cb1695837d3d5567eda37e276d5097b43742e0817ae2
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphClipboard.Paste(Inno.Core.Graphs.GraphDocument,Inno.Core.Graphs.GraphDocument,System.Boolean,System.Nullable{Inno.Core.Graphs.GraphNodeId},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)
title: ShaderGraphClipboard.Paste
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
reviewed: 70a144af4fef3c90531f39c630b539d3f79e43d32a731438d801533fcade8267
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `graph`:** Destination document, never changed.

**Parameter `fragment`:** Detached copied fragment, never changed.

**Parameter `preserveExternalStageReferences`:** Whether references to existing destination stages belong to the same document.

**Parameter `activeStage`:** Destination stage for copied non-stage nodes.

**Parameter `serialization`:** Current native converter registry.

**Parameter `context`:** Owner reference context.

## Returns

A complete candidate suitable for one History transaction.
