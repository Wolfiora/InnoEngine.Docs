---
uid: api.63605e8e0d0fe0303b7b4644f9d215f697fc29e5b413957d4e836fa1b7d1f139
symbol: "scripting:Inno.Editor.Shaders.ImGui:M:InnoEditor.Shaders.ShaderNodeDrawContext.#ctor(InnoEngine.Graphs.GraphNodeRecord,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext,System.Action{System.String,InnoEngine.Graphs.GraphSerializedValue,System.String},InnoEditor.Rendering.IEditorPreviewService,InnoEditor.Inspection.InspectionDrawContext,System.Boolean)"
source: xml
reviewed: 220c0ecda61c4b9e9caafb79e0537458f40f38efa32e4151aa32586b8098dd75
title: "ShaderNodeDrawContext.Constructor"
kind: api
owners: [Inno.Editor.Shaders.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Creates invocation-scoped access for a graph or Inspector host.

**Parameter `node`:** Detached node values for this invocation.

**Parameter `serialization`:** Current owner converter registry.

**Parameter `context`:** Complete owner reference context.

**Parameter `write`:** Host callback recording changes in the shared draft history.

**Parameter `previews`:** Current generation preview service.

**Parameter `inspection`:** Shared Inspector context, including native property controls and drag/drop.

**Parameter `readOnly`:** Whether the source belongs to an immutable installation.
