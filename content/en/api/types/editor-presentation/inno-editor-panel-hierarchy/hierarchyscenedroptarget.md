---
title: "HierarchySceneDropTarget"
description: "Reference for HierarchySceneDropTarget in Inno.Editor.Panel.Hierarchy."
uid: api.inno.editor.panel.hierarchy.d713793e6ceab109
kind: api
owners:
  - Inno.Editor.Panel.Hierarchy
apiSurface: source-clr
contracts:
  - project.inno-editor-panel-hierarchy
---
# `HierarchySceneDropTarget`

This reference describes `HierarchySceneDropTarget` in `Inno.Editor.Panel.Hierarchy`. Read the [shared contract](../../../projects/inno-editor-panel-hierarchy.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-741e7235d3f3d8b3) | Method |
| [`scene`](#api-357da9dd8b24a4c0) | Property |

## Type declaration

<a id="api-d713793e6ceab109"></a>
<!-- api: T:Inno.Editor.Panel.Hierarchy.HierarchySceneDropTarget 6dcfa56ee2b7fb2c9b6cbf7a0efd55e2d4aab2fea416214c587b79db306715cd -->

```csharp
public sealed class Inno.Editor.Panel.Hierarchy.HierarchySceneDropTarget
```

Identifies a scene row or scene root hierarchy drop target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/panels/Inno.Editor.Panel.Hierarchy/Interactions/HierarchySceneDropTarget.cs#L11).

## `#ctor`

<a id="api-741e7235d3f3d8b3"></a>
<!-- api: M:Inno.Editor.Panel.Hierarchy.HierarchySceneDropTarget.#ctor(Inno.Scene.GameScene) d5c48102e124cb07f38825a947029656e68959a7f7004cf5d047617caee0eede -->

```csharp
public Inno.Editor.Panel.Hierarchy.HierarchySceneDropTarget.HierarchySceneDropTarget(Inno.Scene.GameScene scene)
```

Creates a hierarchy drop target representing one loaded scene row or root.

**Parameter `scene`:** The loaded scene represented by the target.

**Throws `System.ArgumentNullException`:** Thrown when `scene` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/panels/Inno.Editor.Panel.Hierarchy/Interactions/HierarchySceneDropTarget.cs#L22).

## `scene`

<a id="api-357da9dd8b24a4c0"></a>
<!-- api: P:Inno.Editor.Panel.Hierarchy.HierarchySceneDropTarget.scene 1a42b012a5b3a656cd2adeb91f2f5e3602ea99be4e2a4ef591e9d2dea8f8a45d -->

```csharp
public Inno.Scene.GameScene Inno.Editor.Panel.Hierarchy.HierarchySceneDropTarget.scene { get; }
```

Gets the target scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/panels/Inno.Editor.Panel.Hierarchy/Interactions/HierarchySceneDropTarget.cs#L30).
