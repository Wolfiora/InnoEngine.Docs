---
title: "IAssetReferenceResolver"
description: "Reference for IAssetReferenceResolver in Inno.Assets."
uid: api.inno.assets.93723d32e186b90c
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `IAssetReferenceResolver`

This reference describes `IAssetReferenceResolver` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Direct interfaces:** `Inno.References.IReferenceResolver`.

## Members

| Member | Kind |
| --- | --- |
| [`Resolve`](#api-e90e7b853c27aa77) | Method |

## Type declaration

<a id="api-93723d32e186b90c"></a>
<!-- api: T:Inno.Assets.IAssetReferenceResolver a8a757a866328c886e772e76756fd4a599b54de9c40a2dbce47ccf1c82e7c527 -->

```csharp
public interface Inno.Assets.IAssetReferenceResolver : Inno.References.IReferenceResolver
```

Resolves persistent asset references against one isolated asset database generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Serialization/IAssetReferenceResolver.cs#L13).

## `Resolve`

<a id="api-e90e7b853c27aa77"></a>
<!-- api: M:Inno.Assets.IAssetReferenceResolver.Resolve(System.Guid,System.Guid,System.String,System.Type,System.String) bc2cc118bbd52adf04fd6887910decfaf651b69d9b2dd33478d895e7a2dc17e1 -->

```csharp
Inno.Assets.AssetObject Inno.Assets.IAssetReferenceResolver.Resolve(System.Guid persistentId, System.Guid stableTypeId, string lastKnownPath, System.Type expectedType, string propertyPath)
```

Resolves one serialized asset reference to the canonical object owned by this resolver.

**Parameter `persistentId`:** The persistent asset identity encoded in the reference.

**Parameter `stableTypeId`:** The stable concrete asset type identity encoded in the reference.

**Parameter `lastKnownPath`:** The optional logical path retained for diagnostics and authoring recovery.

**Parameter `expectedType`:** The declared property type that the resolved object must satisfy.

**Parameter `propertyPath`:** The serialization property path used when reporting resolution failures.

**Returns:** The canonical compatible asset owned by this resolver's generation.

**Throws `System.InvalidOperationException`:** Thrown when the reference cannot be resolved to a compatible asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Serialization/IAssetReferenceResolver.cs#L113).
