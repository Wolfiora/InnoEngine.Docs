---
title: "MaterialAsset"
description: "Reference for MaterialAsset in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.c32d88c992a67150
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `MaterialAsset`

This reference describes `MaterialAsset` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Assets.AssetObject`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e9cbbbc956c78539) | Method |
| [`RemoveMetadata`](#api-cdc9e6a32e72d84b) | Method |
| [`ReplaceProperties`](#api-179408d68c9675be) | Method |
| [`Set`](#api-94fb7f6273667969) | Method |
| [`SetKeyword`](#api-dc730b1cd9a8fd4c) | Method |
| [`SetMetadata`](#api-0be2ea7638f41bb6) | Method |
| [`TryGet`](#api-a5aa1a96a40643f0) | Method |
| [`TryGetMetadata`](#api-2cf59713af9ef71a) | Method |
| [`keywords`](#api-823f9a5012044849) | Property |
| [`metadata`](#api-bec0b025408a6968) | Property |
| [`properties`](#api-5f584422b53d8af2) | Property |
| [`shader`](#api-75191108627b57a2) | Property |
| [`techniqueId`](#api-72329c8fa28eb99a) | Property |

## Type declaration

<a id="api-c32d88c992a67150"></a>
<!-- api: T:InnoEngine.Rendering.MaterialAsset bfae99b8599311ac201e8dcfc7a4c3be08eb92b711223c30e8cbd54ec0765d6f -->

```csharp
public class InnoEngine.Rendering.MaterialAsset : InnoEngine.Assets.AssetObject, InnoEngine.Serialization.ISerializable
```

Represents material state keyed by stable shader property identifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L16).

## `#ctor`

<a id="api-e9cbbbc956c78539"></a>
<!-- api: M:InnoEngine.Rendering.MaterialAsset.#ctor bb65c6e81240513162605601bcec52f46bb1698007f32ebabf49b1d037b8fcde -->

```csharp
public InnoEngine.Rendering.MaterialAsset.MaterialAsset()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L16).

## `RemoveMetadata`

<a id="api-cdc9e6a32e72d84b"></a>
<!-- api: M:InnoEngine.Rendering.MaterialAsset.RemoveMetadata(System.String) 8562e74c762c217c23cf48744551d829860f40838b42af6dc9f74434b156b40a -->

```csharp
public bool InnoEngine.Rendering.MaterialAsset.RemoveMetadata(string key)
```

Removes one provider-defined metadata value.

**Parameter `key`:** Stable metadata key.

**Returns:** `true` when an entry was removed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L205).

## `ReplaceProperties`

<a id="api-179408d68c9675be"></a>
<!-- api: M:InnoEngine.Rendering.MaterialAsset.ReplaceProperties(System.Collections.Generic.IEnumerable{InnoEngine.Rendering.MaterialPropertyEntry}) 8778b191414a8ddb446eb0ceedaa86ca4b59039805c0c5f529eb6cf0c443ed1e -->

```csharp
public void InnoEngine.Rendering.MaterialAsset.ReplaceProperties(System.Collections.Generic.IEnumerable<InnoEngine.Rendering.MaterialPropertyEntry> properties)
```

Atomically replaces all persistent material values with an isolated, deterministically ordered set.

**Parameter `properties`:** Complete replacement property set. Duplicate identifiers are rejected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L86).

## `Set`

<a id="api-94fb7f6273667969"></a>
<!-- api: M:InnoEngine.Rendering.MaterialAsset.Set(InnoEngine.Rendering.ShaderPropertyId,InnoEngine.Rendering.MaterialValue) 83b988cfba90a34aa927b30711860bff0d25aabe845a0993778cdafe9d3754f6 -->

```csharp
public void InnoEngine.Rendering.MaterialAsset.Set(InnoEngine.Rendering.ShaderPropertyId id, InnoEngine.Rendering.MaterialValue value)
```

Creates or replaces one material property.

**Parameter `id`:** Stable shader property identifier.

**Parameter `value`:** Neutral material value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L63).

## `SetKeyword`

<a id="api-dc730b1cd9a8fd4c"></a>
<!-- api: M:InnoEngine.Rendering.MaterialAsset.SetKeyword(System.String,System.Boolean) 7fa21cfd20e21f1f34bb578266c21d19d97a374e75eca9a41006af9abdb48f1f -->

```csharp
public void InnoEngine.Rendering.MaterialAsset.SetKeyword(string keyword, bool enabled)
```

Enables or disables a declared static keyword option.

**Parameter `keyword`:** Stable keyword option identifier.

**Parameter `enabled`:** Whether the option should be enabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L137).

## `SetMetadata`

<a id="api-0be2ea7638f41bb6"></a>
<!-- api: M:InnoEngine.Rendering.MaterialAsset.SetMetadata(System.String,System.String) 46516783f20aadd5a6c15007135b3c7401ca22b2115be0f2dbf7ecbf099c5767 -->

```csharp
public void InnoEngine.Rendering.MaterialAsset.SetMetadata(string key, string value)
```

Creates or replaces one provider-defined metadata value.

**Parameter `key`:** Stable metadata key.

**Parameter `value`:** Provider-defined value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L159).

## `TryGet`

<a id="api-a5aa1a96a40643f0"></a>
<!-- api: M:InnoEngine.Rendering.MaterialAsset.TryGet(InnoEngine.Rendering.ShaderPropertyId,InnoEngine.Rendering.MaterialValue@) 1573ac7f30cba813bca6c8ac6b408d2ce855524a766aa13eed07da29a94b08bf -->

```csharp
public bool InnoEngine.Rendering.MaterialAsset.TryGet(InnoEngine.Rendering.ShaderPropertyId id, out InnoEngine.Rendering.MaterialValue value)
```

Tries to read one material property.

**Parameter `id`:** Stable shader property identifier.

**Parameter `value`:** Receives the neutral value when present.

**Returns:** `true` when the property exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L119).

## `TryGetMetadata`

<a id="api-2cf59713af9ef71a"></a>
<!-- api: M:InnoEngine.Rendering.MaterialAsset.TryGetMetadata(System.String,System.String@) 49cadb0a80d9da2f107df08ebe1bf431b09f6d5c828ee11996a311c88ffa99a2 -->

```csharp
public bool InnoEngine.Rendering.MaterialAsset.TryGetMetadata(string key, out string? value)
```

Tries to read one provider-defined metadata value.

**Parameter `key`:** Stable metadata key.

**Parameter `value`:** Receives the metadata value when present.

**Returns:** `true` when the key exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L187).

## `keywords`

<a id="api-823f9a5012044849"></a>
<!-- api: P:InnoEngine.Rendering.MaterialAsset.keywords 2a6f08bfbee88c92977a2479d5daf8dd578d42663fdce7e6a867090f0c8dae25 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> InnoEngine.Rendering.MaterialAsset.keywords { get; }
```

Gets enabled stable keyword option identifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L47).

## `metadata`

<a id="api-bec0b025408a6968"></a>
<!-- api: P:InnoEngine.Rendering.MaterialAsset.metadata 2e6b4e390f133f902fc5b444f3cbc7234f815cd1232a695528a4c814a51070ab -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Rendering.MaterialMetadataEntry> InnoEngine.Rendering.MaterialAsset.metadata { get; }
```

Gets open provider-defined metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L52).

## `properties`

<a id="api-5f584422b53d8af2"></a>
<!-- api: P:InnoEngine.Rendering.MaterialAsset.properties fd3266a9f19db0a735fe93df4652844c197fd2348d6a8d27bfae5ede30388bb7 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Rendering.MaterialPropertyEntry> InnoEngine.Rendering.MaterialAsset.properties { get; }
```

Gets persistent material values in stable insertion order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L42).

## `shader`

<a id="api-75191108627b57a2"></a>
<!-- api: P:InnoEngine.Rendering.MaterialAsset.shader d0f0740e6642ad3ad5b1590bb25cffd0f6aaf4ef85c05bc860d845c92765cb49 -->

```csharp
public InnoEngine.Rendering.ShaderAsset? InnoEngine.Rendering.MaterialAsset.shader { get; set; }
```

Gets or sets the referenced shader asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L31).

## `techniqueId`

<a id="api-72329c8fa28eb99a"></a>
<!-- api: P:InnoEngine.Rendering.MaterialAsset.techniqueId 587d56823b8579d4a679ad4e605d6c9a6f22b4c36f8c4753c11c605f380cb389 -->

```csharp
public InnoEngine.Rendering.ShaderTechniqueId InnoEngine.Rendering.MaterialAsset.techniqueId { get; set; }
```

Gets or sets an optional explicitly selected technique.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialAsset.cs#L37).
