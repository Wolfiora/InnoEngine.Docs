---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7b881cd4ca2850818fc71784d01155f2970f5dac4ea24fdef7754e755fad1fcb
symbol: engine:Inno.Rendering:M:Inno.Rendering.RenderGraphBuilder.AddRasterPass``1(System.String,Inno.Rendering.RenderPhaseId,``0,Inno.Rendering.RenderPassExecute{``0})
title: RenderGraphBuilder.AddRasterPass
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
sourceFingerprint: 8dc15cd779b156bb1e50a920d574cac174e64275876ff4eb1f673c02ba5698d0
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TPassData`:** Pass payload type.

## Parameters

**Parameter `name`:** Unique diagnostic name.

**Parameter `phase`:** Open render phase identifier.

**Parameter `passData`:** Payload that lives only until this graph executes.

**Parameter `execute`:** Command recording callback.

## Returns

A builder for raster resources, attachments and ordering.
