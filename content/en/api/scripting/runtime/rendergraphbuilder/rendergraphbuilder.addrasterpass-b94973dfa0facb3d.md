---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b94973dfa0facb3d00d7f9e064cce98a15695da7f76024b7ef3d058210d8e5fb
symbol: scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderGraphBuilder.AddRasterPass``1(System.String,InnoEngine.Rendering.RenderPhaseID,``0,InnoEngine.Rendering.RenderPassExecute{``0})
title: RenderGraphBuilder.AddRasterPass
kind: api
owners:
- Inno.Rendering
apiSurface: editor-script
sourceFingerprint: 3317fb1146642aa4586f38aa56cd46972e55e306984e709e92b001f25715f612
apiScope: Runtime
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
