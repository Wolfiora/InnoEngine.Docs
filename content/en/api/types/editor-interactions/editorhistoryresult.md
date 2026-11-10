---
title: "EditorHistoryResult"
description: "Reference for EditorHistoryResult in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.51b34588fc9e01d5
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorHistoryResult`

This reference describes `EditorHistoryResult` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Interactions.EditorHistoryResult>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-6655ad6b85b64cf7) | Method |
| [`Equals`](#api-0a6d20e4773165e3) | Method |
| [`Failure`](#api-af3da82aae586f5e) | Method |
| [`GetHashCode`](#api-dcbdd72a45be7752) | Method |
| [`op_Equality`](#api-3605e74d018a5296) | Method |
| [`op_Inequality`](#api-d79d873c0e71be7e) | Method |
| [`Success`](#api-4217d67de8efb637) | Method |
| [`ToString`](#api-17fa4ab8b4113261) | Method |
| [`message`](#api-57950e12cc171017) | Property |
| [`statePreserved`](#api-c813b81c3a66827e) | Property |
| [`succeeded`](#api-fe96b6ac16d90990) | Property |

## Type declaration

<a id="api-51b34588fc9e01d5"></a>
<!-- api: T:Inno.Editor.Interactions.EditorHistoryResult 123e3963020209b7c6d5ae034076c0def46c1bebd86dd385c46336d046c548f1 -->

```csharp
public readonly record struct Inno.Editor.Interactions.EditorHistoryResult : System.IEquatable<Inno.Editor.Interactions.EditorHistoryResult>
```

Describes the outcome of applying, undoing, or redoing an editor history operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryResult.cs#L8).

## `Equals`

<a id="api-6655ad6b85b64cf7"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryResult.Equals(Inno.Editor.Interactions.EditorHistoryResult) 9b8ceb076e251210b09ccbd5849cc78da7a92fce6a15f34337b53c2105b93f04 -->

```csharp
public bool Inno.Editor.Interactions.EditorHistoryResult.Equals(Inno.Editor.Interactions.EditorHistoryResult other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryResult.cs#L8).

## `Equals`

<a id="api-0a6d20e4773165e3"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryResult.Equals(System.Object) 23601606c8eccef044901fa181c3bf0c0cc0b488026f973fe3855db081673d52 -->

```csharp
public override bool Inno.Editor.Interactions.EditorHistoryResult.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryResult.cs#L8).

## `Failure`

<a id="api-af3da82aae586f5e"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryResult.Failure(System.String) a8afd3b076d58d0f25666ec2326be5731d5b3d821b54f228a44c06a022acee3d -->

```csharp
public static Inno.Editor.Interactions.EditorHistoryResult Inno.Editor.Interactions.EditorHistoryResult.Failure(string message)
```

Creates a failed history result without changing the owning history stack.

**Parameter `message`:** The non-empty diagnostic explaining why the transition could not complete.

**Returns:** A result representing a rejected or failed transition.

**Throws `System.ArgumentException`:** Thrown when `message` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryResult.cs#L59).

## `GetHashCode`

<a id="api-dcbdd72a45be7752"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryResult.GetHashCode cece8f0c7f04ed6a41ddcbf0928fb85f208fb9ed3de2a4f5c9f4aebe39125050 -->

```csharp
public override int Inno.Editor.Interactions.EditorHistoryResult.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryResult.cs#L8).

## `op_Equality`

<a id="api-3605e74d018a5296"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryResult.op_Equality(Inno.Editor.Interactions.EditorHistoryResult,Inno.Editor.Interactions.EditorHistoryResult) 33fd54ac91e2b0caa7db8ecda12379ea31812c11f1bf3f703eea1f6dd1ffe4b6 -->

```csharp
public static bool Inno.Editor.Interactions.EditorHistoryResult.operator ==(Inno.Editor.Interactions.EditorHistoryResult left, Inno.Editor.Interactions.EditorHistoryResult right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryResult.cs#L8).

## `op_Inequality`

<a id="api-d79d873c0e71be7e"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryResult.op_Inequality(Inno.Editor.Interactions.EditorHistoryResult,Inno.Editor.Interactions.EditorHistoryResult) ab00b24ab43ad4e429d857c2fc612390787190b2ca98c07e7a5e94b0d03f9148 -->

```csharp
public static bool Inno.Editor.Interactions.EditorHistoryResult.operator !=(Inno.Editor.Interactions.EditorHistoryResult left, Inno.Editor.Interactions.EditorHistoryResult right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryResult.cs#L8).

## `Success`

<a id="api-4217d67de8efb637"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryResult.Success ed6fc951bcf3f48ab832f6e1ab7f58ae3e6351fc48dfae32604b69dfe6370c2b -->

```csharp
public static Inno.Editor.Interactions.EditorHistoryResult Inno.Editor.Interactions.EditorHistoryResult.Success()
```

Creates a successful history result.

**Returns:** A result representing a completed transition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryResult.cs#L45).

## `ToString`

<a id="api-17fa4ab8b4113261"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryResult.ToString b8e083cabc4942c29f858d3f0a54ca58bfa5368d6f71a7ceed9991b9c3760e36 -->

```csharp
public override string Inno.Editor.Interactions.EditorHistoryResult.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryResult.cs#L8).

## `message`

<a id="api-57950e12cc171017"></a>
<!-- api: P:Inno.Editor.Interactions.EditorHistoryResult.message b4c474da5ec37e06969f133a8decc4e1cb2887df67c0451dac86c09ea4b3ba8b -->

```csharp
public string Inno.Editor.Interactions.EditorHistoryResult.message { get; }
```

Gets the diagnostic message associated with a failed transition, or an empty string after success.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryResult.cs#L37).

## `statePreserved`

<a id="api-c813b81c3a66827e"></a>
<!-- api: P:Inno.Editor.Interactions.EditorHistoryResult.statePreserved 56a29c442f057ed8ae4e151031fa857c387984f73c9753b08086ed1a55e1c9f5 -->

```csharp
public bool Inno.Editor.Interactions.EditorHistoryResult.statePreserved { get; }
```

Gets whether a failed transition restored the domain state that existed before the attempt.

**Constraints:** Successful results always preserve a valid state. A failed result with this value set to
`false` faults the owning history because the transition can no longer be retried safely.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryResult.cs#L32).

## `succeeded`

<a id="api-fe96b6ac16d90990"></a>
<!-- api: P:Inno.Editor.Interactions.EditorHistoryResult.succeeded faf8000c137eac9a884bd38872931a067926c8d020725a90bd2e84cb83b8f593 -->

```csharp
public bool Inno.Editor.Interactions.EditorHistoryResult.succeeded { get; }
```

Gets whether the requested history transition completed successfully.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryResult.cs#L23).
