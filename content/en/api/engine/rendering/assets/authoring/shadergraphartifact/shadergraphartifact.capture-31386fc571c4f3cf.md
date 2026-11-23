---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.31386fc571c4f3cf0ea9252e56220493e1938cc586238a495a7ae9d79fe7ee9b
symbol: engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.Capture(Inno.Core.Graphs.GraphDocument,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,System.Func{System.Guid,System.String,System.Byte[]},System.Func{System.Guid,System.String,Inno.Core.Graphs.GraphDocument},System.Threading.CancellationToken)
title: ShaderGraphArtifact.Capture
kind: api
owners:
- Inno.Rendering.Assets.Authoring
apiSurface: source-clr
sourceFingerprint: 7a570a4c6d7721962e7485c7977b5695221281bb6258f97fa35199a76c879578
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

**Parameter `readGraph`:** Reads an authored Shader graph used as a reusable node, when the graph contains one.

**Parameter `cancellationToken`:** Cancellation before node expansion, target expansion and dependency reads.

## Returns

Native immutable authoring artifact bytes usable by import or isolated preview compilation.
