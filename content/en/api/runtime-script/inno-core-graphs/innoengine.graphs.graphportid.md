---
title: "GraphPortId"
description: "Reference for GraphPortId in Inno.Core.Graphs."
uid: api.inno.core.graphs.runtime-script.c31940356163f70b
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: runtime-script
contracts:
  - project.inno-core-graphs#document-and-definition-contract
  - manual.scripting.use-script-api
---
# `GraphPortId`

This reference describes `GraphPortId` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Graphs.GraphPortId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-45557c818eb3429b) | Method |
| [`Equals`](#api-0c5dc103873009d0) | Method |
| [`Equals`](#api-394f88a266402e3b) | Method |
| [`GetHashCode`](#api-1d1f15b123dc615c) | Method |
| [`op_Equality`](#api-5693545556659350) | Method |
| [`op_Inequality`](#api-997d6d38d9b3ec6f) | Method |
| [`ToString`](#api-bc696e19115b0425) | Method |
| [`value`](#api-cc9b0d742e0f4ac2) | Property |

## Type declaration

<a id="api-c31940356163f70b"></a>
<!-- api: T:InnoEngine.Graphs.GraphPortId ff657d6049a224072d7c8639e09d9759f22dc35d30607a317e7655284af3d2fa -->

```csharp
public readonly struct InnoEngine.Graphs.GraphPortId : System.IEquatable<InnoEngine.Graphs.GraphPortId>
```

Identifies a port within its owning node definition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L76).

## `#ctor`

<a id="api-45557c818eb3429b"></a>
<!-- api: M:InnoEngine.Graphs.GraphPortId.#ctor(System.String) 8016c796ccccd95e313426e603c5b5b08f113aef7e9d655fd6d8195d5cc76406 -->

```csharp
public InnoEngine.Graphs.GraphPortId.GraphPortId(string value)
```

Creates a stable graph port identifier.

**Parameter `value`:** Non-empty identifier value.

**Throws `System.ArgumentException`:** Thrown when `value` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L87).

## `Equals`

<a id="api-0c5dc103873009d0"></a>
<!-- api: M:InnoEngine.Graphs.GraphPortId.Equals(InnoEngine.Graphs.GraphPortId) 49521ca61f6cfd45b5e2308c3b135da8c41673f08d6e6f920f18a90e3bd293cc -->

```csharp
public bool InnoEngine.Graphs.GraphPortId.Equals(InnoEngine.Graphs.GraphPortId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L76).

## `Equals`

<a id="api-394f88a266402e3b"></a>
<!-- api: M:InnoEngine.Graphs.GraphPortId.Equals(System.Object) d4ee05e0d7916fd582e2e237e12b7ee8637c8df965d582a0e9f2585be694e05c -->

```csharp
public override bool InnoEngine.Graphs.GraphPortId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L76).

## `GetHashCode`

<a id="api-1d1f15b123dc615c"></a>
<!-- api: M:InnoEngine.Graphs.GraphPortId.GetHashCode 0a712705274c81cd6f4f037bb7dae6a347aed0bda719b2b4758be49350d7e80b -->

```csharp
public override int InnoEngine.Graphs.GraphPortId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L76).

## `op_Equality`

<a id="api-5693545556659350"></a>
<!-- api: M:InnoEngine.Graphs.GraphPortId.op_Equality(InnoEngine.Graphs.GraphPortId,InnoEngine.Graphs.GraphPortId) e2f10b415cd084c4a64625f74c1ecf321c4f4c3f54fe96109fafeeecc06f2411 -->

```csharp
public static bool InnoEngine.Graphs.GraphPortId.operator ==(InnoEngine.Graphs.GraphPortId left, InnoEngine.Graphs.GraphPortId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L76).

## `op_Inequality`

<a id="api-997d6d38d9b3ec6f"></a>
<!-- api: M:InnoEngine.Graphs.GraphPortId.op_Inequality(InnoEngine.Graphs.GraphPortId,InnoEngine.Graphs.GraphPortId) e3bda16bbf364786ab37230167b5ec92bb2c3f807ed2ed38a5817198294b8178 -->

```csharp
public static bool InnoEngine.Graphs.GraphPortId.operator !=(InnoEngine.Graphs.GraphPortId left, InnoEngine.Graphs.GraphPortId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L76).

## `ToString`

<a id="api-bc696e19115b0425"></a>
<!-- api: M:InnoEngine.Graphs.GraphPortId.ToString 71e52bb90e4fb13217802b952e92c50a5cbca4d263d35dc546c79f3666139c54 -->

```csharp
public override string InnoEngine.Graphs.GraphPortId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L104).

## `value`

<a id="api-cc9b0d742e0f4ac2"></a>
<!-- api: P:InnoEngine.Graphs.GraphPortId.value e5c793e008bba98bf7018b187815d4f77528ea0af5cd4a77da697242b36d7522 -->

```csharp
public string InnoEngine.Graphs.GraphPortId.value { get; }
```

Gets the serialized identifier value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L96).
