---
title: "EditorStatisticId"
description: "Reference for EditorStatisticId in Inno.Editor.Core."
uid: api.inno.editor.core.editor-script.2ac2edc91e747973
kind: api
owners:
  - Inno.Editor.Core
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
  - manual.scripting.use-script-api
---
# `EditorStatisticId`

This reference describes `EditorStatisticId` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEditor.Core.EditorStatisticId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1fa658e172daa20f) | Method |
| [`Equals`](#api-9e2a9ba7fc711a62) | Method |
| [`Equals`](#api-a52761ecee9d64f2) | Method |
| [`GetHashCode`](#api-c9b068f031845575) | Method |
| [`op_Equality`](#api-95acc001e9c403b0) | Method |
| [`op_Inequality`](#api-8b7f683d2929fda8) | Method |
| [`ToString`](#api-4ee20883b832b42c) | Method |
| [`isValid`](#api-e4e8fde2524659b1) | Property |
| [`value`](#api-11167a0f6ff052fd) | Property |

## Type declaration

<a id="api-2ac2edc91e747973"></a>
<!-- api: T:InnoEditor.Core.EditorStatisticId b4e0147b2d4eacdd349e22186166aad646f0e337e8021afc950fbe24ecf63721 -->

```csharp
public readonly struct InnoEditor.Core.EditorStatisticId : System.IEquatable<InnoEditor.Core.EditorStatisticId>
```

Identifies one editor statistic across panels, modules, and reloadable extensions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L10).

## `#ctor`

<a id="api-1fa658e172daa20f"></a>
<!-- api: M:InnoEditor.Core.EditorStatisticId.#ctor(System.String) 9ff13c6fa06c70956caa424b6236eef9e519b279252125f346de0c02f34bf3de -->

```csharp
public InnoEditor.Core.EditorStatisticId.EditorStatisticId(string value)
```

Creates a globally stable statistic identifier.

**Parameter `value`:** Non-empty globally stable identity.

**Throws `System.ArgumentException`:** Thrown when `value` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L21).

## `Equals`

<a id="api-9e2a9ba7fc711a62"></a>
<!-- api: M:InnoEditor.Core.EditorStatisticId.Equals(InnoEditor.Core.EditorStatisticId) de7d859942be00a6a1e7845640f8b9b2756061d340f6d1803718f84f38c50054 -->

```csharp
public bool InnoEditor.Core.EditorStatisticId.Equals(InnoEditor.Core.EditorStatisticId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L10).

## `Equals`

<a id="api-a52761ecee9d64f2"></a>
<!-- api: M:InnoEditor.Core.EditorStatisticId.Equals(System.Object) acc9c863a2e85ded67f51d405446097a5ccfe1696a3e0c72fb59c05af55398f2 -->

```csharp
public override bool InnoEditor.Core.EditorStatisticId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L10).

## `GetHashCode`

<a id="api-c9b068f031845575"></a>
<!-- api: M:InnoEditor.Core.EditorStatisticId.GetHashCode d0b5a753ddc137d19351992a2d0e2a585028adde015773278bd63efed2678ad3 -->

```csharp
public override int InnoEditor.Core.EditorStatisticId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L10).

## `op_Equality`

<a id="api-95acc001e9c403b0"></a>
<!-- api: M:InnoEditor.Core.EditorStatisticId.op_Equality(InnoEditor.Core.EditorStatisticId,InnoEditor.Core.EditorStatisticId) e26491b76e11f3d798e2840f4ec0abd623c80661d1a5ec38c4e67d00c0eb4590 -->

```csharp
public static bool InnoEditor.Core.EditorStatisticId.operator ==(InnoEditor.Core.EditorStatisticId left, InnoEditor.Core.EditorStatisticId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L10).

## `op_Inequality`

<a id="api-8b7f683d2929fda8"></a>
<!-- api: M:InnoEditor.Core.EditorStatisticId.op_Inequality(InnoEditor.Core.EditorStatisticId,InnoEditor.Core.EditorStatisticId) 16edf8461d5440849c8c8798861cfce1697c087107ad0d385ec6969cc8b81035 -->

```csharp
public static bool InnoEditor.Core.EditorStatisticId.operator !=(InnoEditor.Core.EditorStatisticId left, InnoEditor.Core.EditorStatisticId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L10).

## `ToString`

<a id="api-4ee20883b832b42c"></a>
<!-- api: M:InnoEditor.Core.EditorStatisticId.ToString c46daf052c9f5c586a69aee3b5aba15d1588f40d64b7ecd627d3e26176fe784e -->

```csharp
public override string InnoEditor.Core.EditorStatisticId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L43).

## `isValid`

<a id="api-e4e8fde2524659b1"></a>
<!-- api: P:InnoEditor.Core.EditorStatisticId.isValid c2c28b5c8c4364d690f4a09e021ff67639c165f4f635d07351356f66afc3ca50 -->

```csharp
public bool InnoEditor.Core.EditorStatisticId.isValid { get; }
```

Gets whether this identifier contains a usable value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L35).

## `value`

<a id="api-11167a0f6ff052fd"></a>
<!-- api: P:InnoEditor.Core.EditorStatisticId.value 83c915a89908028e22fb5dc3fe60cfa5dae46642a7e97ad1178147480ddaf966 -->

```csharp
public string InnoEditor.Core.EditorStatisticId.value { get; }
```

Gets the globally stable identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L30).
