---
title: "MaterialAsset"
description: "Reference for MaterialAsset in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.adbc4ae5dbc9973a
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `MaterialAsset`

This reference describes `MaterialAsset` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.AssetObject`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ac9b0e8ebcd40c15) | Method |
| [`RemoveMetadata`](#api-d8b9a2fd4ffe0a9d) | Method |
| [`ReplaceProperties`](#api-3d2622ed654910ce) | Method |
| [`Set`](#api-67c11e0f814e53bf) | Method |
| [`SetKeyword`](#api-1184e812c88be77f) | Method |
| [`SetMetadata`](#api-9c6732d8dbbd19e1) | Method |
| [`TryGet`](#api-5c1ef544616ed7ee) | Method |
| [`TryGetMetadata`](#api-7fa1b87c5169bed0) | Method |
| [`keywords`](#api-dd64080b86aede49) | Property |
| [`metadata`](#api-8d9829469d5dd192) | Property |
| [`properties`](#api-b2d9699ea7ff7bcb) | Property |
| [`shader`](#api-fec0889c21bd1b3e) | Property |
| [`techniqueId`](#api-ec64bfd425c2d5ac) | Property |

## Type declaration

<a id="api-adbc4ae5dbc9973a"></a>
<!-- api: T:Inno.Rendering.Assets.MaterialAsset 862f5cb506dfa44aa9722ffc1a2cc2bc5cb1129845c34612e6cdef921c8b95a7 -->

```csharp
public class Inno.Rendering.Assets.MaterialAsset : Inno.Assets.AssetObject
```

Represents material state keyed by stable shader property identifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L16).

## `#ctor`

<a id="api-ac9b0e8ebcd40c15"></a>
<!-- api: M:Inno.Rendering.Assets.MaterialAsset.#ctor 67104d76cc149e8691294b217f3690c3cf3b1bb7f6a24f2c0f1e79401e304940 -->

```csharp
public Inno.Rendering.Assets.MaterialAsset.MaterialAsset()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L16).

## `RemoveMetadata`

<a id="api-d8b9a2fd4ffe0a9d"></a>
<!-- api: M:Inno.Rendering.Assets.MaterialAsset.RemoveMetadata(System.String) fde020407dec974f98d768f6ae3555408e6977dba7b932b6984c8f650c6dcde0 -->

```csharp
public bool Inno.Rendering.Assets.MaterialAsset.RemoveMetadata(string key)
```

Removes one provider-defined metadata value.

**Parameter `key`:** Stable metadata key.

**Returns:** `true` when an entry was removed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L205).

## `ReplaceProperties`

<a id="api-3d2622ed654910ce"></a>
<!-- api: M:Inno.Rendering.Assets.MaterialAsset.ReplaceProperties(System.Collections.Generic.IEnumerable{Inno.Rendering.Assets.MaterialPropertyEntry}) b8d9775221c819fe32355dc41e22ceb5b96a24f771e9cd435b68013af822ffb0 -->

```csharp
public void Inno.Rendering.Assets.MaterialAsset.ReplaceProperties(System.Collections.Generic.IEnumerable<Inno.Rendering.Assets.MaterialPropertyEntry> properties)
```

Atomically replaces all persistent material values with an isolated, deterministically ordered set.

**Parameter `properties`:** Complete replacement property set. Duplicate identifiers are rejected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L86).

## `Set`

<a id="api-67c11e0f814e53bf"></a>
<!-- api: M:Inno.Rendering.Assets.MaterialAsset.Set(Inno.Rendering.ShaderPropertyId,Inno.Rendering.Assets.MaterialValue) 7cd05590a5ccaabb746199e9eaa35d2609953fa2fe209e22ee7696d4c10bcf25 -->

```csharp
public void Inno.Rendering.Assets.MaterialAsset.Set(Inno.Rendering.ShaderPropertyId id, Inno.Rendering.Assets.MaterialValue value)
```

Creates or replaces one material property.

**Parameter `id`:** Stable shader property identifier.

**Parameter `value`:** Neutral material value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L63).

## `SetKeyword`

<a id="api-1184e812c88be77f"></a>
<!-- api: M:Inno.Rendering.Assets.MaterialAsset.SetKeyword(System.String,System.Boolean) 8033e9bef29ce4b47ba77d3e7e9a3344a98fd11eb1099eb8aa1cadb7a106a41f -->

```csharp
public void Inno.Rendering.Assets.MaterialAsset.SetKeyword(string keyword, bool enabled)
```

Enables or disables a declared static keyword option.

**Parameter `keyword`:** Stable keyword option identifier.

**Parameter `enabled`:** Whether the option should be enabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L137).

## `SetMetadata`

<a id="api-9c6732d8dbbd19e1"></a>
<!-- api: M:Inno.Rendering.Assets.MaterialAsset.SetMetadata(System.String,System.String) a4ef968283498cd1d3fb6ec3b48b4b1cd2fd2a1930a72005511eb502c3da2f8b -->

```csharp
public void Inno.Rendering.Assets.MaterialAsset.SetMetadata(string key, string value)
```

Creates or replaces one provider-defined metadata value.

**Parameter `key`:** Stable metadata key.

**Parameter `value`:** Provider-defined value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L159).

## `TryGet`

<a id="api-5c1ef544616ed7ee"></a>
<!-- api: M:Inno.Rendering.Assets.MaterialAsset.TryGet(Inno.Rendering.ShaderPropertyId,Inno.Rendering.Assets.MaterialValue@) 601a37223c9546a55bd5daa72aa02d5aa34c84b8ff1e09fac6f6b4732995ac51 -->

```csharp
public bool Inno.Rendering.Assets.MaterialAsset.TryGet(Inno.Rendering.ShaderPropertyId id, out Inno.Rendering.Assets.MaterialValue value)
```

Tries to read one material property.

**Parameter `id`:** Stable shader property identifier.

**Parameter `value`:** Receives the neutral value when present.

**Returns:** `true` when the property exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L119).

## `TryGetMetadata`

<a id="api-7fa1b87c5169bed0"></a>
<!-- api: M:Inno.Rendering.Assets.MaterialAsset.TryGetMetadata(System.String,System.String@) d5a2febb51216d391a7ecf58502eb952c4d0f4b6d4215d743d486b6dacf6c2e6 -->

```csharp
public bool Inno.Rendering.Assets.MaterialAsset.TryGetMetadata(string key, out string? value)
```

Tries to read one provider-defined metadata value.

**Parameter `key`:** Stable metadata key.

**Parameter `value`:** Receives the metadata value when present.

**Returns:** `true` when the key exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L187).

## `keywords`

<a id="api-dd64080b86aede49"></a>
<!-- api: P:Inno.Rendering.Assets.MaterialAsset.keywords 4da3a38e630a98dfeb81ba0d4ef6f05ddb0dad3a99bafdac36338ca0aa4078ff -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Rendering.Assets.MaterialAsset.keywords { get; }
```

Gets enabled stable keyword option identifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L47).

## `metadata`

<a id="api-8d9829469d5dd192"></a>
<!-- api: P:Inno.Rendering.Assets.MaterialAsset.metadata 0b546fa75d5fbbb0bfa4b38739025803c943a8f67ecea036f7d7d7c952535ae5 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.MaterialMetadataEntry> Inno.Rendering.Assets.MaterialAsset.metadata { get; }
```

Gets open provider-defined metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L52).

## `properties`

<a id="api-b2d9699ea7ff7bcb"></a>
<!-- api: P:Inno.Rendering.Assets.MaterialAsset.properties a477baa93a426ea53c628ca5ae9812e2705702dbdb83805f23909a2a28ed97ad -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.MaterialPropertyEntry> Inno.Rendering.Assets.MaterialAsset.properties { get; }
```

Gets persistent material values in stable insertion order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L42).

## `shader`

<a id="api-fec0889c21bd1b3e"></a>
<!-- api: P:Inno.Rendering.Assets.MaterialAsset.shader 0b4e78b0e6a2857f8ab4bb7a03442e3fb2c41964bf54edcf84eeabfdf3551175 -->

```csharp
public Inno.Rendering.Assets.ShaderAsset? Inno.Rendering.Assets.MaterialAsset.shader { get; set; }
```

Gets or sets the referenced shader asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L31).

## `techniqueId`

<a id="api-ec64bfd425c2d5ac"></a>
<!-- api: P:Inno.Rendering.Assets.MaterialAsset.techniqueId f8a389a2d0e2678ecb8113dad9a6c00de84226bbde292e88f277eeb75b343642 -->

```csharp
public Inno.Rendering.Assets.ShaderTechniqueId Inno.Rendering.Assets.MaterialAsset.techniqueId { get; set; }
```

Gets or sets an optional explicitly selected technique.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L37).
