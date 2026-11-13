---
uid: api.13103f6af4288164c2a7cd7e07747238466d1b5ea1a5e59824f65f481a232c52
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.TryGetDragSource(InnoEngine.Core.RuntimeIdentity,InnoEngine.Core.IdentityObject@)"
source: xml
reviewed: 19ceec2540605b56d67519297fcfa85de8b13c6d5aeb6b847ddeee54f83ab12a
title: "TryGetDragSource"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Resolves the live source for an active runtime identity.

**Parameter `identity`:** The domain-qualified runtime identity carried by the drag protocol.

**Parameter `source`:** The currently registered drag source when resolution succeeds.

**Returns:** `true` when the identity is active and resolves to a live source; otherwise, `false`.
