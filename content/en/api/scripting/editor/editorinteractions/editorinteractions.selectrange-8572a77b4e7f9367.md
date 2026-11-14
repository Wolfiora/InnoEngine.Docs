---
uid: api.8572a77b4e7f9367161f21e32a031416d98529faf1da71dd2350a73d01180476
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.SelectRange(System.Collections.Generic.IReadOnlyList{InnoEngine.Core.RuntimeIdentity},InnoEngine.Core.IdentityObject,System.Boolean)"
source: xml
reviewed: cb962d9638c608937b7a6649386f608bf628ed11d83e096200c9dc89c7813686
title: "EditorInteractions.SelectRange"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
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
