---
title: "MaterialMetadataEntry"
description: "Reference for MaterialMetadataEntry in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.b14700b45838315d
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `MaterialMetadataEntry`

This reference describes `MaterialMetadataEntry` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-47a4a008d9bdd493) | Method |
| [`key`](#api-6accc52897f33ce1) | Property |
| [`value`](#api-ad6a527d808bd706) | Property |

## Type declaration

<a id="api-b14700b45838315d"></a>
<!-- api: T:InnoEngine.Rendering.MaterialMetadataEntry c191bfffcd82b5b3b267640570a84dd91f9c61373f5ef083dacc6892dd41e813 -->

```csharp
public struct InnoEngine.Rendering.MaterialMetadataEntry
```

Stores one open material metadata key and value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialMetadataEntry.cs#L16).

## `#ctor`

<a id="api-47a4a008d9bdd493"></a>
<!-- api: M:InnoEngine.Rendering.MaterialMetadataEntry.#ctor(System.String,System.String) 027f5820015bc0fddd8a4976e18837ae4a270fd0a70302d7f532370d39a9436a -->

```csharp
public InnoEngine.Rendering.MaterialMetadataEntry.MaterialMetadataEntry(string key, string value)
```

Creates a material metadata entry.

**Parameter `key`:** Stable provider-defined key.

**Parameter `value`:** Provider-defined value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialMetadataEntry.cs#L27).

## `key`

<a id="api-6accc52897f33ce1"></a>
<!-- api: P:InnoEngine.Rendering.MaterialMetadataEntry.key 9f5e9a9f5b6f43a588d538b69a5d870d632103a233ba5d0c2eb2c7e15ce12cca -->

```csharp
public string InnoEngine.Rendering.MaterialMetadataEntry.key { get; set; }
```

Gets or sets the stable metadata key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialMetadataEntry.cs#L39).

## `value`

<a id="api-ad6a527d808bd706"></a>
<!-- api: P:InnoEngine.Rendering.MaterialMetadataEntry.value 62bad7531ad9f46266c92ab45d6676847458d51de44bf38cac0fb0c21d2f36e0 -->

```csharp
public string InnoEngine.Rendering.MaterialMetadataEntry.value { get; set; }
```

Gets or sets the metadata value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialMetadataEntry.cs#L44).
