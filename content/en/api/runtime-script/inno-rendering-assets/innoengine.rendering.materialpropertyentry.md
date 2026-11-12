---
title: "MaterialPropertyEntry"
description: "Reference for MaterialPropertyEntry in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.88303358e63376e4
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `MaterialPropertyEntry`

This reference describes `MaterialPropertyEntry` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-fc198eb2ab0e1470) | Method |
| [`id`](#api-390e920dc75f9ee9) | Property |
| [`value`](#api-72e6f57fbe4059fe) | Property |

## Type declaration

<a id="api-88303358e63376e4"></a>
<!-- api: T:InnoEngine.Rendering.MaterialPropertyEntry d45b3b066f365fb91de94e3e69877bfda57b785b746bf43bf9782f09bbe41e51 -->

```csharp
public struct InnoEngine.Rendering.MaterialPropertyEntry
```

Stores one persistent material property entry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPropertyEntry.cs#L16).

## `#ctor`

<a id="api-fc198eb2ab0e1470"></a>
<!-- api: M:InnoEngine.Rendering.MaterialPropertyEntry.#ctor(InnoEngine.Rendering.ShaderPropertyId,InnoEngine.Rendering.MaterialValue) 21f7732c9b0a4038cda9dbe9f0b0d4c293c854b9772a62b8cf684217868c5b78 -->

```csharp
public InnoEngine.Rendering.MaterialPropertyEntry.MaterialPropertyEntry(InnoEngine.Rendering.ShaderPropertyId id, InnoEngine.Rendering.MaterialValue value)
```

Creates a persistent material property entry.

**Parameter `id`:** Stable shader property identifier.

**Parameter `value`:** Neutral material value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPropertyEntry.cs#L27).

## `id`

<a id="api-390e920dc75f9ee9"></a>
<!-- api: P:InnoEngine.Rendering.MaterialPropertyEntry.id 738b86f01fe3dd05499ea097152b7fdd03cd79b7b0a2aa0762159f5d9994b91f -->

```csharp
public InnoEngine.Rendering.ShaderPropertyId InnoEngine.Rendering.MaterialPropertyEntry.id { get; set; }
```

Gets or sets the stable shader property identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPropertyEntry.cs#L40).

## `value`

<a id="api-72e6f57fbe4059fe"></a>
<!-- api: P:InnoEngine.Rendering.MaterialPropertyEntry.value 4b9b92e3cba0faeed831eb54de12cd2b322a57abaa9640370327eff85345180e -->

```csharp
public InnoEngine.Rendering.MaterialValue InnoEngine.Rendering.MaterialPropertyEntry.value { get; set; }
```

Gets or sets the neutral material value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPropertyEntry.cs#L45).
