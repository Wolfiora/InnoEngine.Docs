---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2b674fb308a9950606778b5ea3cc0800d0c6d7e7766847f1c382aaa74f1748a3
symbol: engine:Inno.Rendering:M:Inno.Rendering.RenderGraphBuilder.AddCopyPass``1(System.String,Inno.Rendering.RenderPhaseID,``0,Inno.Rendering.RenderPassExecute{``0})
title: RenderGraphBuilder.AddCopyPass
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
sourceFingerprint: 8c072c868f126f0038fad545f92fbfae87e8b3e694ff4071d53d6239e7bda4a9
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

A builder for copy resources and ordering.
