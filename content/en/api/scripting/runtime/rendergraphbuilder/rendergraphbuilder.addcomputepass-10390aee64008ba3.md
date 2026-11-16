---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.10390aee64008ba387110c152f80c60e66f0db233ad17fe64373de25845070a9
symbol: scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderGraphBuilder.AddComputePass``1(System.String,InnoEngine.Rendering.RenderPhaseId,``0,InnoEngine.Rendering.RenderPassExecute{``0})
title: RenderGraphBuilder.AddComputePass
kind: api
owners:
- Inno.Rendering
apiSurface: editor-script
reviewed: 61696f6b688e17cd5ea270febe221b493a98410ff3c49e02ac5c0440554ec6cf
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
