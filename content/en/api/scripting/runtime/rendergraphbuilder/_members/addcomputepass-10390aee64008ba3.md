---
uid: api.10390aee64008ba387110c152f80c60e66f0db233ad17fe64373de25845070a9
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderGraphBuilder.AddComputePass\u0060\u00601(System.String,InnoEngine.Rendering.RenderPhaseId,\u0060\u00600,InnoEngine.Rendering.RenderPassExecute{\u0060\u00600})"
source: xml
reviewed: f921c754df687bcd3816fa20ea3b3a3f03db5f2bbf0268669654edbf94fed79d
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
