---
title: "DefaultAuthoringAdapterCatalog"
description: "Reference for DefaultAuthoringAdapterCatalog in Inno.Adapter.Authoring.Default."
uid: api.inno.adapter.authoring.default.b36bacc5f420d055
kind: api
owners:
  - Inno.Adapter.Authoring.Default
apiSurface: source-clr
contracts:
  - project.inno-adapter-authoring-default
---
# `DefaultAuthoringAdapterCatalog`

This reference describes `DefaultAuthoringAdapterCatalog` in `Inno.Adapter.Authoring.Default`. Read the [shared contract](../../../projects/inno-adapter-authoring-default.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Adapter.Presentation.IAuthoringAdapterCatalog`, `Inno.Adapter.Rendering.IRenderingAuthoringBackendFactory`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b50342efa8d0abdc) | Method |
| [`audio`](#api-66f7be26e3759abd) | Property |
| [`input`](#api-b536201a6e2f293a) | Property |
| [`platform`](#api-815c4e3b261c8ee6) | Property |
| [`presentation`](#api-5d8fcf24b0cbdc45) | Property |
| [`rendering`](#api-5181801a33b56c02) | Property |
| [`renderingAuthoring`](#api-c51aeb97c8639452) | Property |
| [`storage`](#api-2bb8f0ebc5a839fe) | Property |
| [`text`](#api-9cecb188be78839c) | Property |
| [`ui`](#api-4ef1f157585b8660) | Property |

## Type declaration

<a id="api-b36bacc5f420d055"></a>
<!-- api: T:Inno.Adapter.Authoring.Default.DefaultAuthoringAdapterCatalog 19b95913d7f1233e7f18e18af8d9dbd20a2f46776418008e18a9cec03ca5212a -->

```csharp
public sealed class Inno.Adapter.Authoring.Default.DefaultAuthoringAdapterCatalog : Inno.Adapter.Presentation.IAuthoringAdapterCatalog, Inno.Adapter.Rendering.IRenderingAuthoringBackendFactory
```

Combines explicitly supplied rendering toolchains and standard ImGui presentation to the built-in runtime adapter catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Authoring.Default/DefaultAuthoringAdapterCatalog.cs#L20).

## `#ctor`

<a id="api-b50342efa8d0abdc"></a>
<!-- api: M:Inno.Adapter.Authoring.Default.DefaultAuthoringAdapterCatalog.#ctor(Inno.Adapter.Default.DefaultAdapterCatalogOptions,System.Collections.Generic.IEnumerable{Inno.Adapter.Rendering.RenderingAuthoringBackendProvider},System.Collections.Generic.IEnumerable{Inno.Adapter.Presentation.PresentationBackendProvider}) 41ac992fa3260d6bf3c1eecea9eb3868293fa50667c3dda4dee7d8880bd26d5b -->

```csharp
public Inno.Adapter.Authoring.Default.DefaultAuthoringAdapterCatalog.DefaultAuthoringAdapterCatalog(Inno.Adapter.Default.DefaultAdapterCatalogOptions options, System.Collections.Generic.IEnumerable<Inno.Adapter.Rendering.RenderingAuthoringBackendProvider> authoringProviders, System.Collections.Generic.IEnumerable<Inno.Adapter.Presentation.PresentationBackendProvider> presentationProviders)
```

Creates paired runtime and authoring registrations before any native device is initialized.

**Parameter `options`:** The host's explicit runtime service configuration.

**Parameter `authoringProviders`:** Complete matching authoring registrations with explicit product compilation targets.

**Parameter `presentationProviders`:** Explicit complete presentation registrations. An empty sequence registers none.

**Throws `System.ArgumentException`:** The runtime and authoring backend registrations do not match.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Authoring.Default/DefaultAuthoringAdapterCatalog.cs#L43).

## `audio`

<a id="api-66f7be26e3759abd"></a>
<!-- api: P:Inno.Adapter.Authoring.Default.DefaultAuthoringAdapterCatalog.audio ffacc61f7b2f442e8b9bff91793835425b80d034898241eef07ebbe7e99c7424 -->

```csharp
public Inno.Adapter.Audio.IAudioBackendFactory Inno.Adapter.Authoring.Default.DefaultAuthoringAdapterCatalog.audio { get; }
```

Gets the built-in audio backend factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Authoring.Default/DefaultAuthoringAdapterCatalog.cs#L83).

## `input`

<a id="api-b536201a6e2f293a"></a>
<!-- api: P:Inno.Adapter.Authoring.Default.DefaultAuthoringAdapterCatalog.input 45f2a619ca9e6bceeb840d6fb7b6b82ae7c511d8706bca7cd2cae49e1f696268 -->

```csharp
public Inno.Adapter.Input.IInputBackendFactory Inno.Adapter.Authoring.Default.DefaultAuthoringAdapterCatalog.input { get; }
```

Gets the built-in input backend factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Authoring.Default/DefaultAuthoringAdapterCatalog.cs#L68).

## `platform`

<a id="api-815c4e3b261c8ee6"></a>
<!-- api: P:Inno.Adapter.Authoring.Default.DefaultAuthoringAdapterCatalog.platform 0a3989845b6414939029d59ead0ba1ef8d3b2d128807058af834e36cc1754054 -->

```csharp
public Inno.Adapter.Platform.IPlatformBackendFactory Inno.Adapter.Authoring.Default.DefaultAuthoringAdapterCatalog.platform { get; }
```

Gets the built-in platform backend factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Authoring.Default/DefaultAuthoringAdapterCatalog.cs#L63).

## `presentation`

<a id="api-5d8fcf24b0cbdc45"></a>
<!-- api: P:Inno.Adapter.Authoring.Default.DefaultAuthoringAdapterCatalog.presentation 80d8819cf92bf24401f3179d21b1f12d3bd2c1a2ff33209c2618e7a11a8857f6 -->

```csharp
public Inno.Adapter.Presentation.IPresentationBackendFactory Inno.Adapter.Authoring.Default.DefaultAuthoringAdapterCatalog.presentation { get; }
```

Gets the built-in graphical host-presentation factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Authoring.Default/DefaultAuthoringAdapterCatalog.cs#L103).

## `rendering`

<a id="api-5181801a33b56c02"></a>
<!-- api: P:Inno.Adapter.Authoring.Default.DefaultAuthoringAdapterCatalog.rendering b77737085e5a14b1a59c28fdc7e20fec969d742aae10191b7c4312b127b66316 -->

```csharp
public Inno.Adapter.Rendering.IRenderingBackendFactory Inno.Adapter.Authoring.Default.DefaultAuthoringAdapterCatalog.rendering { get; }
```

Gets the built-in runtime rendering backend factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Authoring.Default/DefaultAuthoringAdapterCatalog.cs#L78).

## `renderingAuthoring`

<a id="api-c51aeb97c8639452"></a>
<!-- api: P:Inno.Adapter.Authoring.Default.DefaultAuthoringAdapterCatalog.renderingAuthoring 66d0668e224e7c0977cf81b03e769b1336cd69559e2aff45c58f249eaf4f20a2 -->

```csharp
public Inno.Adapter.Rendering.IRenderingAuthoringBackendFactory Inno.Adapter.Authoring.Default.DefaultAuthoringAdapterCatalog.renderingAuthoring { get; }
```

Gets the built-in rendering authoring toolchain factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Authoring.Default/DefaultAuthoringAdapterCatalog.cs#L98).

## `storage`

<a id="api-2bb8f0ebc5a839fe"></a>
<!-- api: P:Inno.Adapter.Authoring.Default.DefaultAuthoringAdapterCatalog.storage fe6b2ca6c3b3fe0ca04c03a5df8d6f62f9b7a6f1d8ba5ca07e7cf2bede6d3132 -->

```csharp
public Inno.Adapter.Storage.IStorageBackendFactory Inno.Adapter.Authoring.Default.DefaultAuthoringAdapterCatalog.storage { get; }
```

Gets the built-in application-storage backend factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Authoring.Default/DefaultAuthoringAdapterCatalog.cs#L73).

## `text`

<a id="api-9cecb188be78839c"></a>
<!-- api: P:Inno.Adapter.Authoring.Default.DefaultAuthoringAdapterCatalog.text 690d8ccce71238b9f95f9a3bacadb5d55938af0bacdeb03130376a5d4d86c2c7 -->

```csharp
public Inno.Adapter.Text.ITextBackendFactory Inno.Adapter.Authoring.Default.DefaultAuthoringAdapterCatalog.text { get; }
```

Gets the built-in Unicode text backend factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Authoring.Default/DefaultAuthoringAdapterCatalog.cs#L88).

## `ui`

<a id="api-4ef1f157585b8660"></a>
<!-- api: P:Inno.Adapter.Authoring.Default.DefaultAuthoringAdapterCatalog.ui c6f05a6ea0c96771380289cf725f2fd2f468018eb96ce0e8ce919915bb256dc4 -->

```csharp
public Inno.Adapter.UI.IUiBackendFactory Inno.Adapter.Authoring.Default.DefaultAuthoringAdapterCatalog.ui { get; }
```

Gets the built-in retained-mode UI backend factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Authoring.Default/DefaultAuthoringAdapterCatalog.cs#L93).
