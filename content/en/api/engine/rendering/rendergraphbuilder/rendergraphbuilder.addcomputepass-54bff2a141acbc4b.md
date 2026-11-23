---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.54bff2a141acbc4bfd9684ae079489977c7a9ea2db4939fe0d12d844cc2f8fe6
symbol: engine:Inno.Rendering:M:Inno.Rendering.RenderGraphBuilder.AddComputePass``1(System.String,Inno.Rendering.RenderPhaseID,``0,Inno.Rendering.RenderPassExecute{``0})
title: RenderGraphBuilder.AddComputePass
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
sourceFingerprint: ee04b7c6e4280dfb6c0b16c6fd0df880e45f41ec8a8c48a08c0f1e195467ae70
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
