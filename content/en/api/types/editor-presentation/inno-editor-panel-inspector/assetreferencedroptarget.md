---
title: "AssetReferenceDropTarget"
description: "Reference for AssetReferenceDropTarget in Inno.Editor.Panel.Inspector."
uid: api.inno.editor.panel.inspector.1f4dfc47eff543a2
kind: api
owners:
  - Inno.Editor.Panel.Inspector
apiSurface: source-clr
contracts:
  - project.inno-editor-panel-inspector
---
# `AssetReferenceDropTarget`

This reference describes `AssetReferenceDropTarget` in `Inno.Editor.Panel.Inspector`. Read the [shared contract](../../../projects/inno-editor-panel-inspector.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d72c6282bfc659c2) | Method |
| [`Assign`](#api-2f36c4f1da64891c) | Method |
| [`expectedType`](#api-48390506697b388d) | Property |

## Type declaration

<a id="api-1f4dfc47eff543a2"></a>
<!-- api: T:Inno.Editor.Panel.Inspector.AssetReferenceDropTarget e32498012ea2d470ecba5cd0d6d0bbbbbc6765cbe00b21afb2bc6b13a128b86c -->

```csharp
public sealed class Inno.Editor.Panel.Inspector.AssetReferenceDropTarget
```

Borrows an asset property's type and assignment callback for one synchronous drop request.

**Constraints:** Recreate this target for each presentation request. Its type and callback must not be retained
across frames or extension generations, or included in History or persistent state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/panels/Inno.Editor.Panel.Inspector/DragDrop/AssetReferenceDropTarget.cs#L12).

## `#ctor`

<a id="api-d72c6282bfc659c2"></a>
<!-- api: M:Inno.Editor.Panel.Inspector.AssetReferenceDropTarget.#ctor(System.Type,System.Action{System.Guid}) e1b790e2d01bf3e88d8edda6db070f2d9b6c1cc83581ff54dddf24118265be81 -->

```csharp
public Inno.Editor.Panel.Inspector.AssetReferenceDropTarget.AssetReferenceDropTarget(System.Type expectedType, System.Action<System.Guid> assign)
```

Creates a drop target that validates an asset type and assigns its persistent identity to a property.

**Parameter `expectedType`:** The runtime asset type accepted by the property.

**Parameter `assign`:** The callback that writes an accepted persistent identity to the property.

**Throws `System.ArgumentNullException`:** Thrown when either argument is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/panels/Inno.Editor.Panel.Inspector/DragDrop/AssetReferenceDropTarget.cs#L29).

## `Assign`

<a id="api-2f36c4f1da64891c"></a>
<!-- api: M:Inno.Editor.Panel.Inspector.AssetReferenceDropTarget.Assign(System.Guid) 6b8025e79d6da3f901bf9d6ec355a82208b0bed65bb0e11cb1e037906ea4d327 -->

```csharp
public void Inno.Editor.Panel.Inspector.AssetReferenceDropTarget.Assign(System.Guid persistentId)
```

Assigns a persistent asset identity to the represented property.

**Parameter `persistentId`:** The stable persistent identity used for lookup.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/panels/Inno.Editor.Panel.Inspector/DragDrop/AssetReferenceDropTarget.cs#L49).

## `expectedType`

<a id="api-48390506697b388d"></a>
<!-- api: P:Inno.Editor.Panel.Inspector.AssetReferenceDropTarget.expectedType 778a13e3cca26233ebc9f3ea4a18266655d93b6c01fa5a9c0ef0780c0696b3fa -->

```csharp
public System.Type Inno.Editor.Panel.Inspector.AssetReferenceDropTarget.expectedType { get; }
```

Gets the required asset type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/panels/Inno.Editor.Panel.Inspector/DragDrop/AssetReferenceDropTarget.cs#L41).
