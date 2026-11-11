---
title: "MaterialPassResolution"
description: "Reference for MaterialPassResolution in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.cf8a6dab8f1aaaa2
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `MaterialPassResolution`

This reference describes `MaterialPassResolution` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-70f28197c477ac20) | Method |
| [`pass`](#api-2fef39e06455294b) | Property |
| [`technique`](#api-abdd17436469c07c) | Property |

## Type declaration

<a id="api-cf8a6dab8f1aaaa2"></a>
<!-- api: T:Inno.Rendering.Assets.MaterialPassResolution 4399cf9014425e092e730654a69a1aee44fc182fc557e64d2caee0c153fa8a50 -->

```csharp
public sealed class Inno.Rendering.Assets.MaterialPassResolution
```

Describes one capability-compatible material pass selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPassResolution.cs#L16).

## `#ctor`

<a id="api-70f28197c477ac20"></a>
<!-- api: M:Inno.Rendering.Assets.MaterialPassResolution.#ctor(Inno.Rendering.Assets.ShaderTechniqueDefinition,Inno.Rendering.Assets.ShaderPassDefinition) 41671bb0aee0bca04cd3e10d61bdc1eeddbd5ba89a327c95a73666bc027e84e2 -->

```csharp
public Inno.Rendering.Assets.MaterialPassResolution.MaterialPassResolution(Inno.Rendering.Assets.ShaderTechniqueDefinition technique, Inno.Rendering.Assets.ShaderPassDefinition pass)
```

Creates a material pass resolution.

**Parameter `technique`:** Selected open-contract technique.

**Parameter `pass`:** Concrete pass mapped to the requested role.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPassResolution.cs#L30).

## `pass`

<a id="api-2fef39e06455294b"></a>
<!-- api: P:Inno.Rendering.Assets.MaterialPassResolution.pass 91e97a4a4fd13d2cb86d0914494c7bdc6158fbf0941d117d6a8a8b8c9308dc71 -->

```csharp
public Inno.Rendering.Assets.ShaderPassDefinition Inno.Rendering.Assets.MaterialPassResolution.pass { get; }
```

Gets the concrete shader pass with detached metadata storage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPassResolution.cs#L46).

## `technique`

<a id="api-abdd17436469c07c"></a>
<!-- api: P:Inno.Rendering.Assets.MaterialPassResolution.technique c61d69af84db0f15e4b58a57d884fe579e083a3f7a8c83156ad9728a3826f4da -->

```csharp
public Inno.Rendering.Assets.ShaderTechniqueDefinition Inno.Rendering.Assets.MaterialPassResolution.technique { get; }
```

Gets the selected technique with detached role mapping storage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPassResolution.cs#L41).
