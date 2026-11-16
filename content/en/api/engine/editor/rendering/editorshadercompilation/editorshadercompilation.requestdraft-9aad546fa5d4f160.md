---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9aad546fa5d4f16060b097d795060632ba4704a66cca58992843effe72b55b26
symbol: engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorShaderCompilation.RequestDraft(System.Guid,Inno.Core.Graphs.GraphDocument,System.UInt64,Inno.Rendering.Assets.RenderShaderVariant)
title: EditorShaderCompilation.RequestDraft
kind: api
owners:
- Inno.Editor.Rendering
apiSurface: source-clr
reviewed: aa8c0c7209c6d831d11961205d198acf33b127ea2a7eed6b829d28645e49193d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `documentId`:** Preview owner identity, independent of canonical artifact lookup.

**Parameter `graph`:** Current draft, never modified or retained.

**Parameter `revision`:** Monotonic draft revision, including Undo/Redo.

**Parameter `variant`:** Exact static keyword selection.

## Returns

Preview-only state and artifact; calling this method cannot publish to Scene/Game.
