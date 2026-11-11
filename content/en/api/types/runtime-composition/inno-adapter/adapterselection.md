---
title: "AdapterSelection"
description: "Reference for AdapterSelection in Inno.Adapter."
uid: api.inno.adapter.70fd3f41598e06cf
kind: api
owners:
  - Inno.Adapter
apiSurface: source-clr
contracts:
  - project.inno-adapter
---
# `AdapterSelection`

This reference describes `AdapterSelection` in `Inno.Adapter`. Read the [shared contract](../../../projects/inno-adapter.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Validate`](#api-5a9caa2bed6f62d6) | Method |
| [`audio`](#api-0422a7737c486a4d) | Property |
| [`input`](#api-479fd33d7c45f4a0) | Property |
| [`platform`](#api-3f782e568d6d125e) | Property |
| [`rendering`](#api-aaaa7b541cf7297e) | Property |
| [`storage`](#api-ab78ba3c2e0bb4bd) | Property |
| [`text`](#api-c1902c578a2f2480) | Property |
| [`ui`](#api-909496a71ef5ec5a) | Property |

## Type declaration

<a id="api-70fd3f41598e06cf"></a>
<!-- api: T:Inno.Adapter.AdapterSelection 1c34fa201f3258cdcae25b9b6568c0fc4583f7a2122914c2e1908ca31b9d0517 -->

```csharp
public readonly struct Inno.Adapter.AdapterSelection
```

Selects one implementation for every replaceable host backend family.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/common/Inno.Adapter/AdapterSelection.cs#L17).

## `Validate`

<a id="api-5a9caa2bed6f62d6"></a>
<!-- api: M:Inno.Adapter.AdapterSelection.Validate(Inno.Adapter.IAdapterCatalog) cb1520625393b719cc8a58193a47a01dab3ddb530289a87802f4480d6cc07f53 -->

```csharp
public void Inno.Adapter.AdapterSelection.Validate(Inno.Adapter.IAdapterCatalog catalog)
```

Validates every selected registration before the composition creates any service.

**Parameter `catalog`:** The complete, composition-owned factory snapshot.

**Throws `System.ArgumentNullException`:** The catalog is null.

**Throws `System.NotSupportedException`:** A selected implementation is unassigned or absent from its domain catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/common/Inno.Adapter/AdapterSelection.cs#L66).

## `audio`

<a id="api-0422a7737c486a4d"></a>
<!-- api: P:Inno.Adapter.AdapterSelection.audio 3f76ea8d4313ecc25f626d3f978d8f2fe14915f5db8b084e2b3224fa36411bd5 -->

```csharp
public Inno.Adapter.Audio.AudioBackendId Inno.Adapter.AdapterSelection.audio { get; init; }
```

Gets the selected audio backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/common/Inno.Adapter/AdapterSelection.cs#L42).

## `input`

<a id="api-479fd33d7c45f4a0"></a>
<!-- api: P:Inno.Adapter.AdapterSelection.input 32d353b65fb4671e929222b2ac46fb035c2e0db49bc78c16e13bb11c480c9022 -->

```csharp
public Inno.Adapter.Input.InputBackendId Inno.Adapter.AdapterSelection.input { get; init; }
```

Gets the selected input backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/common/Inno.Adapter/AdapterSelection.cs#L27).

## `platform`

<a id="api-3f782e568d6d125e"></a>
<!-- api: P:Inno.Adapter.AdapterSelection.platform 1dd2b788d5c5fd1d3f497767554f8a6b0ab2bfdd2bd3f173804d527f9d6f98b0 -->

```csharp
public Inno.Adapter.Platform.PlatformBackendId Inno.Adapter.AdapterSelection.platform { get; init; }
```

Gets the selected platform backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/common/Inno.Adapter/AdapterSelection.cs#L22).

## `rendering`

<a id="api-aaaa7b541cf7297e"></a>
<!-- api: P:Inno.Adapter.AdapterSelection.rendering 72c76531b78062509770cb4576171c9ce5999571514e32a9963f395c0a5887b7 -->

```csharp
public Inno.Adapter.Rendering.RenderingBackendId Inno.Adapter.AdapterSelection.rendering { get; init; }
```

Gets the selected rendering backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/common/Inno.Adapter/AdapterSelection.cs#L37).

## `storage`

<a id="api-ab78ba3c2e0bb4bd"></a>
<!-- api: P:Inno.Adapter.AdapterSelection.storage f6395f8c643eb5e2bcb14b545620ecd20a9b39ec055da0f7cf397dcfdb4fe1f6 -->

```csharp
public Inno.Adapter.Storage.StorageBackendId Inno.Adapter.AdapterSelection.storage { get; init; }
```

Gets the selected storage backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/common/Inno.Adapter/AdapterSelection.cs#L32).

## `text`

<a id="api-c1902c578a2f2480"></a>
<!-- api: P:Inno.Adapter.AdapterSelection.text 5c8b7eda3f95a2c5ee086ffccacad0feba8516689a905cd6d3e0ba3caa2cc2c9 -->

```csharp
public Inno.Adapter.Text.TextBackendId Inno.Adapter.AdapterSelection.text { get; init; }
```

Gets the selected Unicode text backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/common/Inno.Adapter/AdapterSelection.cs#L47).

## `ui`

<a id="api-909496a71ef5ec5a"></a>
<!-- api: P:Inno.Adapter.AdapterSelection.ui 7f5cda8cdd628d580a438656a208bbd126e91868d1fb2ba3063c26266852d563 -->

```csharp
public Inno.Adapter.UI.UiBackendId Inno.Adapter.AdapterSelection.ui { get; init; }
```

Gets the selected retained-mode UI backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/common/Inno.Adapter/AdapterSelection.cs#L52).
