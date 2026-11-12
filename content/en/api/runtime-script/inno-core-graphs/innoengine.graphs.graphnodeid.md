---
title: "GraphNodeId"
description: "Reference for GraphNodeId in Inno.Core.Graphs."
uid: api.inno.core.graphs.runtime-script.63c06057e1decc88
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: runtime-script
contracts:
  - project.inno-core-graphs#document-and-definition-contract
  - manual.scripting.use-script-api
---
# `GraphNodeId`

This reference describes `GraphNodeId` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Graphs.GraphNodeId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a490541619c426b5) | Method |
| [`Equals`](#api-da681d2b8f734e7e) | Method |
| [`Equals`](#api-051218c75fd9d842) | Method |
| [`GetHashCode`](#api-bc7e9abdf16fa01d) | Method |
| [`op_Equality`](#api-33386bd7e97517b5) | Method |
| [`op_Inequality`](#api-be0b4bf657b8755f) | Method |
| [`ToString`](#api-b43f79e464a180ce) | Method |
| [`value`](#api-b42b889e36acba85) | Property |

## Type declaration

<a id="api-63c06057e1decc88"></a>
<!-- api: T:InnoEngine.Graphs.GraphNodeId dfb434318774ee03e2d8b1cda75b704c083175aad4983b47885b848c145ba3ec -->

```csharp
public readonly struct InnoEngine.Graphs.GraphNodeId : System.IEquatable<InnoEngine.Graphs.GraphNodeId>
```

Identifies a node within one graph document using a stable serialized value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L8).

## `#ctor`

<a id="api-a490541619c426b5"></a>
<!-- api: M:InnoEngine.Graphs.GraphNodeId.#ctor(System.String) 4d7490457de4ab4b185d4b8cffece8621d93f0cb6c59eef9e7c2171b1d73bcbe -->

```csharp
public InnoEngine.Graphs.GraphNodeId.GraphNodeId(string value)
```

Creates a stable graph node identifier.

**Parameter `value`:** Non-empty identifier value.

**Throws `System.ArgumentException`:** Thrown when `value` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L19).

## `Equals`

<a id="api-da681d2b8f734e7e"></a>
<!-- api: M:InnoEngine.Graphs.GraphNodeId.Equals(InnoEngine.Graphs.GraphNodeId) 7bd3627fec83475e5d4b8e7923730be94e16bae8b1cb9cc00fa7ff075044c825 -->

```csharp
public bool InnoEngine.Graphs.GraphNodeId.Equals(InnoEngine.Graphs.GraphNodeId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L8).

## `Equals`

<a id="api-051218c75fd9d842"></a>
<!-- api: M:InnoEngine.Graphs.GraphNodeId.Equals(System.Object) f21b1493abfba5163c9d542343f57daf016758a323929607b3288517cf425b9d -->

```csharp
public override bool InnoEngine.Graphs.GraphNodeId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L8).

## `GetHashCode`

<a id="api-bc7e9abdf16fa01d"></a>
<!-- api: M:InnoEngine.Graphs.GraphNodeId.GetHashCode 5081813dbc5c1b1848b98c0ae24d864422889f2bd17fe6a69ed23754e3d970f6 -->

```csharp
public override int InnoEngine.Graphs.GraphNodeId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L8).

## `op_Equality`

<a id="api-33386bd7e97517b5"></a>
<!-- api: M:InnoEngine.Graphs.GraphNodeId.op_Equality(InnoEngine.Graphs.GraphNodeId,InnoEngine.Graphs.GraphNodeId) 0c8293ce2d1815c526f2745082a3a648de15c48d2fb7c7893155fea22ea01a31 -->

```csharp
public static bool InnoEngine.Graphs.GraphNodeId.operator ==(InnoEngine.Graphs.GraphNodeId left, InnoEngine.Graphs.GraphNodeId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L8).

## `op_Inequality`

<a id="api-be0b4bf657b8755f"></a>
<!-- api: M:InnoEngine.Graphs.GraphNodeId.op_Inequality(InnoEngine.Graphs.GraphNodeId,InnoEngine.Graphs.GraphNodeId) 506e1d139ec068a4ccd341ad8cefc5cdb78d05921ae920d0cbe7ec15f1f3e39f -->

```csharp
public static bool InnoEngine.Graphs.GraphNodeId.operator !=(InnoEngine.Graphs.GraphNodeId left, InnoEngine.Graphs.GraphNodeId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L8).

## `ToString`

<a id="api-b43f79e464a180ce"></a>
<!-- api: M:InnoEngine.Graphs.GraphNodeId.ToString 9151d3136793cf083f3d7f64ad9b4f6ae31136a4d5b71289def593621a02179b -->

```csharp
public override string InnoEngine.Graphs.GraphNodeId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L36).

## `value`

<a id="api-b42b889e36acba85"></a>
<!-- api: P:InnoEngine.Graphs.GraphNodeId.value 17c8e8e512b021475f4084c4aaef72d0b08d0e453ef279a29b6f2b350755ca99 -->

```csharp
public string InnoEngine.Graphs.GraphNodeId.value { get; }
```

Gets the serialized identifier value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L28).
