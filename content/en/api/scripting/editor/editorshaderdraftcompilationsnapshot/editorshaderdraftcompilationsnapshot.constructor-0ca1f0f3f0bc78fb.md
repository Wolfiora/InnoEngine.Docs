---
uid: api.0ca1f0f3f0bc78fb855a9b1c7aa55436e9b9bb357330f1ddbfbac0dfa4cc00d7
symbol: "scripting:Inno.Editor.Rendering:M:InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.#ctor(InnoEditor.Rendering.EditorShaderCompilationState,System.Boolean,System.Collections.Generic.IReadOnlyList{InnoEngine.Rendering.ShaderDiagnostic},InnoEngine.Rendering.RenderShaderArtifact)"
source: xml
reviewed: d4a1f704b435f1dc4f5791267df7e080a29e4b25c1bd74fb9c731eb8be1cb050
title: "EditorShaderDraftCompilationSnapshot.Constructor"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: editor-script
apiScope: Editor
---

Contains a preview-only immutable candidate, never registered as a canonical asset artifact.

## Parameters

**Parameter `state`:** Latest draft compilation state.

**Parameter `usingLastGood`:** Whether the preview artifact belongs to an earlier successful draft.

**Parameter `diagnostics`:** Latest detached preview diagnostics, separate from project diagnostics.

**Parameter `artifact`:** Preview-only complete shader candidate, or null before the first success.
