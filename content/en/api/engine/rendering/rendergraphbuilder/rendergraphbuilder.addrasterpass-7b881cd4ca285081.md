---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7b881cd4ca2850818fc71784d01155f2970f5dac4ea24fdef7754e755fad1fcb
symbol: engine:Inno.Rendering:M:Inno.Rendering.RenderGraphBuilder.AddRasterPass``1(System.String,Inno.Rendering.RenderPhaseId,``0,Inno.Rendering.RenderPassExecute{``0})
title: RenderGraphBuilder.AddRasterPass
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
reviewed: a6ab2d5760cbbb3a7ca1f474e9cf146559ee28f719832ac29058a40ebc459bf7

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
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
