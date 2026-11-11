---
title: "ShaderDefinitionValidator"
description: "Reference for ShaderDefinitionValidator in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.ab4eec24821b5773
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `ShaderDefinitionValidator`

This reference describes `ShaderDefinitionValidator` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Validate`](#api-b1fdce95e3bfcc8f) | Method |

## Type declaration

<a id="api-ab4eec24821b5773"></a>
<!-- api: T:Inno.Rendering.Assets.ShaderDefinitionValidator 5ebb5a298a17970c72a663dab71bfebb213144fa1ef111b928ab5df65c8590b0 -->

```csharp
public static class Inno.Rendering.Assets.ShaderDefinitionValidator
```

Validates the source-free material, pass and technique contract shared by graph compilation and deployed shaders.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDefinitionValidator.cs#L13).

## `Validate`

<a id="api-b1fdce95e3bfcc8f"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderDefinitionValidator.Validate(Inno.Rendering.Assets.ShaderDefinition,Inno.Rendering.GraphicsCapabilities) 190f48a84907249c8817ab572a78d90aa30704c373293db31668066db0515a23 -->

```csharp
public static System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.ShaderDiagnostic> Inno.Rendering.Assets.ShaderDefinitionValidator.Validate(Inno.Rendering.Assets.ShaderDefinition definition, Inno.Rendering.GraphicsCapabilities? capabilities = null)
```

Checks declaration identities, resource kinds, stage visibility and open technique mappings without mutating the candidate.

**Parameter `definition`:** The candidate runtime contract.

**Parameter `capabilities`:** Optional device capabilities; unsupported optional passes produce warnings.

**Returns:** Immutable diagnostics; an empty collection indicates a valid declaration contract.

**Throws `System.ArgumentNullException`:** The definition is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDefinitionValidator.cs#L30).
