---
uid: api.f88941901ffbc9874a74c595a5564280720e23afa0a47f13e88b0088aac05270
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorEditGesture.Cancel"
source: xml
reviewed: 554d2d7889374711abb72b8d62148ffd9183b7ae0dee46502c42e77455ddb9bf
title: "EditorEditGesture.Cancel"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Attempts to restore the state before the gesture without discarding a failed rollback.

## Returns

The rollback outcome; a state-preserving failure keeps this gesture active for retry.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The gesture is finished or a nested transaction remains active.
