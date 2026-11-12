---
title: "ShaderMetadataEntry"
description: "Reference for ShaderMetadataEntry in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.2d140f6d59a140b5
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `ShaderMetadataEntry`

This reference describes `ShaderMetadataEntry` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-284033c0b7cae410) | Method |
| [`key`](#api-154d5e8d1ddc22ce) | Property |
| [`value`](#api-96536629403d365b) | Property |

## Type declaration

<a id="api-2d140f6d59a140b5"></a>
<!-- api: T:InnoEngine.Rendering.ShaderMetadataEntry 4dd0147e7b96e4a09a0fc8666fdb362d3f47dac2d340ce76ca6c6fdcf92d4542 -->

```csharp
public struct InnoEngine.Rendering.ShaderMetadataEntry
```

Stores one open metadata key and value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderMetadataEntry.cs#L17).

## `#ctor`

<a id="api-284033c0b7cae410"></a>
<!-- api: M:InnoEngine.Rendering.ShaderMetadataEntry.#ctor(System.String,System.String) 7aa7727fed808e6a321a19585de701d7274ffc128bd23ab84952495d9dc8fa77 -->

```csharp
public InnoEngine.Rendering.ShaderMetadataEntry.ShaderMetadataEntry(string key, string value)
```

Creates one metadata entry.

**Parameter `key`:** Stable provider-defined key.

**Parameter `value`:** Provider-defined value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderMetadataEntry.cs#L28).

## `key`

<a id="api-154d5e8d1ddc22ce"></a>
<!-- api: P:InnoEngine.Rendering.ShaderMetadataEntry.key 5f9cdcfb291508a1679536631d3c2d535a75da96b960f2a028bbca09ee76bf07 -->

```csharp
public string InnoEngine.Rendering.ShaderMetadataEntry.key { get; set; }
```

Gets or sets the stable metadata key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderMetadataEntry.cs#L40).

## `value`

<a id="api-96536629403d365b"></a>
<!-- api: P:InnoEngine.Rendering.ShaderMetadataEntry.value 4ddee231ff64e48e5ffca1884fd5942f595854d9a0b5ad31ce5af053bd2985c2 -->

```csharp
public string InnoEngine.Rendering.ShaderMetadataEntry.value { get; set; }
```

Gets or sets the metadata value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderMetadataEntry.cs#L45).
