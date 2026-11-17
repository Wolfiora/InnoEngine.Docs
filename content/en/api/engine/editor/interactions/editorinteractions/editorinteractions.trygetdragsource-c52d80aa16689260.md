---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c52d80aa166892604cb08dc20f34f42ca5501444289e26017bdb750f2fc97d02
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractions.TryGetDragSource(Inno.Core.Identity.RuntimeIdentity,Inno.Core.Identity.IdentityObject@)
title: EditorInteractions.TryGetDragSource
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: d26f16fd4b64165c4b4af02497a3a8342a58b2148abd0d6f072714d1e85f300d
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
