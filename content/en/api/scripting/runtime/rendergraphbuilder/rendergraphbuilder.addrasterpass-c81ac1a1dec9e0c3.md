---
uid: api.c81ac1a1dec9e0c3b4f95fc798140b5987316b37c2204b1d949fe7f57f263282
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderGraphBuilder.AddRasterPass\u0060\u00601(System.String,InnoEngine.Rendering.RenderPhaseId,\u0060\u00600,InnoEngine.Rendering.RenderPassExecute{\u0060\u00600})"
source: xml
reviewed: b1ef0246c516d8a304a8bfd07977e73c76b14b007be05795ecc683d4a5698f79
title: "RenderGraphBuilder.AddRasterPass"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Adds a frame-scoped raster pass.

## Type parameters

**Type parameter `TPassData`:** Pass payload type.

## Parameters

**Parameter `name`:** Unique diagnostic name.

**Parameter `phase`:** Open render phase identifier.

**Parameter `passData`:** Payload that lives only until this graph executes.

**Parameter `execute`:** Command recording callback.

## Returns

A builder for raster resources, attachments and ordering.
