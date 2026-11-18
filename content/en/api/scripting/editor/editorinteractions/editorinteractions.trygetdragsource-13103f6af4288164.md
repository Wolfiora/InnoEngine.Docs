---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.13103f6af4288164c2a7cd7e07747238466d1b5ea1a5e59824f65f481a232c52
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.TryGetDragSource(InnoEngine.Core.RuntimeIdentity,InnoEngine.Core.IdentityObject@)
title: EditorInteractions.TryGetDragSource
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
sourceFingerprint: b8971003c4fd9dd8ecc92082c993ce02632a6de097421959efa61881ab551039
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
