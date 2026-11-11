---
title: "GraphNodeId"
description: "Reference for GraphNodeId in Inno.Core.Graphs."
uid: api.inno.core.graphs.7df3eec586f83774
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: source-clr
contracts:
  - project.inno-core-graphs#document-and-definition-contract
---
# `GraphNodeId`

This reference describes `GraphNodeId` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.Graphs.GraphNodeId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b43f233a0a04abc4) | Method |
| [`Equals`](#api-2e3a131567ab7804) | Method |
| [`Equals`](#api-32e32cdbb307aaac) | Method |
| [`GetHashCode`](#api-7e960a4aa3e33580) | Method |
| [`op_Equality`](#api-5ac77a61670a7536) | Method |
| [`op_Inequality`](#api-1a34225a613fa955) | Method |
| [`ToString`](#api-e813739ccf657859) | Method |
| [`value`](#api-af5d5872e19955ba) | Property |

## Type declaration

<a id="api-7df3eec586f83774"></a>
<!-- api: T:Inno.Core.Graphs.GraphNodeId 716f26c579831176c863ca4150b73203f5af77d01ecbd2f8d17f06a791911d9d -->

```csharp
public readonly record struct Inno.Core.Graphs.GraphNodeId : System.IEquatable<Inno.Core.Graphs.GraphNodeId>
```

Identifies a node within one graph document using a stable serialized value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L8).

## `#ctor`

<a id="api-b43f233a0a04abc4"></a>
<!-- api: M:Inno.Core.Graphs.GraphNodeId.#ctor(System.String) 396fd9cbc55d2b1f5864bcf45eab4d3913ee3ab7827b37b83e6c0302cdb9a835 -->

```csharp
public Inno.Core.Graphs.GraphNodeId.GraphNodeId(string value)
```

Creates a stable graph node identifier.

**Parameter `value`:** Non-empty identifier value.

**Throws `System.ArgumentException`:** Thrown when `value` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L19).

## `Equals`

<a id="api-2e3a131567ab7804"></a>
<!-- api: M:Inno.Core.Graphs.GraphNodeId.Equals(Inno.Core.Graphs.GraphNodeId) cbb94f33918dbba5af218dac13a85c8121eb570c3830cee415ec237995634b52 -->

```csharp
public bool Inno.Core.Graphs.GraphNodeId.Equals(Inno.Core.Graphs.GraphNodeId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L8).

## `Equals`

<a id="api-32e32cdbb307aaac"></a>
<!-- api: M:Inno.Core.Graphs.GraphNodeId.Equals(System.Object) 0f30a9c536190b552017b4c9a9ca5708d23b385c54cc9ce60cced26e5ec95df2 -->

```csharp
public override bool Inno.Core.Graphs.GraphNodeId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L8).

## `GetHashCode`

<a id="api-7e960a4aa3e33580"></a>
<!-- api: M:Inno.Core.Graphs.GraphNodeId.GetHashCode d0163f89fee79d64d6932c5ec304a5caab5039d4f14dc5f2a8fba2351755f36f -->

```csharp
public override int Inno.Core.Graphs.GraphNodeId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L8).

## `op_Equality`

<a id="api-5ac77a61670a7536"></a>
<!-- api: M:Inno.Core.Graphs.GraphNodeId.op_Equality(Inno.Core.Graphs.GraphNodeId,Inno.Core.Graphs.GraphNodeId) d32e64b5678a2aa09d26abdc544d24ea368a8eaf69ddef2ef01dcdedeb46de17 -->

```csharp
public static bool Inno.Core.Graphs.GraphNodeId.operator ==(Inno.Core.Graphs.GraphNodeId left, Inno.Core.Graphs.GraphNodeId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L8).

## `op_Inequality`

<a id="api-1a34225a613fa955"></a>
<!-- api: M:Inno.Core.Graphs.GraphNodeId.op_Inequality(Inno.Core.Graphs.GraphNodeId,Inno.Core.Graphs.GraphNodeId) 2e40c05b51dd2403ddb4571366b452962ad385e061d4dbe0015defd9ae3e3339 -->

```csharp
public static bool Inno.Core.Graphs.GraphNodeId.operator !=(Inno.Core.Graphs.GraphNodeId left, Inno.Core.Graphs.GraphNodeId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L8).

## `ToString`

<a id="api-e813739ccf657859"></a>
<!-- api: M:Inno.Core.Graphs.GraphNodeId.ToString c365446e9f1932d93c02598bf3cbbd418328e2a70f41c56b4ae2ee3aa3fda509 -->

```csharp
public override string Inno.Core.Graphs.GraphNodeId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L36).

## `value`

<a id="api-af5d5872e19955ba"></a>
<!-- api: P:Inno.Core.Graphs.GraphNodeId.value ede8abe43c14e5dac976d14e4f6a80fbb1554401a910141b8772c1b6195669df -->

```csharp
public string Inno.Core.Graphs.GraphNodeId.value { get; }
```

Gets the serialized identifier value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L28).
