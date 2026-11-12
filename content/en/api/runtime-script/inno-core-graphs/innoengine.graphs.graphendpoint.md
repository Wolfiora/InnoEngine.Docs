---
title: "GraphEndpoint"
description: "Reference for GraphEndpoint in Inno.Core.Graphs."
uid: api.inno.core.graphs.runtime-script.7a29d84f31fcad1f
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: runtime-script
contracts:
  - project.inno-core-graphs#document-and-definition-contract
  - manual.scripting.use-script-api
---
# `GraphEndpoint`

This reference describes `GraphEndpoint` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Graphs.GraphEndpoint>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d68243b99ed96d8b) | Method |
| [`Equals`](#api-429badcb221d1e20) | Method |
| [`Equals`](#api-5062c50f2bb58c69) | Method |
| [`GetHashCode`](#api-deacd24a36a390b8) | Method |
| [`op_Equality`](#api-2ed22826e25ce41c) | Method |
| [`op_Inequality`](#api-3690f0f3f6ebc1be) | Method |
| [`ToString`](#api-bca9130bc8664ad1) | Method |
| [`nodeId`](#api-0a1c188e4fa8140d) | Property |
| [`portId`](#api-0a1aae1af333a304) | Property |

## Type declaration

<a id="api-7a29d84f31fcad1f"></a>
<!-- api: T:InnoEngine.Graphs.GraphEndpoint 4097c817f949eeba3c611fe6c73d379a689a17185bd23b17af1c34eed23fb94b -->

```csharp
public readonly struct InnoEngine.Graphs.GraphEndpoint : System.IEquatable<InnoEngine.Graphs.GraphEndpoint>
```

Identifies one endpoint of a graph edge.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L111).

## `#ctor`

<a id="api-d68243b99ed96d8b"></a>
<!-- api: M:InnoEngine.Graphs.GraphEndpoint.#ctor(InnoEngine.Graphs.GraphNodeId,InnoEngine.Graphs.GraphPortId) ccecdd8ee7249988b79f11b7123a2cb19e45dd0021b6913de79b729e79bb5cdd -->

```csharp
public InnoEngine.Graphs.GraphEndpoint.GraphEndpoint(InnoEngine.Graphs.GraphNodeId nodeId, InnoEngine.Graphs.GraphPortId portId)
```

Creates a graph edge endpoint.

**Parameter `nodeId`:** Owning node identifier.

**Parameter `portId`:** Port identifier within the node definition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L122).

## `Equals`

<a id="api-429badcb221d1e20"></a>
<!-- api: M:InnoEngine.Graphs.GraphEndpoint.Equals(InnoEngine.Graphs.GraphEndpoint) 2180204ff901eac9387cd826925307eeac840d078d2c3d486ff15ac268f54d5a -->

```csharp
public bool InnoEngine.Graphs.GraphEndpoint.Equals(InnoEngine.Graphs.GraphEndpoint other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L111).

## `Equals`

<a id="api-5062c50f2bb58c69"></a>
<!-- api: M:InnoEngine.Graphs.GraphEndpoint.Equals(System.Object) 595fa4c3a0cee3381a67ab625f53438c3c45b603f47b95c8e66d528ebfad43df -->

```csharp
public override bool InnoEngine.Graphs.GraphEndpoint.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L111).

## `GetHashCode`

<a id="api-deacd24a36a390b8"></a>
<!-- api: M:InnoEngine.Graphs.GraphEndpoint.GetHashCode f3aae9078afb8899a82b19b9e7cfc7ef6ecb153169edf6e8de2af5fca7a59369 -->

```csharp
public override int InnoEngine.Graphs.GraphEndpoint.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L111).

## `op_Equality`

<a id="api-2ed22826e25ce41c"></a>
<!-- api: M:InnoEngine.Graphs.GraphEndpoint.op_Equality(InnoEngine.Graphs.GraphEndpoint,InnoEngine.Graphs.GraphEndpoint) f04f9478928b9ac1b3590d2d8277c9c36d3908178634f3ee1120731c0d9d5b6c -->

```csharp
public static bool InnoEngine.Graphs.GraphEndpoint.operator ==(InnoEngine.Graphs.GraphEndpoint left, InnoEngine.Graphs.GraphEndpoint right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L111).

## `op_Inequality`

<a id="api-3690f0f3f6ebc1be"></a>
<!-- api: M:InnoEngine.Graphs.GraphEndpoint.op_Inequality(InnoEngine.Graphs.GraphEndpoint,InnoEngine.Graphs.GraphEndpoint) 07790a0ea9053988612f3816cd38d7eb1a56435d1842be9ec1de6d922de3bf6d -->

```csharp
public static bool InnoEngine.Graphs.GraphEndpoint.operator !=(InnoEngine.Graphs.GraphEndpoint left, InnoEngine.Graphs.GraphEndpoint right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L111).

## `ToString`

<a id="api-bca9130bc8664ad1"></a>
<!-- api: M:InnoEngine.Graphs.GraphEndpoint.ToString 971afc0451d2b6a7f5578054f33281df9f09ea54d81e7da861d69ee071a3720a -->

```csharp
public override string InnoEngine.Graphs.GraphEndpoint.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L111).

## `nodeId`

<a id="api-0a1c188e4fa8140d"></a>
<!-- api: P:InnoEngine.Graphs.GraphEndpoint.nodeId 6d82462ebe49bf266d31985ee8691d25e34468a8ed4222aa258d4aff0e4c9574 -->

```csharp
public InnoEngine.Graphs.GraphNodeId InnoEngine.Graphs.GraphEndpoint.nodeId { get; }
```

Gets the owning node identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L133).

## `portId`

<a id="api-0a1aae1af333a304"></a>
<!-- api: P:InnoEngine.Graphs.GraphEndpoint.portId 9f739a7380d10497e7590685da4e0c93b7748a67d77ce36fdc70902c994dad82 -->

```csharp
public InnoEngine.Graphs.GraphPortId InnoEngine.Graphs.GraphEndpoint.portId { get; }
```

Gets the node-local port identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L138).
