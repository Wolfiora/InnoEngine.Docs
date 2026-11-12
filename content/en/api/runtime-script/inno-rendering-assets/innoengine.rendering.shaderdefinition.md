---
title: "ShaderDefinition"
description: "Reference for ShaderDefinition in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.351eeefb14efa1e2
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `ShaderDefinition`

This reference describes `ShaderDefinition` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8d4447dba08abd2a) | Method |
| [`#ctor`](#api-18a2cd238d5107fd) | Method |
| [`keywords`](#api-b21e1c6da98f1736) | Property |
| [`name`](#api-91e907fa6cb31b9c) | Property |
| [`passes`](#api-2bdd57fd471b9b0b) | Property |
| [`properties`](#api-ed40383e42d660ab) | Property |
| [`techniques`](#api-50717967567ea617) | Property |

## Type declaration

<a id="api-351eeefb14efa1e2"></a>
<!-- api: T:InnoEngine.Rendering.ShaderDefinition e71844fa35c773943f13a2ae70af247e0123d5eb62d53afc16b1b2845f262326 -->

```csharp
public sealed class InnoEngine.Rendering.ShaderDefinition : InnoEngine.Serialization.ISerializable
```

Contains the source-of-truth definition shared by shader import and material tooling.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDefinition.cs#L17).

## `#ctor`

<a id="api-8d4447dba08abd2a"></a>
<!-- api: M:InnoEngine.Rendering.ShaderDefinition.#ctor 44fa6db8e5b4a9883771f8dfe521e60523bcf34c641082a1d8b0bf5a520a8f4a -->

```csharp
public InnoEngine.Rendering.ShaderDefinition.ShaderDefinition()
```

Creates an empty shader definition for native deserialization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDefinition.cs#L22).

## `#ctor`

<a id="api-18a2cd238d5107fd"></a>
<!-- api: M:InnoEngine.Rendering.ShaderDefinition.#ctor(System.String,System.Collections.Generic.IEnumerable{InnoEngine.Rendering.ShaderPropertyDefinition},System.Collections.Generic.IEnumerable{InnoEngine.Rendering.ShaderKeywordDefinition},System.Collections.Generic.IEnumerable{InnoEngine.Rendering.ShaderPassDefinition},System.Collections.Generic.IEnumerable{InnoEngine.Rendering.ShaderTechniqueDefinition}) 18f72d706bd2cdc4a7038948d5b6c561f9b631c30f83e624ca62d3e23f31baf5 -->

```csharp
public InnoEngine.Rendering.ShaderDefinition.ShaderDefinition(string name, System.Collections.Generic.IEnumerable<InnoEngine.Rendering.ShaderPropertyDefinition> properties, System.Collections.Generic.IEnumerable<InnoEngine.Rendering.ShaderKeywordDefinition> keywords, System.Collections.Generic.IEnumerable<InnoEngine.Rendering.ShaderPassDefinition> passes, System.Collections.Generic.IEnumerable<InnoEngine.Rendering.ShaderTechniqueDefinition>? techniques = null)
```

Creates a shader definition.

**Parameter `name`:** Artist-facing shader name.

**Parameter `properties`:** Stable property declarations.

**Parameter `keywords`:** Static keyword declarations.

**Parameter `passes`:** Backend-neutral pass declarations.

**Parameter `techniques`:** Open contract and role mappings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDefinition.cs#L44).

## `keywords`

<a id="api-b21e1c6da98f1736"></a>
<!-- api: P:InnoEngine.Rendering.ShaderDefinition.keywords 6f043d889e28111a03cfe2b384fed0af5486fb828f3da9b0e1ab431ba1b86bb7 -->

```csharp
public InnoEngine.Rendering.ShaderKeywordDefinition[] InnoEngine.Rendering.ShaderDefinition.keywords { get; set; }
```

Gets or sets static keyword declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDefinition.cs#L78).

## `name`

<a id="api-91e907fa6cb31b9c"></a>
<!-- api: P:InnoEngine.Rendering.ShaderDefinition.name 577f6105ef7b0111897d9a0db78a09c49de11b95f25fb6f9d3559098fd9643c9 -->

```csharp
public string InnoEngine.Rendering.ShaderDefinition.name { get; set; }
```

Gets or sets the artist-facing shader name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDefinition.cs#L66).

## `passes`

<a id="api-2bdd57fd471b9b0b"></a>
<!-- api: P:InnoEngine.Rendering.ShaderDefinition.passes a2a7e1c7782c8a00b475aa7acd092ea2c2e2925f98d7b045b693140b5492efd8 -->

```csharp
public InnoEngine.Rendering.ShaderPassDefinition[] InnoEngine.Rendering.ShaderDefinition.passes { get; set; }
```

Gets or sets backend-neutral pass declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDefinition.cs#L84).

## `properties`

<a id="api-ed40383e42d660ab"></a>
<!-- api: P:InnoEngine.Rendering.ShaderDefinition.properties 65e0a28eee40842807482b3fafc44f26c453c5acb15604af89ffd4563bd50244 -->

```csharp
public InnoEngine.Rendering.ShaderPropertyDefinition[] InnoEngine.Rendering.ShaderDefinition.properties { get; set; }
```

Gets or sets stable property declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDefinition.cs#L72).

## `techniques`

<a id="api-50717967567ea617"></a>
<!-- api: P:InnoEngine.Rendering.ShaderDefinition.techniques 29ccca1239ef2049f0f0c912ea7992d54c3bd0ad0a8e0e8a1d4281d97df412d0 -->

```csharp
public InnoEngine.Rendering.ShaderTechniqueDefinition[] InnoEngine.Rendering.ShaderDefinition.techniques { get; set; }
```

Gets or sets open contract and role mappings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderDefinition.cs#L90).
