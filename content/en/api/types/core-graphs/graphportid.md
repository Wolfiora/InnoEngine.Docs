---
title: "GraphPortId"
description: "Reference for GraphPortId in Inno.Core.Graphs."
uid: api.inno.core.graphs.6b4218a0727cf748
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: source-clr
contracts:
  - project.inno-core-graphs#document-and-definition-contract
---
# `GraphPortId`

This reference describes `GraphPortId` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.Graphs.GraphPortId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8515ca2b6c465e32) | Method |
| [`Equals`](#api-5ecc94313caa73a1) | Method |
| [`Equals`](#api-34177bc818fe1fab) | Method |
| [`GetHashCode`](#api-39c98cf5c2e5f8ce) | Method |
| [`op_Equality`](#api-6b0ad43ef315b1ee) | Method |
| [`op_Inequality`](#api-8647a68c8d8bb688) | Method |
| [`ToString`](#api-dc26d7eec7d9e14e) | Method |
| [`value`](#api-52996d7b66aa708c) | Property |

## Type declaration

<a id="api-6b4218a0727cf748"></a>
<!-- api: T:Inno.Core.Graphs.GraphPortId 4de6587b7ebed6d8948267d112cce849547cd048ce09daeea5521f6847221902 -->

```csharp
public readonly record struct Inno.Core.Graphs.GraphPortId : System.IEquatable<Inno.Core.Graphs.GraphPortId>
```

Identifies a port within its owning node definition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L76).

## `#ctor`

<a id="api-8515ca2b6c465e32"></a>
<!-- api: M:Inno.Core.Graphs.GraphPortId.#ctor(System.String) a97e0d569d336e91875bd49106933fc8de1d160a64c3c282bf6cee61e6ee62d1 -->

```csharp
public Inno.Core.Graphs.GraphPortId.GraphPortId(string value)
```

Creates a stable graph port identifier.

**Parameter `value`:** Non-empty identifier value.

**Throws `System.ArgumentException`:** Thrown when `value` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L87).

## `Equals`

<a id="api-5ecc94313caa73a1"></a>
<!-- api: M:Inno.Core.Graphs.GraphPortId.Equals(Inno.Core.Graphs.GraphPortId) b434f687c4b1e661808874456be45174e7c0f3b765ed250e24ca8b39c95554d0 -->

```csharp
public bool Inno.Core.Graphs.GraphPortId.Equals(Inno.Core.Graphs.GraphPortId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L76).

## `Equals`

<a id="api-34177bc818fe1fab"></a>
<!-- api: M:Inno.Core.Graphs.GraphPortId.Equals(System.Object) 42e1be4dc3a6fb3dac280ca804d4a1c1f7db4b0c01413a35ba40741bb89bd39e -->

```csharp
public override bool Inno.Core.Graphs.GraphPortId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L76).

## `GetHashCode`

<a id="api-39c98cf5c2e5f8ce"></a>
<!-- api: M:Inno.Core.Graphs.GraphPortId.GetHashCode da524fe6259cdcc05e7ea05edd006528a8116b6dccba5076259dc8ccca72cbcb -->

```csharp
public override int Inno.Core.Graphs.GraphPortId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L76).

## `op_Equality`

<a id="api-6b0ad43ef315b1ee"></a>
<!-- api: M:Inno.Core.Graphs.GraphPortId.op_Equality(Inno.Core.Graphs.GraphPortId,Inno.Core.Graphs.GraphPortId) a640d11ea94e90d3f6bf941728380bbe84d645e9ebd18a6d61f90021d078ed03 -->

```csharp
public static bool Inno.Core.Graphs.GraphPortId.operator ==(Inno.Core.Graphs.GraphPortId left, Inno.Core.Graphs.GraphPortId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L76).

## `op_Inequality`

<a id="api-8647a68c8d8bb688"></a>
<!-- api: M:Inno.Core.Graphs.GraphPortId.op_Inequality(Inno.Core.Graphs.GraphPortId,Inno.Core.Graphs.GraphPortId) 60d5878b2ef5621371d5800e6c63bd43e97f10757288db63f66fbcf83befb554 -->

```csharp
public static bool Inno.Core.Graphs.GraphPortId.operator !=(Inno.Core.Graphs.GraphPortId left, Inno.Core.Graphs.GraphPortId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L76).

## `ToString`

<a id="api-dc26d7eec7d9e14e"></a>
<!-- api: M:Inno.Core.Graphs.GraphPortId.ToString c54773dd3104f8060261e6a09bf1e79d1859d4e79950ec7b0e6d44cf2c524560 -->

```csharp
public override string Inno.Core.Graphs.GraphPortId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L104).

## `value`

<a id="api-52996d7b66aa708c"></a>
<!-- api: P:Inno.Core.Graphs.GraphPortId.value 2b18c20e3efcbe371c673d92923e47bb7009661d1894b3b617c5f4a6346af338 -->

```csharp
public string Inno.Core.Graphs.GraphPortId.value { get; }
```

Gets the serialized identifier value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L96).
