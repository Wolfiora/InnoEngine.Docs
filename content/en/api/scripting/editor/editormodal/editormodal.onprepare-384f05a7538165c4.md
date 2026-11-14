---
uid: api.384f05a7538165c4e5d1daf58da9102d064cbe82bbefdf4eea77b194f9112291
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorModal.OnPrepare(InnoEditor.Core.EditorContext,System.Numerics.Vector2)"
source: xml
reviewed: 0b0229b6e5db925f99dc7436af128e7ee26f0fa47e2c0507e96e1d28d03d7d88
title: "EditorModal.OnPrepare"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Captures the state consumed by OnDraw and measures it without drawing or performing domain operations. Content-sized modals must return a finite, nonnegative size. Fixed-size modals may return null.

**Parameter `context`:** The current owner-thread context.

**Parameter `availableContentSize`:** The bounded, already scaled content area.

**Returns:** The content extent required by the captured state, or null for explicit sizing.
