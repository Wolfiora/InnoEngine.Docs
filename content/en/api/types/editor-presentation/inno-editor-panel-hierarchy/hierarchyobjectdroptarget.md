---
title: "HierarchyObjectDropTarget"
description: "Reference for HierarchyObjectDropTarget in Inno.Editor.Panel.Hierarchy."
uid: api.inno.editor.panel.hierarchy.9bd18483af53fd25
kind: api
owners:
  - Inno.Editor.Panel.Hierarchy
apiSurface: source-clr
contracts:
  - project.inno-editor-panel-hierarchy
---
# `HierarchyObjectDropTarget`

This reference describes `HierarchyObjectDropTarget` in `Inno.Editor.Panel.Hierarchy`. Read the [shared contract](../../../projects/inno-editor-panel-hierarchy.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-91a27db89734994e) | Method |
| [`gameObject`](#api-ec612092b5d3515e) | Property |

## Type declaration

<a id="api-9bd18483af53fd25"></a>
<!-- api: T:Inno.Editor.Panel.Hierarchy.HierarchyObjectDropTarget 15c7707d4ce6f3f9fe02e0a43f1612d3d7e497076bafb494a2e1d2aae84ca4cf -->

```csharp
public sealed class Inno.Editor.Panel.Hierarchy.HierarchyObjectDropTarget
```

Identifies a game object hierarchy drop target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/panels/Inno.Editor.Panel.Hierarchy/Interactions/HierarchyObjectDropTarget.cs#L11).

## `#ctor`

<a id="api-91a27db89734994e"></a>
<!-- api: M:Inno.Editor.Panel.Hierarchy.HierarchyObjectDropTarget.#ctor(Inno.Scene.GameObject) 0d31f36c3a00a3ed8e9836a2f3df8c0c478c39f80be7e6f39c0db7e7add56b43 -->

```csharp
public Inno.Editor.Panel.Hierarchy.HierarchyObjectDropTarget.HierarchyObjectDropTarget(Inno.Scene.GameObject gameObject)
```

Creates a hierarchy drop target representing one live game object row.

**Parameter `gameObject`:** The game object represented by the target row.

**Throws `System.ArgumentNullException`:** Thrown when `gameObject` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/panels/Inno.Editor.Panel.Hierarchy/Interactions/HierarchyObjectDropTarget.cs#L22).

## `gameObject`

<a id="api-ec612092b5d3515e"></a>
<!-- api: P:Inno.Editor.Panel.Hierarchy.HierarchyObjectDropTarget.gameObject 253035626711ef11dc31af24276ab33048a6715342af0e129f58771ddc7057c3 -->

```csharp
public Inno.Scene.GameObject Inno.Editor.Panel.Hierarchy.HierarchyObjectDropTarget.gameObject { get; }
```

Gets the target game object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/panels/Inno.Editor.Panel.Hierarchy/Interactions/HierarchyObjectDropTarget.cs#L30).
