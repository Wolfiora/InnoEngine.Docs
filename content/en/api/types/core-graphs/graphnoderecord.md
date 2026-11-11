---
title: "GraphNodeRecord"
description: "Reference for GraphNodeRecord in Inno.Core.Graphs."
uid: api.inno.core.graphs.ce1a8fa54b6e05bc
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: source-clr
contracts:
  - project.inno-core-graphs#document-and-definition-contract
---
# `GraphNodeRecord`

This reference describes `GraphNodeRecord` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-508ddcd2e69a0c10) | Method |
| [`RemoveValue`](#api-9f7492bd9accabda) | Method |
| [`SetValue`](#api-519d65e986f48ce1) | Method |
| [`TryGetValue`](#api-72c82aa853031547) | Method |
| [`definitionId`](#api-3d33f88c9b7c5e53) | Property |
| [`id`](#api-a703485c5790a5ed) | Property |
| [`position`](#api-9e0464bd248615ce) | Property |
| [`values`](#api-4aaa8a26ef48761b) | Property |

## Type declaration

<a id="api-ce1a8fa54b6e05bc"></a>
<!-- api: T:Inno.Core.Graphs.GraphNodeRecord a694321bca35b363c2b89416363da703c0f47e0ebb1ad6d6c3f00716d3c230cd -->

```csharp
public sealed class Inno.Core.Graphs.GraphNodeRecord
```

Stores one node without retaining a CLR type or runtime extension instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L10).

## `#ctor`

<a id="api-508ddcd2e69a0c10"></a>
<!-- api: M:Inno.Core.Graphs.GraphNodeRecord.#ctor(Inno.Core.Graphs.GraphNodeId,System.String) f616a87314fbeae143f54c63745253f7e5a6bd6cd2e3ca664e4192a45c035b2a -->

```csharp
public Inno.Core.Graphs.GraphNodeRecord.GraphNodeRecord(Inno.Core.Graphs.GraphNodeId id, string definitionId)
```

Creates a graph node record.

**Parameter `id`:** Stable identifier within the document.

**Parameter `definitionId`:** Stable node definition identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L24).

## `RemoveValue`

<a id="api-9f7492bd9accabda"></a>
<!-- api: M:Inno.Core.Graphs.GraphNodeRecord.RemoveValue(System.String) 2b51dc8f9612ac830a0c0c7761f6267a018390ac07a2cb0e943459201d3d5827 -->

```csharp
public bool Inno.Core.Graphs.GraphNodeRecord.RemoveValue(string propertyId)
```

Removes a neutral serialized property value.

**Parameter `propertyId`:** Stable property identifier.

**Returns:** `true` when a property was removed; otherwise `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L101).

## `SetValue`

<a id="api-519d65e986f48ce1"></a>
<!-- api: M:Inno.Core.Graphs.GraphNodeRecord.SetValue(System.String,Inno.Core.Graphs.GraphSerializedValue) dc8c46fed0836a3c4d6457ae2f2503c330c42d29f365acd6299435577794a8ee -->

```csharp
public void Inno.Core.Graphs.GraphNodeRecord.SetValue(string propertyId, Inno.Core.Graphs.GraphSerializedValue value)
```

Creates or replaces a neutral serialized property value.

**Parameter `propertyId`:** Stable property identifier.

**Parameter `value`:** Serialized value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L63).

## `TryGetValue`

<a id="api-72c82aa853031547"></a>
<!-- api: M:Inno.Core.Graphs.GraphNodeRecord.TryGetValue(System.String,Inno.Core.Graphs.GraphSerializedValue@) d34a6f9f918cd2aa683795e4ec53d02c692ddf449e61d84d99d5bda463f41eed -->

```csharp
public bool Inno.Core.Graphs.GraphNodeRecord.TryGetValue(string propertyId, out Inno.Core.Graphs.GraphSerializedValue? value)
```

Tries to read a neutral serialized property value.

**Parameter `propertyId`:** Stable property identifier.

**Parameter `value`:** Receives the value when present.

**Returns:** `true` when the property exists; otherwise `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L84).

## `definitionId`

<a id="api-3d33f88c9b7c5e53"></a>
<!-- api: P:Inno.Core.Graphs.GraphNodeRecord.definitionId a8eb40e0673423f315de546445145f2141dcac7a9e554c8ace91044f86271623 -->

```csharp
public string Inno.Core.Graphs.GraphNodeRecord.definitionId { get; }
```

Gets the stable node definition identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L42).

## `id`

<a id="api-a703485c5790a5ed"></a>
<!-- api: P:Inno.Core.Graphs.GraphNodeRecord.id 46db1dcd1ba7fd730c550cee27d16211e2d7398df5010e3c25303043b60c4998 -->

```csharp
public Inno.Core.Graphs.GraphNodeId Inno.Core.Graphs.GraphNodeRecord.id { get; }
```

Gets the stable node identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L37).

## `position`

<a id="api-9e0464bd248615ce"></a>
<!-- api: P:Inno.Core.Graphs.GraphNodeRecord.position cb4233843dd87dfa7c0ec90e54dab552786ea616ef11f02ba244056055908755 -->

```csharp
public Inno.Core.Graphs.GraphPosition Inno.Core.Graphs.GraphNodeRecord.position { get; set; }
```

Gets or sets the graph-space node position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L47).

## `values`

<a id="api-4aaa8a26ef48761b"></a>
<!-- api: P:Inno.Core.Graphs.GraphNodeRecord.values d5f21b9991fb349b54aa6909f6fdae62d706a9351c8248598d2978a08fa76d23 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Core.Graphs.GraphSerializedValue> Inno.Core.Graphs.GraphNodeRecord.values { get; }
```

Gets neutral serialized property values keyed by stable property identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L52).
