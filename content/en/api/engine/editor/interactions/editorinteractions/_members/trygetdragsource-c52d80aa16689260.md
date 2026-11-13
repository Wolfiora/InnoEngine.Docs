---
uid: api.c52d80aa166892604cb08dc20f34f42ca5501444289e26017bdb750f2fc97d02
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractions.TryGetDragSource(Inno.Core.Identity.RuntimeIdentity,Inno.Core.Identity.IdentityObject@)"
source: xml
reviewed: e5c130b9daad84c1d21a3fc870bcdbd74a97e7aa9724ab753fcddec546640171
title: "TryGetDragSource"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Resolves the live source for an active runtime identity.

**Parameter `identity`:** The domain-qualified runtime identity carried by the drag protocol.

**Parameter `source`:** The currently registered drag source when resolution succeeds.

**Returns:** `true` when the identity is active and resolves to a live source; otherwise, `false`.
