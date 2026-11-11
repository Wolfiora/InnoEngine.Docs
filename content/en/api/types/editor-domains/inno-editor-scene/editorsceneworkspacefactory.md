---
title: "EditorSceneWorkspaceFactory"
description: "Reference for EditorSceneWorkspaceFactory in Inno.Editor.Scene."
uid: api.inno.editor.scene.aa4bdc7999df3984
kind: api
owners:
  - Inno.Editor.Scene
apiSurface: source-clr
contracts:
  - project.inno-editor-scene
---
# `EditorSceneWorkspaceFactory`

This reference describes `EditorSceneWorkspaceFactory` in `Inno.Editor.Scene`. Read the [shared contract](../../../projects/inno-editor-scene.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Create`](#api-d24846f6693a6011) | Method |

## Type declaration

<a id="api-aa4bdc7999df3984"></a>
<!-- api: T:Inno.Editor.Scene.EditorSceneWorkspaceFactory 340333171a509a385f4def75e26e99a52de90f6c88c49d5ca3736bf2409ea988 -->

```csharp
public static class Inno.Editor.Scene.EditorSceneWorkspaceFactory
```

Creates explicitly owned editor scene workspaces for embedded editor hosts and command-line tooling.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/EditorSceneWorkspaceFactory.cs#L15).

## `Create`

<a id="api-d24846f6693a6011"></a>
<!-- api: M:Inno.Editor.Scene.EditorSceneWorkspaceFactory.Create(Inno.Runtime.RuntimeSession,Inno.Assets.Pipeline.AssetPipeline,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Logging.LogRouter,Inno.Editor.Interactions.IEditorSelectionCoordinator) 533a60e2b8bc7d4387b2d5f78bee1e5c0cb1ed78d2b8dc8f60c831293786e8b7 -->

```csharp
public static Inno.Editor.Scene.EditorSceneWorkspaceHost Inno.Editor.Scene.EditorSceneWorkspaceFactory.Create(Inno.Runtime.RuntimeSession runtimeSession, Inno.Assets.Pipeline.AssetPipeline assets, Inno.Extensibility.Types.TypeCatalog types, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Logging.LogRouter logs, Inno.Editor.Interactions.IEditorSelectionCoordinator? selection = null)
```

Creates an unattached workspace over explicitly owned Edit-session services.

**Parameter `runtimeSession`:** The Edit session that owns the workspace scene world.

**Parameter `assets`:** The authoring asset pipeline used for scene and prefab documents.

**Parameter `types`:** The host type catalog used for scene extension generations.

**Parameter `serialization`:** The host serialization registry used for scene snapshots.

**Parameter `logs`:** The application log router used for workspace lifecycle diagnostics.

**Parameter `selection`:** The optional selection coordinator used by the standalone document workspace.

**Returns:** A host that owns both the document and Play Mode interfaces of the workspace.

**Throws `System.ArgumentNullException`:** Thrown when a required owner is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/EditorSceneWorkspaceFactory.cs#L44).
