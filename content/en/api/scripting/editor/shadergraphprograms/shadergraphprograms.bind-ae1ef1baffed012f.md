---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ae1ef1baffed012f407b0217fc7366e6040b9673c2b246644995b00bac6b7420
symbol: scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphPrograms.Bind(InnoEngine.Graphs.GraphDocument,System.String,System.Collections.Generic.IEnumerable{InnoEngine.Graphs.GraphNodeID},InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext)
title: ShaderGraphPrograms.Bind
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
sourceFingerprint: c438f570b068d6363b313440e6863ec74796064a94d7ad4ceb0ed3b39af228a0
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
