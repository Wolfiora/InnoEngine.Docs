---
title: "PresentationBackendOptions"
description: "Reference for PresentationBackendOptions in Inno.Adapter.Presentation."
uid: api.inno.adapter.presentation.54f2bb543073b793
kind: api
owners:
  - Inno.Adapter.Presentation
apiSurface: source-clr
contracts:
  - project.inno-adapter-presentation
---
# `PresentationBackendOptions`

This reference describes `PresentationBackendOptions` in `Inno.Adapter.Presentation`. Read the [shared contract](../../../projects/inno-adapter-presentation.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f22320527665b290) | Method |
| [`features`](#api-d8ed34adf783980c) | Property |
| [`platformApplication`](#api-21ed94104a2bf286) | Property |
| [`renderDevice`](#api-4968686c40137ef4) | Property |
| [`window`](#api-0de0dafdf9b8982d) | Property |

## Type declaration

<a id="api-54f2bb543073b793"></a>
<!-- api: T:Inno.Adapter.Presentation.PresentationBackendOptions 5f85ad6b1c55963549798b65ab58674c2171965b73e896acfcf06ca64d7482be -->

```csharp
public sealed class Inno.Adapter.Presentation.PresentationBackendOptions
```

Collects the validated presentation backend options values that configure one owned operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationBackendOptions.cs#L9).

## `#ctor`

<a id="api-f22320527665b290"></a>
<!-- api: M:Inno.Adapter.Presentation.PresentationBackendOptions.#ctor 04e78fa2d115837ddf06965df43f4d152189bb4206b7d4a0caa3bc60d0aa5ce3 -->

```csharp
public Inno.Adapter.Presentation.PresentationBackendOptions.PresentationBackendOptions()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationBackendOptions.cs#L9).

## `features`

<a id="api-d8ed34adf783980c"></a>
<!-- api: P:Inno.Adapter.Presentation.PresentationBackendOptions.features 0fca5155df83967e4e61ddf366cb43d173ca1045d0ed8ddd228f5c9931560c31 -->

```csharp
public Inno.Adapter.Presentation.PresentationFeatures Inno.Adapter.Presentation.PresentationBackendOptions.features { get; set; }
```

Gets or sets optional presentation features requested by the host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationBackendOptions.cs#L29).

## `platformApplication`

<a id="api-21ed94104a2bf286"></a>
<!-- api: P:Inno.Adapter.Presentation.PresentationBackendOptions.platformApplication 1bc0eef1cddffec114cdf111c5fde3ff3b4e79c6ae29475e79b78b1648e710ff -->

```csharp
public required Inno.Platform.IPlatformApplication Inno.Adapter.Presentation.PresentationBackendOptions.platformApplication { get; set; }
```

Gets or sets the platform application that owns presentation windows and events.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationBackendOptions.cs#L14).

## `renderDevice`

<a id="api-4968686c40137ef4"></a>
<!-- api: P:Inno.Adapter.Presentation.PresentationBackendOptions.renderDevice 632c92a329ee97b8deaba19bf0e1865e5597ba15e4101532417d9a13ed410d4f -->

```csharp
public required Inno.Rendering.IRenderDevice Inno.Adapter.Presentation.PresentationBackendOptions.renderDevice { get; set; }
```

Gets or sets the rendering device used to present host draw data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationBackendOptions.cs#L24).

## `window`

<a id="api-0de0dafdf9b8982d"></a>
<!-- api: P:Inno.Adapter.Presentation.PresentationBackendOptions.window c661b5212461ce3a3cb9a7473b8b345d8e89dda343669c0b4fdc52ca60bf8f3d -->

```csharp
public required Inno.Platform.IPlatformWindow Inno.Adapter.Presentation.PresentationBackendOptions.window { get; set; }
```

Gets or sets the primary presentation window.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationBackendOptions.cs#L19).
