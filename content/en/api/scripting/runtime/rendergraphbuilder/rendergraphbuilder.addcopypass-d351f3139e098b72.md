---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d351f3139e098b72146408ac116b4c84a99a1e5fdc4865c7d555fa2dd96cef3c
symbol: scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderGraphBuilder.AddCopyPass``1(System.String,InnoEngine.Rendering.RenderPhaseId,``0,InnoEngine.Rendering.RenderPassExecute{``0})
title: RenderGraphBuilder.AddCopyPass
kind: api
owners:
- Inno.Rendering
apiSurface: editor-script
reviewed: 37ce8d7f4a5608413460c51122021c09d05362202458ac2cce2ead868002a547
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

A builder for copy resources and ordering.
