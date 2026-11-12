---
title: "GraphSerializedValue"
description: "Reference for GraphSerializedValue in Inno.Core.Graphs."
uid: api.inno.core.graphs.runtime-script.9cb32122c5dbf936
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: runtime-script
contracts:
  - project.inno-core-graphs#document-and-definition-contract
  - manual.scripting.use-script-api
---
# `GraphSerializedValue`

This reference describes `GraphSerializedValue` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b7b0760d7bc25231) | Method |
| [`Clone`](#api-a97bc1e52772f16d) | Method |
| [`ToArray`](#api-a9ae4692fcdd713a) | Method |
| [`data`](#api-de3b3c8bc72fb262) | Property |

## Type declaration

<a id="api-9cb32122c5dbf936"></a>
<!-- api: T:InnoEngine.Graphs.GraphSerializedValue ef4b7c3d390f6a2c37f7b2d18afbd00f58a05c73dc22d43a71efa4fb1d26c585 -->

```csharp
public sealed class InnoEngine.Graphs.GraphSerializedValue
```

Stores one graph property as backend-neutral Inno serialization bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphSerializedValue.cs#L10).

## `#ctor`

<a id="api-b7b0760d7bc25231"></a>
<!-- api: M:InnoEngine.Graphs.GraphSerializedValue.#ctor(System.ReadOnlySpan{System.Byte}) cbe5392d472088801060cefb2d79d0c2285472cbc3c8f5b7ca8d391150986d06 -->

```csharp
public InnoEngine.Graphs.GraphSerializedValue.GraphSerializedValue(System.ReadOnlySpan<byte> data)
```

Creates a graph value from one complete native serialization payload.

**Parameter `data`:** Bytes produced by the common Inno serialization pipeline.

**Throws `System.ArgumentException`:** Thrown when the payload is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphSerializedValue.cs#L23).

## `Clone`

<a id="api-a97bc1e52772f16d"></a>
<!-- api: M:InnoEngine.Graphs.GraphSerializedValue.Clone f286c801e1314b62806e6023789f4dd2e13aa9e659ad15a8155ecde5d7c1e22d -->

```csharp
public InnoEngine.Graphs.GraphSerializedValue InnoEngine.Graphs.GraphSerializedValue.Clone()
```

Creates an independent copy of the neutral value.

**Returns:** A graph value that shares no mutable byte storage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphSerializedValue.cs#L84).

## `ToArray`

<a id="api-a9ae4692fcdd713a"></a>
<!-- api: M:InnoEngine.Graphs.GraphSerializedValue.ToArray 701b8b8bdfbc11af35118709d04091615ef18e143ff3f5a395c81e8a75192367 -->

```csharp
public byte[] InnoEngine.Graphs.GraphSerializedValue.ToArray()
```

Copies the native payload for persistence or reload-safe history.

**Returns:** A new byte array containing the complete native value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphSerializedValue.cs#L92).

## `data`

<a id="api-de3b3c8bc72fb262"></a>
<!-- api: P:InnoEngine.Graphs.GraphSerializedValue.data cadbdb9a4fa6c8779fe3c181dd4e13ffeca78c603a1f9d7f1e48205defbdad1b -->

```csharp
public System.ReadOnlyMemory<byte> InnoEngine.Graphs.GraphSerializedValue.data { get; }
```

Gets an immutable view of the native serialized value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphSerializedValue.cs#L33).
