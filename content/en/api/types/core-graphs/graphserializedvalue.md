---
title: "GraphSerializedValue"
description: "Reference for GraphSerializedValue in Inno.Core.Graphs."
uid: api.inno.core.graphs.7997dcadb9640e98
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: source-clr
contracts:
  - project.inno-core-graphs#document-and-definition-contract
---
# `GraphSerializedValue`

This reference describes `GraphSerializedValue` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d643f9788f71359c) | Method |
| [`Clone`](#api-88fdcb2c0c879b60) | Method |
| [```Deserialize``1```](#api-331549476a0735d1) | Method |
| [```From``1```](#api-cd8f0e3def4e8b15) | Method |
| [`ToArray`](#api-4f90098ed8eb0436) | Method |
| [`data`](#api-3ee07e9c1fce66ba) | Property |

## Type declaration

<a id="api-7997dcadb9640e98"></a>
<!-- api: T:Inno.Core.Graphs.GraphSerializedValue 3575c2d3e5d00c494e158a27fc76f100e67a190153833e490cebf63330a1591a -->

```csharp
public sealed class Inno.Core.Graphs.GraphSerializedValue
```

Stores one graph property as backend-neutral Inno serialization bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphSerializedValue.cs#L10).

## `#ctor`

<a id="api-d643f9788f71359c"></a>
<!-- api: M:Inno.Core.Graphs.GraphSerializedValue.#ctor(System.ReadOnlySpan{System.Byte}) 0ba60f80c19c9428a3a6d2776fc603ea157f515260b979c2d48f6197371adfcc -->

```csharp
public Inno.Core.Graphs.GraphSerializedValue.GraphSerializedValue(System.ReadOnlySpan<byte> data)
```

Creates a graph value from one complete native serialization payload.

**Parameter `data`:** Bytes produced by the common Inno serialization pipeline.

**Throws `System.ArgumentException`:** Thrown when the payload is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphSerializedValue.cs#L23).

## `Clone`

<a id="api-88fdcb2c0c879b60"></a>
<!-- api: M:Inno.Core.Graphs.GraphSerializedValue.Clone d3a94b180f58225409d5c6fbe64b91d25bce8aa1bfdba6dd221ff4716b682712 -->

```csharp
public Inno.Core.Graphs.GraphSerializedValue Inno.Core.Graphs.GraphSerializedValue.Clone()
```

Creates an independent copy of the neutral value.

**Returns:** A graph value that shares no mutable byte storage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphSerializedValue.cs#L84).

## ```Deserialize``1```

<a id="api-331549476a0735d1"></a>
<!-- api: M:Inno.Core.Graphs.GraphSerializedValue.Deserialize``1(Inno.Core.Serialization.SerializationRegistry) 70f9ff53720ee1530369b0beb89ad1b55ef9da33220c3be207de18c3d9bad18f -->

```csharp
public T Inno.Core.Graphs.GraphSerializedValue.Deserialize<T>(Inno.Core.Serialization.SerializationRegistry serialization)
```

Deserializes this value through the common Inno serializer.

**Type parameter `T`:** Requested declared result type.

**Parameter `serialization`:** The serialization registry that owns the converter generation for this operation.

**Returns:** The restored neutral value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphSerializedValue.cs#L72).

## ```From``1```

<a id="api-cd8f0e3def4e8b15"></a>
<!-- api: M:Inno.Core.Graphs.GraphSerializedValue.From``1(``0,Inno.Core.Serialization.SerializationRegistry) 608469e809745dc02339c859de72884ad3a69fc57b9c4358691cdf100fa04993 -->

```csharp
public static Inno.Core.Graphs.GraphSerializedValue Inno.Core.Graphs.GraphSerializedValue.From<T>(T value, Inno.Core.Serialization.SerializationRegistry serialization)
```

Serializes a neutral graph property through the common Inno serializer.

**Type parameter `T`:** Declared serializable value type.

**Parameter `value`:** Value to serialize.

**Parameter `serialization`:** The serialization registry that owns the converter generation for this operation.

**Returns:** A detached graph value containing native serialization bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphSerializedValue.cs#L51).

## `ToArray`

<a id="api-4f90098ed8eb0436"></a>
<!-- api: M:Inno.Core.Graphs.GraphSerializedValue.ToArray 83626da216d59591e6e35be75a84e84572cc600a9e79cabe73fa9b28333a4638 -->

```csharp
public byte[] Inno.Core.Graphs.GraphSerializedValue.ToArray()
```

Copies the native payload for persistence or reload-safe history.

**Returns:** A new byte array containing the complete native value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphSerializedValue.cs#L92).

## `data`

<a id="api-3ee07e9c1fce66ba"></a>
<!-- api: P:Inno.Core.Graphs.GraphSerializedValue.data e5ba5c9238cab2e6a1733c619e2566bfb24aee485b7244a473232ddb4cda265f -->

```csharp
public System.ReadOnlyMemory<byte> Inno.Core.Graphs.GraphSerializedValue.data { get; }
```

Gets an immutable view of the native serialized value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphSerializedValue.cs#L33).
