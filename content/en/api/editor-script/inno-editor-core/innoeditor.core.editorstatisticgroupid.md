---
title: "EditorStatisticGroupId"
description: "Reference for EditorStatisticGroupId in Inno.Editor.Core."
uid: api.inno.editor.core.editor-script.b13a923787fe35f5
kind: api
owners:
  - Inno.Editor.Core
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
  - manual.scripting.use-script-api
---
# `EditorStatisticGroupId`

This reference describes `EditorStatisticGroupId` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEditor.Core.EditorStatisticGroupId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a319b964be3f0950) | Method |
| [`Equals`](#api-c577170051ba82b8) | Method |
| [`Equals`](#api-06655b4204104d33) | Method |
| [`GetHashCode`](#api-a6a9786e1756ce8d) | Method |
| [`op_Equality`](#api-be70e23e869b2537) | Method |
| [`op_Inequality`](#api-5e5ec1f07daa26ef) | Method |
| [`ToString`](#api-8de7c67006570e7d) | Method |
| [`isValid`](#api-17f79acde7ccd99c) | Property |
| [`value`](#api-14ff3006677f990a) | Property |

## Type declaration

<a id="api-b13a923787fe35f5"></a>
<!-- api: T:InnoEditor.Core.EditorStatisticGroupId dab5f541f47fe24d125fc69d195a2c38f1c5a6343b901914ebcd6766e6039f2d -->

```csharp
public readonly struct InnoEditor.Core.EditorStatisticGroupId : System.IEquatable<InnoEditor.Core.EditorStatisticGroupId>
```

Identifies one visual group in the editor statistics presentation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L49).

## `#ctor`

<a id="api-a319b964be3f0950"></a>
<!-- api: M:InnoEditor.Core.EditorStatisticGroupId.#ctor(System.String) c2a43ebd70ccfca0c1259e22ba270372b1e29ab81843c8feb7e02dd0e43342be -->

```csharp
public InnoEditor.Core.EditorStatisticGroupId.EditorStatisticGroupId(string value)
```

Creates a globally stable statistic-group identifier.

**Parameter `value`:** Non-empty globally stable identity.

**Throws `System.ArgumentException`:** Thrown when `value` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L60).

## `Equals`

<a id="api-c577170051ba82b8"></a>
<!-- api: M:InnoEditor.Core.EditorStatisticGroupId.Equals(InnoEditor.Core.EditorStatisticGroupId) 5f7e63289192135518dc46fc13a6f608c00aaf795443c0ccf522026b2f926915 -->

```csharp
public bool InnoEditor.Core.EditorStatisticGroupId.Equals(InnoEditor.Core.EditorStatisticGroupId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L49).

## `Equals`

<a id="api-06655b4204104d33"></a>
<!-- api: M:InnoEditor.Core.EditorStatisticGroupId.Equals(System.Object) 8a22e4599f8e69627c155c7add54f99c88ff4b877d9f78df53c87945b41ad514 -->

```csharp
public override bool InnoEditor.Core.EditorStatisticGroupId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L49).

## `GetHashCode`

<a id="api-a6a9786e1756ce8d"></a>
<!-- api: M:InnoEditor.Core.EditorStatisticGroupId.GetHashCode 3add588e3916cc130646de25c908df3ef65f752d3087321b429d6dff143b304e -->

```csharp
public override int InnoEditor.Core.EditorStatisticGroupId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L49).

## `op_Equality`

<a id="api-be70e23e869b2537"></a>
<!-- api: M:InnoEditor.Core.EditorStatisticGroupId.op_Equality(InnoEditor.Core.EditorStatisticGroupId,InnoEditor.Core.EditorStatisticGroupId) e19aaae09a77a8f82fb0807a4349583354caf736d08b566f704c03840baabfd1 -->

```csharp
public static bool InnoEditor.Core.EditorStatisticGroupId.operator ==(InnoEditor.Core.EditorStatisticGroupId left, InnoEditor.Core.EditorStatisticGroupId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L49).

## `op_Inequality`

<a id="api-5e5ec1f07daa26ef"></a>
<!-- api: M:InnoEditor.Core.EditorStatisticGroupId.op_Inequality(InnoEditor.Core.EditorStatisticGroupId,InnoEditor.Core.EditorStatisticGroupId) 5b34d0e52ecf886ced2ea6c1c7878adf7794ca640bca32b87001fe43771ee3e0 -->

```csharp
public static bool InnoEditor.Core.EditorStatisticGroupId.operator !=(InnoEditor.Core.EditorStatisticGroupId left, InnoEditor.Core.EditorStatisticGroupId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L49).

## `ToString`

<a id="api-8de7c67006570e7d"></a>
<!-- api: M:InnoEditor.Core.EditorStatisticGroupId.ToString f9dd1d8d152a69aeb3876297769167036a81e2046436d411cb061d2f4f68e21a -->

```csharp
public override string InnoEditor.Core.EditorStatisticGroupId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L82).

## `isValid`

<a id="api-17f79acde7ccd99c"></a>
<!-- api: P:InnoEditor.Core.EditorStatisticGroupId.isValid 7c21450497a3c78e29f5692220c367b790696add43fe56c8a7ac25d2a5afe0c8 -->

```csharp
public bool InnoEditor.Core.EditorStatisticGroupId.isValid { get; }
```

Gets whether this identifier contains a usable value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L74).

## `value`

<a id="api-14ff3006677f990a"></a>
<!-- api: P:InnoEditor.Core.EditorStatisticGroupId.value 373d0cd3f849b968d26b77be92b000321d6667621516bde56494d4bc07e65c95 -->

```csharp
public string InnoEditor.Core.EditorStatisticGroupId.value { get; }
```

Gets the globally stable identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L69).
