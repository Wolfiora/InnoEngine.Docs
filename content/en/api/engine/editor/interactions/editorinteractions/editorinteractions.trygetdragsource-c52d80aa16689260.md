---
uid: api.c52d80aa166892604cb08dc20f34f42ca5501444289e26017bdb750f2fc97d02
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractions.TryGetDragSource(Inno.Core.Identity.RuntimeIdentity,Inno.Core.Identity.IdentityObject@)"
source: xml
reviewed: 6dda5ae377e0f9aa94b675cf9930c1470113e0df1e7b0b47ea0166120115a570
title: "EditorInteractions.TryGetDragSource"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Resolves the live source for an active runtime identity.

## Parameters

**Parameter `identity`:** The domain-qualified runtime identity carried by the drag protocol.

**Parameter `source`:** The currently registered drag source when resolution succeeds.

## Returns

`true` when the identity is active and resolves to a live source; otherwise, `false`.
