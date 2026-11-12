---
title: "HierarchySceneDropTarget"
description: "Reference for HierarchySceneDropTarget in Inno.Editor.Panel.Hierarchy."
uid: api.inno.editor.panel.hierarchy.editor-script.b566a617420c77fe
kind: api
owners:
  - Inno.Editor.Panel.Hierarchy
apiSurface: editor-script
contracts:
  - project.inno-editor-panel-hierarchy
  - manual.scripting.use-script-api
---
# `HierarchySceneDropTarget`

This reference describes `HierarchySceneDropTarget` in `Inno.Editor.Panel.Hierarchy`. Read the [shared contract](../../projects/inno-editor-panel-hierarchy.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7a620b25ee97bee9) | Method |
| [`scene`](#api-d7361841b80a16eb) | Property |

## Type declaration

<a id="api-b566a617420c77fe"></a>
<!-- api: T:InnoEditor.Hierarchy.HierarchySceneDropTarget df4f013c85f299a67123a9cb9ec270db3eb66f4dee5b1c8a820429ca065911d9 -->

```csharp
public sealed class InnoEditor.Hierarchy.HierarchySceneDropTarget
```

Identifies a scene row or scene root hierarchy drop target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/panels/Inno.Editor.Panel.Hierarchy/Interactions/HierarchySceneDropTarget.cs#L11).

## `#ctor`

<a id="api-7a620b25ee97bee9"></a>
<!-- api: M:InnoEditor.Hierarchy.HierarchySceneDropTarget.#ctor(InnoEngine.Scene.GameScene) 72f42704de89e5bab15e5b254b8657112648fb345dc965d8e645fff4e75a8a1e -->

```csharp
public InnoEditor.Hierarchy.HierarchySceneDropTarget.HierarchySceneDropTarget(InnoEngine.Scene.GameScene scene)
```

Creates a hierarchy drop target representing one loaded scene row or root.

**Parameter `scene`:** The loaded scene represented by the target.

**Throws `System.ArgumentNullException`:** Thrown when `scene` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/panels/Inno.Editor.Panel.Hierarchy/Interactions/HierarchySceneDropTarget.cs#L22).

## `scene`

<a id="api-d7361841b80a16eb"></a>
<!-- api: P:InnoEditor.Hierarchy.HierarchySceneDropTarget.scene 178de6bcf271dcf85d7667e197403eff745ff67730a60b6efd722a34ed5816f1 -->

```csharp
public InnoEngine.Scene.GameScene InnoEditor.Hierarchy.HierarchySceneDropTarget.scene { get; }
```

Gets the target scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/panels/Inno.Editor.Panel.Hierarchy/Interactions/HierarchySceneDropTarget.cs#L30).
