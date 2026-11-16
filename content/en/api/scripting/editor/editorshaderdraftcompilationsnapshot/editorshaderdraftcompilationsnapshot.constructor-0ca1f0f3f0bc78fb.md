---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0ca1f0f3f0bc78fb855a9b1c7aa55436e9b9bb357330f1ddbfbac0dfa4cc00d7
symbol: scripting:Inno.Editor.Rendering:M:InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot.#ctor(InnoEditor.Rendering.EditorShaderCompilationState,System.Boolean,System.Collections.Generic.IReadOnlyList{InnoEngine.Rendering.ShaderDiagnostic},InnoEngine.Rendering.RenderShaderArtifact)
title: EditorShaderDraftCompilationSnapshot.Constructor
kind: api
owners:
- Inno.Editor.Rendering
apiSurface: editor-script
reviewed: 96d34eaeb15b9fd5d0bac38ab1ccd8b8bf6aa67221eeda135ce7ce051cc50c34
apiScope: Editor
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
