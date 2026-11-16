---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e8a981b9d11a3cb6a21f914bfeff9c5f1c65fc663a76e546dda06d8c35ef5177
symbol: engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot.#ctor(Inno.Editor.Rendering.EditorShaderCompilationState,System.Boolean,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Assets.ShaderDiagnostic},Inno.Rendering.Assets.RenderShaderArtifact)
title: EditorShaderDraftCompilationSnapshot.Constructor
kind: api
owners:
- Inno.Editor.Rendering
apiSurface: source-clr
reviewed: 6348ad10d3b827c335e158577177089f470f69b45fc97aa1eae466f9270fba98
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `state`:** Latest draft compilation state.

**Parameter `usingLastGood`:** Whether the preview artifact belongs to an earlier successful draft.

**Parameter `diagnostics`:** Latest detached preview diagnostics, separate from project diagnostics.

**Parameter `artifact`:** Preview-only complete shader candidate, or null before the first success.
