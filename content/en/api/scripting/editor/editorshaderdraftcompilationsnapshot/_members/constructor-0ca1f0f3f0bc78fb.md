---
uid: api.0ca1f0f3f0bc78fb855a9b1c7aa55436e9b9bb357330f1ddbfbac0dfa4cc00d7
symbol: "scripting:Inno.Editor.Rendering:M:InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.#ctor(InnoEditor.Rendering.EditorShaderCompilationState,System.Boolean,System.Collections.Generic.IReadOnlyList{InnoEngine.Rendering.ShaderDiagnostic},InnoEngine.Rendering.RenderShaderArtifact)"
source: xml
reviewed: a4c2c66d5c4881ac85a4bc2d995cd8f03c679492ad5000d4ba7dfcbed40e1ceb
title: "Constructor"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: editor-script
apiScope: Editor
---

Contains a preview-only immutable candidate, never registered as a canonical asset artifact.

**Parameter `state`:** Latest draft compilation state.

**Parameter `usingLastGood`:** Whether the preview artifact belongs to an earlier successful draft.

**Parameter `diagnostics`:** Latest detached preview diagnostics, separate from project diagnostics.

**Parameter `artifact`:** Preview-only complete shader candidate, or null before the first success.
