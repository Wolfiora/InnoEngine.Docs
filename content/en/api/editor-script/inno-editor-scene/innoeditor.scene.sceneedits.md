---
title: "SceneEdits"
description: "Reference for SceneEdits in Inno.Editor.Scene."
uid: api.inno.editor.scene.editor-script.462d9353427922c1
kind: api
owners:
  - Inno.Editor.Scene
apiSurface: editor-script
contracts:
  - project.inno-editor-scene
  - manual.scripting.use-script-api
---
# `SceneEdits`

This reference describes `SceneEdits` in `Inno.Editor.Scene`. Read the [shared contract](../../projects/inno-editor-scene.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Core.EditorModule`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f6cc07113c7cc69c) | Method |
| [`AddComponent`](#api-e1b269b92e42059f) | Method |
| [`AddSystem`](#api-e8edb5aa079bf609) | Method |
| [`CanEdit`](#api-57dae091a2d999a1) | Method |
| [`CanEdit`](#api-fa1ed6cc40b98ce8) | Method |
| [`ChangeHierarchy`](#api-2b8d341a971b2ce9) | Method |
| [`ChangeProperties`](#api-368d8cc9d060bc8b) | Method |
| [`ChangeProperty`](#api-eb2ff28074a5b048) | Method |
| [`CloseScene`](#api-339d76f087c3c2e3) | Method |
| [`CreateGameObject`](#api-f3e22d1456f48e11) | Method |
| [`CreateScene`](#api-adfb102470f10b14) | Method |
| [`DeleteGameObject`](#api-6d8a4b7aa4fb5a19) | Method |
| [`DeleteGameObjects`](#api-37d3267ade5ef29e) | Method |
| [`HaveSamePropertyValues`](#api-81fc5ef8981cdbe0) | Method |
| [`InstantiatePrefab`](#api-2b62bfdf86b7e88f) | Method |
| [`MoveGameObjects`](#api-b1b17c5c53166d67) | Method |
| [`RemoveComponent`](#api-2c5788249e2c8e58) | Method |
| [`RemoveSystem`](#api-b17c419d4d482aea) | Method |
| [`RenameGameObject`](#api-9a0811fabfb108aa) | Method |
| [`RenameScene`](#api-ef68b3ddeb72b5cf) | Method |
| [`ResetComponent`](#api-3866285ed9f387f9) | Method |
| [`ResetSystem`](#api-412642e000e34b0a) | Method |
| [`SetComponentIndex`](#api-b82a7951ca774f9b) | Method |
| [`SetGameObjectActive`](#api-fab7a6996092a0fe) | Method |
| [`SetGameObjectLayer`](#api-0fa945068b6e46a5) | Method |
| [`SetGameObjectTag`](#api-1798c116dc661df8) | Method |
| [`SetSceneIndex`](#api-f62ee5ea6c097424) | Method |
| [`SetSystemIndex`](#api-1670e9f2ca5f5f34) | Method |

## Type declaration

<a id="api-462d9353427922c1"></a>
<!-- api: T:InnoEditor.Scene.SceneEdits b84ce95f9e68a89691f6c95db30b7596d6da95335f3d092ac0b0c785f8422474 -->

```csharp
public sealed class InnoEditor.Scene.SceneEdits : InnoEditor.Core.EditorModule
```

Applies scene-document mutations and records compact, reload-safe inverse data in editor history.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.cs#L20).

## `#ctor`

<a id="api-f6cc07113c7cc69c"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.#ctor 478cec190ba32df824f66d08d55ab5bfd72a6a158b5dcf328aae1d91719830b4 -->

```csharp
public InnoEditor.Scene.SceneEdits.SceneEdits()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.cs#L20).

## `AddComponent`

<a id="api-e1b269b92e42059f"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.AddComponent(InnoEngine.Scene.GameObject,System.Type,System.String) fb7cf16505a5dbda8af0d9a52d8900511d2008e8769815e55e190f3afe8f2d91 -->

```csharp
public InnoEngine.Scene.GameComponent InnoEditor.Scene.SceneEdits.AddComponent(InnoEngine.Scene.GameObject owner, System.Type componentType, string? historyName = null)
```

Adds one component and records its identity, stable type, index, and persistent properties.

**Parameter `owner`:** The live GameObject receiving the component.

**Parameter `componentType`:** The concrete component type to create.

**Parameter `historyName`:** An optional user-facing history entry name.

**Returns:** The newly attached component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Elements.cs#L31).

## `AddSystem`

<a id="api-e8edb5aa079bf609"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.AddSystem(InnoEngine.Scene.GameScene,System.Type,System.String) 27c4d28b8919711670765e1b0211d5cba022a9b8189db23d1864d00b636d843e -->

```csharp
public InnoEngine.Scene.GameSystem InnoEditor.Scene.SceneEdits.AddSystem(InnoEngine.Scene.GameScene scene, System.Type systemType, string? historyName = null)
```

Adds one scene system and records its identity, stable type, index, and persistent properties.

**Parameter `scene`:** The loaded scene receiving the system.

**Parameter `systemType`:** The concrete system type to create.

**Parameter `historyName`:** An optional user-facing history entry name.

**Returns:** The newly registered system.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Elements.cs#L273).

## `CanEdit`

<a id="api-57dae091a2d999a1"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.CanEdit(InnoEngine.Scene.EngineObject) fc578db5a49ce2875db09a2b15cd913836918f97647249356db9476b15c9a3de -->

```csharp
public bool InnoEditor.Scene.SceneEdits.CanEdit(InnoEngine.Scene.EngineObject target)
```

Gets whether a scene object belongs to an editable presented scene.

**Parameter `target`:** The scene object to inspect.

**Returns:** `true` when its owning scene is writable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.cs#L63).

## `CanEdit`

<a id="api-fa1ed6cc40b98ce8"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.CanEdit(InnoEngine.Scene.GameScene) 23f38e1977421ed3a59d5e1c762c412ec4504c9e029935b2095c3d5e5e399633 -->

```csharp
public bool InnoEditor.Scene.SceneEdits.CanEdit(InnoEngine.Scene.GameScene scene)
```

Gets whether the scene is editable in the current Edit or isolated Play world.

**Parameter `scene`:** The loaded scene to inspect.

**Returns:** `true` when scene commands may change this scene. Play changes use
            a temporary history branch and are discarded when the Play session ends.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.cs#L52).

## `ChangeHierarchy`

<a id="api-2b8d341a971b2ce9"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.ChangeHierarchy(InnoEngine.Scene.GameObject,System.Action{InnoEditor.Scene.SceneHierarchyEdit},System.String,System.Collections.Generic.IReadOnlyCollection{InnoEngine.Scene.GameObject}) e7e3d34a80c09adeb9cfbf903fe10a13757020e3c2798a254d31fdfe82c8fd25 -->

```csharp
public bool InnoEditor.Scene.SceneEdits.ChangeHierarchy(InnoEngine.Scene.GameObject gameObject, System.Action<InnoEditor.Scene.SceneHierarchyEdit> mutation, string historyName = "Move GameObject", System.Collections.Generic.IReadOnlyCollection<InnoEngine.Scene.GameObject>? relatedObjects = null)
```

Applies a hierarchy mutation and records only the affected parent and sibling-index tuples.

**Parameter `gameObject`:** The primary GameObject being moved.

**Parameter `mutation`:** The hierarchy mutation to execute through the world-owned operation context.

**Parameter `historyName`:** The user-facing history entry name.

**Parameter `relatedObjects`:** Additional objects whose placements the mutation may change, such as promoted children.

**Returns:** `true` when at least one placement changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Hierarchy.cs#L80).

## `ChangeProperties`

<a id="api-368d8cc9d060bc8b"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.ChangeProperties(System.Collections.Generic.IReadOnlyList{InnoEngine.Scene.EngineObject},System.String,System.Action,System.String,System.String,System.String) d3d13f1899f940734417c69bf72a24ec997b850221fbd75726caea81badd08e8 -->

```csharp
public bool InnoEditor.Scene.SceneEdits.ChangeProperties(System.Collections.Generic.IReadOnlyList<InnoEngine.Scene.EngineObject> targets, string propertyName, System.Action mutation, string historyName, string? mergeKey = null, string? componentName = null)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Selection.cs#L72).

## `ChangeProperty`

<a id="api-eb2ff28074a5b048"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.ChangeProperty(InnoEngine.Scene.EngineObject,System.String,System.Action,System.String,System.String) 6ef79c708c5381c9e1b5312b8e324e9fe739e94274ed59642383860878e75499 -->

```csharp
public bool InnoEditor.Scene.SceneEdits.ChangeProperty(InnoEngine.Scene.EngineObject target, string propertyName, System.Action mutation, string historyName, string? mergeKey = null)
```

Applies a mutation to one serializable scene property and records only its before and after values.

**Parameter `target`:** The live scene object containing the root serialized property.

**Parameter `propertyName`:** The exact root serialized member key.

**Parameter `mutation`:** The mutation that assigns the new value.

**Parameter `historyName`:** The user-facing history entry name.

**Parameter `mergeKey`:** An optional stable key for coalescing adjacent continuous edits.

**Returns:** `true` when the property value changed and a history entry was recorded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Properties.cs#L210).

## `CloseScene`

<a id="api-339d76f087c3c2e3"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.CloseScene(InnoEngine.Scene.GameScene,System.String) c89f98a58688e3f0cff39b12e7795da210c9fc382e1b0e6571dea4222399ab79 -->

```csharp
public bool InnoEditor.Scene.SceneEdits.CloseScene(InnoEngine.Scene.GameScene scene, string historyName = "Close Scene")
```

Closes one loaded scene without deleting its source asset and records a reversible document change.

**Parameter `scene`:** The loaded scene to close.

**Parameter `historyName`:** The user-facing history entry name.

**Returns:** `true` when the scene was closed and recorded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.cs#L130).

## `CreateGameObject`

<a id="api-f3e22d1456f48e11"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.CreateGameObject(InnoEngine.Scene.GameScene,InnoEngine.Scene.Transform,System.String) 7f418021e86ff165eb7c3f03ca09eebe42a12388d9b8a4fe3873c206a85b7482 -->

```csharp
public InnoEngine.Scene.GameObject InnoEditor.Scene.SceneEdits.CreateGameObject(InnoEngine.Scene.GameScene scene, InnoEngine.Scene.Transform? parent = null, string historyName = "Create GameObject")
```

Creates a GameObject, optionally parents it, and records only the new subtree state.

**Parameter `scene`:** The loaded scene that will own the object.

**Parameter `parent`:** The optional parent transform.

**Parameter `historyName`:** The user-facing history entry name.

**Returns:** The newly created GameObject.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Objects.cs#L33).

## `CreateScene`

<a id="api-adfb102470f10b14"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.CreateScene(System.String) f09818ef084663ced8313292789a98c4c3baf343b6ad34f13fce9dc47ac5f0c1 -->

```csharp
public InnoEngine.Scene.GameScene InnoEditor.Scene.SceneEdits.CreateScene(string historyName = "Create Scene")
```

Creates an additive scene and records a reversible document change.

**Parameter `historyName`:** The user-facing history entry name.

**Returns:** The newly created active scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.cs#L87).

## `DeleteGameObject`

<a id="api-6d8a4b7aa4fb5a19"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.DeleteGameObject(InnoEngine.Scene.GameObject,System.String) 34ee9966dc8e62fb9ec3a55d1ce6e2c6ca16043ffaa8fd412bdbd81b78ea625b -->

```csharp
public bool InnoEditor.Scene.SceneEdits.DeleteGameObject(InnoEngine.Scene.GameObject gameObject, string historyName = "Delete GameObject")
```

Deletes a GameObject subtree and records only that subtree plus incoming serialized references.

**Parameter `gameObject`:** The live subtree root to delete.

**Parameter `historyName`:** The user-facing history entry name.

**Returns:** `true` when the subtree was deleted and recorded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Objects.cs#L150).

## `DeleteGameObjects`

<a id="api-37d3267ade5ef29e"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.DeleteGameObjects(System.Collections.Generic.IReadOnlyList{InnoEngine.Scene.GameObject}) 2733c56d181c85907a12b168a9a1a20c608cbc504d9a4dce8294bba017b5a209 -->

```csharp
public void InnoEditor.Scene.SceneEdits.DeleteGameObjects(System.Collections.Generic.IReadOnlyList<InnoEngine.Scene.GameObject> targets)
```

Deletes selected subtrees atomically, omitting descendants already covered by a selected ancestor.

**Parameter `targets`:** Live objects to delete; every owner is validated before the first mutation.

**Throws `System.InvalidOperationException`:** An owner is unavailable, read-only, or rollback fails.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Selection.cs#L22).

## `HaveSamePropertyValues`

<a id="api-81fc5ef8981cdbe0"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.HaveSamePropertyValues(System.Collections.Generic.IReadOnlyList{InnoEngine.Scene.EngineObject},System.String) 1f45dc6ee6932a743fc57a147f17f807bd2bb1292fdaf72625100e47ad698b71 -->

```csharp
public bool InnoEditor.Scene.SceneEdits.HaveSamePropertyValues(System.Collections.Generic.IReadOnlyList<InnoEngine.Scene.EngineObject> targets, string propertyName)
```

Compares common serialized property values using the complete owner serialization context.

**Parameter `targets`:** Live compatible scene objects to compare.

**Parameter `propertyName`:** The required common serialized member.

**Returns:** True when every encoded value matches, including an empty selection.

**Throws `System.InvalidOperationException`:** A selected object does not expose the requested property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Selection.cs#L141).

## `InstantiatePrefab`

<a id="api-2b62bfdf86b7e88f"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.InstantiatePrefab(InnoEngine.Scene.PrefabAsset,InnoEngine.Scene.GameScene,InnoEngine.Scene.Transform,System.String) f726ddbcf2eae48740a16b8fb73f6085c2e79863c74a123266f0b491b81fe6fa -->

```csharp
public InnoEngine.Scene.GameObject InnoEditor.Scene.SceneEdits.InstantiatePrefab(InnoEngine.Scene.PrefabAsset prefab, InnoEngine.Scene.GameScene scene, InnoEngine.Scene.Transform? parent = null, string historyName = "Instantiate Prefab")
```

Instantiates a prefab into a loaded scene and records the created subtree as one reversible edit.

**Parameter `prefab`:** The imported prefab asset to instantiate.

**Parameter `scene`:** The loaded scene that will own the instance.

**Parameter `parent`:** The optional parent transform for the instantiated root.

**Parameter `historyName`:** The user-facing history entry name.

**Returns:** The instantiated prefab root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Objects.cs#L91).

## `MoveGameObjects`

<a id="api-b1b17c5c53166d67"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.MoveGameObjects(System.Collections.Generic.IReadOnlyList{InnoEngine.Scene.GameObject},InnoEngine.Scene.GameScene,InnoEngine.Scene.GameObject,System.Int32) 9672a72eb8f03e21fa4023bd79dcb754f45c622a1fa615d327e6a1ec2bd3cf04 -->

```csharp
public void InnoEditor.Scene.SceneEdits.MoveGameObjects(System.Collections.Generic.IReadOnlyList<InnoEngine.Scene.GameObject> targets, InnoEngine.Scene.GameScene destination, InnoEngine.Scene.GameObject? parent = null, int insertionIndex = 2147483647)
```

Moves minimal selected roots together, preserving descendants and recording only affected placements.

**Parameter `targets`:** Selected live objects in their required relative order.

**Parameter `destination`:** The loaded editable destination scene.

**Parameter `parent`:** The new parent, or null for scene roots.

**Parameter `insertionIndex`:** The insertion index after removing the selected roots; the default appends them.

**Throws `System.InvalidOperationException`:** An owner is read-only, unavailable, or the move would form a cycle.

**Throws `System.ArgumentException`:** The parent belongs to a different scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Selection.cs#L184).

## `RemoveComponent`

<a id="api-2c5788249e2c8e58"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.RemoveComponent(InnoEngine.Scene.GameComponent,System.String) dfde3c2c594c74ba8b122dfdfa322156ad716366e689e6303d61a126808e181f -->

```csharp
public bool InnoEditor.Scene.SceneEdits.RemoveComponent(InnoEngine.Scene.GameComponent component, string? historyName = null)
```

Removes the component from its scene owner and records a reversible serialized history change.

**Parameter `component`:** The attached non-Transform component to remove.

**Parameter `historyName`:** An optional user-facing history entry name.

**Returns:** `true` when the component was removed and recorded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Elements.cs#L87).

## `RemoveSystem`

<a id="api-b17c419d4d482aea"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.RemoveSystem(InnoEngine.Scene.GameSystem,System.String) 63f4118ebd8dff5cf2181892efe391e47a20aae5c0ef214f7e784121e85c73d9 -->

```csharp
public bool InnoEditor.Scene.SceneEdits.RemoveSystem(InnoEngine.Scene.GameSystem system, string? historyName = null)
```

Removes the system from its scene and records a reversible serialized history change.

**Parameter `system`:** The registered system to remove.

**Parameter `historyName`:** An optional user-facing history entry name.

**Returns:** `true` when the system was removed and recorded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Elements.cs#L327).

## `RenameGameObject`

<a id="api-9a0811fabfb108aa"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.RenameGameObject(InnoEngine.Scene.GameObject,System.String,System.String) 668d4a35f19353d8416ff11cbd0973e681ed66490c43c4c179514747faafc860 -->

```csharp
public void InnoEditor.Scene.SceneEdits.RenameGameObject(InnoEngine.Scene.GameObject gameObject, string name, string historyName = "Rename GameObject")
```

Renames a live GameObject and records the two display strings.

**Parameter `gameObject`:** The live GameObject to rename.

**Parameter `name`:** The new display name.

**Parameter `historyName`:** The user-facing history entry name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Properties.cs#L61).

## `RenameScene`

<a id="api-ef68b3ddeb72b5cf"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.RenameScene(InnoEngine.Scene.GameScene,System.String,System.String) 4023c5b127e7d1b73a93e061fec647961e22fbf6110f4204c5d7d4e58a883bb2 -->

```csharp
public void InnoEditor.Scene.SceneEdits.RenameScene(InnoEngine.Scene.GameScene scene, string name, string historyName = "Rename Scene")
```

Renames a loaded scene and records the two display strings.

**Parameter `scene`:** The loaded scene to rename.

**Parameter `name`:** The new display name.

**Parameter `historyName`:** The user-facing history entry name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Properties.cs#L30).

## `ResetComponent`

<a id="api-3866285ed9f387f9"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.ResetComponent(InnoEngine.Scene.GameComponent,System.String) cc3c1bbecf34aa1919bbb899b43e1af75e450b8ecd08d7f770f25ada331a9c87 -->

```csharp
public void InnoEditor.Scene.SceneEdits.ResetComponent(InnoEngine.Scene.GameComponent component, string? historyName = null)
```

Resets one component and records its compact property state before and after Reset.

**Parameter `component`:** The attached component to reset.

**Parameter `historyName`:** An optional user-facing history entry name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Elements.cs#L153).

## `ResetSystem`

<a id="api-412642e000e34b0a"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.ResetSystem(InnoEngine.Scene.GameSystem,System.String) d87b92ddc97cb5ffb41ce7ed711b4b222bff52a2fd92e51a2bbfd62f764d2e68 -->

```csharp
public void InnoEditor.Scene.SceneEdits.ResetSystem(InnoEngine.Scene.GameSystem system, string? historyName = null)
```

Resets one scene system and records its compact property state before and after Reset.

**Parameter `system`:** The registered system to reset.

**Parameter `historyName`:** An optional user-facing history entry name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Elements.cs#L394).

## `SetComponentIndex`

<a id="api-b82a7951ca774f9b"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.SetComponentIndex(InnoEngine.Scene.GameComponent,System.Int32,System.String) d81989c549118e4cf6eab450f772d39615b07dfe6f40f294dcac589ac3709e16 -->

```csharp
public void InnoEditor.Scene.SceneEdits.SetComponentIndex(InnoEngine.Scene.GameComponent component, int componentIndex, string historyName = "Move Component")
```

Moves an attached component and records only its two attachment indices.

**Parameter `component`:** The attached component to move, including the mandatory Transform.

**Parameter `componentIndex`:** The requested attachment index.

**Parameter `historyName`:** The user-facing history entry name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Elements.cs#L211).

## `SetGameObjectActive`

<a id="api-fab7a6996092a0fe"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.SetGameObjectActive(InnoEngine.Scene.GameObject,System.Boolean,System.String) 07c614be9001a089e1e3e6351c6207693ffb1dcdb18f40355c9369de0e36b06c -->

```csharp
public void InnoEditor.Scene.SceneEdits.SetGameObjectActive(InnoEngine.Scene.GameObject gameObject, bool active, string? historyName = null)
```

Changes the explicit active state of a GameObject and records the two Boolean values.

**Parameter `gameObject`:** The live GameObject whose active state should change.

**Parameter `active`:** The requested explicit active state.

**Parameter `historyName`:** An optional user-facing history entry name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Properties.cs#L92).

## `SetGameObjectLayer`

<a id="api-0fa945068b6e46a5"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.SetGameObjectLayer(InnoEngine.Scene.GameObject,InnoEngine.Scene.GameLayer,System.String) 8116fe7e55bfdc25404d78a8d27b9ff78a15f562204d27b902d5d8b9a2f46303 -->

```csharp
public void InnoEditor.Scene.SceneEdits.SetGameObjectLayer(InnoEngine.Scene.GameObject gameObject, InnoEngine.Scene.GameLayer layer, string historyName = "Set GameObject Layer")
```

Changes the layer of a live GameObject and records the two stable numeric layer slots.

**Parameter `gameObject`:** The live GameObject whose layer should change.

**Parameter `layer`:** The requested project layer slot.

**Parameter `historyName`:** The user-facing history entry name.

**Throws `System.ArgumentNullException`:** Thrown when `gameObject` is `null`.

**Throws `System.ArgumentException`:** Thrown when `historyName` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Properties.cs#L169).

## `SetGameObjectTag`

<a id="api-1798c116dc661df8"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.SetGameObjectTag(InnoEngine.Scene.GameObject,System.String,System.String) a451c7415598b58bb3cf58b90a7ec966f0e41f507cd87eba46d029dd01983ddb -->

```csharp
public void InnoEditor.Scene.SceneEdits.SetGameObjectTag(InnoEngine.Scene.GameObject gameObject, string tag, string historyName = "Set GameObject Tag")
```

Changes the tag of a live GameObject and records the two ordinal tag strings.

**Parameter `gameObject`:** The live GameObject whose tag should change.

**Parameter `tag`:** The requested non-empty tag.

**Parameter `historyName`:** The user-facing history entry name.

**Throws `System.ArgumentNullException`:** Thrown when `gameObject` is `null`.

**Throws `System.ArgumentException`:** Thrown when `tag` or `historyName` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Properties.cs#L130).

## `SetSceneIndex`

<a id="api-f62ee5ea6c097424"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.SetSceneIndex(InnoEngine.Scene.GameScene,System.Int32,System.String) 6086ec1aba2b8ec87a1969204b921133cb23ed157c9f173fa93fa671b0058c63 -->

```csharp
public void InnoEditor.Scene.SceneEdits.SetSceneIndex(InnoEngine.Scene.GameScene scene, int sceneIndex, string historyName = "Reorder Scene")
```

Moves a loaded scene to a hierarchy index and records the two integer positions.

**Parameter `scene`:** The loaded scene to reorder.

**Parameter `sceneIndex`:** The requested hierarchy index.

**Parameter `historyName`:** The user-facing history entry name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Hierarchy.cs#L30).

## `SetSystemIndex`

<a id="api-1670e9f2ca5f5f34"></a>
<!-- api: M:InnoEditor.Scene.SceneEdits.SetSystemIndex(InnoEngine.Scene.GameScene,InnoEngine.Scene.GameSystem,System.Int32,System.String) bdc25cb0fc3167790d2b41ec6632c20c286271ecbb5e672e738e1d02b77bd0d3 -->

```csharp
public void InnoEditor.Scene.SceneEdits.SetSystemIndex(InnoEngine.Scene.GameScene scene, InnoEngine.Scene.GameSystem system, int systemIndex, string historyName = "Move System")
```

Moves a registered system and records only its two display indices.

**Parameter `scene`:** The scene currently owning the system.

**Parameter `system`:** The registered system to move.

**Parameter `systemIndex`:** The requested display index.

**Parameter `historyName`:** The user-facing history entry name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneEdits.Elements.cs#L455).
