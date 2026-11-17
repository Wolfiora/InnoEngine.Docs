---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.13103f6af4288164c2a7cd7e07747238466d1b5ea1a5e59824f65f481a232c52
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.TryGetDragSource(InnoEngine.Core.RuntimeIdentity,InnoEngine.Core.IdentityObject@)
title: EditorInteractions.TryGetDragSource
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: d947bb10e0f652425888ecff7a9f954e493bbe9c2499fe65ab8a6ece3043c277
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `identity`:** The domain-qualified runtime identity carried by the drag protocol.

**Parameter `source`:** The currently registered drag source when resolution succeeds.

## Returns

`true` when the identity is active and resolves to a live source; otherwise, `false`.
