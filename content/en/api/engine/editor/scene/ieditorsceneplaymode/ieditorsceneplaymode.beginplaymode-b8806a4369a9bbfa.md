---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b8806a4369a9bbfa4468b24f7f28074ba7cf96b23f743ea9f33e4c5a4baa2925
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.IEditorScenePlayMode.BeginPlayMode(Inno.Runtime.RuntimeSession)
title: IEditorScenePlayMode.BeginPlayMode
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
sourceFingerprint: b38d15e459ebd5baae288b90a12536516be3fb9a7ff3613f0f60e7a39bb9de8b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `runtimeSession`:** The isolated Play Mode session that receives the immutable start snapshot and owns editor-side operations performed against the runtime copies.

## Returns

A lease that presents the runtime copies to editor features, prevents their persistence, and restores the Edit presentation when disposed.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `runtimeSession` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when another Play Mode lease is active, the target world is not empty, or the snapshot cannot be materialized atomically.
