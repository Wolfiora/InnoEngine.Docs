---
title: "AssetReferenceDropTarget"
description: "Reference for AssetReferenceDropTarget in Inno.Editor.Panel.Inspector."
uid: api.inno.editor.panel.inspector.editor-script.3cb5d8be07881d40
kind: api
owners:
  - Inno.Editor.Panel.Inspector
apiSurface: editor-script
contracts:
  - project.inno-editor-panel-inspector
  - manual.scripting.use-script-api
---
# `AssetReferenceDropTarget`

This reference describes `AssetReferenceDropTarget` in `Inno.Editor.Panel.Inspector`. Read the [shared contract](../../projects/inno-editor-panel-inspector.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2b85912290d27db8) | Method |
| [`Assign`](#api-6c27f5fb445567f8) | Method |
| [`expectedType`](#api-db879b3160152845) | Property |

## Type declaration

<a id="api-3cb5d8be07881d40"></a>
<!-- api: T:InnoEditor.Inspection.AssetReferenceDropTarget 5de96669a3252c988a5c4870cc797c840154bb5aceea495085447f74756e771e -->

```csharp
public sealed class InnoEditor.Inspection.AssetReferenceDropTarget
```

Borrows an asset property's type and assignment callback for one synchronous drop request.

**Constraints:** Recreate this target for each presentation request. Its type and callback must not be retained
across frames or extension generations, or included in History or persistent state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/panels/Inno.Editor.Panel.Inspector/DragDrop/AssetReferenceDropTarget.cs#L12).

## `#ctor`

<a id="api-2b85912290d27db8"></a>
<!-- api: M:InnoEditor.Inspection.AssetReferenceDropTarget.#ctor(System.Type,System.Action{System.Guid}) 6f10851d2430814c1c7d3d671e5d905fe403b8e5d33bb29b34f27c8d889a9184 -->

```csharp
public InnoEditor.Inspection.AssetReferenceDropTarget.AssetReferenceDropTarget(System.Type expectedType, System.Action<System.Guid> assign)
```

Creates a drop target that validates an asset type and assigns its persistent identity to a property.

**Parameter `expectedType`:** The runtime asset type accepted by the property.

**Parameter `assign`:** The callback that writes an accepted persistent identity to the property.

**Throws `System.ArgumentNullException`:** Thrown when either argument is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/panels/Inno.Editor.Panel.Inspector/DragDrop/AssetReferenceDropTarget.cs#L29).

## `Assign`

<a id="api-6c27f5fb445567f8"></a>
<!-- api: M:InnoEditor.Inspection.AssetReferenceDropTarget.Assign(System.Guid) 8dcbf9fc4ef7ae1f6c29a82ed9f766791b33460646faba3db11dd20647860469 -->

```csharp
public void InnoEditor.Inspection.AssetReferenceDropTarget.Assign(System.Guid persistentId)
```

Assigns a persistent asset identity to the represented property.

**Parameter `persistentId`:** The stable persistent identity used for lookup.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/panels/Inno.Editor.Panel.Inspector/DragDrop/AssetReferenceDropTarget.cs#L49).

## `expectedType`

<a id="api-db879b3160152845"></a>
<!-- api: P:InnoEditor.Inspection.AssetReferenceDropTarget.expectedType 8ced6f9304f7739ace8f0265384df5f14389526da55f209c75e21d8aee0a2551 -->

```csharp
public System.Type InnoEditor.Inspection.AssetReferenceDropTarget.expectedType { get; }
```

Gets the required asset type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/panels/Inno.Editor.Panel.Inspector/DragDrop/AssetReferenceDropTarget.cs#L41).
