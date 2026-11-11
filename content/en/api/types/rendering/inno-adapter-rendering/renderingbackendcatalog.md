---
title: "RenderingBackendCatalog"
description: "Reference for RenderingBackendCatalog in Inno.Adapter.Rendering."
uid: api.inno.adapter.rendering.9f8daef0b4422088
kind: api
owners:
  - Inno.Adapter.Rendering
apiSurface: source-clr
contracts:
  - project.inno-adapter-rendering
---
# `RenderingBackendCatalog`

This reference describes `RenderingBackendCatalog` in `Inno.Adapter.Rendering`. Read the [shared contract](../../../projects/inno-adapter-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Adapter.Rendering.IRenderingBackendFactory`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-addcff754596e9b7) | Method |
| [`CreateCompositionProgramProvider`](#api-ea0b910ee7de75df) | Method |
| [`CreateDevice`](#api-5884c41e906c795e) | Method |
| [`supportedBackends`](#api-a935b65febdf7db0) | Property |

## Type declaration

<a id="api-9f8daef0b4422088"></a>
<!-- api: T:Inno.Adapter.Rendering.RenderingBackendCatalog c62d8c8325b4fffa4e66e3674217901a71fa0634ba67da7f350a38ed541caa4f -->

```csharp
public sealed class Inno.Adapter.Rendering.RenderingBackendCatalog : Inno.Adapter.Rendering.IRenderingBackendFactory
```

Resolves runtime providers from one immutable composition-owned registration snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendCatalog.cs#L11).

## `#ctor`

<a id="api-addcff754596e9b7"></a>
<!-- api: M:Inno.Adapter.Rendering.RenderingBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.Rendering.RenderingBackendProvider}) 668fe224e648a153fed598887b4ae4c1ff18a8949b1bee5b77ef2bc016174e9b -->

```csharp
public Inno.Adapter.Rendering.RenderingBackendCatalog.RenderingBackendCatalog(System.Collections.Generic.IEnumerable<Inno.Adapter.Rendering.RenderingBackendProvider> providers)
```

Validates and captures a complete set of runtime providers.

**Parameter `providers`:** Providers whose lifetime is owned by this composition generation.

**Throws `System.ArgumentException`:** A provider is null, has no ID, or duplicates an ID.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendCatalog.cs#L24).

## `CreateCompositionProgramProvider`

<a id="api-ea0b910ee7de75df"></a>
<!-- api: M:Inno.Adapter.Rendering.RenderingBackendCatalog.CreateCompositionProgramProvider(Inno.Adapter.Rendering.RenderingBackendId) ca34599a2e7fb7b7fbae451504d093ce25e3fc69cfe7eb5964c64c19bb319d91 -->

```csharp
public Inno.Rendering.IRenderLayerCompositionProgramProvider Inno.Adapter.Rendering.RenderingBackendCatalog.CreateCompositionProgramProvider(Inno.Adapter.Rendering.RenderingBackendId backend)
```

Resolves a backend-owned program provider for ordered render layer composition.

**Parameter `backend`:** Stable identity of the selected rendering backend.

**Returns:** A provider compatible with devices created by the same backend registration.

**Throws `System.NotSupportedException`:** No provider is registered for this exact backend identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendCatalog.cs#L78).

## `CreateDevice`

<a id="api-5884c41e906c795e"></a>
<!-- api: M:Inno.Adapter.Rendering.RenderingBackendCatalog.CreateDevice(Inno.Adapter.Rendering.RenderingBackendId,Inno.Adapter.Rendering.RenderingBackendOptions) 12fedce7140a1a9b0cb1761dc32953d819f156cf02ef34ccbcb61b4bfd5cb1b2 -->

```csharp
public Inno.Rendering.IRenderDevice Inno.Adapter.Rendering.RenderingBackendCatalog.CreateDevice(Inno.Adapter.Rendering.RenderingBackendId backend, Inno.Adapter.Rendering.RenderingBackendOptions options)
```

Creates a device using this implementation's validated inputs.

**Parameter `backend`:** The backend consumed by create device; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `options`:** The validated configuration that controls this operation.

**Returns:** The validated irender device that represents the completed operation.

**Throws `System.NotSupportedException`:** No provider is registered for this exact backend ID.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendCatalog.cs#L55).

## `supportedBackends`

<a id="api-a935b65febdf7db0"></a>
<!-- api: P:Inno.Adapter.Rendering.RenderingBackendCatalog.supportedBackends ce93c6d8fcc3912883df760e86b0a42b5e90acf14b318f9736c69a9923e44495 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Adapter.Rendering.RenderingBackendId> Inno.Adapter.Rendering.RenderingBackendCatalog.supportedBackends { get; }
```

Gets backend registrations available in this type generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering/RenderingBackendCatalog.cs#L38).
