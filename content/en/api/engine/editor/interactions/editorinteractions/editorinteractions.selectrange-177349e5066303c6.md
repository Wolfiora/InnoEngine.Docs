---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.177349e5066303c6077058f728ad0924cf583545602337f432af89e8035e64a4
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractions.SelectRange(System.Collections.Generic.IReadOnlyList{Inno.Core.Identity.RuntimeIdentity},Inno.Core.Identity.IdentityObject,System.Boolean)
title: EditorInteractions.SelectRange
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: f1f3f274b83c12d09a966a517d9a0ba50258c6a971a29c6885aa1487294d899d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `orderedTargets`:** Runtime identities in the current visible sort and filter order, resolved through Core Identity only when selected.

**Parameter `target`:** The clicked range endpoint, which becomes primary.

**Parameter `additive`:** Whether to preserve existing members outside the selected range.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The visible targets or endpoint is null.

**Exception `T:System.ArgumentException`:** The endpoint is not in the visible target order.

**Exception `T:System.InvalidOperationException`:** A range identity is unavailable; the current selection remains unchanged.
