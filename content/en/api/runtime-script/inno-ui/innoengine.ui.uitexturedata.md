---
title: "UiTextureData"
description: "Reference for UiTextureData in Inno.UI."
uid: api.inno.ui.runtime-script.42c5734f13434cb4
kind: api
owners:
  - Inno.UI
apiSurface: runtime-script
contracts:
  - project.inno-ui#document-and-frame-contract
  - manual.scripting.use-script-api
---
# `UiTextureData`

This reference describes `UiTextureData` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-43c86c1bb0421941) | Method |
| [`height`](#api-dc6b7e28cd943764) | Property |
| [`pixels`](#api-0a9071c0330a7a3f) | Property |
| [`width`](#api-5ceddc6064655f36) | Property |

## Type declaration

<a id="api-42c5734f13434cb4"></a>
<!-- api: T:InnoEngine.UI.UiTextureData 5c8c9a3cd02e03740b49bdd654e0a7a3184ec68baf39344d12e643fd9c389310 -->

```csharp
public sealed class InnoEngine.UI.UiTextureData
```

Contains immutable RGBA8 texture pixels addressable by a document source name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L147).

## `#ctor`

<a id="api-43c86c1bb0421941"></a>
<!-- api: M:InnoEngine.UI.UiTextureData.#ctor(System.Int32,System.Int32,System.ReadOnlySpan{System.Byte}) 01c29efde9a9660322223c3183fc0e361231814a69f8103da13db001619ebe67 -->

```csharp
public InnoEngine.UI.UiTextureData.UiTextureData(int width, int height, System.ReadOnlySpan<byte> pixels)
```

Creates a validated immutable texture.

**Parameter `width`:** The positive texture width.

**Parameter `height`:** The positive texture height.

**Parameter `pixels`:** Tightly packed RGBA8 pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L163).

## `height`

<a id="api-dc6b7e28cd943764"></a>
<!-- api: P:InnoEngine.UI.UiTextureData.height b6820d0c0c2df454cc1a584b915f2ced9b62219c04b258272dbe798c7054755b -->

```csharp
public int InnoEngine.UI.UiTextureData.height { get; }
```

Gets the texture height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L184).

## `pixels`

<a id="api-0a9071c0330a7a3f"></a>
<!-- api: P:InnoEngine.UI.UiTextureData.pixels 9a52ecdfc0e4359e4b0582a786dc17ea7887c1b65886f5e84e2ad496a5386621 -->

```csharp
public System.ReadOnlyMemory<byte> InnoEngine.UI.UiTextureData.pixels { get; }
```

Gets the immutable RGBA8 pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L188).

## `width`

<a id="api-5ceddc6064655f36"></a>
<!-- api: P:InnoEngine.UI.UiTextureData.width a16dac77cba35c9e449f6eb67a98abeb8d265fbd5a0cf1d7f982cb80f3092cdd -->

```csharp
public int InnoEngine.UI.UiTextureData.width { get; }
```

Gets the texture width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiTypes.cs#L180).
