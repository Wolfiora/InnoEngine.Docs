---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9bfa12bee53dd1d4c5ffe1a8eb4e8800c889ba012f00a1ac1e911d7f7398cefb
symbol: engine:Inno.Rendering:M:Inno.Rendering.RenderGraphBuilder.AddCopyPass``1(System.String,Inno.Rendering.RenderPhaseId,``0,Inno.Rendering.RenderPassExecute{``0})
title: RenderGraphBuilder.AddCopyPass
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
reviewed: 23d63845ce88ae4640346256fcf47af636de8e244c66eb4c85a897582709d1e3

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Adds a frame-scoped resource copy pass.

## Type parameters

**Type parameter `TPassData`:** Pass payload type.

## Parameters

**Parameter `name`:** Unique diagnostic name.

**Parameter `phase`:** Open render phase identifier.

**Parameter `passData`:** Payload that lives only until this graph executes.

**Parameter `execute`:** Command recording callback.

## Returns

A builder for copy resources and ordering.
