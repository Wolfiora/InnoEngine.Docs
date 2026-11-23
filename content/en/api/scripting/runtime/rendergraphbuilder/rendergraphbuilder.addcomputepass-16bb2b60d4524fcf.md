---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.16bb2b60d4524fcfcea5557cc677fd55e2be1f77ddfa25db13d606b31b637759
symbol: scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderGraphBuilder.AddComputePass``1(System.String,InnoEngine.Rendering.RenderPhaseID,``0,InnoEngine.Rendering.RenderPassExecute{``0})
title: RenderGraphBuilder.AddComputePass
kind: api
owners:
- Inno.Rendering
apiSurface: editor-script
sourceFingerprint: ddd7f77532b78250396d1959046cec970c2a54fbaf20171b688f5e62ab09308b
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

A builder for compute resources and ordering.
