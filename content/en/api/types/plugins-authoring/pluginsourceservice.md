---
title: "PluginSourceService"
description: "Reference for PluginSourceService in Inno.Plugins.Authoring."
uid: api.inno.plugins.authoring.4cb5a801deec190d
kind: api
owners:
  - Inno.Plugins.Authoring
apiSurface: source-clr
contracts:
  - project.inno-plugins-authoring#installation-and-generation-contract
---
# `PluginSourceService`

This reference describes `PluginSourceService` in `Inno.Plugins.Authoring`. Read the [shared contract](../../projects/inno-plugins-authoring.md#installation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1d9157caa001561a) | Method |
| [`GetActivatableCandidates`](#api-41925903972daf90) | Method |
| [`GetActivatableMounts`](#api-da8aa02b4f1f2bf6) | Method |
| [`Scan`](#api-0a7a9b5c6a413f07) | Method |

## Type declaration

<a id="api-4cb5a801deec190d"></a>
<!-- api: T:Inno.Plugins.Authoring.PluginSourceService aa7b6a7c9ff4d929129533b74a8281504791357c84b10b81e33bdae005a3d4cd -->

```csharp
public sealed class Inno.Plugins.Authoring.PluginSourceService
```

Discovers, validates, mounts, and dependency-orders local `.iplugin` packages.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceService.cs#L21).

## `#ctor`

<a id="api-1d9157caa001561a"></a>
<!-- api: M:Inno.Plugins.Authoring.PluginSourceService.#ctor(Inno.Core.Serialization.SerializationRegistry,System.String,System.String,Inno.Plugins.Authoring.PluginSourceLimits) afc1cdc1e1cad1ca1588d62bab18876aa8b62b574f868a2d273893ebe70d4ce7 -->

```csharp
public Inno.Plugins.Authoring.PluginSourceService.PluginSourceService(Inno.Core.Serialization.SerializationRegistry serialization, string pluginRoot, string libraryRoot, Inno.Plugins.Authoring.PluginSourceLimits? limits = null)
```

Creates a local Plugin source service.

**Parameter `serialization`:** The serialization registry used to read the current Plugin manifest contract.

**Parameter `pluginRoot`:** Project Plugins directory containing `.iplugin` packages.

**Parameter `libraryRoot`:** Project rebuildable Library directory.

**Parameter `limits`:** Optional bounded source limits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceService.cs#L52).

## `GetActivatableCandidates`

<a id="api-41925903972daf90"></a>
<!-- api: M:Inno.Plugins.Authoring.PluginSourceService.GetActivatableCandidates(Inno.Plugins.Authoring.PluginScanResult) 40524cd60a7a0aaaf3b20a77e72fe371e229b049f381b4de1083fe9cde9449eb -->

```csharp
public static System.Collections.Generic.IReadOnlyList<Inno.Plugins.Authoring.PluginCandidate> Inno.Plugins.Authoring.PluginSourceService.GetActivatableCandidates(Inno.Plugins.Authoring.PluginScanResult result)
```

Gets validated candidates in complete dependency order.

**Parameter `result`:** Complete scan result.

**Returns:** Dependency-ordered candidates suitable for one activation transaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceService.cs#L123).

## `GetActivatableMounts`

<a id="api-da8aa02b4f1f2bf6"></a>
<!-- api: M:Inno.Plugins.Authoring.PluginSourceService.GetActivatableMounts(Inno.Plugins.Authoring.PluginScanResult) 60f8356e69ef41785c0672dfce5eb5e956692665e1c0fb203adfe92d4eef474e -->

```csharp
public static System.Collections.Generic.IReadOnlyList<Inno.Assets.Pipeline.AssetSourceMount> Inno.Plugins.Authoring.PluginSourceService.GetActivatableMounts(Inno.Plugins.Authoring.PluginScanResult result)
```

Gets read-only mounts that passed validation and dependency ordering.

**Parameter `result`:** Complete scan result.

**Returns:** Dependency-ordered mount snapshot suitable for the common AssetPipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceService.cs#L111).

## `Scan`

<a id="api-0a7a9b5c6a413f07"></a>
<!-- api: M:Inno.Plugins.Authoring.PluginSourceService.Scan 8edc5839f8d149883c99f0ce4f1652baf626c4870fc3c1accbaf05f621d9441f -->

```csharp
public Inno.Plugins.Authoring.PluginScanResult Inno.Plugins.Authoring.PluginSourceService.Scan()
```

Scans every installed `.iplugin` package into one isolated candidate snapshot.

**Returns:** Dependency-ordered candidates plus isolated diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceService.cs#L75).
