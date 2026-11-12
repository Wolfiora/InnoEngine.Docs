---
title: "ShaderAsset"
description: "Reference for ShaderAsset in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.07f07f40ed05769a
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `ShaderAsset`

This reference describes `ShaderAsset` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Assets.AssetObject`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5204d9f629b3221f) | Method |
| [`definition`](#api-78fca979008a6f3b) | Property |

## Type declaration

<a id="api-07f07f40ed05769a"></a>
<!-- api: T:InnoEngine.Rendering.ShaderAsset 4adf37b386739971646dde9f531d8937204359c37b962186862c8519b0f2fe5f -->

```csharp
public class InnoEngine.Rendering.ShaderAsset : InnoEngine.Assets.AssetObject, InnoEngine.Serialization.ISerializable
```

Represents the runtime contract imported from a shader graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderAsset.cs#L17).

## `#ctor`

<a id="api-5204d9f629b3221f"></a>
<!-- api: M:InnoEngine.Rendering.ShaderAsset.#ctor d724109ff83f0136a7310c865dce93e749fc50e8eedfb054184eff482a3f0ff9 -->

```csharp
public InnoEngine.Rendering.ShaderAsset.ShaderAsset()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderAsset.cs#L17).

## `definition`

<a id="api-78fca979008a6f3b"></a>
<!-- api: P:InnoEngine.Rendering.ShaderAsset.definition b0e5bcfbd9ceb22ea6d69f09a6e176001739f5dfd4de478b2503e824f2a3c2f9 -->

```csharp
public InnoEngine.Rendering.ShaderDefinition? InnoEngine.Rendering.ShaderAsset.definition { get; }
```

Gets a detached editable copy of the committed backend-neutral definition, or null before import.
Nested declaration arrays are copied; referenced assets remain identity-owned resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderAsset.cs#L28).
