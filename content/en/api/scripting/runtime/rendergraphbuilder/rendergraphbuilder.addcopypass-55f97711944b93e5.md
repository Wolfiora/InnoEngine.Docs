---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.55f97711944b93e5a579b8686ccb38b13c5c7176f0344771886ccededc2ba5d7
symbol: scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderGraphBuilder.AddCopyPass``1(System.String,InnoEngine.Rendering.RenderPhaseID,``0,InnoEngine.Rendering.RenderPassExecute{``0})
title: RenderGraphBuilder.AddCopyPass
kind: api
owners:
- Inno.Rendering
apiSurface: editor-script
sourceFingerprint: 370d4c467bc5ec4c0b2c310f65cf972e1c0493e45d7b14bc1502b00c1e2ffa9d
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
