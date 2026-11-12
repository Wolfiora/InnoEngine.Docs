---
title: "EditorHistoryResult"
description: "Reference for EditorHistoryResult in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.37e8f5239868553c
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorHistoryResult`

This reference describes `EditorHistoryResult` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEditor.Interactions.EditorHistoryResult>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-f9b8712d04a3ff1e) | Method |
| [`Equals`](#api-589d62f3488b69fb) | Method |
| [`Failure`](#api-b5221709edeec8bc) | Method |
| [`GetHashCode`](#api-7f7b2802a25b197c) | Method |
| [`op_Equality`](#api-993e49c99e081bf8) | Method |
| [`op_Inequality`](#api-3175a2b892adf7dd) | Method |
| [`Success`](#api-7bea034dbe16d6e5) | Method |
| [`ToString`](#api-9ea4b445b6a1bc64) | Method |
| [`message`](#api-0f2611bb59589ddb) | Property |
| [`statePreserved`](#api-f9f0a7b8a59ba70f) | Property |
| [`succeeded`](#api-baf7927091e9b9b8) | Property |

## Type declaration

<a id="api-37e8f5239868553c"></a>
<!-- api: T:InnoEditor.Interactions.EditorHistoryResult e504db3bdcd7efb4e791e66cd9b0e1fb89da0eabe0487b7f938018f5c96ff0d9 -->

```csharp
public readonly struct InnoEditor.Interactions.EditorHistoryResult : System.IEquatable<InnoEditor.Interactions.EditorHistoryResult>
```

Describes the outcome of applying, undoing, or redoing an editor history operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryResult.cs#L8).

## `Equals`

<a id="api-f9b8712d04a3ff1e"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryResult.Equals(InnoEditor.Interactions.EditorHistoryResult) f39d00b4e61a0e597ea6a313cff66a8c1c060904b25113f236adb419d80f510e -->

```csharp
public bool InnoEditor.Interactions.EditorHistoryResult.Equals(InnoEditor.Interactions.EditorHistoryResult other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryResult.cs#L8).

## `Equals`

<a id="api-589d62f3488b69fb"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryResult.Equals(System.Object) b105d6b904bf4b38b81c9071e3a6c1a3d87bd5968e0349b3b51b1f41210f6036 -->

```csharp
public override bool InnoEditor.Interactions.EditorHistoryResult.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryResult.cs#L8).

## `Failure`

<a id="api-b5221709edeec8bc"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryResult.Failure(System.String) 1ad8eff00b3677d013937e6fae67cb53f7d221c9d35c9d03a838e8c8ee71c656 -->

```csharp
public static InnoEditor.Interactions.EditorHistoryResult InnoEditor.Interactions.EditorHistoryResult.Failure(string message)
```

Creates a failed history result without changing the owning history stack.

**Parameter `message`:** The non-empty diagnostic explaining why the transition could not complete.

**Returns:** A result representing a rejected or failed transition.

**Throws `System.ArgumentException`:** Thrown when `message` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryResult.cs#L59).

## `GetHashCode`

<a id="api-7f7b2802a25b197c"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryResult.GetHashCode d5d805f913385e75b5a8ab80364bae4ce27a4fd7254fa632b11d9e1ba8995320 -->

```csharp
public override int InnoEditor.Interactions.EditorHistoryResult.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryResult.cs#L8).

## `op_Equality`

<a id="api-993e49c99e081bf8"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryResult.op_Equality(InnoEditor.Interactions.EditorHistoryResult,InnoEditor.Interactions.EditorHistoryResult) 21ef78dda8ef1bd27dda2f6d1f124b33062562bf72ee1493aec761d19b622d36 -->

```csharp
public static bool InnoEditor.Interactions.EditorHistoryResult.operator ==(InnoEditor.Interactions.EditorHistoryResult left, InnoEditor.Interactions.EditorHistoryResult right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryResult.cs#L8).

## `op_Inequality`

<a id="api-3175a2b892adf7dd"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryResult.op_Inequality(InnoEditor.Interactions.EditorHistoryResult,InnoEditor.Interactions.EditorHistoryResult) 6f131bb71110a99000df6a7d4d13fdadf7959434432293e28d452edd60a9f0b4 -->

```csharp
public static bool InnoEditor.Interactions.EditorHistoryResult.operator !=(InnoEditor.Interactions.EditorHistoryResult left, InnoEditor.Interactions.EditorHistoryResult right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryResult.cs#L8).

## `Success`

<a id="api-7bea034dbe16d6e5"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryResult.Success 16094b336497f7b378e059d6f2b2bb69b071c7d75a6b6105efa77d24ead0cc9b -->

```csharp
public static InnoEditor.Interactions.EditorHistoryResult InnoEditor.Interactions.EditorHistoryResult.Success()
```

Creates a successful history result.

**Returns:** A result representing a completed transition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryResult.cs#L45).

## `ToString`

<a id="api-9ea4b445b6a1bc64"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryResult.ToString 8aec6f22ba35a4c395a27b6a56778490bfc07f3c9090fe0933c9ad1d41e852b9 -->

```csharp
public override string InnoEditor.Interactions.EditorHistoryResult.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryResult.cs#L8).

## `message`

<a id="api-0f2611bb59589ddb"></a>
<!-- api: P:InnoEditor.Interactions.EditorHistoryResult.message 6768f20a49f8a2697cfa905a5483f6fddcae87ca616e237d1a94e883bc84ba21 -->

```csharp
public string InnoEditor.Interactions.EditorHistoryResult.message { get; }
```

Gets the diagnostic message associated with a failed transition, or an empty string after success.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryResult.cs#L37).

## `statePreserved`

<a id="api-f9f0a7b8a59ba70f"></a>
<!-- api: P:InnoEditor.Interactions.EditorHistoryResult.statePreserved 11c209130202d61d2ad0cce77853172d382295394eb238f9ede4951a487e73f9 -->

```csharp
public bool InnoEditor.Interactions.EditorHistoryResult.statePreserved { get; }
```

Gets whether a failed transition restored the domain state that existed before the attempt.

**Constraints:** Successful results always preserve a valid state. A failed result with this value set to
`false` faults the owning history because the transition can no longer be retried safely.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryResult.cs#L32).

## `succeeded`

<a id="api-baf7927091e9b9b8"></a>
<!-- api: P:InnoEditor.Interactions.EditorHistoryResult.succeeded 90e0daaaa2b8cbe5c666b5c41111ffbd59af8a8672048324c68f8ecb2e9e4e77 -->

```csharp
public bool InnoEditor.Interactions.EditorHistoryResult.succeeded { get; }
```

Gets whether the requested history transition completed successfully.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryResult.cs#L23).
