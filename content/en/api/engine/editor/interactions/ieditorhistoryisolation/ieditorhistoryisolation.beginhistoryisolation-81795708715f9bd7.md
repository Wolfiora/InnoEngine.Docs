---
uid: api.81795708715f9bd7fbd6f234d94827c9317ad483acf1bfcbd849b36c83fb47f0
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.IEditorHistoryIsolation.BeginHistoryIsolation"
source: xml
reviewed: 9442c59fa5a87082303c60c9458eafb1d5650b661cef848605b659eb68bada35
title: "IEditorHistoryIsolation.BeginHistoryIsolation"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Starts an independently disposable history branch while retaining the current editing branch.

## Returns

A lease that releases the temporary branch and restores the retained branch when disposed.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown while another history transition, transaction, or isolated branch is active.
