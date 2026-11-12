---
title: "EngineObjectReferenceDropTarget"
description: "Reference for EngineObjectReferenceDropTarget in Inno.Editor.Panel.Inspector."
uid: api.inno.editor.panel.inspector.editor-script.12f4511ea1a9fe24
kind: api
owners:
  - Inno.Editor.Panel.Inspector
apiSurface: editor-script
contracts:
  - project.inno-editor-panel-inspector
  - manual.scripting.use-script-api
---
# `EngineObjectReferenceDropTarget`

This reference describes `EngineObjectReferenceDropTarget` in `Inno.Editor.Panel.Inspector`. Read the [shared contract](../../projects/inno-editor-panel-inspector.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ae166b24b88b6c0a) | Method |
| [`Assign`](#api-30f975413466efef) | Method |
| [`expectedType`](#api-7c610701188a8173) | Property |

## Type declaration

<a id="api-12f4511ea1a9fe24"></a>
<!-- api: T:InnoEditor.Inspection.EngineObjectReferenceDropTarget a59b0da2f61e684a78eb8aae10b5c4d04908c6321987aded2415038562445728 -->

```csharp
public sealed class InnoEditor.Inspection.EngineObjectReferenceDropTarget
```

Borrows an object property's type and assignment callback for one synchronous drop request.

**Constraints:** Recreate this target for each presentation request. Its type and callback must not be retained
across frames or extension generations, or included in History or persistent state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/panels/Inno.Editor.Panel.Inspector/DragDrop/EngineObjectReferenceDropTarget.cs#L15).

## `#ctor`

<a id="api-ae166b24b88b6c0a"></a>
<!-- api: M:InnoEditor.Inspection.EngineObjectReferenceDropTarget.#ctor(System.Type,System.Action{InnoEngine.Scene.EngineObject}) 49465ffef0d7ea58fce2f43ceed6804b4f6c7c724a5aef5c2a4b635fff1e3f65 -->

```csharp
public InnoEditor.Inspection.EngineObjectReferenceDropTarget.EngineObjectReferenceDropTarget(System.Type expectedType, System.Action<InnoEngine.Scene.EngineObject> assign)
```

Creates a drop target that validates and assigns an engine object to a serialized property.

**Parameter `expectedType`:** The engine object type accepted by the property.

**Parameter `assign`:** The callback that writes an accepted object to the property.

**Throws `System.ArgumentNullException`:** Thrown when either argument is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/panels/Inno.Editor.Panel.Inspector/DragDrop/EngineObjectReferenceDropTarget.cs#L32).

## `Assign`

<a id="api-30f975413466efef"></a>
<!-- api: M:InnoEditor.Inspection.EngineObjectReferenceDropTarget.Assign(InnoEngine.Scene.EngineObject) 81afa261003c1d8b4740033c8eb0869344b99b94abf975ae9fc3796d7e94c167 -->

```csharp
public void InnoEditor.Inspection.EngineObjectReferenceDropTarget.Assign(InnoEngine.Scene.EngineObject value)
```

Assigns an accepted engine object to the represented property.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/panels/Inno.Editor.Panel.Inspector/DragDrop/EngineObjectReferenceDropTarget.cs#L52).

## `expectedType`

<a id="api-7c610701188a8173"></a>
<!-- api: P:InnoEditor.Inspection.EngineObjectReferenceDropTarget.expectedType 5383c6461911c36920a679d2130eb4d43d8b936d9deb67cefb26df3a47b7ecfe -->

```csharp
public System.Type InnoEditor.Inspection.EngineObjectReferenceDropTarget.expectedType { get; }
```

Gets the required engine object type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/panels/Inno.Editor.Panel.Inspector/DragDrop/EngineObjectReferenceDropTarget.cs#L44).
