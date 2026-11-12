---
title: "GraphEdgeId"
description: "Reference for GraphEdgeId in Inno.Core.Graphs."
uid: api.inno.core.graphs.runtime-script.2a136f014533cf93
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: runtime-script
contracts:
  - project.inno-core-graphs#document-and-definition-contract
  - manual.scripting.use-script-api
---
# `GraphEdgeId`

This reference describes `GraphEdgeId` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Graphs.GraphEdgeId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f344bf5dda8902cd) | Method |
| [`Equals`](#api-154986fedd462dd5) | Method |
| [`Equals`](#api-9ddcbfa10f85e9e8) | Method |
| [`GetHashCode`](#api-8c3a222a8f2e6fc1) | Method |
| [`op_Equality`](#api-693c5dff478bf271) | Method |
| [`op_Inequality`](#api-3e343aa49aeb4cf1) | Method |
| [`ToString`](#api-2a3edebc3bd580c9) | Method |
| [`value`](#api-e637f4358f41fc08) | Property |

## Type declaration

<a id="api-2a136f014533cf93"></a>
<!-- api: T:InnoEngine.Graphs.GraphEdgeId b2ac7ea053c0581a38eb60e1beb50049bc9c7fbfd15f18a673c4a0d53f307f1f -->

```csharp
public readonly struct InnoEngine.Graphs.GraphEdgeId : System.IEquatable<InnoEngine.Graphs.GraphEdgeId>
```

Identifies an edge within one graph document using a stable serialized value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L42).

## `#ctor`

<a id="api-f344bf5dda8902cd"></a>
<!-- api: M:InnoEngine.Graphs.GraphEdgeId.#ctor(System.String) eb4820efdce226b771e78ac8084912f8e65b47b435a5886c8568edbbc25abdd5 -->

```csharp
public InnoEngine.Graphs.GraphEdgeId.GraphEdgeId(string value)
```

Creates a stable graph edge identifier.

**Parameter `value`:** Non-empty identifier value.

**Throws `System.ArgumentException`:** Thrown when `value` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L53).

## `Equals`

<a id="api-154986fedd462dd5"></a>
<!-- api: M:InnoEngine.Graphs.GraphEdgeId.Equals(InnoEngine.Graphs.GraphEdgeId) c2d26d2794a56aafe789b3e631ae906873d6ee0c09c6bc5f2f79425d7541cd37 -->

```csharp
public bool InnoEngine.Graphs.GraphEdgeId.Equals(InnoEngine.Graphs.GraphEdgeId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L42).

## `Equals`

<a id="api-9ddcbfa10f85e9e8"></a>
<!-- api: M:InnoEngine.Graphs.GraphEdgeId.Equals(System.Object) d64e9eab8c321af0e750a772f5b0ad67fb83b1651ef3171f33f063448cdea633 -->

```csharp
public override bool InnoEngine.Graphs.GraphEdgeId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L42).

## `GetHashCode`

<a id="api-8c3a222a8f2e6fc1"></a>
<!-- api: M:InnoEngine.Graphs.GraphEdgeId.GetHashCode 1a78379265a9a41038041236630ae743aa25ffa0a6b3ac251aa153bfeb8ed476 -->

```csharp
public override int InnoEngine.Graphs.GraphEdgeId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L42).

## `op_Equality`

<a id="api-693c5dff478bf271"></a>
<!-- api: M:InnoEngine.Graphs.GraphEdgeId.op_Equality(InnoEngine.Graphs.GraphEdgeId,InnoEngine.Graphs.GraphEdgeId) 13c415d3e7e9e7bb811108204403caf2c80fb924cb31762a7cef0a63b821608c -->

```csharp
public static bool InnoEngine.Graphs.GraphEdgeId.operator ==(InnoEngine.Graphs.GraphEdgeId left, InnoEngine.Graphs.GraphEdgeId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L42).

## `op_Inequality`

<a id="api-3e343aa49aeb4cf1"></a>
<!-- api: M:InnoEngine.Graphs.GraphEdgeId.op_Inequality(InnoEngine.Graphs.GraphEdgeId,InnoEngine.Graphs.GraphEdgeId) 43726005ee8021174ddd14a1d0a90d17f8d8c1e3ba61b0fe7bd8a7ede043d68e -->

```csharp
public static bool InnoEngine.Graphs.GraphEdgeId.operator !=(InnoEngine.Graphs.GraphEdgeId left, InnoEngine.Graphs.GraphEdgeId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L42).

## `ToString`

<a id="api-2a3edebc3bd580c9"></a>
<!-- api: M:InnoEngine.Graphs.GraphEdgeId.ToString b7d5b28a6fa5770e9d48e1adff4718126908820906a11302b4f3f33625121b81 -->

```csharp
public override string InnoEngine.Graphs.GraphEdgeId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L70).

## `value`

<a id="api-e637f4358f41fc08"></a>
<!-- api: P:InnoEngine.Graphs.GraphEdgeId.value ae65e4c779811aa3626b9ad5effcbc2def61cf2b06b500faebe1f308c00a85ce -->

```csharp
public string InnoEngine.Graphs.GraphEdgeId.value { get; }
```

Gets the serialized identifier value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L62).
