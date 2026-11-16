---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.editor.rendering.editor-script.2d0fd9bc539e6b00
symbol: scripting:Inno.Editor.Rendering:T:InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot
title: EditorShaderDraftCompilationSnapshot
kind: api
owners:
- Inno.Editor.Rendering
apiSurface: editor-script
reviewed: ab4e417a1ea64c2fa74325e2d469c327b281d4e31d98caef7db0f56cf574f638
apiScope: Editor
contracts:
- manual.scripting.use-script-api
- project.inno-editor-rendering

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Parameters

**Parameter `state`:** Latest draft compilation state.

**Parameter `usingLastGood`:** Whether the preview artifact belongs to an earlier successful draft.

**Parameter `diagnostics`:** Latest detached preview diagnostics, separate from project diagnostics.

**Parameter `artifact`:** Preview-only complete shader candidate, or null before the first success.
