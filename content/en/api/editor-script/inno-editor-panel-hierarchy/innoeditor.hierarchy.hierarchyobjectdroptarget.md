---
title: "HierarchyObjectDropTarget"
description: "Reference for HierarchyObjectDropTarget in Inno.Editor.Panel.Hierarchy."
uid: api.inno.editor.panel.hierarchy.editor-script.30e1da0eb9decc33
kind: api
owners:
  - Inno.Editor.Panel.Hierarchy
apiSurface: editor-script
contracts:
  - project.inno-editor-panel-hierarchy
  - manual.scripting.use-script-api
---
# `HierarchyObjectDropTarget`

This reference describes `HierarchyObjectDropTarget` in `Inno.Editor.Panel.Hierarchy`. Read the [shared contract](../../projects/inno-editor-panel-hierarchy.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-29dadf9bb0e96542) | Method |
| [`gameObject`](#api-1ec4f34ea3c8669a) | Property |

## Type declaration

<a id="api-30e1da0eb9decc33"></a>
<!-- api: T:InnoEditor.Hierarchy.HierarchyObjectDropTarget 30b3f766036b2fef1fb706093ecb6debbb7396ec3da4ac3e9bcbc1e7c09643c3 -->

```csharp
public sealed class InnoEditor.Hierarchy.HierarchyObjectDropTarget
```

Identifies a game object hierarchy drop target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/panels/Inno.Editor.Panel.Hierarchy/Interactions/HierarchyObjectDropTarget.cs#L11).

## `#ctor`

<a id="api-29dadf9bb0e96542"></a>
<!-- api: M:InnoEditor.Hierarchy.HierarchyObjectDropTarget.#ctor(InnoEngine.Scene.GameObject) f880806bd7728fee6050c6aa2fad5499126ef0fe09f1c10836b7075d2333196c -->

```csharp
public InnoEditor.Hierarchy.HierarchyObjectDropTarget.HierarchyObjectDropTarget(InnoEngine.Scene.GameObject gameObject)
```

Creates a hierarchy drop target representing one live game object row.

**Parameter `gameObject`:** The game object represented by the target row.

**Throws `System.ArgumentNullException`:** Thrown when `gameObject` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/panels/Inno.Editor.Panel.Hierarchy/Interactions/HierarchyObjectDropTarget.cs#L22).

## `gameObject`

<a id="api-1ec4f34ea3c8669a"></a>
<!-- api: P:InnoEditor.Hierarchy.HierarchyObjectDropTarget.gameObject c045b90647249fa8896d8a8a337a96dfeceac3172ccd4df07ba012513f05c1fa -->

```csharp
public InnoEngine.Scene.GameObject InnoEditor.Hierarchy.HierarchyObjectDropTarget.gameObject { get; }
```

Gets the target game object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/panels/Inno.Editor.Panel.Hierarchy/Interactions/HierarchyObjectDropTarget.cs#L30).
