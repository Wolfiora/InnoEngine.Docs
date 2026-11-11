---
title: "ShaderSourceImportSettings"
description: "Reference for ShaderSourceImportSettings in Inno.Rendering.Assets.Authoring."
uid: api.inno.rendering.assets.authoring.2f5116363060b4cc
kind: api
owners:
  - Inno.Rendering.Assets.Authoring
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets-authoring
---
# `ShaderSourceImportSettings`

This reference describes `ShaderSourceImportSettings` in `Inno.Rendering.Assets.Authoring`. Read the [shared contract](../../../projects/inno-rendering-assets-authoring.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d302f241c67b698f) | Method |
| [`catalogOrder`](#api-f6656cc392cbfb35) | Property |
| [`catalogPath`](#api-fa0eeacd3a65c4e8) | Property |
| [`exports`](#api-4871acda535cd6e2) | Property |
| [`implementationId`](#api-d28b1af55860995e) | Property |
| [`implementations`](#api-a5668c44de421f54) | Property |
| [`languageId`](#api-4bdb627194de5205) | Property |

## Type declaration

<a id="api-2f5116363060b4cc"></a>
<!-- api: T:Inno.Rendering.Assets.Authoring.ShaderSourceImportSettings 91564dd2edb00a9577dd1ef0be076b9d5512a3982b29cf218d3cb46e2d01dcc5 -->

```csharp
public sealed class Inno.Rendering.Assets.Authoring.ShaderSourceImportSettings : Inno.Core.Serialization.ISerializable
```

Configures one source-function library through the standard asset import-settings sidecar.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderSourceImportSettings.cs#L11).

## `#ctor`

<a id="api-d302f241c67b698f"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderSourceImportSettings.#ctor bbe4768d0cb98d4e575d249a2df9152a9e63dd381381656c653d49a187b7078a -->

```csharp
public Inno.Rendering.Assets.Authoring.ShaderSourceImportSettings.ShaderSourceImportSettings()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderSourceImportSettings.cs#L11).

## `catalogOrder`

<a id="api-f6656cc392cbfb35"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderSourceImportSettings.catalogOrder d48e10f4fb1d6835461f9c82a51184d1d9e0667d27b0517245d9eeec66880c39 -->

```csharp
public int Inno.Rendering.Assets.Authoring.ShaderSourceImportSettings.catalogOrder { get; set; }
```

Gets or sets the stable ordering value of this library inside its authoring catalog group.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderSourceImportSettings.cs#L36).

## `catalogPath`

<a id="api-fa0eeacd3a65c4e8"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderSourceImportSettings.catalogPath 59b11731101f0207bc01c6e32fdfa02d51e94ab8de7f55b528d4837bfe930523 -->

```csharp
public string Inno.Rendering.Assets.Authoring.ShaderSourceImportSettings.catalogPath { get; set; }
```

Gets or sets the slash-delimited authoring catalog path used to group this library in creation UIs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderSourceImportSettings.cs#L32).

## `exports`

<a id="api-4871acda535cd6e2"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderSourceImportSettings.exports 18a1375e86390b3c42c42f6eac9d91b963ac0b1a260cb3744f30a7ea31180aa6 -->

```csharp
public string[] Inno.Rendering.Assets.Authoring.ShaderSourceImportSettings.exports { get; set; }
```

Gets or sets the explicitly exported function names. Unlisted helpers remain private to the source library.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderSourceImportSettings.cs#L20).

## `implementationId`

<a id="api-d28b1af55860995e"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderSourceImportSettings.implementationId ea9e3f9d2588531d23746882b7610a4d68efd4f1d04b651307f4767b1f7e50c6 -->

```csharp
public string Inno.Rendering.Assets.Authoring.ShaderSourceImportSettings.implementationId { get; set; }
```

Gets or sets the exact implementation key used by the selected rendering backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderSourceImportSettings.cs#L24).

## `implementations`

<a id="api-a5668c44de421f54"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderSourceImportSettings.implementations 1c2b761245511a45fcaad582bd444da7e82c975746b754e889d6af27af359267 -->

```csharp
public Inno.Rendering.Assets.Authoring.ShaderFunctionAsset[] Inno.Rendering.Assets.Authoring.ShaderSourceImportSettings.implementations { get; set; }
```

Gets or sets alternate source implementations; all must expose the same public interface with unique backend IDs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderSourceImportSettings.cs#L28).

## `languageId`

<a id="api-4bdb627194de5205"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderSourceImportSettings.languageId 7595af6beed525e6f0e0f475814cef1b8e59cd9bb7e3921f5df0546a923a4d07 -->

```csharp
public string Inno.Rendering.Assets.Authoring.ShaderSourceImportSettings.languageId { get; set; }
```

Gets or sets the registered language identity; an empty selection is an import error.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderSourceImportSettings.cs#L16).
