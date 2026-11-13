---
uid: api.4628c0d660e5e20032dca45a007278de96d2bb951a4859a0a46555b9e0fb326a
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorSelectionState.CopyTargets\u0060\u00601(System.Collections.Generic.ICollection{\u0060\u00600})"
source: xml
reviewed: 906d1fca4d5c5179ec8484312a1405deaec43f64085072b12ea496defbb1f044
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
