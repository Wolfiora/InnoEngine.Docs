---
title: "UiBackendCatalog"
description: "Reference for UiBackendCatalog in Inno.Adapter.UI."
uid: api.inno.adapter.ui.3def526de2033208
kind: api
owners:
  - Inno.Adapter.UI
apiSurface: source-clr
contracts:
  - project.inno-adapter-ui#provider-and-catalog-contract
---
# `UiBackendCatalog`

This reference describes `UiBackendCatalog` in `Inno.Adapter.UI`. Read the [shared contract](../../projects/inno-adapter-ui.md#provider-and-catalog-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Adapter.UI.IUiBackendFactory`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1257173312ad73e0) | Method |
| [`CreateBackend`](#api-a99522c2e1a66596) | Method |
| [`supportedBackends`](#api-8069ed0c49790e3f) | Property |

## Type declaration

<a id="api-3def526de2033208"></a>
<!-- api: T:Inno.Adapter.UI.UiBackendCatalog bbd80939a1019e71ff23c0b35f58826431ebd68c298ce3d6a50f745bd66a079e -->

```csharp
public sealed class Inno.Adapter.UI.UiBackendCatalog : Inno.Adapter.UI.IUiBackendFactory
```

Resolves UI providers from one immutable composition-owned registration snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/adapters/ui/Inno.Adapter.UI/UiBackendCatalog.cs#L12).

## `#ctor`

<a id="api-1257173312ad73e0"></a>
<!-- api: M:Inno.Adapter.UI.UiBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.UI.UiBackendProvider}) 48244041d24ab377db6998df9aeccd1f60efb44a1d877942338d8bd67003e9fb -->

```csharp
public Inno.Adapter.UI.UiBackendCatalog.UiBackendCatalog(System.Collections.Generic.IEnumerable<Inno.Adapter.UI.UiBackendProvider> providers)
```

Validates and captures a complete provider set.

**Parameter `providers`:** Providers owned by this composition generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/adapters/ui/Inno.Adapter.UI/UiBackendCatalog.cs#L22).

## `CreateBackend`

<a id="api-a99522c2e1a66596"></a>
<!-- api: M:Inno.Adapter.UI.UiBackendCatalog.CreateBackend(Inno.Adapter.UI.UiBackendId) 7df27e821aefa2b0d875137c9baf94ba550248d11fe99b87de11e7a231413e1e -->

```csharp
public Inno.UI.IUiBackend Inno.Adapter.UI.UiBackendCatalog.CreateBackend(Inno.Adapter.UI.UiBackendId backend)
```

Creates a backend using this implementation's validated inputs.

**Parameter `backend`:** The backend consumed by create backend; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated iui backend that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/adapters/ui/Inno.Adapter.UI/UiBackendCatalog.cs#L45).

## `supportedBackends`

<a id="api-8069ed0c49790e3f"></a>
<!-- api: P:Inno.Adapter.UI.UiBackendCatalog.supportedBackends af9f85695eafc1e04a42a371112b7c89a5c4aa6bad06cabcbed7ec4bfb1836bd -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Adapter.UI.UiBackendId> Inno.Adapter.UI.UiBackendCatalog.supportedBackends { get; }
```

Gets backend registrations available in this type generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/adapters/ui/Inno.Adapter.UI/UiBackendCatalog.cs#L34).
