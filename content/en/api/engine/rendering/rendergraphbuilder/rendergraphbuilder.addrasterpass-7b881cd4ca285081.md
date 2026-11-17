---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7b881cd4ca2850818fc71784d01155f2970f5dac4ea24fdef7754e755fad1fcb
symbol: engine:Inno.Rendering:M:Inno.Rendering.RenderGraphBuilder.AddRasterPass``1(System.String,Inno.Rendering.RenderPhaseId,``0,Inno.Rendering.RenderPassExecute{``0})
title: RenderGraphBuilder.AddRasterPass
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
reviewed: 4255d3bf54fc9781b7f6893d366ca4306b64b624302cae922b5aeb7bd0c7c4df
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
