---
title: "UiTextureData"
description: "Reference for UiTextureData in Inno.UI."
uid: api.inno.ui.cd4a6e52056aa20d
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UiTextureData`

This reference describes `UiTextureData` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-bd7d8e3d245c609f) | Method |
| [`height`](#api-a84e06ffc5c6bcb9) | Property |
| [`pixels`](#api-119c37489f380b01) | Property |
| [`width`](#api-33376922350a4b8f) | Property |

## Type declaration

<a id="api-cd4a6e52056aa20d"></a>
<!-- api: T:Inno.UI.UiTextureData 52d0ecff47c81233773b05d441251d386b95fc64ced3e309ef740fa7d6dd998e -->

```csharp
public sealed class Inno.UI.UiTextureData
```

Contains immutable RGBA8 texture pixels addressable by a document source name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L147).

## `#ctor`

<a id="api-bd7d8e3d245c609f"></a>
<!-- api: M:Inno.UI.UiTextureData.#ctor(System.Int32,System.Int32,System.ReadOnlySpan{System.Byte}) 79d6f8e81f6275c6f79c321fd8e191aba96039ac1c5d2ba55ba42ae78ba3f8b6 -->

```csharp
public Inno.UI.UiTextureData.UiTextureData(int width, int height, System.ReadOnlySpan<byte> pixels)
```

Creates a validated immutable texture.

**Parameter `width`:** The positive texture width.

**Parameter `height`:** The positive texture height.

**Parameter `pixels`:** Tightly packed RGBA8 pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L163).

## `height`

<a id="api-a84e06ffc5c6bcb9"></a>
<!-- api: P:Inno.UI.UiTextureData.height 8d41989e55c1347084f815ee9fa69a288645ba43f2f3afc3c940c551d6ce7f8a -->

```csharp
public int Inno.UI.UiTextureData.height { get; }
```

Gets the texture height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L184).

## `pixels`

<a id="api-119c37489f380b01"></a>
<!-- api: P:Inno.UI.UiTextureData.pixels 238a636af1f5f780da1d16730be5867ea49c82a63e13fdd622f399d040416cd8 -->

```csharp
public System.ReadOnlyMemory<byte> Inno.UI.UiTextureData.pixels { get; }
```

Gets the immutable RGBA8 pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L188).

## `width`

<a id="api-33376922350a4b8f"></a>
<!-- api: P:Inno.UI.UiTextureData.width 721d10bb326053288d3a282fd3c136f7d31c6bf86fb44a9c28f8aea09800525a -->

```csharp
public int Inno.UI.UiTextureData.width { get; }
```

Gets the texture width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L180).
