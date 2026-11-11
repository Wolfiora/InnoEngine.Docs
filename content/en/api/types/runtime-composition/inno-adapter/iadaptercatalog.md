---
title: "IAdapterCatalog"
description: "Reference for IAdapterCatalog in Inno.Adapter."
uid: api.inno.adapter.b740dcad45f86782
kind: api
owners:
  - Inno.Adapter
apiSurface: source-clr
contracts:
  - project.inno-adapter
---
# `IAdapterCatalog`

This reference describes `IAdapterCatalog` in `Inno.Adapter`. Read the [shared contract](../../../projects/inno-adapter.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`audio`](#api-5a4be95e78f04841) | Property |
| [`input`](#api-1c749bae1eab2125) | Property |
| [`platform`](#api-2d913070f72468e7) | Property |
| [`rendering`](#api-20ade1ebcf5d89cd) | Property |
| [`storage`](#api-cc8d6208375b74a6) | Property |
| [`text`](#api-531e40761315677e) | Property |
| [`ui`](#api-6af03297371105c2) | Property |

## Type declaration

<a id="api-b740dcad45f86782"></a>
<!-- api: T:Inno.Adapter.IAdapterCatalog 960399d1adcba03826b41fb4f5930cd8e760c8b43551539ac4bb14f9080dded8 -->

```csharp
public interface Inno.Adapter.IAdapterCatalog
```

Exposes factories for every replaceable host backend family without exposing implementations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/common/Inno.Adapter/IAdapterCatalog.cs#L14).

## `audio`

<a id="api-5a4be95e78f04841"></a>
<!-- api: P:Inno.Adapter.IAdapterCatalog.audio a12418b5e2649d0e147227a88d3353ea09301f8d25ec988b394963bf65277054 -->

```csharp
Inno.Adapter.Audio.IAudioBackendFactory Inno.Adapter.IAdapterCatalog.audio { get; }
```

Gets the audio backend factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/common/Inno.Adapter/IAdapterCatalog.cs#L39).

## `input`

<a id="api-1c749bae1eab2125"></a>
<!-- api: P:Inno.Adapter.IAdapterCatalog.input 3ed59e5d5a35f299ebcdec357da0262ef9a5c4bffe15915a68ec00f4eeb58c15 -->

```csharp
Inno.Adapter.Input.IInputBackendFactory Inno.Adapter.IAdapterCatalog.input { get; }
```

Gets the input backend factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/common/Inno.Adapter/IAdapterCatalog.cs#L24).

## `platform`

<a id="api-2d913070f72468e7"></a>
<!-- api: P:Inno.Adapter.IAdapterCatalog.platform 0f2bbf30d1c7e7f992409c1d2d4d772a118da26a54239f1c1755d4cbb5d923b8 -->

```csharp
Inno.Adapter.Platform.IPlatformBackendFactory Inno.Adapter.IAdapterCatalog.platform { get; }
```

Gets the platform backend factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/common/Inno.Adapter/IAdapterCatalog.cs#L19).

## `rendering`

<a id="api-20ade1ebcf5d89cd"></a>
<!-- api: P:Inno.Adapter.IAdapterCatalog.rendering e2585ee5baf3eaf5a36d29952cd5662bb6d21b279fa8bd6f47d2beebab78ce83 -->

```csharp
Inno.Adapter.Rendering.IRenderingBackendFactory Inno.Adapter.IAdapterCatalog.rendering { get; }
```

Gets the rendering backend factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/common/Inno.Adapter/IAdapterCatalog.cs#L34).

## `storage`

<a id="api-cc8d6208375b74a6"></a>
<!-- api: P:Inno.Adapter.IAdapterCatalog.storage 17a75ce300df9abbcb77454877bd0b8c5d0b2e913a736baec1d5d00db7e7fb90 -->

```csharp
Inno.Adapter.Storage.IStorageBackendFactory Inno.Adapter.IAdapterCatalog.storage { get; }
```

Gets the application-storage backend factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/common/Inno.Adapter/IAdapterCatalog.cs#L29).

## `text`

<a id="api-531e40761315677e"></a>
<!-- api: P:Inno.Adapter.IAdapterCatalog.text 182c0ddcc5152576048e2caf965f8fcca00b38f4d650419fa9e8ee648bb97b7f -->

```csharp
Inno.Adapter.Text.ITextBackendFactory Inno.Adapter.IAdapterCatalog.text { get; }
```

Gets the Unicode text backend factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/common/Inno.Adapter/IAdapterCatalog.cs#L44).

## `ui`

<a id="api-6af03297371105c2"></a>
<!-- api: P:Inno.Adapter.IAdapterCatalog.ui 1d281cb5578824e4855d6a8a02dae5a3d2b25e618b3efd23e069a0fa97361bae -->

```csharp
Inno.Adapter.UI.IUiBackendFactory Inno.Adapter.IAdapterCatalog.ui { get; }
```

Gets the retained-mode UI backend factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/common/Inno.Adapter/IAdapterCatalog.cs#L49).
