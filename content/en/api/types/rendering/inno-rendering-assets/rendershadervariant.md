---
title: "RenderShaderVariant"
description: "Reference for RenderShaderVariant in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.2b2988566e359442
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `RenderShaderVariant`

This reference describes `RenderShaderVariant` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.Assets.RenderShaderVariant>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4bf11adf7b2951c3) | Method |
| [`Equals`](#api-d562932ee1d6a49f) | Method |
| [`Equals`](#api-133381f13c7f4775) | Method |
| [`FromMaterial`](#api-bf8b5582f40bcdbb) | Method |
| [`FromMaterial`](#api-4f7992f19b821e02) | Method |
| [`GetHashCode`](#api-3b60f097d3e2cb82) | Method |
| [`op_Equality`](#api-815001cea9b3f87e) | Method |
| [`op_Inequality`](#api-88088aadb43c4e1b) | Method |
| [`Parse`](#api-87dadeb2e685051a) | Method |
| [`ToString`](#api-64f6d2014ad4a112) | Method |
| [`empty`](#api-3f0b915a5f3c8beb) | Property |
| [`options`](#api-58e8c6f9fb1f33fe) | Property |
| [`value`](#api-0fb8f94435c96e46) | Property |

## Type declaration

<a id="api-2b2988566e359442"></a>
<!-- api: T:Inno.Rendering.Assets.RenderShaderVariant bea579a5a54d07a07548829825ccfdee5de2aef5faa87d5f12f07981af1022cf -->

```csharp
public readonly struct Inno.Rendering.Assets.RenderShaderVariant : System.IEquatable<Inno.Rendering.Assets.RenderShaderVariant>
```

Identifies one deterministic selection of static shader keyword options shared by authoring and runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L13).

## `#ctor`

<a id="api-4bf11adf7b2951c3"></a>
<!-- api: M:Inno.Rendering.Assets.RenderShaderVariant.#ctor(System.Collections.Generic.IReadOnlyDictionary{System.String,System.String}) 9e7dccfaff7246468041d1be690918c8b4bf7ddfce8a8110e819f37c747acb80 -->

```csharp
public Inno.Rendering.Assets.RenderShaderVariant.RenderShaderVariant(System.Collections.Generic.IReadOnlyDictionary<string, string> options)
```

Creates a canonical shader variant from stable keyword selections.

**Parameter `options`:** Stable keyword ID to selected option mappings.

**Throws `System.ArgumentException`:** Thrown when an identifier or option is empty or contains a reserved canonical separator.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L30).

## `Equals`

<a id="api-d562932ee1d6a49f"></a>
<!-- api: M:Inno.Rendering.Assets.RenderShaderVariant.Equals(Inno.Rendering.Assets.RenderShaderVariant) aef670f1c2478e493b3865ea36eb51bb2cefadb06359c44939b86c1c96763793 -->

```csharp
public bool Inno.Rendering.Assets.RenderShaderVariant.Equals(Inno.Rendering.Assets.RenderShaderVariant other)
```

Determines whether this instance and the supplied value represent the same logical state.

**Parameter `other`:** The value to compare with this instance.

**Returns:** `true` when both values select identical options; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L174).

## `Equals`

<a id="api-133381f13c7f4775"></a>
<!-- api: M:Inno.Rendering.Assets.RenderShaderVariant.Equals(System.Object) 98563051cba19ddbbb602df00e41e67e58c5f74aa3ab1ddaeee081ef38553842 -->

```csharp
public override bool Inno.Rendering.Assets.RenderShaderVariant.Equals(object? obj)
```

Determines whether this instance and the supplied object represent the same logical state.

**Parameter `obj`:** The object to compare with this instance.

**Returns:** `true` when the object is an identical variant; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L185).

## `FromMaterial`

<a id="api-bf8b5582f40bcdbb"></a>
<!-- api: M:Inno.Rendering.Assets.RenderShaderVariant.FromMaterial(Inno.Rendering.Assets.MaterialAsset,Inno.Rendering.Assets.ShaderDefinition) 142e9c17cb46f49920accede399fc10769de96f8ef4b8ce739158cdf55bc573e -->

```csharp
public static Inno.Rendering.Assets.RenderShaderVariant Inno.Rendering.Assets.RenderShaderVariant.FromMaterial(Inno.Rendering.Assets.MaterialAsset material, Inno.Rendering.Assets.ShaderDefinition definition)
```

Resolves material keyword selections against an exact published shader contract.

**Parameter `material`:** Material whose selected options are evaluated.

**Parameter `definition`:** Captured shader contract, which may be the last successful publication.

**Returns:** The canonical keyword selection for this publication.

**Throws `System.InvalidOperationException`:** A selected option is unknown or conflicts with another option.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L133).

## `FromMaterial`

<a id="api-4f7992f19b821e02"></a>
<!-- api: M:Inno.Rendering.Assets.RenderShaderVariant.FromMaterial(Inno.Rendering.Assets.MaterialAsset) 62daacd3bc7866ac661e27b85356517b28e263153416ba87c8e11541a8cbc762 -->

```csharp
public static Inno.Rendering.Assets.RenderShaderVariant Inno.Rendering.Assets.RenderShaderVariant.FromMaterial(Inno.Rendering.Assets.MaterialAsset material)
```

Resolves the deterministic variant selected by a material.

**Parameter `material`:** The material whose declared keyword options are evaluated.

**Returns:** The canonical variant shared by authoring compilation and runtime lookup.

**Throws `System.InvalidOperationException`:** Thrown when the material has no shader definition or selects an unknown or conflicting option.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L108).

## `GetHashCode`

<a id="api-3b60f097d3e2cb82"></a>
<!-- api: M:Inno.Rendering.Assets.RenderShaderVariant.GetHashCode 2be1961884440c01a43e4373b8893af62cb9f6f1b28380cc696d7f82f6c15cc3 -->

```csharp
public override int Inno.Rendering.Assets.RenderShaderVariant.GetHashCode()
```

Computes a hash code from the canonical variant representation.

**Returns:** A hash code consistent with logical equality.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L193).

## `op_Equality`

<a id="api-815001cea9b3f87e"></a>
<!-- api: M:Inno.Rendering.Assets.RenderShaderVariant.op_Equality(Inno.Rendering.Assets.RenderShaderVariant,Inno.Rendering.Assets.RenderShaderVariant) fc71866b20c0541c613ec8de7e0c2f949dfb882ce5d62be4a184d35ac88b42f8 -->

```csharp
public static bool Inno.Rendering.Assets.RenderShaderVariant.operator ==(Inno.Rendering.Assets.RenderShaderVariant left, Inno.Rendering.Assets.RenderShaderVariant right)
```

Determines whether two variants select identical stable options.

**Parameter `left`:** The first canonical shader variant to compare.

**Parameter `right`:** The second canonical shader variant to compare.

**Returns:** `true` when both variants contain identical stable options; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L207).

## `op_Inequality`

<a id="api-88088aadb43c4e1b"></a>
<!-- api: M:Inno.Rendering.Assets.RenderShaderVariant.op_Inequality(Inno.Rendering.Assets.RenderShaderVariant,Inno.Rendering.Assets.RenderShaderVariant) f69da22eb24b45c5df454e8166281917aa8a509d855fb209f19db4cf16ee8b38 -->

```csharp
public static bool Inno.Rendering.Assets.RenderShaderVariant.operator !=(Inno.Rendering.Assets.RenderShaderVariant left, Inno.Rendering.Assets.RenderShaderVariant right)
```

Determines whether two variants select different stable options.

**Parameter `left`:** The first canonical shader variant to compare.

**Parameter `right`:** The second canonical shader variant to compare.

**Returns:** `true` when the stable options differ; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L224).

## `Parse`

<a id="api-87dadeb2e685051a"></a>
<!-- api: M:Inno.Rendering.Assets.RenderShaderVariant.Parse(System.String) 76d36afe811972a25c7609b5dffffdd0d9a6e97f354cd39404bda650e1324f3a -->

```csharp
public static Inno.Rendering.Assets.RenderShaderVariant Inno.Rendering.Assets.RenderShaderVariant.Parse(string value)
```

Parses the canonical representation stored in a deployed artifact.

**Parameter `value`:** The canonical semicolon-separated keyword selections.

**Returns:** The validated shader variant represented by `value`.

**Throws `System.FormatException`:** Thrown when the representation is malformed, unordered, or contains duplicate keyword IDs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L72).

## `ToString`

<a id="api-64f6d2014ad4a112"></a>
<!-- api: M:Inno.Rendering.Assets.RenderShaderVariant.ToString 113d40c021a85e009822ca5178aecc95874427b8207ea780363e805547abe211 -->

```csharp
public override string Inno.Rendering.Assets.RenderShaderVariant.ToString()
```

Formats this value as its canonical representation.

**Returns:** The canonical representation used by caches and deployed artifact paths.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L235).

## `empty`

<a id="api-3f0b915a5f3c8beb"></a>
<!-- api: P:Inno.Rendering.Assets.RenderShaderVariant.empty cc9ee77f472d319fdf4db058a374a266b4b60ea8c5106ccd6c05f5986a04e8ef -->

```csharp
public static Inno.Rendering.Assets.RenderShaderVariant Inno.Rendering.Assets.RenderShaderVariant.empty { get; }
```

Gets the empty default variant.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L48).

## `options`

<a id="api-58e8c6f9fb1f33fe"></a>
<!-- api: P:Inno.Rendering.Assets.RenderShaderVariant.options 8bd4406cf3e731ba8913490b503844e3404bfd1349222f087b41aeb1be9e3d00 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, string> Inno.Rendering.Assets.RenderShaderVariant.options { get; }
```

Gets the immutable stable keyword selections.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L53).

## `value`

<a id="api-0fb8f94435c96e46"></a>
<!-- api: P:Inno.Rendering.Assets.RenderShaderVariant.value fa44d5c28b63cee243919818f296c009bfb08f94ad735e7dc0b885232afb7ae2 -->

```csharp
public string Inno.Rendering.Assets.RenderShaderVariant.value { get; }
```

Gets the canonical cache-key representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L58).
