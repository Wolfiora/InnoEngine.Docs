---
uid: api.177349e5066303c6077058f728ad0924cf583545602337f432af89e8035e64a4
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractions.SelectRange(System.Collections.Generic.IReadOnlyList{Inno.Core.Identity.RuntimeIdentity},Inno.Core.Identity.IdentityObject,System.Boolean)"
source: xml
reviewed: 866928e58cae5ef2991f229a15e79603dd289fc956b88ff452f88a5f0fd2328d
title: "EditorInteractions.SelectRange"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Selects the inclusive visible range between the current anchor and the clicked target.

## Parameters

**Parameter `orderedTargets`:** Runtime identities in the current visible sort and filter order, resolved through Core Identity only when selected.

**Parameter `target`:** The clicked range endpoint, which becomes primary.

**Parameter `additive`:** Whether to preserve existing members outside the selected range.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The visible targets or endpoint is null.

**Exception `T:System.ArgumentException`:** The endpoint is not in the visible target order.

**Exception `T:System.InvalidOperationException`:** A range identity is unavailable; the current selection remains unchanged.
