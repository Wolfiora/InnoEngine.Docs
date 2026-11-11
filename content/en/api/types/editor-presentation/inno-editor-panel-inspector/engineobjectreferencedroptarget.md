---
title: "EngineObjectReferenceDropTarget"
description: "Reference for EngineObjectReferenceDropTarget in Inno.Editor.Panel.Inspector."
uid: api.inno.editor.panel.inspector.379406779b0a6284
kind: api
owners:
  - Inno.Editor.Panel.Inspector
apiSurface: source-clr
contracts:
  - project.inno-editor-panel-inspector
---
# `EngineObjectReferenceDropTarget`

This reference describes `EngineObjectReferenceDropTarget` in `Inno.Editor.Panel.Inspector`. Read the [shared contract](../../../projects/inno-editor-panel-inspector.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-acff67dfa6a7339c) | Method |
| [`Assign`](#api-a783be18a1b91ee0) | Method |
| [`expectedType`](#api-af0659a33b66d9a5) | Property |

## Type declaration

<a id="api-379406779b0a6284"></a>
<!-- api: T:Inno.Editor.Panel.Inspector.EngineObjectReferenceDropTarget ceb10cfb96ee0c22669ea634c19d22308c56fce6e83e89d959590c744c7e5637 -->

```csharp
public sealed class Inno.Editor.Panel.Inspector.EngineObjectReferenceDropTarget
```

Borrows an object property's type and assignment callback for one synchronous drop request.

**Constraints:** Recreate this target for each presentation request. Its type and callback must not be retained
across frames or extension generations, or included in History or persistent state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/panels/Inno.Editor.Panel.Inspector/DragDrop/EngineObjectReferenceDropTarget.cs#L15).

## `#ctor`

<a id="api-acff67dfa6a7339c"></a>
<!-- api: M:Inno.Editor.Panel.Inspector.EngineObjectReferenceDropTarget.#ctor(System.Type,System.Action{Inno.Scene.EngineObject}) 653e8db9f849419c5f3b5a53d8ed38cbaf074a05e685c71f2ba5ebb71685acba -->

```csharp
public Inno.Editor.Panel.Inspector.EngineObjectReferenceDropTarget.EngineObjectReferenceDropTarget(System.Type expectedType, System.Action<Inno.Scene.EngineObject> assign)
```

Creates a drop target that validates and assigns an engine object to a serialized property.

**Parameter `expectedType`:** The engine object type accepted by the property.

**Parameter `assign`:** The callback that writes an accepted object to the property.

**Throws `System.ArgumentNullException`:** Thrown when either argument is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/panels/Inno.Editor.Panel.Inspector/DragDrop/EngineObjectReferenceDropTarget.cs#L32).

## `Assign`

<a id="api-a783be18a1b91ee0"></a>
<!-- api: M:Inno.Editor.Panel.Inspector.EngineObjectReferenceDropTarget.Assign(Inno.Scene.EngineObject) 6b9ac1b1ef384a36f511242c3ba4d0297fc2bd4b8cdcfa42509afb39251c019f -->

```csharp
public void Inno.Editor.Panel.Inspector.EngineObjectReferenceDropTarget.Assign(Inno.Scene.EngineObject value)
```

Assigns an accepted engine object to the represented property.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/panels/Inno.Editor.Panel.Inspector/DragDrop/EngineObjectReferenceDropTarget.cs#L52).

## `expectedType`

<a id="api-af0659a33b66d9a5"></a>
<!-- api: P:Inno.Editor.Panel.Inspector.EngineObjectReferenceDropTarget.expectedType 8c2002a21ac32c8260365626f0397c1d373db6530fd32f67e6875305719556f0 -->

```csharp
public System.Type Inno.Editor.Panel.Inspector.EngineObjectReferenceDropTarget.expectedType { get; }
```

Gets the required engine object type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/panels/Inno.Editor.Panel.Inspector/DragDrop/EngineObjectReferenceDropTarget.cs#L44).
