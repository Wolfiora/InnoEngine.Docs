---
title: "EditorInteraction"
description: "Reference for EditorInteraction in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.98eecbe96dc18ee4
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorInteraction`

This reference describes `EditorInteraction` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`BeginDrag`](#api-7323f953d4177e2a) | Method |
| [`BuildCommands`](#api-2926b4f311f308f5) | Method |
| [`BuildMenu`](#api-23adc8da44b2496c) | Method |
| [`BuildToolbar`](#api-d296f6240d617ebf) | Method |
| [`Drop`](#api-ba0fa4134d61a72e) | Method |
| [`Enqueue`](#api-6987c4312e876b94) | Method |
| [`Execute`](#api-f76055d8050539a7) | Method |
| [`Focus`](#api-58ec69eb5a199b19) | Method |
| [`IsActive`](#api-8cdcbbabf632d4bb) | Method |
| [`Present`](#api-95fedbf98e803eb0) | Method |
| [`Query`](#api-bc835a7e3a4ac2f8) | Method |
| [`QueryDrop`](#api-adcf08947c26bc3e) | Method |
| [`Select`](#api-f9362d8274993e2d) | Method |
| [`TryGetActiveDragIdentity`](#api-4b6616261059971f) | Method |
| [`TryGetShortcut`](#api-781762c1aef237cd) | Method |
| [`area`](#api-24ef8cfdefabdcfc) | Property |
| [`isSelected`](#api-61ccfbd4f5f46577) | Property |
| [`target`](#api-a011d6a8971ebf64) | Property |

## Type declaration

<a id="api-98eecbe96dc18ee4"></a>
<!-- api: T:InnoEditor.Interactions.EditorInteraction c0f95997c5dbd7ecebe83e3371863b0430310d08972812eba231a78c5b063cfd -->

```csharp
public readonly struct InnoEditor.Interactions.EditorInteraction
```

Provides a fluent handle that borrows an optional target for a synchronous interaction request.

**Constraints:** A target-bearing handle retains that target while it is in use. Do not cache it across frames,
asynchronous work, or extension generations. Resolve live identity objects through Core Identity
before creating a fresh handle. Focus and deferred routing capture their own identity or weak reference.
Target-free handles can be reused within their owning interaction runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L14).

## `BeginDrag`

<a id="api-7323f953d4177e2a"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteraction.BeginDrag(InnoEditor.Interactions.EditorDragData) 2810d015339c1e05aa2aab651c2ee8b78035b1f201a6fd56110fb71d1fc0587d -->

```csharp
public InnoEngine.Core.RuntimeIdentity InnoEditor.Interactions.EditorInteraction.BeginDrag(InnoEditor.Interactions.EditorDragData data)
```

Begins a managed drag originating from this area.

**Parameter `data`:** The managed source data.

**Returns:** The source object's domain-qualified transient identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L197).

## `BuildCommands`

<a id="api-2926b4f311f308f5"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteraction.BuildCommands 3db26bb98a6ea9d0a4263077731aada956065bc4450cab5dba4ce74568e4e1fb -->

```csharp
public InnoEditor.Interactions.EditorMenuModel InnoEditor.Interactions.EditorInteraction.BuildCommands()
```

Builds searchable commands from this area's menus and applicable unplaced Actions.

**Returns:** Current command states and neutral placement arguments; execution revalidates their targets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L151).

## `BuildMenu`

<a id="api-23adc8da44b2496c"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteraction.BuildMenu e3c863849d87e915b182c8d1927dddadaef4a97b038a6d6cc856dc3a8e7cf1be -->

```csharp
public InnoEditor.Interactions.EditorMenuModel InnoEditor.Interactions.EditorInteraction.BuildMenu()
```

Builds the complete contextual menu for this area and target.

**Returns:** The immutable resolved menu model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L144).

## `BuildToolbar`

<a id="api-d296f6240d617ebf"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteraction.BuildToolbar 34aa1aedb1eb427ad8413c811ac39601ad4a8377376f83dbe608cbc330f148fa -->

```csharp
public InnoEditor.Interactions.EditorToolbarModel InnoEditor.Interactions.EditorInteraction.BuildToolbar()
```

Builds the complete compact toolbar for this area and target.

**Returns:** The immutable resolved toolbar model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L158).

## `Drop`

<a id="api-ba0fa4134d61a72e"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteraction.Drop(InnoEngine.Core.RuntimeIdentity,InnoEditor.Interactions.EditorDropPlacement) 9ffe6f8e6cfe24cb152dc6106523c9935efa875a47699f24fe3adcda848a5b9c -->

```csharp
public InnoEditor.Interactions.EditorDropResult InnoEditor.Interactions.EditorInteraction.Drop(InnoEngine.Core.RuntimeIdentity identity, InnoEditor.Interactions.EditorDropPlacement placement = InnoEditor.Interactions.EditorDropPlacement.None)
```

Delivers a managed drop to this target.

**Parameter `identity`:** The active domain-qualified runtime identity.

**Parameter `placement`:** The requested placement relative to the target.

**Returns:** The completed drop result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L226).

## `Enqueue`

<a id="api-6987c4312e876b94"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteraction.Enqueue(System.String,System.Object) a38302bf309aa691a8c8f6db5734a92484b9f5172abf31f6cc6910f96842c4ff -->

```csharp
public void InnoEditor.Interactions.EditorInteraction.Enqueue(string action, object? argument = null)
```

Queues an action until the current UI traversal completes.

**Parameter `action`:** The stable action name.

**Parameter `argument`:** An optional action argument.

**Throws `System.ArgumentException`:** Thrown when `action` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L102).

## `Execute`

<a id="api-f76055d8050539a7"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteraction.Execute(System.String,System.Object) db13065cffb2006fc7e3b816adda90f3663fc09009e631dbcdfdecfffe5d67a6 -->

```csharp
public bool InnoEditor.Interactions.EditorInteraction.Execute(string action, object? argument = null)
```

Executes an action for this area and target.

**Parameter `action`:** The stable action name.

**Parameter `argument`:** An optional action argument.

**Returns:** `true` when a visible and enabled action executed; otherwise, `false`.

**Throws `System.ArgumentException`:** Thrown when `action` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L86).

## `Focus`

<a id="api-58ec69eb5a199b19"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteraction.Focus 80df294de7456c8f9803d7887d7590b4883a6f15adf499a10ec0f93e9f123959 -->

```csharp
public void InnoEditor.Interactions.EditorInteraction.Focus()
```

Marks this area and target as the active keyboard context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L44).

## `IsActive`

<a id="api-8cdcbbabf632d4bb"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteraction.IsActive(System.String) b85602ed4e244b0b7d50989876468bfdb9bb012ba50f902e96bd773883183e04 -->

```csharp
public bool InnoEditor.Interactions.EditorInteraction.IsActive(string action)
```

Gets whether an action owns an active multi-frame operation for this target.

**Parameter `action`:** The stable action name.

**Returns:** `true` when the action is active for this exact target; otherwise, `false`.

**Throws `System.ArgumentException`:** Thrown when `action` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L137).

## `Present`

<a id="api-95fedbf98e803eb0"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteraction.Present(System.String,System.Object) 879117227e6ea8f07a9326024439dbc63f0bee4e8bdacd0f5dc3fe2b0ec5ecc3 -->

```csharp
public bool InnoEditor.Interactions.EditorInteraction.Present(string action, object? argument = null)
```

Presents an active action in place of this target's normal content.

**Parameter `action`:** The stable action name.

**Parameter `argument`:** Optional presentation data supplied by the current view.

**Returns:** `true` when the action presented content; otherwise, `false`.

**Throws `System.ArgumentException`:** Thrown when `action` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L121).

## `Query`

<a id="api-bc835a7e3a4ac2f8"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteraction.Query(System.String,System.Object) 75cfb42503bcdcb7347ed89f9f51a4d631e34a734d54b51be01a39b1dbac745a -->

```csharp
public InnoEditor.Interactions.EditorActionState InnoEditor.Interactions.EditorInteraction.Query(string action, object? argument = null)
```

Queries an action for this area and target.

**Parameter `action`:** The stable action name.

**Parameter `argument`:** An optional action argument.

**Returns:** The current action state.

**Throws `System.ArgumentException`:** Thrown when `action` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L67).

## `QueryDrop`

<a id="api-adcf08947c26bc3e"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteraction.QueryDrop(InnoEngine.Core.RuntimeIdentity,InnoEditor.Interactions.EditorDropPlacement) 46631981dbdce7e8a94027baffe7de2aa9769e20eed37c864d7777b9e18ba3a8 -->

```csharp
public InnoEditor.Interactions.EditorDropStatus InnoEditor.Interactions.EditorInteraction.QueryDrop(InnoEngine.Core.RuntimeIdentity identity, InnoEditor.Interactions.EditorDropPlacement placement = InnoEditor.Interactions.EditorDropPlacement.None)
```

Queries this handle as a drop target.

**Parameter `identity`:** The active domain-qualified runtime identity.

**Parameter `placement`:** The requested placement relative to the target.

**Returns:** The drop compatibility and visual state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L210).

## `Select`

<a id="api-f9362d8274993e2d"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteraction.Select 0a3d757c7fb952a2cb4ede42c47b3fbe9898993f9a214bbcbee3989f78b2397a -->

```csharp
public bool InnoEditor.Interactions.EditorInteraction.Select()
```

Selects this target, or clears selection when the target is `null`.

**Returns:** `true` when the built-in selection action executed; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L51).

## `TryGetActiveDragIdentity`

<a id="api-4b6616261059971f"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteraction.TryGetActiveDragIdentity(InnoEngine.Core.RuntimeIdentity@) 58ab51d5090b128c3b193c3a6c0939e54524f97889cee9883eb79ea8c7045188 -->

```csharp
public bool InnoEditor.Interactions.EditorInteraction.TryGetActiveDragIdentity(out InnoEngine.Core.RuntimeIdentity identity)
```

Gets the currently active drag identity, if its source remains registered.

**Parameter `identity`:** The active domain-qualified runtime identity when available.

**Returns:** `true` when a live drag source exists; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L187).

## `TryGetShortcut`

<a id="api-781762c1aef237cd"></a>
<!-- api: M:InnoEditor.Interactions.EditorInteraction.TryGetShortcut(System.String,InnoEditor.Interactions.HotKeyGesture@) 2a51a3e1ca449bfc64ae5abb0c42e50f52bae3d35ba2c0b2c39803d2da46f568 -->

```csharp
public bool InnoEditor.Interactions.EditorInteraction.TryGetShortcut(string action, out InnoEditor.Interactions.HotKeyGesture gesture)
```

Resolves the shortcut displayed for an action in this area.

**Parameter `action`:** The stable action name.

**Parameter `gesture`:** The resolved gesture when successful.

**Returns:** `true` when a compatible shortcut exists; otherwise, `false`.

**Throws `System.ArgumentException`:** Thrown when `action` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L174).

## `area`

<a id="api-24ef8cfdefabdcfc"></a>
<!-- api: P:InnoEditor.Interactions.EditorInteraction.area cb0b3abbf98de79cf23be3f6da15ee680c035bcd4964ab6e11e3013dcd489274 -->

```csharp
public string InnoEditor.Interactions.EditorInteraction.area { get; }
```

Gets the stable interaction area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L31).

## `isSelected`

<a id="api-61ccfbd4f5f46577"></a>
<!-- api: P:InnoEditor.Interactions.EditorInteraction.isSelected 1683c5acfb20b95c35d4c6595ce9f91cc05a9ad07a2e13795066fede0b7b61f5 -->

```csharp
public bool InnoEditor.Interactions.EditorInteraction.isSelected { get; }
```

Gets whether this handle's target is the current editor selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L39).

## `target`

<a id="api-a011d6a8971ebf64"></a>
<!-- api: P:InnoEditor.Interactions.EditorInteraction.target bcf78d877df691529d4ff8300aab44b210f92db74eeb6ec4215723d46101c085 -->

```csharp
public object? InnoEditor.Interactions.EditorInteraction.target { get; }
```

Gets the borrowed target without extending its validity or resolving a replacement generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorInteraction.cs#L35).
