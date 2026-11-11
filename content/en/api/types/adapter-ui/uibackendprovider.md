---
title: "UiBackendProvider"
description: "Reference for UiBackendProvider in Inno.Adapter.UI."
uid: api.inno.adapter.ui.6293e0c692c4dfe5
kind: api
owners:
  - Inno.Adapter.UI
apiSurface: source-clr
contracts:
  - project.inno-adapter-ui#provider-and-catalog-contract
---
# `UiBackendProvider`

This reference describes `UiBackendProvider` in `Inno.Adapter.UI`. Read the [shared contract](../../projects/inno-adapter-ui.md#provider-and-catalog-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5f6b6abb4b2b7a69) | Method |
| [`CreateBackend`](#api-30be8736bfac5a6e) | Method |
| [`id`](#api-40319a37560893aa) | Property |

## Type declaration

<a id="api-6293e0c692c4dfe5"></a>
<!-- api: T:Inno.Adapter.UI.UiBackendProvider 1b2c3c0c0ef676833be92aa09de6d2bdac841e9fa190532bc49b78e3a4e4afa2 -->

```csharp
public abstract class Inno.Adapter.UI.UiBackendProvider
```

Creates one concrete UI backend registered by a composition root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/adapters/ui/Inno.Adapter.UI/UiBackendProvider.cs#L9).

## `#ctor`

<a id="api-5f6b6abb4b2b7a69"></a>
<!-- api: M:Inno.Adapter.UI.UiBackendProvider.#ctor(Inno.Adapter.UI.UiBackendId) a7e39ea4330dad990d316239eaa06b423d6a00daf1d9158b6e994a3e40655d0e -->

```csharp
protected Inno.Adapter.UI.UiBackendProvider.UiBackendProvider(Inno.Adapter.UI.UiBackendId id)
```

Captures the registration identity assigned by the composition owner.

**Parameter `id`:** The assigned implementation identity.

**Throws `System.ArgumentException`:** The identity is unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/adapters/ui/Inno.Adapter.UI/UiBackendProvider.cs#L20).

## `CreateBackend`

<a id="api-30be8736bfac5a6e"></a>
<!-- api: M:Inno.Adapter.UI.UiBackendProvider.CreateBackend cf1a93e68086365e9297c44736564cd294ac581e01a62df753cf6e376ef5a47c -->

```csharp
public abstract Inno.UI.IUiBackend Inno.Adapter.UI.UiBackendProvider.CreateBackend()
```

Creates one caller-owned backend generation.

**Returns:** A new backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/adapters/ui/Inno.Adapter.UI/UiBackendProvider.cs#L38).

## `id`

<a id="api-40319a37560893aa"></a>
<!-- api: P:Inno.Adapter.UI.UiBackendProvider.id 584cd981b7f2043e7945740adf8a1280ca538caef1be2a08276525dbcb9c25f8 -->

```csharp
public Inno.Adapter.UI.UiBackendId Inno.Adapter.UI.UiBackendProvider.id { get; }
```

Gets this provider's stable implementation identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/adapters/ui/Inno.Adapter.UI/UiBackendProvider.cs#L30).
