---
uid: api.e8a981b9d11a3cb6a21f914bfeff9c5f1c65fc663a76e546dda06d8c35ef5177
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot.#ctor(Inno.Editor.Rendering.EditorShaderCompilationState,System.Boolean,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Assets.ShaderDiagnostic},Inno.Rendering.Assets.RenderShaderArtifact)"
source: xml
reviewed: 2f953f384a486d8b0dc230841b8a5bdab02f5cc4bf405a2ea2efd24beeb9aaa3
title: "EditorShaderDraftCompilationSnapshot.Constructor"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Contains a preview-only immutable candidate, never registered as a canonical asset artifact.

## Parameters

**Parameter `state`:** Latest draft compilation state.

**Parameter `usingLastGood`:** Whether the preview artifact belongs to an earlier successful draft.

**Parameter `diagnostics`:** Latest detached preview diagnostics, separate from project diagnostics.

**Parameter `artifact`:** Preview-only complete shader candidate, or null before the first success.
