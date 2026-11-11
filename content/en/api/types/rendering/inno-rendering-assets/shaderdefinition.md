---
title: "ShaderDefinition"
description: "Reference for ShaderDefinition in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.59076dac6a040c56
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `ShaderDefinition`

This reference describes `ShaderDefinition` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-669812ac7157f9cb) | Method |
| [`#ctor`](#api-e738e3e53cacb6fe) | Method |
| [`keywords`](#api-d85fc01151cc73fb) | Property |
| [`name`](#api-434cee19f38809f5) | Property |
| [`passes`](#api-4815d53d9eb2e98b) | Property |
| [`properties`](#api-78ac3af38eec34d3) | Property |
| [`techniques`](#api-fc003091f61277c0) | Property |

## Type declaration

<a id="api-59076dac6a040c56"></a>
<!-- api: T:Inno.Rendering.Assets.ShaderDefinition 1a083b47e91d68d6f1ad3c11131a418c3cffeaf7d0f49fc2e8217d6d5f01acc7 -->

```csharp
public sealed class Inno.Rendering.Assets.ShaderDefinition : Inno.Core.Serialization.ISerializable
```

Contains the source-of-truth definition shared by shader import and material tooling.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDefinition.cs#L17).

## `#ctor`

<a id="api-669812ac7157f9cb"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderDefinition.#ctor 0c26b9fbf30a179f3d61dbd80074dab88d0593634c6048c7327e02274b71b517 -->

```csharp
public Inno.Rendering.Assets.ShaderDefinition.ShaderDefinition()
```

Creates an empty shader definition for native deserialization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDefinition.cs#L22).

## `#ctor`

<a id="api-e738e3e53cacb6fe"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderDefinition.#ctor(System.String,System.Collections.Generic.IEnumerable{Inno.Rendering.Assets.ShaderPropertyDefinition},System.Collections.Generic.IEnumerable{Inno.Rendering.Assets.ShaderKeywordDefinition},System.Collections.Generic.IEnumerable{Inno.Rendering.Assets.ShaderPassDefinition},System.Collections.Generic.IEnumerable{Inno.Rendering.Assets.ShaderTechniqueDefinition}) 2fd5758656237289a30d87ce76406a4ac7834563fad3340ab5bb843140f2a123 -->

```csharp
public Inno.Rendering.Assets.ShaderDefinition.ShaderDefinition(string name, System.Collections.Generic.IEnumerable<Inno.Rendering.Assets.ShaderPropertyDefinition> properties, System.Collections.Generic.IEnumerable<Inno.Rendering.Assets.ShaderKeywordDefinition> keywords, System.Collections.Generic.IEnumerable<Inno.Rendering.Assets.ShaderPassDefinition> passes, System.Collections.Generic.IEnumerable<Inno.Rendering.Assets.ShaderTechniqueDefinition>? techniques = null)
```

Creates a shader definition.

**Parameter `name`:** Artist-facing shader name.

**Parameter `properties`:** Stable property declarations.

**Parameter `keywords`:** Static keyword declarations.

**Parameter `passes`:** Backend-neutral pass declarations.

**Parameter `techniques`:** Open contract and role mappings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDefinition.cs#L44).

## `keywords`

<a id="api-d85fc01151cc73fb"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderDefinition.keywords 235a708898b84e53fa81fcd9b9f3559aa6cd450da98c1aa7718aad6b9114a409 -->

```csharp
public Inno.Rendering.Assets.ShaderKeywordDefinition[] Inno.Rendering.Assets.ShaderDefinition.keywords { get; set; }
```

Gets or sets static keyword declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDefinition.cs#L78).

## `name`

<a id="api-434cee19f38809f5"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderDefinition.name b8504b51d9deace9a3114ab21de8819271d2f341f132c99c8ba90daf0cb5992e -->

```csharp
public string Inno.Rendering.Assets.ShaderDefinition.name { get; set; }
```

Gets or sets the artist-facing shader name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDefinition.cs#L66).

## `passes`

<a id="api-4815d53d9eb2e98b"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderDefinition.passes 1f4f0c590f7e2740107d02f1133854f634ed41b837eb2329f1c1567e7488acaf -->

```csharp
public Inno.Rendering.Assets.ShaderPassDefinition[] Inno.Rendering.Assets.ShaderDefinition.passes { get; set; }
```

Gets or sets backend-neutral pass declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDefinition.cs#L84).

## `properties`

<a id="api-78ac3af38eec34d3"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderDefinition.properties 4de06863093801309680f81ce43cc39cc96f335aac805523be45e89d4cd2a32a -->

```csharp
public Inno.Rendering.Assets.ShaderPropertyDefinition[] Inno.Rendering.Assets.ShaderDefinition.properties { get; set; }
```

Gets or sets stable property declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDefinition.cs#L72).

## `techniques`

<a id="api-fc003091f61277c0"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderDefinition.techniques 73a6c398d0dc7d2282598a9acdb6643285b6c5da1971b510231caf2f997ea7ab -->

```csharp
public Inno.Rendering.Assets.ShaderTechniqueDefinition[] Inno.Rendering.Assets.ShaderDefinition.techniques { get; set; }
```

Gets or sets open contract and role mappings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDefinition.cs#L90).
