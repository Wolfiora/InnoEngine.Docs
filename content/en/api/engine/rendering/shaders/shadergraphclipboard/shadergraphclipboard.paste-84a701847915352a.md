---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.84a701847915352a6b26edfbd9e00db86f31cbd159979b7002cd21d6e5414ef0
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphClipboard.Paste(Inno.Core.Graphs.GraphDocument,Inno.Core.Graphs.GraphDocument,System.Boolean,System.Nullable{Inno.Core.Graphs.GraphNodeID},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)
title: ShaderGraphClipboard.Paste
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
sourceFingerprint: 78040daacde52f8fffb1a6c937e2551a7d7ec3148d515bc64119d5108946ff15
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
