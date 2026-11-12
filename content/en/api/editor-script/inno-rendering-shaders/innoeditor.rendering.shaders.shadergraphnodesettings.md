---
title: "ShaderGraphNodeSettings"
description: "Reference for ShaderGraphNodeSettings in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.49d1a157b73beff3
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderGraphNodeSettings`

This reference describes `ShaderGraphNodeSettings` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1acba83beaba976e) | Method |
| [`createOrder`](#api-8172e75eee2f1015) | Property |
| [`createPath`](#api-e35d53a0f678639d) | Property |
| [`displayName`](#api-1b01147c5e52e8ba) | Property |
| [`effect`](#api-8bdb689d5b93e160) | Property |
| [`kind`](#api-85f7b3fd6a046b30) | Property |
| [`role`](#api-9939942232ff4612) | Property |

## Type declaration

<a id="api-49d1a157b73beff3"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderGraphNodeSettings c5eeda5b5592c179b85ce18b87b4c3c49817b25d4770d7fd76c73f954daeab7c -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderGraphNodeSettings : InnoEngine.Serialization.ISerializable
```

Stores graph-level identity and catalog metadata for a reusable Shader node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L43).

## `#ctor`

<a id="api-1acba83beaba976e"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphNodeSettings.#ctor bd013d38c2fa9028b0232b4daa3be558573672a7953ca7eb60cf695e06a99b59 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderGraphNodeSettings.ShaderGraphNodeSettings()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L43).

## `createOrder`

<a id="api-8172e75eee2f1015"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphNodeSettings.createOrder 5f870bd094933ee8592589d2092ad05c2f18577f2ba78bdfebc43264ad84f25c -->

```csharp
public int InnoEditor.Rendering.Shaders.ShaderGraphNodeSettings.createOrder { get; set; }
```

Gets or sets the deterministic order within the creation catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L56).

## `createPath`

<a id="api-e35d53a0f678639d"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphNodeSettings.createPath d1f21aab13c1fc07bc64833a0b60fcdaf6cc9fa1009af39ba647fa564ba48662 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderGraphNodeSettings.createPath { get; set; }
```

Gets or sets the slash-separated creation catalog beneath Graph Nodes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L52).

## `displayName`

<a id="api-1b01147c5e52e8ba"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphNodeSettings.displayName 07e448b0a39fa80dfa7a6d3d899acf2424b38ab4f4ee372a1a0a0eec39ec444e -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderGraphNodeSettings.displayName { get; set; }
```

Gets or sets the node title displayed to authors.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L48).

## `effect`

<a id="api-8bdb689d5b93e160"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphNodeSettings.effect f32343175bfc7791eea8aef62397d5cb2357785e1dd93900525cedd59b6c6ba3 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderGraphNodeEffect InnoEditor.Rendering.Shaders.ShaderGraphNodeSettings.effect { get; set; }
```

Gets or sets the observable computation behavior of an inline function.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L64).

## `kind`

<a id="api-85f7b3fd6a046b30"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphNodeSettings.kind 776c3ed84b9eaa8601e995ab44e793b96e48aeb655e2c8c7439b64cf8cbc47c6 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderGraphNodeKind InnoEditor.Rendering.Shaders.ShaderGraphNodeSettings.kind { get; set; }
```

Gets or sets how a reference to this graph participates in compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L60).

## `role`

<a id="api-9939942232ff4612"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphNodeSettings.role 367bad6a8b678aac8cd20f030663f6dcf1983ee0e70f3895e89adbc3b3ad075b -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderGraphNodeSettings.role { get; set; }
```

Gets or sets the domain role consumed by a Target; empty for ordinary inline functions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L68).
