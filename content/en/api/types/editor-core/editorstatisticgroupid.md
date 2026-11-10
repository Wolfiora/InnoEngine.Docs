---
title: "EditorStatisticGroupId"
description: "Reference for EditorStatisticGroupId in Inno.Editor.Core."
uid: api.inno.editor.core.c1734a80ddcb8a31
kind: api
owners:
  - Inno.Editor.Core
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
---
# `EditorStatisticGroupId`

This reference describes `EditorStatisticGroupId` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Core.EditorStatisticGroupId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d87e28e4bfb2c491) | Method |
| [`Equals`](#api-59025ed5b5115156) | Method |
| [`Equals`](#api-e3080d1a85f83f59) | Method |
| [`GetHashCode`](#api-cdc1cda442ffaf0b) | Method |
| [`op_Equality`](#api-7a886fead7e3a2e5) | Method |
| [`op_Inequality`](#api-3227b5d5e4bbe2a2) | Method |
| [`ToString`](#api-20a28e5943142c2d) | Method |
| [`isValid`](#api-05f33f724f9976af) | Property |
| [`value`](#api-4af4df86f5253e0f) | Property |

## Type declaration

<a id="api-c1734a80ddcb8a31"></a>
<!-- api: T:Inno.Editor.Core.EditorStatisticGroupId c1eb8ef6d2c2a7cfd7368e4535bee656c087044a104f8609959bc28af8cb9fc2 -->

```csharp
public readonly record struct Inno.Editor.Core.EditorStatisticGroupId : System.IEquatable<Inno.Editor.Core.EditorStatisticGroupId>
```

Identifies one visual group in the editor statistics presentation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L49).

## `#ctor`

<a id="api-d87e28e4bfb2c491"></a>
<!-- api: M:Inno.Editor.Core.EditorStatisticGroupId.#ctor(System.String) ba1aada37020d769e04ad3a5754b8531316986f6e9b5ddc0434db6a9d1f12329 -->

```csharp
public Inno.Editor.Core.EditorStatisticGroupId.EditorStatisticGroupId(string value)
```

Creates a globally stable statistic-group identifier.

**Parameter `value`:** Non-empty globally stable identity.

**Throws `System.ArgumentException`:** Thrown when `value` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L60).

## `Equals`

<a id="api-59025ed5b5115156"></a>
<!-- api: M:Inno.Editor.Core.EditorStatisticGroupId.Equals(Inno.Editor.Core.EditorStatisticGroupId) 3555cb549c5bdac83c1c89e2be0e240384294513ea5a6d7d90593b816fc1e510 -->

```csharp
public bool Inno.Editor.Core.EditorStatisticGroupId.Equals(Inno.Editor.Core.EditorStatisticGroupId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L49).

## `Equals`

<a id="api-e3080d1a85f83f59"></a>
<!-- api: M:Inno.Editor.Core.EditorStatisticGroupId.Equals(System.Object) 5f74287cb94cab13d09767ceea890b63359fa8c39e3e1edd2570e0d26187c397 -->

```csharp
public override bool Inno.Editor.Core.EditorStatisticGroupId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L49).

## `GetHashCode`

<a id="api-cdc1cda442ffaf0b"></a>
<!-- api: M:Inno.Editor.Core.EditorStatisticGroupId.GetHashCode 2d9cbeff5a872ee96332df5afe524e11af52d75b603265e48fd1958971e8394d -->

```csharp
public override int Inno.Editor.Core.EditorStatisticGroupId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L49).

## `op_Equality`

<a id="api-7a886fead7e3a2e5"></a>
<!-- api: M:Inno.Editor.Core.EditorStatisticGroupId.op_Equality(Inno.Editor.Core.EditorStatisticGroupId,Inno.Editor.Core.EditorStatisticGroupId) 941d91b654e8977beab47f5b0f7878e5b0b2c1df14142347eabcdb1aa41955a4 -->

```csharp
public static bool Inno.Editor.Core.EditorStatisticGroupId.operator ==(Inno.Editor.Core.EditorStatisticGroupId left, Inno.Editor.Core.EditorStatisticGroupId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L49).

## `op_Inequality`

<a id="api-3227b5d5e4bbe2a2"></a>
<!-- api: M:Inno.Editor.Core.EditorStatisticGroupId.op_Inequality(Inno.Editor.Core.EditorStatisticGroupId,Inno.Editor.Core.EditorStatisticGroupId) 0acc7c0c03ad9bb5874cb19996afd90df6fd362619b37c62108dfa5a9333ae9c -->

```csharp
public static bool Inno.Editor.Core.EditorStatisticGroupId.operator !=(Inno.Editor.Core.EditorStatisticGroupId left, Inno.Editor.Core.EditorStatisticGroupId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L49).

## `ToString`

<a id="api-20a28e5943142c2d"></a>
<!-- api: M:Inno.Editor.Core.EditorStatisticGroupId.ToString 0be6bdb2fc26ded799177a2c66bece3991eb158d040dee825770d0bc579e232f -->

```csharp
public override string Inno.Editor.Core.EditorStatisticGroupId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L82).

## `isValid`

<a id="api-05f33f724f9976af"></a>
<!-- api: P:Inno.Editor.Core.EditorStatisticGroupId.isValid a62db98f6b3567e17797b055c0464d3ea42f5f6f1b6fb6a123b384859f42a0a0 -->

```csharp
public bool Inno.Editor.Core.EditorStatisticGroupId.isValid { get; }
```

Gets whether this identifier contains a usable value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L74).

## `value`

<a id="api-4af4df86f5253e0f"></a>
<!-- api: P:Inno.Editor.Core.EditorStatisticGroupId.value 4ec1addd02221c818023fd0555a88a1786e29ae69dfe11f1984b07f0c1a4b017 -->

```csharp
public string Inno.Editor.Core.EditorStatisticGroupId.value { get; }
```

Gets the globally stable identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L69).
