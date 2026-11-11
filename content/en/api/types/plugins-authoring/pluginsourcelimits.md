---
title: "PluginSourceLimits"
description: "Reference for PluginSourceLimits in Inno.Plugins.Authoring."
uid: api.inno.plugins.authoring.8d4a4c72a0d86b5e
kind: api
owners:
  - Inno.Plugins.Authoring
apiSurface: source-clr
contracts:
  - project.inno-plugins-authoring#installation-and-generation-contract
---
# `PluginSourceLimits`

This reference describes `PluginSourceLimits` in `Inno.Plugins.Authoring`. Read the [shared contract](../../projects/inno-plugins-authoring.md#installation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-caa16182a9a64144) | Method |
| [`defaults`](#api-d1cfadff9316d0f6) | Property |
| [`maximumCompressionRatio`](#api-6deb1fc90c923035) | Property |
| [`maximumEmbeddedDepth`](#api-628bb99be1d7ab22) | Property |
| [`maximumEmbeddedPluginCount`](#api-d998899eea6facb4) | Property |
| [`maximumEntryCount`](#api-527fc552c49a7861) | Property |
| [`maximumFileBytes`](#api-9e689d653fd92e5a) | Property |
| [`maximumTotalBytes`](#api-0c7012a7ab61ae3f) | Property |

## Type declaration

<a id="api-8d4a4c72a0d86b5e"></a>
<!-- api: T:Inno.Plugins.Authoring.PluginSourceLimits 242056ecf3097027c622bdb123806cab94d8699861ec24ad09d1d3919ab202ca -->

```csharp
public sealed class Inno.Plugins.Authoring.PluginSourceLimits
```

Controls bounded validation and archive extraction for installed Plugin packages.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceModels.cs#L29).

## `#ctor`

<a id="api-caa16182a9a64144"></a>
<!-- api: M:Inno.Plugins.Authoring.PluginSourceLimits.#ctor bda257077690a1fb09608b1ea85eb514abb23cd68a6b0f90c866916dcec584f0 -->

```csharp
public Inno.Plugins.Authoring.PluginSourceLimits.PluginSourceLimits()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceModels.cs#L29).

## `defaults`

<a id="api-d1cfadff9316d0f6"></a>
<!-- api: P:Inno.Plugins.Authoring.PluginSourceLimits.defaults 0112e6a901950994821ae24f2306dbd7be843cc276aa3ba1206b2e84cd7ea0b8 -->

```csharp
public static Inno.Plugins.Authoring.PluginSourceLimits Inno.Plugins.Authoring.PluginSourceLimits.defaults { get; }
```

Gets default conservative local Plugin limits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceModels.cs#L34).

## `maximumCompressionRatio`

<a id="api-6deb1fc90c923035"></a>
<!-- api: P:Inno.Plugins.Authoring.PluginSourceLimits.maximumCompressionRatio e735a9f64dcc5f6d5c0267710e196e314fc5a7e7919a66774e7c9b2977f58bb0 -->

```csharp
public double Inno.Plugins.Authoring.PluginSourceLimits.maximumCompressionRatio { get; init; }
```

Gets or initializes the maximum accepted archive uncompressed-to-compressed ratio.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceModels.cs#L54).

## `maximumEmbeddedDepth`

<a id="api-628bb99be1d7ab22"></a>
<!-- api: P:Inno.Plugins.Authoring.PluginSourceLimits.maximumEmbeddedDepth 6aef304944c01ee27c073a2a2aea4aed5fbc2e4a6ad93b0ca3ac8d6912212b16 -->

```csharp
public int Inno.Plugins.Authoring.PluginSourceLimits.maximumEmbeddedDepth { get; init; }
```

Gets or initializes the maximum nested embedded dependency depth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceModels.cs#L64).

## `maximumEmbeddedPluginCount`

<a id="api-d998899eea6facb4"></a>
<!-- api: P:Inno.Plugins.Authoring.PluginSourceLimits.maximumEmbeddedPluginCount d346dea58af201ee9b3c20dc409a05656ebe36ff3a7eae244b3c4c59a7bd74d1 -->

```csharp
public int Inno.Plugins.Authoring.PluginSourceLimits.maximumEmbeddedPluginCount { get; init; }
```

Gets or initializes the maximum number of embedded dependency packages in one installation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceModels.cs#L59).

## `maximumEntryCount`

<a id="api-527fc552c49a7861"></a>
<!-- api: P:Inno.Plugins.Authoring.PluginSourceLimits.maximumEntryCount 43d36cfdf0422529ba7fb38b73f62cb05b2eb99b469a59f4f626a8d752d879a6 -->

```csharp
public int Inno.Plugins.Authoring.PluginSourceLimits.maximumEntryCount { get; init; }
```

Gets or initializes the maximum number of source entries.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceModels.cs#L39).

## `maximumFileBytes`

<a id="api-9e689d653fd92e5a"></a>
<!-- api: P:Inno.Plugins.Authoring.PluginSourceLimits.maximumFileBytes 0908d40c4d5efd300c19347443856be8fbebf7f04a24f983bbc8603bcaa5b11f -->

```csharp
public long Inno.Plugins.Authoring.PluginSourceLimits.maximumFileBytes { get; init; }
```

Gets or initializes the maximum size of one source file.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceModels.cs#L44).

## `maximumTotalBytes`

<a id="api-0c7012a7ab61ae3f"></a>
<!-- api: P:Inno.Plugins.Authoring.PluginSourceLimits.maximumTotalBytes 9880e8fdf479b87837c7c22f05bd0149bbc0ebc35b91b1a42e080c1c871b9667 -->

```csharp
public long Inno.Plugins.Authoring.PluginSourceLimits.maximumTotalBytes { get; init; }
```

Gets or initializes the maximum total source size.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceModels.cs#L49).
