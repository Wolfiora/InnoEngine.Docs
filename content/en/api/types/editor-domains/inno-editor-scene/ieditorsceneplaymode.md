---
title: "IEditorScenePlayMode"
description: "Reference for IEditorScenePlayMode in Inno.Editor.Scene."
uid: api.inno.editor.scene.c5e84225c81d3a60
kind: api
owners:
  - Inno.Editor.Scene
apiSurface: source-clr
contracts:
  - project.inno-editor-scene
---
# `IEditorScenePlayMode`

This reference describes `IEditorScenePlayMode` in `Inno.Editor.Scene`. Read the [shared contract](../../../projects/inno-editor-scene.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`BeginPlayMode`](#api-e80a50bf67731932) | Method |

## Type declaration

<a id="api-c5e84225c81d3a60"></a>
<!-- api: T:Inno.Editor.Scene.IEditorScenePlayMode 67870bc86817bce9857967388e27a2a97b58ccc488182d704dcccb8494e42a0c -->

```csharp
public interface Inno.Editor.Scene.IEditorScenePlayMode
```

Creates isolated runtime scene sessions from the current editable scene set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/IEditorScenePlayMode.cs#L10).

## `BeginPlayMode`

<a id="api-e80a50bf67731932"></a>
<!-- api: M:Inno.Editor.Scene.IEditorScenePlayMode.BeginPlayMode(Inno.Runtime.RuntimeSession) 9cc557cb529a901b4c2fcb20810f05da6c33e2ea867dd686e1927384b811fd88 -->

```csharp
System.IDisposable Inno.Editor.Scene.IEditorScenePlayMode.BeginPlayMode(Inno.Runtime.RuntimeSession runtimeSession)
```

Captures the editable scene set and materializes independent runtime copies in the supplied session.

**Parameter `runtimeSession`:** The isolated Play Mode session that receives the immutable start snapshot and owns editor-side
operations performed against the runtime copies.

**Returns:** A lease that presents the runtime copies to editor features, prevents their persistence, and
restores the Edit presentation when disposed.

**Throws `System.ArgumentNullException`:** Thrown when `runtimeSession` is null.

**Throws `System.InvalidOperationException`:** Thrown when another Play Mode lease is active, the target world is not empty, or the snapshot
cannot be materialized atomically.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/IEditorScenePlayMode.cs#L30).
