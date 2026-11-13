---
uid: api.9aad546fa5d4f16060b097d795060632ba4704a66cca58992843effe72b55b26
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorShaderCompilation.RequestDraft(System.Guid,Inno.Core.Graphs.GraphDocument,System.UInt64,Inno.Rendering.Assets.RenderShaderVariant)"
source: xml
reviewed: 11dc8ba01f71d150ba6be7c8ca4f77749a8360c32f8e1b13a6765073ddc0d10e
title: "RequestDraft"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Compiles a detached document through the same graph toolchain in an isolated preview cache.

**Parameter `documentId`:** Preview owner identity, independent of canonical artifact lookup.

**Parameter `graph`:** Current draft, never modified or retained.

**Parameter `revision`:** Monotonic draft revision, including Undo/Redo.

**Parameter `variant`:** Exact static keyword selection.

**Returns:** Preview-only state and artifact; calling this method cannot publish to Scene/Game.
