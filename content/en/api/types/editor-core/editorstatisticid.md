---
title: "EditorStatisticId"
description: "Reference for EditorStatisticId in Inno.Editor.Core."
uid: api.inno.editor.core.c6bb11d4e5b4ccac
kind: api
owners:
  - Inno.Editor.Core
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
---
# `EditorStatisticId`

This reference describes `EditorStatisticId` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Core.EditorStatisticId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c0bd577f679d9c81) | Method |
| [`Equals`](#api-3ec71f1e4ab4e7fc) | Method |
| [`Equals`](#api-2580e173dffa8cf1) | Method |
| [`GetHashCode`](#api-564af67703bd071e) | Method |
| [`op_Equality`](#api-2093c91af41ce576) | Method |
| [`op_Inequality`](#api-95bc1d07dce63a22) | Method |
| [`ToString`](#api-e4d305d7c6d3228a) | Method |
| [`isValid`](#api-2004d5c17b85e2e2) | Property |
| [`value`](#api-b0c1cfafa27722b6) | Property |

## Type declaration

<a id="api-c6bb11d4e5b4ccac"></a>
<!-- api: T:Inno.Editor.Core.EditorStatisticId f0f8f244dd6697dce2fc089aff85002af97683c37d89b596b778552f69d78de9 -->

```csharp
public readonly record struct Inno.Editor.Core.EditorStatisticId : System.IEquatable<Inno.Editor.Core.EditorStatisticId>
```

Identifies one editor statistic across panels, modules, and reloadable extensions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L10).

## `#ctor`

<a id="api-c0bd577f679d9c81"></a>
<!-- api: M:Inno.Editor.Core.EditorStatisticId.#ctor(System.String) 2670803cda0bc58157bedded1e8c3cd3bf4e15633342abfcff96fe09b1beec3e -->

```csharp
public Inno.Editor.Core.EditorStatisticId.EditorStatisticId(string value)
```

Creates a globally stable statistic identifier.

**Parameter `value`:** Non-empty globally stable identity.

**Throws `System.ArgumentException`:** Thrown when `value` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L21).

## `Equals`

<a id="api-3ec71f1e4ab4e7fc"></a>
<!-- api: M:Inno.Editor.Core.EditorStatisticId.Equals(Inno.Editor.Core.EditorStatisticId) 1ce73aef276e76a709ad6c60d698ca80f4d3b3fe73622c035a39ea4c5fcd82a0 -->

```csharp
public bool Inno.Editor.Core.EditorStatisticId.Equals(Inno.Editor.Core.EditorStatisticId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L10).

## `Equals`

<a id="api-2580e173dffa8cf1"></a>
<!-- api: M:Inno.Editor.Core.EditorStatisticId.Equals(System.Object) a9ab96e491a13797ff65408e0cd2f1a47495aaad766381ae5a9e428d57ab004d -->

```csharp
public override bool Inno.Editor.Core.EditorStatisticId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L10).

## `GetHashCode`

<a id="api-564af67703bd071e"></a>
<!-- api: M:Inno.Editor.Core.EditorStatisticId.GetHashCode 22e74bbf6fda984b51ae71e6b7c73c2ddadb0440281d442bd97e8a26cd98af02 -->

```csharp
public override int Inno.Editor.Core.EditorStatisticId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L10).

## `op_Equality`

<a id="api-2093c91af41ce576"></a>
<!-- api: M:Inno.Editor.Core.EditorStatisticId.op_Equality(Inno.Editor.Core.EditorStatisticId,Inno.Editor.Core.EditorStatisticId) d16b4281f72cc4afa554c8d37176f2aa54194e509f70d465b3c9acb271e69f22 -->

```csharp
public static bool Inno.Editor.Core.EditorStatisticId.operator ==(Inno.Editor.Core.EditorStatisticId left, Inno.Editor.Core.EditorStatisticId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L10).

## `op_Inequality`

<a id="api-95bc1d07dce63a22"></a>
<!-- api: M:Inno.Editor.Core.EditorStatisticId.op_Inequality(Inno.Editor.Core.EditorStatisticId,Inno.Editor.Core.EditorStatisticId) 3758938e90b9e54bea82aa16686a82a3283829847358445d13aa3f0018541a3c -->

```csharp
public static bool Inno.Editor.Core.EditorStatisticId.operator !=(Inno.Editor.Core.EditorStatisticId left, Inno.Editor.Core.EditorStatisticId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L10).

## `ToString`

<a id="api-e4d305d7c6d3228a"></a>
<!-- api: M:Inno.Editor.Core.EditorStatisticId.ToString c49b59beee0523680b2d17a3e93f61cdb94a20bb0c8709c299b85f07aaf2b08f -->

```csharp
public override string Inno.Editor.Core.EditorStatisticId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L43).

## `isValid`

<a id="api-2004d5c17b85e2e2"></a>
<!-- api: P:Inno.Editor.Core.EditorStatisticId.isValid 6e78a7d2b374dc994b7bb23ac2011260da2c907714fa90f7b3e24d4d5b7647e0 -->

```csharp
public bool Inno.Editor.Core.EditorStatisticId.isValid { get; }
```

Gets whether this identifier contains a usable value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L35).

## `value`

<a id="api-b0c1cfafa27722b6"></a>
<!-- api: P:Inno.Editor.Core.EditorStatisticId.value 909c8073bd7f839c404fbeac5c757d3b9a4dff5fb498967e250cccc657a06616 -->

```csharp
public string Inno.Editor.Core.EditorStatisticId.value { get; }
```

Gets the globally stable identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorStatistics.cs#L30).
