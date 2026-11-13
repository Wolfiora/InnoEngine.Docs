---
uid: api.9aad546fa5d4f16060b097d795060632ba4704a66cca58992843effe72b55b26
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorShaderCompilation.RequestDraft(System.Guid,Inno.Core.Graphs.GraphDocument,System.UInt64,Inno.Rendering.Assets.RenderShaderVariant)"
source: xml
reviewed: 0461fd566e50c1c36ce0f33eb1cb73b9307e203db74156039944b56e086b5a7e
title: "EditorShaderCompilation.RequestDraft"
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
