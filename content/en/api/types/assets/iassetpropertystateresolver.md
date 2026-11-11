---
title: "IAssetPropertyStateResolver"
description: "Reference for IAssetPropertyStateResolver in Inno.Assets."
uid: api.inno.assets.7c484e70885ce01c
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `IAssetPropertyStateResolver`

This reference describes `IAssetPropertyStateResolver` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [```RestoreProperties``1```](#api-7d78fdc9f2c6891b) | Method |

## Type declaration

<a id="api-7c484e70885ce01c"></a>
<!-- api: T:Inno.Assets.IAssetPropertyStateResolver 0de2d1b37d62972ba66470c2881ecc838282d366d85ffb4b496326a3524772a6 -->

```csharp
public interface Inno.Assets.IAssetPropertyStateResolver
```

Restores nested neutral asset properties with the owning database's converter generation and references.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Serialization/IAssetPropertyStateResolver.cs#L9).

## ```RestoreProperties``1```

<a id="api-7d78fdc9f2c6891b"></a>
<!-- api: M:Inno.Assets.IAssetPropertyStateResolver.RestoreProperties``1(System.Guid,System.Byte[],``0) 8b598a4c8fac7568191d0e03244897f1942f3e7725d23938377b040742e02d57 -->

```csharp
void Inno.Assets.IAssetPropertyStateResolver.RestoreProperties<TValue>(System.Guid stableTypeId, byte[] propertyData, TValue target) where TValue : class, Inno.Core.Serialization.ISerializable
```

Restores a stable typed property payload into a caller-owned current-generation value.

**Type parameter `TValue`:** Declared native property contract.

**Parameter `stableTypeId`:** Stable identity captured with the properties.

**Parameter `propertyData`:** Native property bytes.

**Parameter `target`:** Detached destination. Referenced assets resolve in this owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Serialization/IAssetPropertyStateResolver.cs#L26).
