---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9aad546fa5d4f16060b097d795060632ba4704a66cca58992843effe72b55b26
symbol: engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorShaderCompilation.RequestDraft(System.Guid,Inno.Core.Graphs.GraphDocument,System.UInt64,Inno.Rendering.Assets.RenderShaderVariant)
title: EditorShaderCompilation.RequestDraft
kind: api
owners:
- Inno.Editor.Rendering
apiSurface: source-clr
sourceFingerprint: 2212c9bb993da9cb8ea8067d40702d1641936a822f51ce774f5d038fc536a2d1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `documentID`:** Preview owner identity, independent of canonical artifact lookup.

**Parameter `graph`:** Current draft, never modified or retained.

**Parameter `revision`:** Monotonic draft revision, including Undo/Redo.

**Parameter `variant`:** Exact static keyword selection.

## Returns

Preview-only state and artifact; calling this method cannot publish to Scene/Game.
