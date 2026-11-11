---
title: "AssetSerializationServices"
description: "Reference for AssetSerializationServices in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.27787cb558bdcc79
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetSerializationServices`

This reference describes `AssetSerializationServices` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [```CaptureProperties``1```](#api-4f4472097d035fc7) | Method |
| [```Deserialize``1```](#api-b75cb1f9bf72bb37) | Method |
| [```GetStableTypeId``1```](#api-4d66d30b5f3a9b34) | Method |
| [```Serialize``1```](#api-10968cb12e22f0d5) | Method |

## Type declaration

<a id="api-27787cb558bdcc79"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetSerializationServices a722aea47c9faf7c7112f7b5da18f27c806285148f9d5f866e039bb42e6924db -->

```csharp
public sealed class Inno.Assets.Pipeline.AssetSerializationServices
```

Provides generation-bound structured serialization without exposing host registries to importer extensions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetSerializationServices.cs#L12).

## ```CaptureProperties``1```

<a id="api-4f4472097d035fc7"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSerializationServices.CaptureProperties``1(``0) 6a124b0715dccc3ac97d47651c15f1a58d3c4118afbe46fe72f20e645c2c3b9f -->

```csharp
public Inno.Assets.AssetPropertySnapshot Inno.Assets.Pipeline.AssetSerializationServices.CaptureProperties<TValue>(TValue value) where TValue : class, Inno.Core.Serialization.ISerializable
```

Captures typed properties and their references as one neutral, owner-independent value.

**Type parameter `TValue`:** Current serializable settings contract.

**Parameter `value`:** Current generation settings object, never retained.

**Returns:** Frozen native properties with exact stable type identity and collected direct dependencies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetSerializationServices.cs#L69).

## ```Deserialize``1```

<a id="api-b75cb1f9bf72bb37"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSerializationServices.Deserialize``1(System.ReadOnlySpan{System.Byte}) b28e0935a3308eeb2ee3db50bd2092c06b9f59a7d6cf30d3578f4ddf497f023a -->

```csharp
public TValue Inno.Assets.Pipeline.AssetSerializationServices.Deserialize<TValue>(System.ReadOnlySpan<byte> bytes) where TValue : class, Inno.Core.Serialization.ISerializable
```

Deserializes one structured value against the active importer candidate generation.

**Type parameter `TValue`:** The serializable value contract.

**Parameter `bytes`:** Complete structured bytes produced by the common serialization system.

**Returns:** A restored value owned by the caller.

**Throws `System.InvalidOperationException`:** Thrown when the value contains an asset reference but no candidate resolver is available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetSerializationServices.cs#L126).

## ```GetStableTypeId``1```

<a id="api-4d66d30b5f3a9b34"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSerializationServices.GetStableTypeId``1 c2ffc598a8f5bdd1428a7f2929231e460d66019acdddb550cde503027e6bef88 -->

```csharp
public System.Guid Inno.Assets.Pipeline.AssetSerializationServices.GetStableTypeId<TValue>()
```

Resolves the stable persistent type identity of a registered serializable type.

**Type parameter `TValue`:** The registered type whose stable identity is required.

**Returns:** The stable type identifier owned by the active extension generation.

**Throws `System.InvalidOperationException`:** Thrown when `TValue` has no stable type registration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetSerializationServices.cs#L55).

## ```Serialize``1```

<a id="api-10968cb12e22f0d5"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSerializationServices.Serialize``1(``0) c4630c473ff4f2950772f539ecc97445b730ddbf39e07df0409de17b21656842 -->

```csharp
public byte[] Inno.Assets.Pipeline.AssetSerializationServices.Serialize<TValue>(TValue value) where TValue : class, Inno.Core.Serialization.ISerializable
```

Serializes one structured value and declares every encountered asset reference as a runtime dependency.

**Type parameter `TValue`:** The serializable value contract.

**Parameter `value`:** The value to serialize through the active converter generation.

**Returns:** Deterministic structured bytes owned by the caller.

**Throws `System.ArgumentNullException`:** Thrown when `value` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetSerializationServices.cs#L96).
