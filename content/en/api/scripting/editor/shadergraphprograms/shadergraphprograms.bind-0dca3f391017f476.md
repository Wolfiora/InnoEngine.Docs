---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.0dca3f391017f47671a3d4fdcbcd07c0586f38f9715d515f6c2d803383b22958
symbol: scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphPrograms.Bind(InnoEngine.Graphs.GraphDocument,System.String,System.Collections.Generic.IEnumerable{InnoEngine.Graphs.GraphNodeId},InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)
title: ShaderGraphPrograms.Bind
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
sourceFingerprint: aead5cabdbe973d3d800a602146dc5525e6ae778e67c5e145c39e54d527fd975
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `graph`:** Source document, never modified.

**Parameter `pass`:** Existing pass identity.

**Parameter `stages`:** Existing stage output node identities; an empty set preserves an incomplete pass.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.

## Returns

A candidate suitable for one shared History transaction.
