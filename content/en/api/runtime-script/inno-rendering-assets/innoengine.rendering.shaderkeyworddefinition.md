---
title: "ShaderKeywordDefinition"
description: "Reference for ShaderKeywordDefinition in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.46e88be3ef448206
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `ShaderKeywordDefinition`

This reference describes `ShaderKeywordDefinition` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4abf3d4fb19c9147) | Method |
| [`id`](#api-5f3c432ffa54e52a) | Property |
| [`options`](#api-05108d629875ee96) | Property |

## Type declaration

<a id="api-46e88be3ef448206"></a>
<!-- api: T:InnoEngine.Rendering.ShaderKeywordDefinition 006fdfaa251330124162d6d77ba98646c6f5edccb7d954afbc5b63474035b3b3 -->

```csharp
public struct InnoEngine.Rendering.ShaderKeywordDefinition
```

Declares one static shader keyword that may produce compiled variants.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderKeywordDefinition.cs#L17).

## `#ctor`

<a id="api-4abf3d4fb19c9147"></a>
<!-- api: M:InnoEngine.Rendering.ShaderKeywordDefinition.#ctor(System.String,System.Collections.Generic.IEnumerable{System.String}) 583c6ca34cba9864026707d29c31efc548a47bf0c62547219e745a41ad020392 -->

```csharp
public InnoEngine.Rendering.ShaderKeywordDefinition.ShaderKeywordDefinition(string id, System.Collections.Generic.IEnumerable<string> options)
```

Creates a shader keyword definition.

**Parameter `id`:** Stable keyword identifier.

**Parameter `options`:** Allowed stable option identifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderKeywordDefinition.cs#L28).

## `id`

<a id="api-5f3c432ffa54e52a"></a>
<!-- api: P:InnoEngine.Rendering.ShaderKeywordDefinition.id 3aa0db70b790e31802aca24d8b5d4e17e62c34f425d03141b65e75d23cab37f9 -->

```csharp
public string InnoEngine.Rendering.ShaderKeywordDefinition.id { get; set; }
```

Gets or sets the stable keyword identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderKeywordDefinition.cs#L41).

## `options`

<a id="api-05108d629875ee96"></a>
<!-- api: P:InnoEngine.Rendering.ShaderKeywordDefinition.options 611331838ce924c53d64a52ecda2ac145ba15b26bcc10dd3348137b883f520ad -->

```csharp
public string[] InnoEngine.Rendering.ShaderKeywordDefinition.options { get; set; }
```

Gets or sets allowed stable option identifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderKeywordDefinition.cs#L46).
