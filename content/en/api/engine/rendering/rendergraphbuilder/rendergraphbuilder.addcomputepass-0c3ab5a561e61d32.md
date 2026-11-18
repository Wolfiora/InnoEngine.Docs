---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.0c3ab5a561e61d3287d2bdf76e1e5374421c40cd20462f4a206579e32e211739
symbol: engine:Inno.Rendering:M:Inno.Rendering.RenderGraphBuilder.AddComputePass``1(System.String,Inno.Rendering.RenderPhaseId,``0,Inno.Rendering.RenderPassExecute{``0})
title: RenderGraphBuilder.AddComputePass
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
sourceFingerprint: ad787baf9f4fd5140c362025c3ba04140b99c030584af8e04dada7ad9548a3e3
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

A builder for compute resources and ordering.
