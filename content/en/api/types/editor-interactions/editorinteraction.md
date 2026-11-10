---
title: "EditorInteraction"
description: "Reference for EditorInteraction in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.52ffc819216973e2
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorInteraction`

This reference describes `EditorInteraction` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`BeginDrag`](#api-157c954cb5bc8970) | Method |
| [`BuildCommands`](#api-38a3da33c140fe41) | Method |
| [`BuildMenu`](#api-25125c520766b0e3) | Method |
| [`BuildToolbar`](#api-9b37162b0ae966cf) | Method |
| [`Drop`](#api-0d1c134b834e4be6) | Method |
| [`Enqueue`](#api-605bd5c625efbe44) | Method |
| [`Execute`](#api-412b9ad6577b5dd1) | Method |
| [`Focus`](#api-c94ccd2428f5cebc) | Method |
| [`IsActive`](#api-d797dfe8d37689b0) | Method |
| [`Present`](#api-fca0d428bef70fb4) | Method |
| [`Query`](#api-75542c3d39cef89f) | Method |
| [`QueryDrop`](#api-9719150757a7d71d) | Method |
| [`Select`](#api-3571067764e7ce43) | Method |
| [`TryGetActiveDragIdentity`](#api-d00030344aacfbb6) | Method |
| [`TryGetShortcut`](#api-5a12e4bc9ae99897) | Method |
| [`area`](#api-4ff1607f673af859) | Property |
| [`isSelected`](#api-ca9925a09d6ff988) | Property |
| [`target`](#api-be4b39a71476fb45) | Property |

## Type declaration

<a id="api-52ffc819216973e2"></a>
<!-- api: T:Inno.Editor.Interactions.EditorInteraction 6deb5cdaef95a81f6898ab9d315264a04e5832c17cbc7bc4fc9dd0cac279bce8 -->

```csharp
public readonly struct Inno.Editor.Interactions.EditorInteraction
```

Provides a fluent handle that borrows an optional target for a synchronous interaction request.

**Constraints:** A target-bearing handle retains that target while it is in use. Do not cache it across frames,
asynchronous work, or extension generations. Resolve live identity objects through Core Identity
before creating a fresh handle. Focus and deferred routing capture their own identity or weak reference.
Target-free handles can be reused within their owning interaction runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L14).

## `BeginDrag`

<a id="api-157c954cb5bc8970"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteraction.BeginDrag(Inno.Editor.Interactions.EditorDragData) a9a0f545f5ce1f162c4ac11f0349317be1cc254d24c93573d07e1cd5880f6f94 -->

```csharp
public Inno.Core.Identity.RuntimeIdentity Inno.Editor.Interactions.EditorInteraction.BeginDrag(Inno.Editor.Interactions.EditorDragData data)
```

Begins a managed drag originating from this area.

**Parameter `data`:** The managed source data.

**Returns:** The source object's domain-qualified transient identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L197).

## `BuildCommands`

<a id="api-38a3da33c140fe41"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteraction.BuildCommands cc7503c330b9fe558e18e61f0ae8c7026d4bef4948a18f272fd0fb79ca71bd56 -->

```csharp
public Inno.Editor.Interactions.EditorMenuModel Inno.Editor.Interactions.EditorInteraction.BuildCommands()
```

Builds searchable commands from this area's menus and applicable unplaced Actions.

**Returns:** Current command states and neutral placement arguments; execution revalidates their targets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L151).

## `BuildMenu`

<a id="api-25125c520766b0e3"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteraction.BuildMenu 8a76f49b6acd8c3c5df2302642111d01c339adaaf3dc29c1431bf631172e98c6 -->

```csharp
public Inno.Editor.Interactions.EditorMenuModel Inno.Editor.Interactions.EditorInteraction.BuildMenu()
```

Builds the complete contextual menu for this area and target.

**Returns:** The immutable resolved menu model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L144).

## `BuildToolbar`

<a id="api-9b37162b0ae966cf"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteraction.BuildToolbar 3dfdcac9635231f49b56578807f329e80db226af8b4ed7ac02ca404bbcf5e1a7 -->

```csharp
public Inno.Editor.Interactions.EditorToolbarModel Inno.Editor.Interactions.EditorInteraction.BuildToolbar()
```

Builds the complete compact toolbar for this area and target.

**Returns:** The immutable resolved toolbar model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L158).

## `Drop`

<a id="api-0d1c134b834e4be6"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteraction.Drop(Inno.Core.Identity.RuntimeIdentity,Inno.Editor.Interactions.EditorDropPlacement) 47206d3766011bea1fa811ccd59a0f8aefbde9759568201dbadf16c09af5176c -->

```csharp
public Inno.Editor.Interactions.EditorDropResult Inno.Editor.Interactions.EditorInteraction.Drop(Inno.Core.Identity.RuntimeIdentity identity, Inno.Editor.Interactions.EditorDropPlacement placement = Inno.Editor.Interactions.EditorDropPlacement.None)
```

Delivers a managed drop to this target.

**Parameter `identity`:** The active domain-qualified runtime identity.

**Parameter `placement`:** The requested placement relative to the target.

**Returns:** The completed drop result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L226).

## `Enqueue`

<a id="api-605bd5c625efbe44"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteraction.Enqueue(System.String,System.Object) 1f23517b6c3739d21562b504f5e24920e3edbe95564604bdcb750bbec731888d -->

```csharp
public void Inno.Editor.Interactions.EditorInteraction.Enqueue(string action, object? argument = null)
```

Queues an action until the current UI traversal completes.

**Parameter `action`:** The stable action name.

**Parameter `argument`:** An optional action argument.

**Throws `System.ArgumentException`:** Thrown when `action` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L102).

## `Execute`

<a id="api-412b9ad6577b5dd1"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteraction.Execute(System.String,System.Object) eb76e0f23808ab5b6fad50358a811a426eff1a31e130b886562874ff873c567f -->

```csharp
public bool Inno.Editor.Interactions.EditorInteraction.Execute(string action, object? argument = null)
```

Executes an action for this area and target.

**Parameter `action`:** The stable action name.

**Parameter `argument`:** An optional action argument.

**Returns:** `true` when a visible and enabled action executed; otherwise, `false`.

**Throws `System.ArgumentException`:** Thrown when `action` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L86).

## `Focus`

<a id="api-c94ccd2428f5cebc"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteraction.Focus 97e6476a5f8befd63b14ba6f86d24955ac6d235a98db329e4889f6f303be79f6 -->

```csharp
public void Inno.Editor.Interactions.EditorInteraction.Focus()
```

Marks this area and target as the active keyboard context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L44).

## `IsActive`

<a id="api-d797dfe8d37689b0"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteraction.IsActive(System.String) 7f653c9a38f3e350f3a86f71d4506c9113141d52a83289f7b80adc09cdcd2c63 -->

```csharp
public bool Inno.Editor.Interactions.EditorInteraction.IsActive(string action)
```

Gets whether an action owns an active multi-frame operation for this target.

**Parameter `action`:** The stable action name.

**Returns:** `true` when the action is active for this exact target; otherwise, `false`.

**Throws `System.ArgumentException`:** Thrown when `action` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L137).

## `Present`

<a id="api-fca0d428bef70fb4"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteraction.Present(System.String,System.Object) b954abc5077419128a1fb901ff692ed464317fa1b45d0f6587ea55aa16b3c442 -->

```csharp
public bool Inno.Editor.Interactions.EditorInteraction.Present(string action, object? argument = null)
```

Presents an active action in place of this target's normal content.

**Parameter `action`:** The stable action name.

**Parameter `argument`:** Optional presentation data supplied by the current view.

**Returns:** `true` when the action presented content; otherwise, `false`.

**Throws `System.ArgumentException`:** Thrown when `action` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L121).

## `Query`

<a id="api-75542c3d39cef89f"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteraction.Query(System.String,System.Object) e4ef8665c061d523cb987618c6f719593139c79772980129a5552b30aa03fe46 -->

```csharp
public Inno.Editor.Interactions.EditorActionState Inno.Editor.Interactions.EditorInteraction.Query(string action, object? argument = null)
```

Queries an action for this area and target.

**Parameter `action`:** The stable action name.

**Parameter `argument`:** An optional action argument.

**Returns:** The current action state.

**Throws `System.ArgumentException`:** Thrown when `action` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L67).

## `QueryDrop`

<a id="api-9719150757a7d71d"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteraction.QueryDrop(Inno.Core.Identity.RuntimeIdentity,Inno.Editor.Interactions.EditorDropPlacement) b5410cca93716bc7b792c7e836b3f45552968fa49b43c32238163fb9fad52ac2 -->

```csharp
public Inno.Editor.Interactions.EditorDropStatus Inno.Editor.Interactions.EditorInteraction.QueryDrop(Inno.Core.Identity.RuntimeIdentity identity, Inno.Editor.Interactions.EditorDropPlacement placement = Inno.Editor.Interactions.EditorDropPlacement.None)
```

Queries this handle as a drop target.

**Parameter `identity`:** The active domain-qualified runtime identity.

**Parameter `placement`:** The requested placement relative to the target.

**Returns:** The drop compatibility and visual state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L210).

## `Select`

<a id="api-3571067764e7ce43"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteraction.Select 0361ed3214aea540610cc30eb3ed69b1b90c6f57aba1cee1c9553b77c9961eb6 -->

```csharp
public bool Inno.Editor.Interactions.EditorInteraction.Select()
```

Selects this target, or clears selection when the target is `null`.

**Returns:** `true` when the built-in selection action executed; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L51).

## `TryGetActiveDragIdentity`

<a id="api-d00030344aacfbb6"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteraction.TryGetActiveDragIdentity(Inno.Core.Identity.RuntimeIdentity@) 31c146c3289e8c8674247c7129e8f7e37913e946038ffe685ad129d4f6a5ef8c -->

```csharp
public bool Inno.Editor.Interactions.EditorInteraction.TryGetActiveDragIdentity(out Inno.Core.Identity.RuntimeIdentity identity)
```

Gets the currently active drag identity, if its source remains registered.

**Parameter `identity`:** The active domain-qualified runtime identity when available.

**Returns:** `true` when a live drag source exists; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L187).

## `TryGetShortcut`

<a id="api-5a12e4bc9ae99897"></a>
<!-- api: M:Inno.Editor.Interactions.EditorInteraction.TryGetShortcut(System.String,Inno.Editor.Interactions.HotKeyGesture@) fba5cc4ba03bbc58d9c7f55de1cc4c69e2b2ed8c2f6c18964f5aa9d844bc1068 -->

```csharp
public bool Inno.Editor.Interactions.EditorInteraction.TryGetShortcut(string action, out Inno.Editor.Interactions.HotKeyGesture gesture)
```

Resolves the shortcut displayed for an action in this area.

**Parameter `action`:** The stable action name.

**Parameter `gesture`:** The resolved gesture when successful.

**Returns:** `true` when a compatible shortcut exists; otherwise, `false`.

**Throws `System.ArgumentException`:** Thrown when `action` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L174).

## `area`

<a id="api-4ff1607f673af859"></a>
<!-- api: P:Inno.Editor.Interactions.EditorInteraction.area 26ef11c3a68a325a9aeb3496e452798b8bb10818d60f92cbe3fcc61a9c0f0da4 -->

```csharp
public string Inno.Editor.Interactions.EditorInteraction.area { get; }
```

Gets the stable interaction area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L31).

## `isSelected`

<a id="api-ca9925a09d6ff988"></a>
<!-- api: P:Inno.Editor.Interactions.EditorInteraction.isSelected d4d2b90d2d505ae7db83d1b019f7f91345a21324a4a60efbb1aba31989b59beb -->

```csharp
public bool Inno.Editor.Interactions.EditorInteraction.isSelected { get; }
```

Gets whether this handle's target is the current editor selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L39).

## `target`

<a id="api-be4b39a71476fb45"></a>
<!-- api: P:Inno.Editor.Interactions.EditorInteraction.target 85324efcf4783fc83ee40f2d6d07cfef68bd670808bfcd712ac758b50b414c0b -->

```csharp
public object? Inno.Editor.Interactions.EditorInteraction.target { get; }
```

Gets the borrowed target without extending its validity or resolving a replacement generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L35).
