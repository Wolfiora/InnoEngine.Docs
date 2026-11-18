---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c52d80aa166892604cb08dc20f34f42ca5501444289e26017bdb750f2fc97d02
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractions.TryGetDragSource(Inno.Core.Identity.RuntimeIdentity,Inno.Core.Identity.IdentityObject@)
title: EditorInteractions.TryGetDragSource
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
sourceFingerprint: ead819e9d55490cce24f54386823e5de645322e982fd3c2e90a1bf4aa817b186
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
