---
title: "GraphPortDefinition"
description: "Reference for GraphPortDefinition in Inno.Core.Graphs."
uid: api.inno.core.graphs.4c8e935f53afde32
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: source-clr
contracts:
  - project.inno-core-graphs#document-and-definition-contract
---
# `GraphPortDefinition`

This reference describes `GraphPortDefinition` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-264a84c4a1047ecb) | Method |
| [`capacity`](#api-51309eeb22998819) | Property |
| [`direction`](#api-e9735356cc7cbcdf) | Property |
| [`displayName`](#api-ce4a4182fa42810b) | Property |
| [`id`](#api-869b0c1c13981752) | Property |
| [`required`](#api-d5747bdf90427680) | Property |
| [`valueTypeId`](#api-1596413b542da1b4) | Property |

## Type declaration

<a id="api-4c8e935f53afde32"></a>
<!-- api: T:Inno.Core.Graphs.GraphPortDefinition 6e8b1082fbe99996c83e0935e17768a5beebbd0ebdd2626c7f864ea4c2e3de49 -->

```csharp
public sealed class Inno.Core.Graphs.GraphPortDefinition
```

Describes one dynamically or statically resolved node port.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L39).

## `#ctor`

<a id="api-264a84c4a1047ecb"></a>
<!-- api: M:Inno.Core.Graphs.GraphPortDefinition.#ctor(Inno.Core.Graphs.GraphPortId,System.String,System.String,Inno.Core.Graphs.GraphPortDirection,Inno.Core.Graphs.GraphPortCapacity,System.Boolean) d0b8dabb0ad8a905d3c19253e655bb4ce71277713c3298be11f325c44c31820e -->

```csharp
public Inno.Core.Graphs.GraphPortDefinition.GraphPortDefinition(Inno.Core.Graphs.GraphPortId id, string displayName, string valueTypeId, Inno.Core.Graphs.GraphPortDirection direction, Inno.Core.Graphs.GraphPortCapacity capacity = Inno.Core.Graphs.GraphPortCapacity.Single, bool required = false)
```

Creates a graph port definition.

**Parameter `id`:** Stable node-local port identifier.

**Parameter `displayName`:** Artist-facing display name.

**Parameter `valueTypeId`:** Stable value type identifier.

**Parameter `direction`:** Value-flow direction.

**Parameter `capacity`:** Allowed edge capacity.

**Parameter `required`:** Whether an input must be connected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L62).

## `capacity`

<a id="api-51309eeb22998819"></a>
<!-- api: P:Inno.Core.Graphs.GraphPortDefinition.capacity 15319b660a0cdc18d656627a4667b2e52423c8c76aa357c90dbef8f33aad2802 -->

```csharp
public Inno.Core.Graphs.GraphPortCapacity Inno.Core.Graphs.GraphPortDefinition.capacity { get; }
```

Gets the allowed edge capacity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L103).

## `direction`

<a id="api-e9735356cc7cbcdf"></a>
<!-- api: P:Inno.Core.Graphs.GraphPortDefinition.direction d119b9239308b207e90573160056c2267966555e292977eb8b2095cb495446b8 -->

```csharp
public Inno.Core.Graphs.GraphPortDirection Inno.Core.Graphs.GraphPortDefinition.direction { get; }
```

Gets the value-flow direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L98).

## `displayName`

<a id="api-ce4a4182fa42810b"></a>
<!-- api: P:Inno.Core.Graphs.GraphPortDefinition.displayName 5c3f01422fe1b19b622c2efe6c4bb40e4ddb5bfe68593907497985ae0f981164 -->

```csharp
public string Inno.Core.Graphs.GraphPortDefinition.displayName { get; }
```

Gets the artist-facing display name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L88).

## `id`

<a id="api-869b0c1c13981752"></a>
<!-- api: P:Inno.Core.Graphs.GraphPortDefinition.id 9a5d8405d6129104e002cae87ad30d7dc209cfea6c0ebb2d0cf51b8b4368e4ca -->

```csharp
public Inno.Core.Graphs.GraphPortId Inno.Core.Graphs.GraphPortDefinition.id { get; }
```

Gets the stable node-local port identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L83).

## `required`

<a id="api-d5747bdf90427680"></a>
<!-- api: P:Inno.Core.Graphs.GraphPortDefinition.required 887a54713cbbf302ced90b7263e70620d9b610dbd88e8abc386eed3708b64107 -->

```csharp
public bool Inno.Core.Graphs.GraphPortDefinition.required { get; }
```

Gets whether an input must be connected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L108).

## `valueTypeId`

<a id="api-1596413b542da1b4"></a>
<!-- api: P:Inno.Core.Graphs.GraphPortDefinition.valueTypeId d98b043bec5e9e4557166f020d8c9db1bfdcd615438ef11c62754073b0101014 -->

```csharp
public string Inno.Core.Graphs.GraphPortDefinition.valueTypeId { get; }
```

Gets the stable value type identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L93).
