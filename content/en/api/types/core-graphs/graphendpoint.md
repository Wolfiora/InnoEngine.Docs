---
title: "GraphEndpoint"
description: "Reference for GraphEndpoint in Inno.Core.Graphs."
uid: api.inno.core.graphs.0c75b06f9ab0b057
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: source-clr
contracts:
  - project.inno-core-graphs#document-and-definition-contract
---
# `GraphEndpoint`

This reference describes `GraphEndpoint` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.Graphs.GraphEndpoint>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-10838bbeb1feb995) | Method |
| [`Equals`](#api-0b77d948b1305c34) | Method |
| [`Equals`](#api-9b278cb5e304bd9d) | Method |
| [`GetHashCode`](#api-1a87388930519023) | Method |
| [`op_Equality`](#api-21c92508b31e1c93) | Method |
| [`op_Inequality`](#api-136dca5850f2beb2) | Method |
| [`ToString`](#api-2a396a7d90fb0fb5) | Method |
| [`nodeId`](#api-3c4532a6064fea9b) | Property |
| [`portId`](#api-d06644a3165b96ef) | Property |

## Type declaration

<a id="api-0c75b06f9ab0b057"></a>
<!-- api: T:Inno.Core.Graphs.GraphEndpoint 1eca7350377fc6034f81cf21653c2e0f99fddeb7882cc0f0ab0304ab7897c78c -->

```csharp
public readonly record struct Inno.Core.Graphs.GraphEndpoint : System.IEquatable<Inno.Core.Graphs.GraphEndpoint>
```

Identifies one endpoint of a graph edge.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L111).

## `#ctor`

<a id="api-10838bbeb1feb995"></a>
<!-- api: M:Inno.Core.Graphs.GraphEndpoint.#ctor(Inno.Core.Graphs.GraphNodeId,Inno.Core.Graphs.GraphPortId) 4e18a68547c294fd188be2b347fcff5d3a5d04b35793c8402a977bc5649f9dce -->

```csharp
public Inno.Core.Graphs.GraphEndpoint.GraphEndpoint(Inno.Core.Graphs.GraphNodeId nodeId, Inno.Core.Graphs.GraphPortId portId)
```

Creates a graph edge endpoint.

**Parameter `nodeId`:** Owning node identifier.

**Parameter `portId`:** Port identifier within the node definition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L122).

## `Equals`

<a id="api-0b77d948b1305c34"></a>
<!-- api: M:Inno.Core.Graphs.GraphEndpoint.Equals(Inno.Core.Graphs.GraphEndpoint) 296bd31e3bfd8d61120962f34f0788cc6c5818ea9beba96adc922b1f3d19c31f -->

```csharp
public bool Inno.Core.Graphs.GraphEndpoint.Equals(Inno.Core.Graphs.GraphEndpoint other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L111).

## `Equals`

<a id="api-9b278cb5e304bd9d"></a>
<!-- api: M:Inno.Core.Graphs.GraphEndpoint.Equals(System.Object) eaf3dd6bc96511c5c00125722bfa15950e95346726ddc674ff5493edf7b3e5f1 -->

```csharp
public override bool Inno.Core.Graphs.GraphEndpoint.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L111).

## `GetHashCode`

<a id="api-1a87388930519023"></a>
<!-- api: M:Inno.Core.Graphs.GraphEndpoint.GetHashCode cc15d0a3bdb0a802362536b1384c4f66fd49ad292377040485d83485e9d64a72 -->

```csharp
public override int Inno.Core.Graphs.GraphEndpoint.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L111).

## `op_Equality`

<a id="api-21c92508b31e1c93"></a>
<!-- api: M:Inno.Core.Graphs.GraphEndpoint.op_Equality(Inno.Core.Graphs.GraphEndpoint,Inno.Core.Graphs.GraphEndpoint) 71082fd9437be81452edcc5ed847901d31b91329c28f808707016f37a34b102c -->

```csharp
public static bool Inno.Core.Graphs.GraphEndpoint.operator ==(Inno.Core.Graphs.GraphEndpoint left, Inno.Core.Graphs.GraphEndpoint right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L111).

## `op_Inequality`

<a id="api-136dca5850f2beb2"></a>
<!-- api: M:Inno.Core.Graphs.GraphEndpoint.op_Inequality(Inno.Core.Graphs.GraphEndpoint,Inno.Core.Graphs.GraphEndpoint) c80b97d51f973f1d580bc7849c608984c51b338b85715cf23682216947ced277 -->

```csharp
public static bool Inno.Core.Graphs.GraphEndpoint.operator !=(Inno.Core.Graphs.GraphEndpoint left, Inno.Core.Graphs.GraphEndpoint right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L111).

## `ToString`

<a id="api-2a396a7d90fb0fb5"></a>
<!-- api: M:Inno.Core.Graphs.GraphEndpoint.ToString 15f4a420e7ae4a48d67b0ae383db2f4ae1bb582a82f21ba2f4a7a486e4a28f0d -->

```csharp
public override string Inno.Core.Graphs.GraphEndpoint.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L111).

## `nodeId`

<a id="api-3c4532a6064fea9b"></a>
<!-- api: P:Inno.Core.Graphs.GraphEndpoint.nodeId 859ab53501bf178a861077c6d1dbd7dfb6a8ce3f10a11009294f5d8a55402818 -->

```csharp
public Inno.Core.Graphs.GraphNodeId Inno.Core.Graphs.GraphEndpoint.nodeId { get; }
```

Gets the owning node identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L133).

## `portId`

<a id="api-d06644a3165b96ef"></a>
<!-- api: P:Inno.Core.Graphs.GraphEndpoint.portId fe5fbd7cd63e9c1a57982ee5a343e9e13f32741c91a21f7dea5ff0c5980d74f4 -->

```csharp
public Inno.Core.Graphs.GraphPortId Inno.Core.Graphs.GraphEndpoint.portId { get; }
```

Gets the node-local port identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L138).
