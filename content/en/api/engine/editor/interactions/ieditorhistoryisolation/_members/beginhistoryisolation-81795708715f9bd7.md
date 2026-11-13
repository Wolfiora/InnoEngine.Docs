---
uid: api.81795708715f9bd7fbd6f234d94827c9317ad483acf1bfcbd849b36c83fb47f0
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.IEditorHistoryIsolation.BeginHistoryIsolation"
source: xml
reviewed: 362fa8533c48764b03f00a36cfa061f127fc2fd43fc7580f3f3d5966938aec1f
title: "BeginHistoryIsolation"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Starts an independently disposable history branch while retaining the current editing branch.

**Returns:** A lease that releases the temporary branch and restores the retained branch when disposed.

**Exception `T:System.InvalidOperationException`:** Thrown while another history transition, transaction, or isolated branch is active.
