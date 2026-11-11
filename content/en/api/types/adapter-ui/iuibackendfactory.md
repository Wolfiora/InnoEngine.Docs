---
title: "IUiBackendFactory"
description: "Reference for IUiBackendFactory in Inno.Adapter.UI."
uid: api.inno.adapter.ui.8e24396f5941ff74
kind: api
owners:
  - Inno.Adapter.UI
apiSurface: source-clr
contracts:
  - project.inno-adapter-ui#provider-and-catalog-contract
---
# `IUiBackendFactory`

This reference describes `IUiBackendFactory` in `Inno.Adapter.UI`. Read the [shared contract](../../projects/inno-adapter-ui.md#provider-and-catalog-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`CreateBackend`](#api-5f5acb29571ecff0) | Method |
| [`supportedBackends`](#api-eb33947380dc5a1f) | Property |

## Type declaration

<a id="api-8e24396f5941ff74"></a>
<!-- api: T:Inno.Adapter.UI.IUiBackendFactory e88c4a503e86c68dcb52276af830d57bb5afde6e7d9e5b6754cf599c719d197c -->

```csharp
public interface Inno.Adapter.UI.IUiBackendFactory
```

Creates isolated UI backends without exposing implementation assemblies to composition code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/adapters/ui/Inno.Adapter.UI/IUiBackendFactory.cs#L9).

## `CreateBackend`

<a id="api-5f5acb29571ecff0"></a>
<!-- api: M:Inno.Adapter.UI.IUiBackendFactory.CreateBackend(Inno.Adapter.UI.UiBackendId) d18aa6c512041f14f1f3151cc49bd8889fe673744b0a3aea598821506c2a0db3 -->

```csharp
Inno.UI.IUiBackend Inno.Adapter.UI.IUiBackendFactory.CreateBackend(Inno.Adapter.UI.UiBackendId backend)
```

Creates one caller-owned UI backend.

**Parameter `backend`:** The selected backend implementation.

**Returns:** A newly allocated UI backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/adapters/ui/Inno.Adapter.UI/IUiBackendFactory.cs#L25).

## `supportedBackends`

<a id="api-eb33947380dc5a1f"></a>
<!-- api: P:Inno.Adapter.UI.IUiBackendFactory.supportedBackends b54d64c12769185fae3d2e449f2ef013a7193c391ade86f087c732891268dd11 -->

```csharp
System.Collections.Generic.IReadOnlyList<Inno.Adapter.UI.UiBackendId> Inno.Adapter.UI.IUiBackendFactory.supportedBackends { get; }
```

Gets exact backend identities available in this composition generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/adapters/ui/Inno.Adapter.UI/IUiBackendFactory.cs#L14).
