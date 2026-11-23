---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.89919e45e7a11dafc3a0b790cb486cd79070121ba003582a737e8d2fca451dad
symbol: engine:Inno.Rendering:M:Inno.Rendering.RenderGraphBuilder.AddRasterPass``1(System.String,Inno.Rendering.RenderPhaseID,``0,Inno.Rendering.RenderPassExecute{``0})
title: RenderGraphBuilder.AddRasterPass
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
sourceFingerprint: d2e43676f8ef9bf0e5ef229c08cb3fcbd96f0c1f3bab8cc056e6eb8073135ac4
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
