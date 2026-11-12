---
title: "GraphPortDefinition"
description: "Reference for GraphPortDefinition in Inno.Core.Graphs."
uid: api.inno.core.graphs.runtime-script.2ab13d42ea9d6c50
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: runtime-script
contracts:
  - project.inno-core-graphs#document-and-definition-contract
  - manual.scripting.use-script-api
---
# `GraphPortDefinition`

This reference describes `GraphPortDefinition` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-dae9f09d39a0646b) | Method |
| [`capacity`](#api-27d6cbac03944056) | Property |
| [`direction`](#api-0a27de888c2cd74f) | Property |
| [`displayName`](#api-61f9783f349361f6) | Property |
| [`id`](#api-83ce3bae999c3c54) | Property |
| [`required`](#api-c8cc9ae6f7c744a7) | Property |
| [`valueTypeId`](#api-1e67260aa45246c5) | Property |

## Type declaration

<a id="api-2ab13d42ea9d6c50"></a>
<!-- api: T:InnoEngine.Graphs.GraphPortDefinition 08a4488a4a8342a11c0013cd0305e740607863f65d55451bc1b31931e5facd43 -->

```csharp
public sealed class InnoEngine.Graphs.GraphPortDefinition
```

Describes one dynamically or statically resolved node port.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L39).

## `#ctor`

<a id="api-dae9f09d39a0646b"></a>
<!-- api: M:InnoEngine.Graphs.GraphPortDefinition.#ctor(InnoEngine.Graphs.GraphPortId,System.String,System.String,InnoEngine.Graphs.GraphPortDirection,InnoEngine.Graphs.GraphPortCapacity,System.Boolean) d14e64045465326246ce2b08c18f5614bb7b407ed23e2c756e102e7c115ef454 -->

```csharp
public InnoEngine.Graphs.GraphPortDefinition.GraphPortDefinition(InnoEngine.Graphs.GraphPortId id, string displayName, string valueTypeId, InnoEngine.Graphs.GraphPortDirection direction, InnoEngine.Graphs.GraphPortCapacity capacity = InnoEngine.Graphs.GraphPortCapacity.Single, bool required = false)
```

Creates a graph port definition.

**Parameter `id`:** Stable node-local port identifier.

**Parameter `displayName`:** Artist-facing display name.

**Parameter `valueTypeId`:** Stable value type identifier.

**Parameter `direction`:** Value-flow direction.

**Parameter `capacity`:** Allowed edge capacity.

**Parameter `required`:** Whether an input must be connected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L62).

## `capacity`

<a id="api-27d6cbac03944056"></a>
<!-- api: P:InnoEngine.Graphs.GraphPortDefinition.capacity 90f763dbd300ce3769f0f9713497e2b953b980ade53068699cb592f194151c93 -->

```csharp
public InnoEngine.Graphs.GraphPortCapacity InnoEngine.Graphs.GraphPortDefinition.capacity { get; }
```

Gets the allowed edge capacity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L103).

## `direction`

<a id="api-0a27de888c2cd74f"></a>
<!-- api: P:InnoEngine.Graphs.GraphPortDefinition.direction 7ab9c42fb69e92648d216895bde445435a2c44f403f46bf1a97f589a61111dee -->

```csharp
public InnoEngine.Graphs.GraphPortDirection InnoEngine.Graphs.GraphPortDefinition.direction { get; }
```

Gets the value-flow direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L98).

## `displayName`

<a id="api-61f9783f349361f6"></a>
<!-- api: P:InnoEngine.Graphs.GraphPortDefinition.displayName 264c675825d772a964c7bde96ab7364319dabef667e0b098afe0a36bdda2f474 -->

```csharp
public string InnoEngine.Graphs.GraphPortDefinition.displayName { get; }
```

Gets the artist-facing display name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L88).

## `id`

<a id="api-83ce3bae999c3c54"></a>
<!-- api: P:InnoEngine.Graphs.GraphPortDefinition.id c56655210d062e54add47fa4bb2eb5408599d0e2f4f837eeba304255dd8afa61 -->

```csharp
public InnoEngine.Graphs.GraphPortId InnoEngine.Graphs.GraphPortDefinition.id { get; }
```

Gets the stable node-local port identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L83).

## `required`

<a id="api-c8cc9ae6f7c744a7"></a>
<!-- api: P:InnoEngine.Graphs.GraphPortDefinition.required 42ca186665b4fff7d898776471aa302ae4e606686d00efedf78743b2987e0d41 -->

```csharp
public bool InnoEngine.Graphs.GraphPortDefinition.required { get; }
```

Gets whether an input must be connected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L108).

## `valueTypeId`

<a id="api-1e67260aa45246c5"></a>
<!-- api: P:InnoEngine.Graphs.GraphPortDefinition.valueTypeId e78efb3997a70944aeff478a64298339a1e79ba702aac9400a411279d989657a -->

```csharp
public string InnoEngine.Graphs.GraphPortDefinition.valueTypeId { get; }
```

Gets the stable value type identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L93).
