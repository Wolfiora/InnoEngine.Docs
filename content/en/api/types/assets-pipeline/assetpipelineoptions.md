---
title: "AssetPipelineOptions"
description: "Reference for AssetPipelineOptions in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.0fe11450f3d464af
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetPipelineOptions`

This reference describes `AssetPipelineOptions` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Create`](#api-e1ab4b369a5d107a) | Method |
| [`assetRoot`](#api-34c6567db2f1d1a5) | Property |
| [`cacheOptions`](#api-4d1d24f7f1463e92) | Property |
| [`deferUnavailableExtensions`](#api-0137d9e30f7b6265) | Property |
| [`enableFileSystemWatcher`](#api-931e35923b59ee09) | Property |
| [`fileWatcherFlushDelayMs`](#api-87de0f60ac22400a) | Property |
| [`libraryRoot`](#api-22bbb70c6e91547b) | Property |
| [`mode`](#api-c3466c561aa275d5) | Property |
| [`sourceMounts`](#api-c5ec47c1aac18257) | Property |
| [`sourcePolicy`](#api-58c04db0f106b397) | Property |

## Type declaration

<a id="api-0fe11450f3d464af"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetPipelineOptions ac3b979ec0d6f8396a669899bcac30dcec9ade8ca8c1bc300e7488e5840c79ca -->

```csharp
public readonly struct Inno.Assets.Pipeline.AssetPipelineOptions
```

Initialization options for `Inno.Assets.Pipeline.AssetPipeline`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipelineOptions.cs#L11).

## `Create`

<a id="api-e1ab4b369a5d107a"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetPipelineOptions.Create(System.String,System.String) 4837c150c0c174ebe193802fd0939ccf1efae9e37a0778edb72b4703408f0c34 -->

```csharp
public static Inno.Assets.Pipeline.AssetPipelineOptions Inno.Assets.Pipeline.AssetPipelineOptions.Create(string assetRoot, string libraryRoot)
```

Creates options with sensible defaults for most projects.

**Parameter `assetRoot`:** Source assets root folder.

**Parameter `libraryRoot`:** Rebuildable Library folder.

**Returns:** Initialized options value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipelineOptions.cs#L73).

## `assetRoot`

<a id="api-34c6567db2f1d1a5"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetPipelineOptions.assetRoot 000b0b1cf160e19d9a3efde259d890b0eb78b146f3dba3e27bdb276c8ec7fa97 -->

```csharp
public string Inno.Assets.Pipeline.AssetPipelineOptions.assetRoot { get; init; }
```

Gets the root folder containing source assets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipelineOptions.cs#L29).

## `cacheOptions`

<a id="api-4d1d24f7f1463e92"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetPipelineOptions.cacheOptions c055b3b7d3157a9ecd9dc79caf6d364f48cd84a71e0b500803f38b01d056f9a8 -->

```csharp
public Inno.Assets.Pipeline.AssetCacheOptions Inno.Assets.Pipeline.AssetPipelineOptions.cacheOptions { get; init; }
```

Gets the rebuildable cache policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipelineOptions.cs#L59).

## `deferUnavailableExtensions`

<a id="api-0137d9e30f7b6265"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetPipelineOptions.deferUnavailableExtensions 0fd61ba6b3f227f22edd97f407b03c4d6f2608ef294e50f227289e98fdca6a0c -->

```csharp
public bool Inno.Assets.Pipeline.AssetPipelineOptions.deferUnavailableExtensions { get; init; }
```

Gets whether the composition host must still publish its initial authoring extensions.

**Constraints:** Only missing extensions are deferred. The host must call AssetPipeline.CompleteExtensionDiscovery after activation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipelineOptions.cs#L19).

## `enableFileSystemWatcher`

<a id="api-931e35923b59ee09"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetPipelineOptions.enableFileSystemWatcher 2f3e806a158ed246a3a69c22ba61de16595bd440a2af983cdcdc166269bbc2f1 -->

```csharp
public bool Inno.Assets.Pipeline.AssetPipelineOptions.enableFileSystemWatcher { get; init; }
```

Gets whether file-system watching is enabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipelineOptions.cs#L39).

## `fileWatcherFlushDelayMs`

<a id="api-87de0f60ac22400a"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetPipelineOptions.fileWatcherFlushDelayMs ea4f47533eeb8d01f470c735ec2970014546e6bf233f40efb5ec720269731583 -->

```csharp
public int Inno.Assets.Pipeline.AssetPipelineOptions.fileWatcherFlushDelayMs { get; init; }
```

Gets the watcher change coalescing delay in milliseconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipelineOptions.cs#L44).

## `libraryRoot`

<a id="api-22bbb70c6e91547b"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetPipelineOptions.libraryRoot d4c585eb92fd9e076f95301e5a1227f1fe77dd3ef3ae196a5512314f6cea359e -->

```csharp
public string Inno.Assets.Pipeline.AssetPipelineOptions.libraryRoot { get; init; }
```

Gets the root folder containing rebuildable project data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipelineOptions.cs#L34).

## `mode`

<a id="api-c3466c561aa275d5"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetPipelineOptions.mode 959661b87c9f08fe8c4e8a18e4ae37513e8eab991349278f64c0da6321d362d1 -->

```csharp
public Inno.Assets.Pipeline.AssetPipelineMode Inno.Assets.Pipeline.AssetPipelineOptions.mode { get; init; }
```

Gets whether the pipeline reconciles authoring sources or consumes a deployed artifact catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipelineOptions.cs#L24).

## `sourceMounts`

<a id="api-c5ec47c1aac18257"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetPipelineOptions.sourceMounts 2b6983503b99cd4167c430a8d9fbb6f56295f20867ad094fc6274693bb31ea95 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.Pipeline.AssetSourceMount>? Inno.Assets.Pipeline.AssetPipelineOptions.sourceMounts { get; init; }
```

Gets the complete source mount snapshot, or null to mount only `Inno.Assets.Pipeline.AssetPipelineOptions.assetRoot`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipelineOptions.cs#L54).

## `sourcePolicy`

<a id="api-58c04db0f106b397"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetPipelineOptions.sourcePolicy 5ce63f3ade4b6c955bb084a9fbf525cc5972afaae9f56c9911ddff24afb0f7f0 -->

```csharp
public Inno.Assets.Pipeline.AssetSourcePolicy? Inno.Assets.Pipeline.AssetPipelineOptions.sourcePolicy { get; init; }
```

Gets the source filtering policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetPipelineOptions.cs#L49).
