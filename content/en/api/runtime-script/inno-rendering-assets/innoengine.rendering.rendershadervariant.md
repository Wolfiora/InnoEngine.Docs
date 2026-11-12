---
title: "RenderShaderVariant"
description: "Reference for RenderShaderVariant in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.cec3865348e8104a
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `RenderShaderVariant`

This reference describes `RenderShaderVariant` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderShaderVariant>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ed9d97a34ad6b906) | Method |
| [`Equals`](#api-2f2d861ba434fca2) | Method |
| [`Equals`](#api-8f712699be365e4c) | Method |
| [`FromMaterial`](#api-321788659e0c156a) | Method |
| [`FromMaterial`](#api-efe72f463465d615) | Method |
| [`GetHashCode`](#api-9be96160ccf94dd7) | Method |
| [`op_Equality`](#api-d76d55abe402ae32) | Method |
| [`op_Inequality`](#api-87f661b542e9d726) | Method |
| [`Parse`](#api-33636a76553d2a46) | Method |
| [`ToString`](#api-fc5ef59dabab050f) | Method |
| [`empty`](#api-0c8b0ef5a8e735c7) | Property |
| [`options`](#api-d49a0768b0fe08a2) | Property |
| [`value`](#api-00439415aae79d15) | Property |

## Type declaration

<a id="api-cec3865348e8104a"></a>
<!-- api: T:InnoEngine.Rendering.RenderShaderVariant 77fe8e82c1116abb2545764f070cf9444126be572eab6003004fc52d695be539 -->

```csharp
public readonly struct InnoEngine.Rendering.RenderShaderVariant : System.IEquatable<InnoEngine.Rendering.RenderShaderVariant>
```

Identifies one deterministic selection of static shader keyword options shared by authoring and runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L13).

## `#ctor`

<a id="api-ed9d97a34ad6b906"></a>
<!-- api: M:InnoEngine.Rendering.RenderShaderVariant.#ctor(System.Collections.Generic.IReadOnlyDictionary{System.String,System.String}) f027112eadaa7a871ce23f99f00691e1a3ed52e8d092d0be7c10fe1c720be64b -->

```csharp
public InnoEngine.Rendering.RenderShaderVariant.RenderShaderVariant(System.Collections.Generic.IReadOnlyDictionary<string, string> options)
```

Creates a canonical shader variant from stable keyword selections.

**Parameter `options`:** Stable keyword ID to selected option mappings.

**Throws `System.ArgumentException`:** Thrown when an identifier or option is empty or contains a reserved canonical separator.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L30).

## `Equals`

<a id="api-2f2d861ba434fca2"></a>
<!-- api: M:InnoEngine.Rendering.RenderShaderVariant.Equals(InnoEngine.Rendering.RenderShaderVariant) 4a16a2c8b5e0bb984b7fe7cba530e7dddb9aaec81b404c7ce0eb4c8ecf6c4c33 -->

```csharp
public bool InnoEngine.Rendering.RenderShaderVariant.Equals(InnoEngine.Rendering.RenderShaderVariant other)
```

Determines whether this instance and the supplied value represent the same logical state.

**Parameter `other`:** The value to compare with this instance.

**Returns:** `true` when both values select identical options; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L174).

## `Equals`

<a id="api-8f712699be365e4c"></a>
<!-- api: M:InnoEngine.Rendering.RenderShaderVariant.Equals(System.Object) 93c412c8aae6662d0b37ac4910b93814f39d86c75e48be08a16c9853041620fa -->

```csharp
public override bool InnoEngine.Rendering.RenderShaderVariant.Equals(object? obj)
```

Determines whether this instance and the supplied object represent the same logical state.

**Parameter `obj`:** The object to compare with this instance.

**Returns:** `true` when the object is an identical variant; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L185).

## `FromMaterial`

<a id="api-321788659e0c156a"></a>
<!-- api: M:InnoEngine.Rendering.RenderShaderVariant.FromMaterial(InnoEngine.Rendering.MaterialAsset,InnoEngine.Rendering.ShaderDefinition) adca9326ac3633b2ab5c9dd668f073a4150dd07ef94233242af10555d0d55acb -->

```csharp
public static InnoEngine.Rendering.RenderShaderVariant InnoEngine.Rendering.RenderShaderVariant.FromMaterial(InnoEngine.Rendering.MaterialAsset material, InnoEngine.Rendering.ShaderDefinition definition)
```

Resolves material keyword selections against an exact published shader contract.

**Parameter `material`:** Material whose selected options are evaluated.

**Parameter `definition`:** Captured shader contract, which may be the last successful publication.

**Returns:** The canonical keyword selection for this publication.

**Throws `System.InvalidOperationException`:** A selected option is unknown or conflicts with another option.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L133).

## `FromMaterial`

<a id="api-efe72f463465d615"></a>
<!-- api: M:InnoEngine.Rendering.RenderShaderVariant.FromMaterial(InnoEngine.Rendering.MaterialAsset) 9a58f2805b6620a768443463bd0f292f40da9ef586f77d7e291939b24d94c3e6 -->

```csharp
public static InnoEngine.Rendering.RenderShaderVariant InnoEngine.Rendering.RenderShaderVariant.FromMaterial(InnoEngine.Rendering.MaterialAsset material)
```

Resolves the deterministic variant selected by a material.

**Parameter `material`:** The material whose declared keyword options are evaluated.

**Returns:** The canonical variant shared by authoring compilation and runtime lookup.

**Throws `System.InvalidOperationException`:** Thrown when the material has no shader definition or selects an unknown or conflicting option.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L108).

## `GetHashCode`

<a id="api-9be96160ccf94dd7"></a>
<!-- api: M:InnoEngine.Rendering.RenderShaderVariant.GetHashCode 8973affb8ae3ece2415b340037c46f6158947883daf834b70ccd25ebb89b15dc -->

```csharp
public override int InnoEngine.Rendering.RenderShaderVariant.GetHashCode()
```

Computes a hash code from the canonical variant representation.

**Returns:** A hash code consistent with logical equality.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L193).

## `op_Equality`

<a id="api-d76d55abe402ae32"></a>
<!-- api: M:InnoEngine.Rendering.RenderShaderVariant.op_Equality(InnoEngine.Rendering.RenderShaderVariant,InnoEngine.Rendering.RenderShaderVariant) 4c978f97fca6eeb01fa9e37cfb0e4cdaec1b3eddc6f029ed7304d0e6a4ba2a22 -->

```csharp
public static bool InnoEngine.Rendering.RenderShaderVariant.operator ==(InnoEngine.Rendering.RenderShaderVariant left, InnoEngine.Rendering.RenderShaderVariant right)
```

Determines whether two variants select identical stable options.

**Parameter `left`:** The first canonical shader variant to compare.

**Parameter `right`:** The second canonical shader variant to compare.

**Returns:** `true` when both variants contain identical stable options; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L207).

## `op_Inequality`

<a id="api-87f661b542e9d726"></a>
<!-- api: M:InnoEngine.Rendering.RenderShaderVariant.op_Inequality(InnoEngine.Rendering.RenderShaderVariant,InnoEngine.Rendering.RenderShaderVariant) 061f816f55e8d92488f05dfc6a954a63008651a8235e98ce6708da0190afe8d4 -->

```csharp
public static bool InnoEngine.Rendering.RenderShaderVariant.operator !=(InnoEngine.Rendering.RenderShaderVariant left, InnoEngine.Rendering.RenderShaderVariant right)
```

Determines whether two variants select different stable options.

**Parameter `left`:** The first canonical shader variant to compare.

**Parameter `right`:** The second canonical shader variant to compare.

**Returns:** `true` when the stable options differ; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L224).

## `Parse`

<a id="api-33636a76553d2a46"></a>
<!-- api: M:InnoEngine.Rendering.RenderShaderVariant.Parse(System.String) 108fc64f67cbb426759ae4fde6db6dd5b7d19f37faecb21818ef1af48ce87e95 -->

```csharp
public static InnoEngine.Rendering.RenderShaderVariant InnoEngine.Rendering.RenderShaderVariant.Parse(string value)
```

Parses the canonical representation stored in a deployed artifact.

**Parameter `value`:** The canonical semicolon-separated keyword selections.

**Returns:** The validated shader variant represented by `value`.

**Throws `System.FormatException`:** Thrown when the representation is malformed, unordered, or contains duplicate keyword IDs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L72).

## `ToString`

<a id="api-fc5ef59dabab050f"></a>
<!-- api: M:InnoEngine.Rendering.RenderShaderVariant.ToString 74bb01d31fbaab4c467799eaad67359eab0474e6b48bcf2f96921f942281f78e -->

```csharp
public override string InnoEngine.Rendering.RenderShaderVariant.ToString()
```

Formats this value as its canonical representation.

**Returns:** The canonical representation used by caches and deployed artifact paths.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L235).

## `empty`

<a id="api-0c8b0ef5a8e735c7"></a>
<!-- api: P:InnoEngine.Rendering.RenderShaderVariant.empty 089e132fade364e28ced5a41f2b623319f05ea32e78a1fb486e42cd8d6119fc4 -->

```csharp
public static InnoEngine.Rendering.RenderShaderVariant InnoEngine.Rendering.RenderShaderVariant.empty { get; }
```

Gets the empty default variant.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L48).

## `options`

<a id="api-d49a0768b0fe08a2"></a>
<!-- api: P:InnoEngine.Rendering.RenderShaderVariant.options fdaa401a67206c764d63f81d0b705f9ce45b4159ba5ae11097c10ea7edc09778 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, string> InnoEngine.Rendering.RenderShaderVariant.options { get; }
```

Gets the immutable stable keyword selections.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L53).

## `value`

<a id="api-00439415aae79d15"></a>
<!-- api: P:InnoEngine.Rendering.RenderShaderVariant.value 1506210efbb149c97bc33098afebbdc542008c0a147f19dc1bf70de5dbcfd554 -->

```csharp
public string InnoEngine.Rendering.RenderShaderVariant.value { get; }
```

Gets the canonical cache-key representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderVariant.cs#L58).
