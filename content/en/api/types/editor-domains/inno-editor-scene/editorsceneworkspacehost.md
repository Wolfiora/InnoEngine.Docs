---
title: "EditorSceneWorkspaceHost"
description: "Reference for EditorSceneWorkspaceHost in Inno.Editor.Scene."
uid: api.inno.editor.scene.80d8bcb46d7b67b5
kind: api
owners:
  - Inno.Editor.Scene
apiSurface: source-clr
contracts:
  - project.inno-editor-scene
---
# `EditorSceneWorkspaceHost`

This reference describes `EditorSceneWorkspaceHost` in `Inno.Editor.Scene`. Read the [shared contract](../../../projects/inno-editor-scene.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`Dispose`](#api-af66fc6dfe0863e7) | Method |
| [`gamePresentation`](#api-6dddaf10786529d7) | Property |
| [`playMode`](#api-d8d57bc49cc6f965) | Property |
| [`workspace`](#api-2bc14f29cbcc873d) | Property |

## Type declaration

<a id="api-80d8bcb46d7b67b5"></a>
<!-- api: T:Inno.Editor.Scene.EditorSceneWorkspaceHost 8c67c5db8dd95840f54acde4e269d9de42bee054237a6b7a18b3d15e33b01a29 -->

```csharp
public sealed class Inno.Editor.Scene.EditorSceneWorkspaceHost : System.IDisposable
```

Owns an editor scene workspace created outside the attribute-discovered editor application.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/EditorSceneWorkspaceHost.cs#L17).

## `Dispose`

<a id="api-af66fc6dfe0863e7"></a>
<!-- api: M:Inno.Editor.Scene.EditorSceneWorkspaceHost.Dispose 32d054976cdce836d230c83fcc75e93ccc4976dec570f4a1687afc5f53f50c41 -->

```csharp
public void Inno.Editor.Scene.EditorSceneWorkspaceHost.Dispose()
```

Releases the workspace and any isolated scene session that it still owns.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/EditorSceneWorkspaceHost.cs#L58).

## `gamePresentation`

<a id="api-6dddaf10786529d7"></a>
<!-- api: P:Inno.Editor.Scene.EditorSceneWorkspaceHost.gamePresentation d4516d50a7f56cf549e40ddf44d0d28403a11ed72fe7fa1a3d4cac9d98630cca -->

```csharp
public Inno.Editor.Scene.IEditorGameScenePresentation Inno.Editor.Scene.EditorSceneWorkspaceHost.gamePresentation { get; }
```

Gets the Edit-or-Play rendering presentation boundary owned by this host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/EditorSceneWorkspaceHost.cs#L48).

## `playMode`

<a id="api-d8d57bc49cc6f965"></a>
<!-- api: P:Inno.Editor.Scene.EditorSceneWorkspaceHost.playMode 1f7271427f16ff07da3b9bec96ed5e56a2b9cdba67d997893c13930ee5e4799b -->

```csharp
public Inno.Editor.Scene.IEditorScenePlayMode Inno.Editor.Scene.EditorSceneWorkspaceHost.playMode { get; }
```

Gets the isolated Play Mode scene-session boundary owned by this host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/EditorSceneWorkspaceHost.cs#L53).

## `workspace`

<a id="api-2bc14f29cbcc873d"></a>
<!-- api: P:Inno.Editor.Scene.EditorSceneWorkspaceHost.workspace 3e8cb98b83eb3ce6a98db81d16e56b450b6a060727e42de12584a3341cab1f02 -->

```csharp
public Inno.Editor.Scene.IEditorSceneWorkspace Inno.Editor.Scene.EditorSceneWorkspaceHost.workspace { get; }
```

Gets the Edit-or-Play scene presentation and persistence boundary owned by this host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/EditorSceneWorkspaceHost.cs#L43).
