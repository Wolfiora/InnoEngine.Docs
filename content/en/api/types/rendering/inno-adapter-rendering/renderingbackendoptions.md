---
title: "RenderingBackendOptions"
description: "Reference for RenderingBackendOptions in Inno.Adapter.Rendering."
uid: api.inno.adapter.rendering.114363fb04012ddf
kind: api
owners:
  - Inno.Adapter.Rendering
apiSurface: source-clr
contracts:
  - project.inno-adapter-rendering
---
# `RenderingBackendOptions`

This reference describes `RenderingBackendOptions` in `Inno.Adapter.Rendering`. Read the [shared contract](../../../projects/inno-adapter-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ee8130116677f040) | Method |
| [`forceSingleThreaded`](#api-16589524f47e2ac4) | Property |
| [`preferredGraphicsApi`](#api-e86a0a152e642806) | Property |
| [`sRgbBackbuffer`](#api-dab194b2668c2fe4) | Property |
| [`verticalSync`](#api-d23e048a4da5100c) | Property |
| [`window`](#api-a50e194ed357ec71) | Property |

## Type declaration

<a id="api-114363fb04012ddf"></a>
<!-- api: T:Inno.Adapter.Rendering.RenderingBackendOptions 929ff86a78b2919bb810e4d7590c09441dbd1ddb679947d2f106ade5ef0a7b8a -->

```csharp
public sealed class Inno.Adapter.Rendering.RenderingBackendOptions
```

Configures backend-neutral rendering-device creation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendOptions.cs#L9).

## `#ctor`

<a id="api-ee8130116677f040"></a>
<!-- api: M:Inno.Adapter.Rendering.RenderingBackendOptions.#ctor a0a4db502a3d48727047d1e007de89dae8fdd39d1b4c7b8c018ac7fa52e77a1c -->

```csharp
public Inno.Adapter.Rendering.RenderingBackendOptions.RenderingBackendOptions()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendOptions.cs#L9).

## `forceSingleThreaded`

<a id="api-16589524f47e2ac4"></a>
<!-- api: P:Inno.Adapter.Rendering.RenderingBackendOptions.forceSingleThreaded b388e643f3abcaf57e2189d4364baf33a38afc4f917c00b696f39cf898bd15ec -->

```csharp
public bool Inno.Adapter.Rendering.RenderingBackendOptions.forceSingleThreaded { get; set; }
```

Gets or sets whether rendering must execute on the calling thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendOptions.cs#L34).

## `preferredGraphicsApi`

<a id="api-e86a0a152e642806"></a>
<!-- api: P:Inno.Adapter.Rendering.RenderingBackendOptions.preferredGraphicsApi 643dbfa6247cda774ca7d94813367bb06ba48d3c7623d7d5954b1f3785b8afee -->

```csharp
public Inno.Rendering.GraphicsApi? Inno.Adapter.Rendering.RenderingBackendOptions.preferredGraphicsApi { get; set; }
```

Gets or sets the preferred graphics API, or `null` for the backend default.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendOptions.cs#L19).

## `sRgbBackbuffer`

<a id="api-dab194b2668c2fe4"></a>
<!-- api: P:Inno.Adapter.Rendering.RenderingBackendOptions.sRgbBackbuffer a5bd7dac8d9e9a8145ee9888dbb56570ad72fc379f3d28092f37a6254394e6fc -->

```csharp
public bool Inno.Adapter.Rendering.RenderingBackendOptions.sRgbBackbuffer { get; set; }
```

Gets or sets whether the primary backbuffer performs sRGB encoding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendOptions.cs#L29).

## `verticalSync`

<a id="api-d23e048a4da5100c"></a>
<!-- api: P:Inno.Adapter.Rendering.RenderingBackendOptions.verticalSync b5cbf8836d767a0243709d26578c52bf338edef67db2b45398246479742f4a1b -->

```csharp
public bool Inno.Adapter.Rendering.RenderingBackendOptions.verticalSync { get; set; }
```

Gets or sets whether presentation waits for display synchronization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendOptions.cs#L24).

## `window`

<a id="api-a50e194ed357ec71"></a>
<!-- api: P:Inno.Adapter.Rendering.RenderingBackendOptions.window d668a08f51bd03c8decca70cf4d4b0715d418005b0341577ecec30d85482ad31 -->

```csharp
public Inno.Platform.IPlatformWindow? Inno.Adapter.Rendering.RenderingBackendOptions.window { get; set; }
```

Gets or sets the primary platform window used as the presentation surface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendOptions.cs#L14).
