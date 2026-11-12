---
title: "AssetSerializationServices"
description: "Reference for AssetSerializationServices in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.editor-script.5ac4064463cfb1ea
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: editor-script
contracts:
  - project.inno-assets-pipeline
  - manual.scripting.use-script-api
---
# `AssetSerializationServices`

This reference describes `AssetSerializationServices` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-093564a2280a0735) | Method |
| [```CaptureProperties``1```](#api-882516e2f63b62dd) | Method |
| [```Deserialize``1```](#api-89eb4c8065dcd3a0) | Method |
| [```GetStableTypeId``1```](#api-ce050752bc37a44c) | Method |
| [```Serialize``1```](#api-23cc8c82324ec45d) | Method |

## Type declaration

<a id="api-5ac4064463cfb1ea"></a>
<!-- api: T:InnoEditor.Assets.AssetSerializationServices 05df7ed6f0c7cd005dcf3a15b74ba35bb77f0bd31e94cc1d60a0c945f8e1b156 -->

```csharp
public sealed class InnoEditor.Assets.AssetSerializationServices
```

Provides generation-bound structured serialization without exposing host registries to importer extensions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetSerializationServices.cs#L12).

## `#ctor`

<a id="api-093564a2280a0735"></a>
<!-- api: M:InnoEditor.Assets.AssetSerializationServices.#ctor e7e7457afa87ac65aea989204f5c519aafa673e228d6d34913ae15f0ace7b98b -->

```csharp
public InnoEditor.Assets.AssetSerializationServices.AssetSerializationServices()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetSerializationServices.cs#L12).

## ```CaptureProperties``1```

<a id="api-882516e2f63b62dd"></a>
<!-- api: M:InnoEditor.Assets.AssetSerializationServices.CaptureProperties``1(``0) 5c6f142f517c9211a6fa97eedb2875cc6787d27e5db921e6e4b8b6b9e2cb5143 -->

```csharp
public InnoEngine.Assets.AssetPropertySnapshot InnoEditor.Assets.AssetSerializationServices.CaptureProperties<TValue>(TValue value) where TValue : class, InnoEngine.Serialization.ISerializable
```

Captures typed properties and their references as one neutral, owner-independent value.

**Type parameter `TValue`:** Current serializable settings contract.

**Parameter `value`:** Current generation settings object, never retained.

**Returns:** Frozen native properties with exact stable type identity and collected direct dependencies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetSerializationServices.cs#L69).

## ```Deserialize``1```

<a id="api-89eb4c8065dcd3a0"></a>
<!-- api: M:InnoEditor.Assets.AssetSerializationServices.Deserialize``1(System.ReadOnlySpan{System.Byte}) 2260ca25553188c440616d17e5f49e39935e644de51d97ce4caa7c05e4195bf7 -->

```csharp
public TValue InnoEditor.Assets.AssetSerializationServices.Deserialize<TValue>(System.ReadOnlySpan<byte> bytes) where TValue : class, InnoEngine.Serialization.ISerializable
```

Deserializes one structured value against the active importer candidate generation.

**Type parameter `TValue`:** The serializable value contract.

**Parameter `bytes`:** Complete structured bytes produced by the common serialization system.

**Returns:** A restored value owned by the caller.

**Throws `System.InvalidOperationException`:** Thrown when the value contains an asset reference but no candidate resolver is available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetSerializationServices.cs#L126).

## ```GetStableTypeId``1```

<a id="api-ce050752bc37a44c"></a>
<!-- api: M:InnoEditor.Assets.AssetSerializationServices.GetStableTypeId``1 389fbebc8fe65a9c2e9d24e097c0461b0c47284789291ba10176644121b86bc7 -->

```csharp
public System.Guid InnoEditor.Assets.AssetSerializationServices.GetStableTypeId<TValue>()
```

Resolves the stable persistent type identity of a registered serializable type.

**Type parameter `TValue`:** The registered type whose stable identity is required.

**Returns:** The stable type identifier owned by the active extension generation.

**Throws `System.InvalidOperationException`:** Thrown when `TValue` has no stable type registration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetSerializationServices.cs#L55).

## ```Serialize``1```

<a id="api-23cc8c82324ec45d"></a>
<!-- api: M:InnoEditor.Assets.AssetSerializationServices.Serialize``1(``0) f82769e7408ad4af16e7558323d399840c0bd6789f3e7aa0e54693607cfa7645 -->

```csharp
public byte[] InnoEditor.Assets.AssetSerializationServices.Serialize<TValue>(TValue value) where TValue : class, InnoEngine.Serialization.ISerializable
```

Serializes one structured value and declares every encountered asset reference as a runtime dependency.

**Type parameter `TValue`:** The serializable value contract.

**Parameter `value`:** The value to serialize through the active converter generation.

**Returns:** Deterministic structured bytes owned by the caller.

**Throws `System.ArgumentNullException`:** Thrown when `value` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetSerializationServices.cs#L96).
