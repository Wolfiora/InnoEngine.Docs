---
title: "GraphEdgeId"
description: "Reference for GraphEdgeId in Inno.Core.Graphs."
uid: api.inno.core.graphs.326e87fd23b6e7f6
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: source-clr
contracts:
  - project.inno-core-graphs#document-and-definition-contract
---
# `GraphEdgeId`

This reference describes `GraphEdgeId` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.Graphs.GraphEdgeId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4303f5457f16b673) | Method |
| [`Equals`](#api-b41cfb828da06f73) | Method |
| [`Equals`](#api-d735db3fe8a21f0d) | Method |
| [`GetHashCode`](#api-0febebc6b71e6d79) | Method |
| [`op_Equality`](#api-a146165a0f075867) | Method |
| [`op_Inequality`](#api-8b92105d2edd9aa6) | Method |
| [`ToString`](#api-ecc16abd16379c63) | Method |
| [`value`](#api-acf79dd7ea79e43c) | Property |

## Type declaration

<a id="api-326e87fd23b6e7f6"></a>
<!-- api: T:Inno.Core.Graphs.GraphEdgeId d906508d5a9df6841e60d31f05df3e7565a06758f3dcada633bb9918f0e14748 -->

```csharp
public readonly record struct Inno.Core.Graphs.GraphEdgeId : System.IEquatable<Inno.Core.Graphs.GraphEdgeId>
```

Identifies an edge within one graph document using a stable serialized value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L42).

## `#ctor`

<a id="api-4303f5457f16b673"></a>
<!-- api: M:Inno.Core.Graphs.GraphEdgeId.#ctor(System.String) 3c44fcbd0fecf332d166bdd6032464df6201156121745c5809b0f38f984c0c97 -->

```csharp
public Inno.Core.Graphs.GraphEdgeId.GraphEdgeId(string value)
```

Creates a stable graph edge identifier.

**Parameter `value`:** Non-empty identifier value.

**Throws `System.ArgumentException`:** Thrown when `value` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L53).

## `Equals`

<a id="api-b41cfb828da06f73"></a>
<!-- api: M:Inno.Core.Graphs.GraphEdgeId.Equals(Inno.Core.Graphs.GraphEdgeId) 558a000240cd25f71bb0ca120e654a647834a35dfc93d51f9d6568fc3dbc52eb -->

```csharp
public bool Inno.Core.Graphs.GraphEdgeId.Equals(Inno.Core.Graphs.GraphEdgeId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L42).

## `Equals`

<a id="api-d735db3fe8a21f0d"></a>
<!-- api: M:Inno.Core.Graphs.GraphEdgeId.Equals(System.Object) f841d1045710d8e43bacce2f75f2695e745c1cfe87fc07316800df2e48d4781a -->

```csharp
public override bool Inno.Core.Graphs.GraphEdgeId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L42).

## `GetHashCode`

<a id="api-0febebc6b71e6d79"></a>
<!-- api: M:Inno.Core.Graphs.GraphEdgeId.GetHashCode 5a6264b6d801e2fd1dd37ac602e544ddaddf2e227c90a38262ece3e17ec97fce -->

```csharp
public override int Inno.Core.Graphs.GraphEdgeId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L42).

## `op_Equality`

<a id="api-a146165a0f075867"></a>
<!-- api: M:Inno.Core.Graphs.GraphEdgeId.op_Equality(Inno.Core.Graphs.GraphEdgeId,Inno.Core.Graphs.GraphEdgeId) 4864b6b6d5b5d1a202a769c61beece483659de53baafb598d6b04f626cc907b2 -->

```csharp
public static bool Inno.Core.Graphs.GraphEdgeId.operator ==(Inno.Core.Graphs.GraphEdgeId left, Inno.Core.Graphs.GraphEdgeId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L42).

## `op_Inequality`

<a id="api-8b92105d2edd9aa6"></a>
<!-- api: M:Inno.Core.Graphs.GraphEdgeId.op_Inequality(Inno.Core.Graphs.GraphEdgeId,Inno.Core.Graphs.GraphEdgeId) d9e21071da31acb597bcf962acbe3dbcdc7e1c0765a8ec9ea31cabe706542c6b -->

```csharp
public static bool Inno.Core.Graphs.GraphEdgeId.operator !=(Inno.Core.Graphs.GraphEdgeId left, Inno.Core.Graphs.GraphEdgeId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L42).

## `ToString`

<a id="api-ecc16abd16379c63"></a>
<!-- api: M:Inno.Core.Graphs.GraphEdgeId.ToString 386d78976f416272e4e782fb09d0ff67495debe2e067fd5864299b4733b43d11 -->

```csharp
public override string Inno.Core.Graphs.GraphEdgeId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L70).

## `value`

<a id="api-acf79dd7ea79e43c"></a>
<!-- api: P:Inno.Core.Graphs.GraphEdgeId.value f35d8bd057d4edbbf336ac494d0543db83f48c3a71a3057415e42b279ef5f596 -->

```csharp
public string Inno.Core.Graphs.GraphEdgeId.value { get; }
```

Gets the serialized identifier value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L62).
