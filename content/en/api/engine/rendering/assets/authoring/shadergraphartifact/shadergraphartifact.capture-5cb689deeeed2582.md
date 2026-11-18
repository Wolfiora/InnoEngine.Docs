---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5cb689deeeed25827d28797a0af5c9974a0d0b7a02a4449ca964f12bd2f8e449
symbol: engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.Capture(Inno.Core.Graphs.GraphDocument,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,System.Func{System.Guid,System.String,System.Byte[]},System.Threading.CancellationToken,System.Func{System.Guid,System.String,Inno.Core.Graphs.GraphDocument})
title: ShaderGraphArtifact.Capture
kind: api
owners:
- Inno.Rendering.Assets.Authoring
apiSurface: source-clr
sourceFingerprint: e08bbb407af7a5d87e2afc700921e1c9322cf1d71df835642bf3296ab22147f4
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `graph`:** Detached authoring document, including incomplete source records.

**Parameter `types`:** Current leased authoring generation.

**Parameter `serialization`:** Owner converters.

**Parameter `context`:** Complete owner reference and dependency context.

**Parameter `readSource`:** Reads an immutable function bundle by stable identity and diagnostic last-known path.

**Parameter `cancellationToken`:** Cancellation before node expansion, target expansion and dependency reads.

**Parameter `readGraph`:** Reads an authored Shader graph used as a reusable node, when the graph contains one.

## Returns

Native immutable authoring artifact bytes usable by import or isolated preview compilation.
