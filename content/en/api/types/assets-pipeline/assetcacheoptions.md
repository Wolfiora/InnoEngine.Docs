---
title: "AssetCacheOptions"
description: "Reference for AssetCacheOptions in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.97c524f042d614d8
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetCacheOptions`

This reference describes `AssetCacheOptions` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`CreateDefault`](#api-282d08caa71f0f2e) | Method |
| [`garbageCollectionGracePeriod`](#api-ea3f1795d72a5ef2) | Property |
| [`maximumSizeBytes`](#api-4538a6175252c65a) | Property |

## Type declaration

<a id="api-97c524f042d614d8"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetCacheOptions a292125ba53e61e3368990125650ad3293a47b42d61a1fafee1ab572b386d06c -->

```csharp
public readonly struct Inno.Assets.Pipeline.AssetCacheOptions
```

Controls cleanup of rebuildable asset database data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetCacheOptions.cs#L8).

## `CreateDefault`

<a id="api-282d08caa71f0f2e"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetCacheOptions.CreateDefault 52ded4ee6b55ea35f1f7d315029c4fc46f672998eeaff70736fd1874938c3b78 -->

```csharp
public static Inno.Assets.Pipeline.AssetCacheOptions Inno.Assets.Pipeline.AssetCacheOptions.CreateDefault()
```

Creates the default cache policy.

**Returns:** The default cache options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetCacheOptions.cs#L26).

## `garbageCollectionGracePeriod`

<a id="api-ea3f1795d72a5ef2"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetCacheOptions.garbageCollectionGracePeriod 7c6e0dcf924518a08b004c933a55d6e338f8460c424b0f935ae0ad8ed346b9ad -->

```csharp
public System.TimeSpan Inno.Assets.Pipeline.AssetCacheOptions.garbageCollectionGracePeriod { get; init; }
```

Gets the minimum age of an unreachable artifact before it can be collected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetCacheOptions.cs#L18).

## `maximumSizeBytes`

<a id="api-4538a6175252c65a"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetCacheOptions.maximumSizeBytes 0f50884804fd0410ddcf8d5e0f2c338d4de372ed9f6d19658b48d9fa2c8b7a7d -->

```csharp
public long Inno.Assets.Pipeline.AssetCacheOptions.maximumSizeBytes { get; init; }
```

Gets the maximum artifact cache size in bytes, or zero for no size limit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetCacheOptions.cs#L13).
