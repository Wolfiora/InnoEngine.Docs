---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0c3ab5a561e61d3287d2bdf76e1e5374421c40cd20462f4a206579e32e211739
symbol: engine:Inno.Rendering:M:Inno.Rendering.RenderGraphBuilder.AddComputePass``1(System.String,Inno.Rendering.RenderPhaseId,``0,Inno.Rendering.RenderPassExecute{``0})
title: RenderGraphBuilder.AddComputePass
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
reviewed: 1c8793b3223109a75e89477937b97846391cb148762fb3cf021a8eca7e8ea716

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Adds a frame-scoped compute pass.

## Type parameters

**Type parameter `TPassData`:** Pass payload type.

## Parameters

**Parameter `name`:** Unique diagnostic name.

**Parameter `phase`:** Open render phase identifier.

**Parameter `passData`:** Payload that lives only until this graph executes.

**Parameter `execute`:** Command recording callback.

## Returns

A builder for compute resources and ordering.
