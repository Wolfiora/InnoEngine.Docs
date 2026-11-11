---
title: "DefaultAdapterCatalog"
description: "Reference for DefaultAdapterCatalog in Inno.Adapter.Default."
uid: api.inno.adapter.default.074b9f3339c460a9
kind: api
owners:
  - Inno.Adapter.Default
apiSurface: source-clr
contracts:
  - project.inno-adapter-default
---
# `DefaultAdapterCatalog`

This reference describes `DefaultAdapterCatalog` in `Inno.Adapter.Default`. Read the [shared contract](../../../projects/inno-adapter-default.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Adapter.IAdapterCatalog`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-62f14808d3ddb81f) | Method |
| [`audio`](#api-edfa8706a937ec14) | Property |
| [`input`](#api-734e1564342d3f06) | Property |
| [`platform`](#api-6c71390f8d94e83d) | Property |
| [`rendering`](#api-d26ea08f1a838f81) | Property |
| [`storage`](#api-265d670beeb14995) | Property |
| [`text`](#api-40ad30925b8c6ca4) | Property |
| [`ui`](#api-b461fc8b4131d9bf) | Property |

## Type declaration

<a id="api-074b9f3339c460a9"></a>
<!-- api: T:Inno.Adapter.Default.DefaultAdapterCatalog 4bb125c5dfb17cbeea103030a8c780e4192be4349437bd86c7949a44f74a3267 -->

```csharp
public sealed class Inno.Adapter.Default.DefaultAdapterCatalog : Inno.Adapter.IAdapterCatalog
```

Composes independent, open provider catalogs for the standard engine distribution.

**Constraints:** Replacement sequences define the complete registrations for their domain.
The composition owns providers; service creation and disposal remain with each caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Default/DefaultAdapterCatalog.cs#L24).

## `#ctor`

<a id="api-62f14808d3ddb81f"></a>
<!-- api: M:Inno.Adapter.Default.DefaultAdapterCatalog.#ctor(Inno.Adapter.Default.DefaultAdapterCatalogOptions,System.Collections.Generic.IEnumerable{Inno.Adapter.UI.UiBackendProvider},System.Collections.Generic.IEnumerable{Inno.Adapter.Input.InputBackendProvider},System.Collections.Generic.IEnumerable{Inno.Adapter.Audio.AudioBackendProvider},System.Collections.Generic.IEnumerable{Inno.Adapter.Text.TextBackendProvider}) bec5c945967a014a6d565fa39be42a41905fbd3f1d0a80783cfcd2b508021049 -->

```csharp
public Inno.Adapter.Default.DefaultAdapterCatalog.DefaultAdapterCatalog(Inno.Adapter.Default.DefaultAdapterCatalogOptions options, System.Collections.Generic.IEnumerable<Inno.Adapter.UI.UiBackendProvider>? uiProviders = null, System.Collections.Generic.IEnumerable<Inno.Adapter.Input.InputBackendProvider>? inputProviders = null, System.Collections.Generic.IEnumerable<Inno.Adapter.Audio.AudioBackendProvider>? audioProviders = null, System.Collections.Generic.IEnumerable<Inno.Adapter.Text.TextBackendProvider>? textProviders = null)
```

Captures each domain registration snapshot without initializing native services.

**Parameter `options`:** Explicit host configuration for location-dependent services.

**Parameter `uiProviders`:** Complete ui registrations, or null to use the bundled implementation.

**Parameter `inputProviders`:** Complete input registrations, or null to use the bundled implementation.

**Parameter `audioProviders`:** Complete audio registrations, or null to use the bundled implementation.

**Parameter `textProviders`:** Complete text registrations, or null to use the bundled implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Default/DefaultAdapterCatalog.cs#L52).

## `audio`

<a id="api-edfa8706a937ec14"></a>
<!-- api: P:Inno.Adapter.Default.DefaultAdapterCatalog.audio 3f07dae7ab1f47c7e164175fb0d4c8743a56dbf75b270a9672681500a8b2c72c -->

```csharp
public Inno.Adapter.Audio.IAudioBackendFactory Inno.Adapter.Default.DefaultAdapterCatalog.audio { get; }
```

Gets the composition-owned audio factory snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Default/DefaultAdapterCatalog.cs#L92).

## `input`

<a id="api-734e1564342d3f06"></a>
<!-- api: P:Inno.Adapter.Default.DefaultAdapterCatalog.input fcfc70853c4a35efe1bea0c25a0c61adb167048920fa47073e62c07505b4e29e -->

```csharp
public Inno.Adapter.Input.IInputBackendFactory Inno.Adapter.Default.DefaultAdapterCatalog.input { get; }
```

Gets the composition-owned input factory snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Default/DefaultAdapterCatalog.cs#L77).

## `platform`

<a id="api-6c71390f8d94e83d"></a>
<!-- api: P:Inno.Adapter.Default.DefaultAdapterCatalog.platform f9ab20de440c8b1799f16356907a0990658ad19f8cec1971db26a07ea8210518 -->

```csharp
public Inno.Adapter.Platform.IPlatformBackendFactory Inno.Adapter.Default.DefaultAdapterCatalog.platform { get; }
```

Gets the composition-owned platform factory snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Default/DefaultAdapterCatalog.cs#L72).

## `rendering`

<a id="api-d26ea08f1a838f81"></a>
<!-- api: P:Inno.Adapter.Default.DefaultAdapterCatalog.rendering 6ce0abefe875cfae62deec9b95dbcc69f3a5d4583c5702ca66b28d7eb72cf949 -->

```csharp
public Inno.Adapter.Rendering.IRenderingBackendFactory Inno.Adapter.Default.DefaultAdapterCatalog.rendering { get; }
```

Gets the composition-owned rendering factory snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Default/DefaultAdapterCatalog.cs#L87).

## `storage`

<a id="api-265d670beeb14995"></a>
<!-- api: P:Inno.Adapter.Default.DefaultAdapterCatalog.storage c4679ed64da36a8a9459f5702cbe962c08c176a52bb4501b6b9967ead6ea6411 -->

```csharp
public Inno.Adapter.Storage.IStorageBackendFactory Inno.Adapter.Default.DefaultAdapterCatalog.storage { get; }
```

Gets the composition-owned storage factory snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Default/DefaultAdapterCatalog.cs#L82).

## `text`

<a id="api-40ad30925b8c6ca4"></a>
<!-- api: P:Inno.Adapter.Default.DefaultAdapterCatalog.text ee3a2fa3ae5eb56691a7b693d3dbb910345b65af62cb95df85d7e5b7cf2697c1 -->

```csharp
public Inno.Adapter.Text.ITextBackendFactory Inno.Adapter.Default.DefaultAdapterCatalog.text { get; }
```

Gets the composition-owned text factory snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Default/DefaultAdapterCatalog.cs#L97).

## `ui`

<a id="api-b461fc8b4131d9bf"></a>
<!-- api: P:Inno.Adapter.Default.DefaultAdapterCatalog.ui 31667cfc098e9ad7f4047267d0987ec4e4660de0cc4a5087df2f92160f5527f0 -->

```csharp
public Inno.Adapter.UI.IUiBackendFactory Inno.Adapter.Default.DefaultAdapterCatalog.ui { get; }
```

Gets the composition-owned ui factory snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Default/DefaultAdapterCatalog.cs#L102).
