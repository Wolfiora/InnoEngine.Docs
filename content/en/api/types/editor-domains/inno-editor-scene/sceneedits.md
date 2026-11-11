---
title: "SceneEdits"
description: "Reference for SceneEdits in Inno.Editor.Scene."
uid: api.inno.editor.scene.40bd2d84f306e5e5
kind: api
owners:
  - Inno.Editor.Scene
apiSurface: source-clr
contracts:
  - project.inno-editor-scene
---
# `SceneEdits`

This reference describes `SceneEdits` in `Inno.Editor.Scene`. Read the [shared contract](../../../projects/inno-editor-scene.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Core.EditorModule`.

## Members

| Member | Kind |
| --- | --- |
| [`AddComponent`](#api-3f7f5fdb338d146c) | Method |
| [`AddSystem`](#api-3253e641abc88d68) | Method |
| [`CanEdit`](#api-94d2e3c8fca048f2) | Method |
| [`CanEdit`](#api-a94c8ab313cda2ea) | Method |
| [`ChangeHierarchy`](#api-a08dbc1bb506e904) | Method |
| [`ChangeProperties`](#api-7420367f48f297e5) | Method |
| [`ChangeProperty`](#api-3788cb3527d8520d) | Method |
| [`CloseScene`](#api-9c89e0f1454f00b8) | Method |
| [`CreateGameObject`](#api-1c6afea569d40540) | Method |
| [`CreateScene`](#api-10fe40e9d71f1ff5) | Method |
| [`DeleteGameObject`](#api-678645b95748a40c) | Method |
| [`DeleteGameObjects`](#api-20a2b799ba444f45) | Method |
| [`HaveSamePropertyValues`](#api-dfd8eb5b1c928f60) | Method |
| [`InstantiatePrefab`](#api-f02ee59177e1870d) | Method |
| [`MoveGameObjects`](#api-9a4ccac21d02e314) | Method |
| [`RemoveComponent`](#api-7a3c69369fb928de) | Method |
| [`RemoveSystem`](#api-ab19ff3a09a370f5) | Method |
| [`RenameGameObject`](#api-e8d398a7959c3499) | Method |
| [`RenameScene`](#api-95b597d67ea4ef40) | Method |
| [`ResetComponent`](#api-3b6d55ea97544f24) | Method |
| [`ResetSystem`](#api-295eb12685d8ae18) | Method |
| [`SetComponentIndex`](#api-e051ca486a94a583) | Method |
| [`SetGameObjectActive`](#api-151f71284f507eba) | Method |
| [`SetGameObjectLayer`](#api-d8512016437eebd2) | Method |
| [`SetGameObjectTag`](#api-3ee6c8ad2cd00f48) | Method |
| [`SetSceneIndex`](#api-f4625881865fc2d1) | Method |
| [`SetSystemIndex`](#api-87dfe7037570677e) | Method |

## Type declaration

<a id="api-40bd2d84f306e5e5"></a>
<!-- api: T:Inno.Editor.Scene.SceneEdits 083cf57af2a9f9b01a45be81acf1d54cc1eb2744e65e9daac4e665505ac5bbb7 -->

```csharp
public sealed class Inno.Editor.Scene.SceneEdits : Inno.Editor.Core.EditorModule
```

Applies scene-document mutations and records compact, reload-safe inverse data in editor history.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.cs#L20).

## `AddComponent`

<a id="api-3f7f5fdb338d146c"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.AddComponent(Inno.Scene.GameObject,System.Type,System.String) 25f806eccdb9e405f099aa0553b5000229ba7f013529ac0ea0fc40b51ee38731 -->

```csharp
public Inno.Scene.GameComponent Inno.Editor.Scene.SceneEdits.AddComponent(Inno.Scene.GameObject owner, System.Type componentType, string? historyName = null)
```

Adds one component and records its identity, stable type, index, and persistent properties.

**Parameter `owner`:** The live GameObject receiving the component.

**Parameter `componentType`:** The concrete component type to create.

**Parameter `historyName`:** An optional user-facing history entry name.

**Returns:** The newly attached component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Elements.cs#L31).

## `AddSystem`

<a id="api-3253e641abc88d68"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.AddSystem(Inno.Scene.GameScene,System.Type,System.String) b1461b60525c682368d56dbee308e3a305e04d502868057a652657becea53261 -->

```csharp
public Inno.Scene.GameSystem Inno.Editor.Scene.SceneEdits.AddSystem(Inno.Scene.GameScene scene, System.Type systemType, string? historyName = null)
```

Adds one scene system and records its identity, stable type, index, and persistent properties.

**Parameter `scene`:** The loaded scene receiving the system.

**Parameter `systemType`:** The concrete system type to create.

**Parameter `historyName`:** An optional user-facing history entry name.

**Returns:** The newly registered system.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Elements.cs#L273).

## `CanEdit`

<a id="api-94d2e3c8fca048f2"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.CanEdit(Inno.Scene.EngineObject) 30b3a83b924d53ff80414e382fda5f983f159f41faad400611422f2a7dafc95f -->

```csharp
public bool Inno.Editor.Scene.SceneEdits.CanEdit(Inno.Scene.EngineObject target)
```

Gets whether a scene object belongs to an editable presented scene.

**Parameter `target`:** The scene object to inspect.

**Returns:** `true` when its owning scene is writable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.cs#L63).

## `CanEdit`

<a id="api-a94c8ab313cda2ea"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.CanEdit(Inno.Scene.GameScene) 863e27947c47d399a352e56bd17bec802944d14f64c26752fd7a353390d693d6 -->

```csharp
public bool Inno.Editor.Scene.SceneEdits.CanEdit(Inno.Scene.GameScene scene)
```

Gets whether the scene is editable in the current Edit or isolated Play world.

**Parameter `scene`:** The loaded scene to inspect.

**Returns:** `true` when scene commands may change this scene. Play changes use
    a temporary history branch and are discarded when the Play session ends.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.cs#L52).

## `ChangeHierarchy`

<a id="api-a08dbc1bb506e904"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.ChangeHierarchy(Inno.Scene.GameObject,System.Action{Inno.Editor.Scene.SceneHierarchyEdit},System.String,System.Collections.Generic.IReadOnlyCollection{Inno.Scene.GameObject}) b0e1b83bc6776adba5cd2a53c13062844829d7da4d408c6b437c52f8ae38b81c -->

```csharp
public bool Inno.Editor.Scene.SceneEdits.ChangeHierarchy(Inno.Scene.GameObject gameObject, System.Action<Inno.Editor.Scene.SceneHierarchyEdit> mutation, string historyName = "Move GameObject", System.Collections.Generic.IReadOnlyCollection<Inno.Scene.GameObject>? relatedObjects = null)
```

Applies a hierarchy mutation and records only the affected parent and sibling-index tuples.

**Parameter `gameObject`:** The primary GameObject being moved.

**Parameter `mutation`:** The hierarchy mutation to execute through the world-owned operation context.

**Parameter `historyName`:** The user-facing history entry name.

**Parameter `relatedObjects`:** Additional objects whose placements the mutation may change, such as promoted children.

**Returns:** `true` when at least one placement changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Hierarchy.cs#L80).

## `ChangeProperties`

<a id="api-7420367f48f297e5"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.ChangeProperties(System.Collections.Generic.IReadOnlyList{Inno.Scene.EngineObject},System.String,System.Action,System.String,System.String,System.String) ed5a7531a71b7fc19950a6973cec04194f4418d90c734b55a57eae090bada674 -->

```csharp
public bool Inno.Editor.Scene.SceneEdits.ChangeProperties(System.Collections.Generic.IReadOnlyList<Inno.Scene.EngineObject> targets, string propertyName, System.Action mutation, string historyName, string? mergeKey = null, string? componentName = null)
```

Applies one primary property edit to a selection using owner-resolved serialized values and one atomic History transaction.

**Parameter `targets`:** Ordered compatible scene objects; the first object supplies the edited value.

**Parameter `propertyName`:** The common root serialized property.

**Parameter `mutation`:** Changes the primary value synchronously; no callback is retained.

**Parameter `historyName`:** The user-facing batch edit name.

**Parameter `mergeKey`:** An optional active gesture identity; null keeps discrete edits separate.

**Parameter `componentName`:** An optional public scalar value component; Euler axes use euler.x, euler.y or euler.z.

**Returns:** True when at least one object changed; false when all values already matched.

**Throws `System.ArgumentException`:** The selection is empty or a required common property is absent.

**Throws `System.InvalidOperationException`:** An owner is unavailable, read-only, or rollback fails.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Selection.cs#L72).

## `ChangeProperty`

<a id="api-3788cb3527d8520d"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.ChangeProperty(Inno.Scene.EngineObject,System.String,System.Action,System.String,System.String) 7eaa5d901320e5306399a28593ca702f215166b52dea0093ef9ad2d8c177ad56 -->

```csharp
public bool Inno.Editor.Scene.SceneEdits.ChangeProperty(Inno.Scene.EngineObject target, string propertyName, System.Action mutation, string historyName, string? mergeKey = null)
```

Applies a mutation to one serializable scene property and records only its before and after values.

**Parameter `target`:** The live scene object containing the root serialized property.

**Parameter `propertyName`:** The exact root serialized member key.

**Parameter `mutation`:** The mutation that assigns the new value.

**Parameter `historyName`:** The user-facing history entry name.

**Parameter `mergeKey`:** An optional stable key for coalescing adjacent continuous edits.

**Returns:** `true` when the property value changed and a history entry was recorded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Properties.cs#L210).

## `CloseScene`

<a id="api-9c89e0f1454f00b8"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.CloseScene(Inno.Scene.GameScene,System.String) d67bc3d0d68bd3fd960b081a9c4dcd9ecfdb01e21f2c86fbf5baeb1b465afc1b -->

```csharp
public bool Inno.Editor.Scene.SceneEdits.CloseScene(Inno.Scene.GameScene scene, string historyName = "Close Scene")
```

Closes one loaded scene without deleting its source asset and records a reversible document change.

**Parameter `scene`:** The loaded scene to close.

**Parameter `historyName`:** The user-facing history entry name.

**Returns:** `true` when the scene was closed and recorded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.cs#L130).

## `CreateGameObject`

<a id="api-1c6afea569d40540"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.CreateGameObject(Inno.Scene.GameScene,Inno.Scene.Components.Transform,System.String) 4f62871bf07e51d1873c4349995e973528547c6f24ae2ebf001499ed28ddfe8f -->

```csharp
public Inno.Scene.GameObject Inno.Editor.Scene.SceneEdits.CreateGameObject(Inno.Scene.GameScene scene, Inno.Scene.Components.Transform? parent = null, string historyName = "Create GameObject")
```

Creates a GameObject, optionally parents it, and records only the new subtree state.

**Parameter `scene`:** The loaded scene that will own the object.

**Parameter `parent`:** The optional parent transform.

**Parameter `historyName`:** The user-facing history entry name.

**Returns:** The newly created GameObject.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Objects.cs#L33).

## `CreateScene`

<a id="api-10fe40e9d71f1ff5"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.CreateScene(System.String) cd23c7b02ca3d776e815958d9b52edd75b3750ab6d5bfa90cdc9742a08e5d0be -->

```csharp
public Inno.Scene.GameScene Inno.Editor.Scene.SceneEdits.CreateScene(string historyName = "Create Scene")
```

Creates an additive scene and records a reversible document change.

**Parameter `historyName`:** The user-facing history entry name.

**Returns:** The newly created active scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.cs#L87).

## `DeleteGameObject`

<a id="api-678645b95748a40c"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.DeleteGameObject(Inno.Scene.GameObject,System.String) 1817640516be9ac1b71cde06f346fd319a87cd20c5a58232735627cd076f1795 -->

```csharp
public bool Inno.Editor.Scene.SceneEdits.DeleteGameObject(Inno.Scene.GameObject gameObject, string historyName = "Delete GameObject")
```

Deletes a GameObject subtree and records only that subtree plus incoming serialized references.

**Parameter `gameObject`:** The live subtree root to delete.

**Parameter `historyName`:** The user-facing history entry name.

**Returns:** `true` when the subtree was deleted and recorded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Objects.cs#L150).

## `DeleteGameObjects`

<a id="api-20a2b799ba444f45"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.DeleteGameObjects(System.Collections.Generic.IReadOnlyList{Inno.Scene.GameObject}) 437b2bb769155458050d8bbbbfe771b79eecb0155d4c27b4809129139e63a24b -->

```csharp
public void Inno.Editor.Scene.SceneEdits.DeleteGameObjects(System.Collections.Generic.IReadOnlyList<Inno.Scene.GameObject> targets)
```

Deletes selected subtrees atomically, omitting descendants already covered by a selected ancestor.

**Parameter `targets`:** Live objects to delete; every owner is validated before the first mutation.

**Throws `System.InvalidOperationException`:** An owner is unavailable, read-only, or rollback fails.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Selection.cs#L22).

## `HaveSamePropertyValues`

<a id="api-dfd8eb5b1c928f60"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.HaveSamePropertyValues(System.Collections.Generic.IReadOnlyList{Inno.Scene.EngineObject},System.String) ce5b527fab6feec8566ae0201bcd6de8c83a00e7ce81d67e1d7def36cea48b10 -->

```csharp
public bool Inno.Editor.Scene.SceneEdits.HaveSamePropertyValues(System.Collections.Generic.IReadOnlyList<Inno.Scene.EngineObject> targets, string propertyName)
```

Compares common serialized property values using the complete owner serialization context.

**Parameter `targets`:** Live compatible scene objects to compare.

**Parameter `propertyName`:** The required common serialized member.

**Returns:** True when every encoded value matches, including an empty selection.

**Throws `System.InvalidOperationException`:** A selected object does not expose the requested property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Selection.cs#L141).

## `InstantiatePrefab`

<a id="api-f02ee59177e1870d"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.InstantiatePrefab(Inno.Scene.PrefabAsset,Inno.Scene.GameScene,Inno.Scene.Components.Transform,System.String) db1f856bd7b810fc4f6cf29b1b6eefbfdc2741bb012690ddf6ac6d7301e499db -->

```csharp
public Inno.Scene.GameObject Inno.Editor.Scene.SceneEdits.InstantiatePrefab(Inno.Scene.PrefabAsset prefab, Inno.Scene.GameScene scene, Inno.Scene.Components.Transform? parent = null, string historyName = "Instantiate Prefab")
```

Instantiates a prefab into a loaded scene and records the created subtree as one reversible edit.

**Parameter `prefab`:** The imported prefab asset to instantiate.

**Parameter `scene`:** The loaded scene that will own the instance.

**Parameter `parent`:** The optional parent transform for the instantiated root.

**Parameter `historyName`:** The user-facing history entry name.

**Returns:** The instantiated prefab root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Objects.cs#L91).

## `MoveGameObjects`

<a id="api-9a4ccac21d02e314"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.MoveGameObjects(System.Collections.Generic.IReadOnlyList{Inno.Scene.GameObject},Inno.Scene.GameScene,Inno.Scene.GameObject,System.Int32) 5299c5ef0279f3a553dfd7ab4c80177a194a020646e1bc1d88b11bbecc111e7c -->

```csharp
public void Inno.Editor.Scene.SceneEdits.MoveGameObjects(System.Collections.Generic.IReadOnlyList<Inno.Scene.GameObject> targets, Inno.Scene.GameScene destination, Inno.Scene.GameObject? parent = null, int insertionIndex = 2147483647)
```

Moves minimal selected roots together, preserving descendants and recording only affected placements.

**Parameter `targets`:** Selected live objects in their required relative order.

**Parameter `destination`:** The loaded editable destination scene.

**Parameter `parent`:** The new parent, or null for scene roots.

**Parameter `insertionIndex`:** The insertion index after removing the selected roots; the default appends them.

**Throws `System.InvalidOperationException`:** An owner is read-only, unavailable, or the move would form a cycle.

**Throws `System.ArgumentException`:** The parent belongs to a different scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Selection.cs#L184).

## `RemoveComponent`

<a id="api-7a3c69369fb928de"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.RemoveComponent(Inno.Scene.GameComponent,System.String) 6a9902911ba11303bbcb2fad65ebe8a463454e92e2133156d3e58914675911c0 -->

```csharp
public bool Inno.Editor.Scene.SceneEdits.RemoveComponent(Inno.Scene.GameComponent component, string? historyName = null)
```

Removes the component from its scene owner and records a reversible serialized history change.

**Parameter `component`:** The attached non-Transform component to remove.

**Parameter `historyName`:** An optional user-facing history entry name.

**Returns:** `true` when the component was removed and recorded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Elements.cs#L87).

## `RemoveSystem`

<a id="api-ab19ff3a09a370f5"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.RemoveSystem(Inno.Scene.GameSystem,System.String) 41f26d5db522c80a41a8c4847361574164186af4b40f7e5d256fc521caf6b84a -->

```csharp
public bool Inno.Editor.Scene.SceneEdits.RemoveSystem(Inno.Scene.GameSystem system, string? historyName = null)
```

Removes the system from its scene and records a reversible serialized history change.

**Parameter `system`:** The registered system to remove.

**Parameter `historyName`:** An optional user-facing history entry name.

**Returns:** `true` when the system was removed and recorded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Elements.cs#L327).

## `RenameGameObject`

<a id="api-e8d398a7959c3499"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.RenameGameObject(Inno.Scene.GameObject,System.String,System.String) dc133fab2657bb29dded3ab1dc6baee2a977241dc928bfdc92acc89116ad36d4 -->

```csharp
public void Inno.Editor.Scene.SceneEdits.RenameGameObject(Inno.Scene.GameObject gameObject, string name, string historyName = "Rename GameObject")
```

Renames a live GameObject and records the two display strings.

**Parameter `gameObject`:** The live GameObject to rename.

**Parameter `name`:** The new display name.

**Parameter `historyName`:** The user-facing history entry name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Properties.cs#L61).

## `RenameScene`

<a id="api-95b597d67ea4ef40"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.RenameScene(Inno.Scene.GameScene,System.String,System.String) 5a9256f2d408b47a23db98a716a0cac0a4e994ccd4a2fe04b3fa59511b7f8240 -->

```csharp
public void Inno.Editor.Scene.SceneEdits.RenameScene(Inno.Scene.GameScene scene, string name, string historyName = "Rename Scene")
```

Renames a loaded scene and records the two display strings.

**Parameter `scene`:** The loaded scene to rename.

**Parameter `name`:** The new display name.

**Parameter `historyName`:** The user-facing history entry name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Properties.cs#L30).

## `ResetComponent`

<a id="api-3b6d55ea97544f24"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.ResetComponent(Inno.Scene.GameComponent,System.String) 2ac6e7f1f60b68afe4d2f5f76be973e42d18879545673cd2db2b2e9951290f77 -->

```csharp
public void Inno.Editor.Scene.SceneEdits.ResetComponent(Inno.Scene.GameComponent component, string? historyName = null)
```

Resets one component and records its compact property state before and after Reset.

**Parameter `component`:** The attached component to reset.

**Parameter `historyName`:** An optional user-facing history entry name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Elements.cs#L153).

## `ResetSystem`

<a id="api-295eb12685d8ae18"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.ResetSystem(Inno.Scene.GameSystem,System.String) 1c5a313e36e38696f1a3a74a37898b596001e0791efcb8c2bb8fbafc407239a9 -->

```csharp
public void Inno.Editor.Scene.SceneEdits.ResetSystem(Inno.Scene.GameSystem system, string? historyName = null)
```

Resets one scene system and records its compact property state before and after Reset.

**Parameter `system`:** The registered system to reset.

**Parameter `historyName`:** An optional user-facing history entry name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Elements.cs#L394).

## `SetComponentIndex`

<a id="api-e051ca486a94a583"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.SetComponentIndex(Inno.Scene.GameComponent,System.Int32,System.String) f8caf65c08b8019cddc5f48f2bc689de06aaad4d3da44d6171ba9c70cfd2a86f -->

```csharp
public void Inno.Editor.Scene.SceneEdits.SetComponentIndex(Inno.Scene.GameComponent component, int componentIndex, string historyName = "Move Component")
```

Moves an attached component and records only its two attachment indices.

**Parameter `component`:** The attached component to move, including the mandatory Transform.

**Parameter `componentIndex`:** The requested attachment index.

**Parameter `historyName`:** The user-facing history entry name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Elements.cs#L211).

## `SetGameObjectActive`

<a id="api-151f71284f507eba"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.SetGameObjectActive(Inno.Scene.GameObject,System.Boolean,System.String) 0f9e076d48e2b18823beaf302733c2b805aa6646a3f6a8c08c8b53db76519cfa -->

```csharp
public void Inno.Editor.Scene.SceneEdits.SetGameObjectActive(Inno.Scene.GameObject gameObject, bool active, string? historyName = null)
```

Changes the explicit active state of a GameObject and records the two Boolean values.

**Parameter `gameObject`:** The live GameObject whose active state should change.

**Parameter `active`:** The requested explicit active state.

**Parameter `historyName`:** An optional user-facing history entry name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Properties.cs#L92).

## `SetGameObjectLayer`

<a id="api-d8512016437eebd2"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.SetGameObjectLayer(Inno.Scene.GameObject,Inno.Scene.Layers.GameLayer,System.String) b6e1bef64ffc3882cb7da22191ce60fa5a9275b7c86966530648d06e8d898c3f -->

```csharp
public void Inno.Editor.Scene.SceneEdits.SetGameObjectLayer(Inno.Scene.GameObject gameObject, Inno.Scene.Layers.GameLayer layer, string historyName = "Set GameObject Layer")
```

Changes the layer of a live GameObject and records the two stable numeric layer slots.

**Parameter `gameObject`:** The live GameObject whose layer should change.

**Parameter `layer`:** The requested project layer slot.

**Parameter `historyName`:** The user-facing history entry name.

**Throws `System.ArgumentNullException`:** Thrown when `gameObject` is `null`.

**Throws `System.ArgumentException`:** Thrown when `historyName` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Properties.cs#L169).

## `SetGameObjectTag`

<a id="api-3ee6c8ad2cd00f48"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.SetGameObjectTag(Inno.Scene.GameObject,System.String,System.String) d1dd7ab7128475a29ddbae3c06a243cf4ea1f19a042af8fffff93bbf7a61f376 -->

```csharp
public void Inno.Editor.Scene.SceneEdits.SetGameObjectTag(Inno.Scene.GameObject gameObject, string tag, string historyName = "Set GameObject Tag")
```

Changes the tag of a live GameObject and records the two ordinal tag strings.

**Parameter `gameObject`:** The live GameObject whose tag should change.

**Parameter `tag`:** The requested non-empty tag.

**Parameter `historyName`:** The user-facing history entry name.

**Throws `System.ArgumentNullException`:** Thrown when `gameObject` is `null`.

**Throws `System.ArgumentException`:** Thrown when `tag` or `historyName` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Properties.cs#L130).

## `SetSceneIndex`

<a id="api-f4625881865fc2d1"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.SetSceneIndex(Inno.Scene.GameScene,System.Int32,System.String) 67937205f1a8180b2bf943c92afee3bb33a127140669ef2ea53cf6c429d555f3 -->

```csharp
public void Inno.Editor.Scene.SceneEdits.SetSceneIndex(Inno.Scene.GameScene scene, int sceneIndex, string historyName = "Reorder Scene")
```

Moves a loaded scene to a hierarchy index and records the two integer positions.

**Parameter `scene`:** The loaded scene to reorder.

**Parameter `sceneIndex`:** The requested hierarchy index.

**Parameter `historyName`:** The user-facing history entry name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Hierarchy.cs#L30).

## `SetSystemIndex`

<a id="api-87dfe7037570677e"></a>
<!-- api: M:Inno.Editor.Scene.SceneEdits.SetSystemIndex(Inno.Scene.GameScene,Inno.Scene.GameSystem,System.Int32,System.String) 18f361b2f01ccf8556fbec4310337f99330c6ba65c2c033c181356c552e4a9f6 -->

```csharp
public void Inno.Editor.Scene.SceneEdits.SetSystemIndex(Inno.Scene.GameScene scene, Inno.Scene.GameSystem system, int systemIndex, string historyName = "Move System")
```

Moves a registered system and records only its two display indices.

**Parameter `scene`:** The scene currently owning the system.

**Parameter `system`:** The registered system to move.

**Parameter `systemIndex`:** The requested display index.

**Parameter `historyName`:** The user-facing history entry name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Elements.cs#L455).
