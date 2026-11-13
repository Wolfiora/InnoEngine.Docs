---
uid: api.4628c0d660e5e20032dca45a007278de96d2bb951a4859a0a46555b9e0fb326a
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorSelectionState.CopyTargets\u0060\u00601(System.Collections.Generic.ICollection{\u0060\u00600})"
source: xml
reviewed: 459ddb8ad742e4e8a998bf137d0fe4a00b53f144dce63baa32a925ca8779a2f1
title: "CopyTargets"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Copies currently available selected targets into a caller-owned temporary collection.

**Type parameter `TTarget`:** The target type accepted by the caller.

**Parameter `destination`:** The collection to clear and fill; do not retain live entries across callbacks.

**Returns:** The number of targets resolved in this callback.

**Exception `T:System.ArgumentNullException`:** The destination is null.
