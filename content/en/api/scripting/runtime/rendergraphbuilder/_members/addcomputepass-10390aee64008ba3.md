---
uid: api.10390aee64008ba387110c152f80c60e66f0db233ad17fe64373de25845070a9
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderGraphBuilder.AddComputePass\u0060\u00601(System.String,InnoEngine.Rendering.RenderPhaseId,\u0060\u00600,InnoEngine.Rendering.RenderPassExecute{\u0060\u00600})"
source: xml
reviewed: e76f1d0bbb796be9a8f0e2ff157d0b8a07f5586dc53a00ccf2093142587701e5
title: "AddComputePass"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Adds a frame-scoped compute pass.

**Type parameter `TPassData`:** Pass payload type.

**Parameter `name`:** Unique diagnostic name.

**Parameter `phase`:** Open render phase identifier.

**Parameter `passData`:** Payload that lives only until this graph executes.

**Parameter `execute`:** Command recording callback.

**Returns:** A builder for compute resources and ordering.
