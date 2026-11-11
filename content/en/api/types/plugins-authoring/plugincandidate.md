---
title: "PluginCandidate"
description: "Reference for PluginCandidate in Inno.Plugins.Authoring."
uid: api.inno.plugins.authoring.f2418739f542aa1b
kind: api
owners:
  - Inno.Plugins.Authoring
apiSurface: source-clr
contracts:
  - project.inno-plugins-authoring#installation-and-generation-contract
---
# `PluginCandidate`

This reference describes `PluginCandidate` in `Inno.Plugins.Authoring`. Read the [shared contract](../../projects/inno-plugins-authoring.md#installation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`containsCode`](#api-73a85958b135a7b1) | Property |
| [`contentHash`](#api-9c0c64209f4bf97c) | Property |
| [`manifest`](#api-f5b3a7316e7a84cd) | Property |
| [`sourceKind`](#api-c91aa32cb283df24) | Property |
| [`sourceMount`](#api-e8582b74e7e303e0) | Property |
| [`sourcePath`](#api-ddb5da65227d7f94) | Property |

## Type declaration

<a id="api-f2418739f542aa1b"></a>
<!-- api: T:Inno.Plugins.Authoring.PluginCandidate 175e7396d23c1d5bef04c365c2e3dd421dae4aaa0900a3d9a64c3d331445a3bd -->

```csharp
public sealed class Inno.Plugins.Authoring.PluginCandidate
```

Describes one validated installed Plugin source candidate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceModels.cs#L70).

## `containsCode`

<a id="api-73a85958b135a7b1"></a>
<!-- api: P:Inno.Plugins.Authoring.PluginCandidate.containsCode 9133c81b7e683232ed5e683960d0a9e1c8de40085658a6c184ab879b48d8bc54 -->

```csharp
public bool Inno.Plugins.Authoring.PluginCandidate.containsCode { get; }
```

Gets whether source code exists in this Plugin.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceModels.cs#L117).

## `contentHash`

<a id="api-9c0c64209f4bf97c"></a>
<!-- api: P:Inno.Plugins.Authoring.PluginCandidate.contentHash 92bee60ed3ed316cead2f786f27e5833053457fd2cbf5ed5cfbd17026c6e6afa -->

```csharp
public string Inno.Plugins.Authoring.PluginCandidate.contentHash { get; }
```

Gets the deterministic complete source-content hash.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceModels.cs#L102).

## `manifest`

<a id="api-f5b3a7316e7a84cd"></a>
<!-- api: P:Inno.Plugins.Authoring.PluginCandidate.manifest d6becd63163d3924a0cfbbc0e273b77337fab5014f426d51453d8aa75e4ac132 -->

```csharp
public Inno.Plugins.PluginManifest Inno.Plugins.Authoring.PluginCandidate.manifest { get; }
```

Gets a detached copy of the validated native manifest, including its nested contribution payloads.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceModels.cs#L107).

## `sourceKind`

<a id="api-c91aa32cb283df24"></a>
<!-- api: P:Inno.Plugins.Authoring.PluginCandidate.sourceKind 3fb545bfdb735ac12b7aa9a58df5ed2f20ca99712ba0c4c8099bb5342cefe790 -->

```csharp
public Inno.Plugins.Authoring.PluginSourceKind Inno.Plugins.Authoring.PluginCandidate.sourceKind { get; }
```

Gets the physical source container kind.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceModels.cs#L97).

## `sourceMount`

<a id="api-e8582b74e7e303e0"></a>
<!-- api: P:Inno.Plugins.Authoring.PluginCandidate.sourceMount 0f9bfe2c35d2b5f71c0b6ef551a181a95dd4413d10ec1463aa5367cfda0ec264 -->

```csharp
public Inno.Assets.Pipeline.AssetSourceMount Inno.Plugins.Authoring.PluginCandidate.sourceMount { get; }
```

Gets the isolated read-only asset source mount.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceModels.cs#L112).

## `sourcePath`

<a id="api-ddb5da65227d7f94"></a>
<!-- api: P:Inno.Plugins.Authoring.PluginCandidate.sourcePath 0f5956f44b8c1128cf8e938ae10497c8984ae9ae0568e8a6a478410b2d92bd33 -->

```csharp
public string Inno.Plugins.Authoring.PluginCandidate.sourcePath { get; }
```

Gets the installed `.iplugin` package path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f40c9f36201c01131d82a2f6742a402fab0fd665/src/runtime/plugins/Inno.Plugins.Authoring/PluginSourceModels.cs#L92).
