---
title: "TextureColorSpace"
description: "Reference for TextureColorSpace in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.2a1aa06e2fe4e834
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `TextureColorSpace`

This reference describes `TextureColorSpace` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Linear`](#api-01c35baf6a9f6e72) | Field |
| [`Srgb`](#api-14783a1babd0648e) | Field |

## Type declaration

<a id="api-2a1aa06e2fe4e834"></a>
<!-- api: T:InnoEngine.Rendering.TextureColorSpace 7cab55829f235a1cd9def9fca2bdc425e291634ef2b9d5f6c07cfbb67c85e0d5 -->

```csharp
public enum InnoEngine.Rendering.TextureColorSpace : int
```

Selects how texture samples are decoded for shader use.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/TextureColorSpace.cs#L17).

## `Linear`

<a id="api-01c35baf6a9f6e72"></a>
<!-- api: F:InnoEngine.Rendering.TextureColorSpace.Linear a5cb73fbfd881283d7f461b718c88721b367de98599dfb80d28406ba6766cf90 -->

```csharp
InnoEngine.Rendering.TextureColorSpace.Linear = 0
```

Samples are interpreted as linear values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/TextureColorSpace.cs#L22).

## `Srgb`

<a id="api-14783a1babd0648e"></a>
<!-- api: F:InnoEngine.Rendering.TextureColorSpace.Srgb a725244b056f8f0aaf7648a71b41ee4aca402f6836a585b3b93a2a64655bf549 -->

```csharp
InnoEngine.Rendering.TextureColorSpace.Srgb = 1
```

Color samples are decoded from sRGB at sampling time.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/TextureColorSpace.cs#L26).
