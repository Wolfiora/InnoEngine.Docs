---
uid: api.13103f6af4288164c2a7cd7e07747238466d1b5ea1a5e59824f65f481a232c52
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.TryGetDragSource(InnoEngine.Core.RuntimeIdentity,InnoEngine.Core.IdentityObject@)"
source: xml
reviewed: 242d266b5bdfc0c9a272f464eea99936b236064ede6be8be761b661f832f0f30
title: "EditorInteractions.TryGetDragSource"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Resolves the live source for an active runtime identity.

**Parameter `identity`:** The domain-qualified runtime identity carried by the drag protocol.

**Parameter `source`:** The currently registered drag source when resolution succeeds.

**Returns:** `true` when the identity is active and resolves to a live source; otherwise, `false`.
