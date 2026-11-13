---
uid: api.8572a77b4e7f9367161f21e32a031416d98529faf1da71dd2350a73d01180476
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.SelectRange(System.Collections.Generic.IReadOnlyList{InnoEngine.Core.RuntimeIdentity},InnoEngine.Core.IdentityObject,System.Boolean)"
source: xml
reviewed: d21101d12a438b8d73860b8d94401154970ea8e6a350987b8f9d6d97950c06e7
title: "SelectRange"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Selects the inclusive visible range between the current anchor and the clicked target.

**Parameter `orderedTargets`:** Runtime identities in the current visible sort and filter order, resolved through Core Identity only when selected.

**Parameter `target`:** The clicked range endpoint, which becomes primary.

**Parameter `additive`:** Whether to preserve existing members outside the selected range.

**Exception `T:System.ArgumentNullException`:** The visible targets or endpoint is null.

**Exception `T:System.ArgumentException`:** The endpoint is not in the visible target order.

**Exception `T:System.InvalidOperationException`:** A range identity is unavailable; the current selection remains unchanged.
