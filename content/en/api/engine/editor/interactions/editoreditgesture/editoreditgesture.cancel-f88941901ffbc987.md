---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f88941901ffbc9874a74c595a5564280720e23afa0a47f13e88b0088aac05270
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorEditGesture.Cancel
title: EditorEditGesture.Cancel
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
sourceFingerprint: 00caf57a5827a801cc56fe9210ae4afac7dfe9518dfb6fd8defac61c663d12dc
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

The rollback outcome; a state-preserving failure keeps this gesture active for retry.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The gesture is finished or a nested transaction remains active.
