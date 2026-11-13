---
uid: api.cf71e05cd4271c17da1272a115e1875faf7dc2d6b9517ea576ea20270e1a6b3f
symbol: "engine:Inno.Editor.Shaders.ImGui:M:Inno.Editor.Shaders.ImGui.ShaderNodeDrawContext.#ctor(Inno.Core.Graphs.GraphNodeRecord,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,System.Action{System.String,Inno.Core.Graphs.GraphSerializedValue,System.String},Inno.Editor.Rendering.IEditorPreviewService,Inno.Editor.Inspection.InspectionDrawContext,System.Boolean)"
source: xml
reviewed: 9539df8af81df1e74a9efd2301fa84eb32c5b9ec4a0f2177e9df190e63467750
title: "Constructor"
kind: api
owners: [Inno.Editor.Shaders.ImGui]
apiSurface: source-clr
---

Creates invocation-scoped access for a graph or Inspector host.

**Parameter `node`:** Detached node values for this invocation.

**Parameter `serialization`:** Current owner converter registry.

**Parameter `context`:** Complete owner reference context.

**Parameter `write`:** Host callback recording changes in the shared draft history.

**Parameter `previews`:** Current generation preview service.

**Parameter `inspection`:** Shared Inspector context, including native property controls and drag/drop.

**Parameter `readOnly`:** Whether the source belongs to an immutable installation.
