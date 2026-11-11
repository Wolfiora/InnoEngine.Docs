---
title: "RmlUiBackendProvider"
description: "Reference for RmlUiBackendProvider in Inno.Adapter.UI.RmlUi."
uid: api.inno.adapter.ui.rmlui.44bfee6f76f83a3b
kind: api
owners:
  - Inno.Adapter.UI.RmlUi
apiSurface: source-clr
contracts:
  - project.inno-adapter-ui-rmlui#native-session-and-transfer-contract
---
# `RmlUiBackendProvider`

This reference describes `RmlUiBackendProvider` in `Inno.Adapter.UI.RmlUi`. Read the [shared contract](../../projects/inno-adapter-ui-rmlui.md#native-session-and-transfer-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Adapter.UI.UiBackendProvider`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c568bfee6f020879) | Method |
| [`CreateBackend`](#api-54d9d9c54436f309) | Method |

## Type declaration

<a id="api-44bfee6f76f83a3b"></a>
<!-- api: T:Inno.Adapter.UI.RmlUi.RmlUiBackendProvider 2ff6581915ea03a4bba23dffc722e3fed6a30f113078c55e47e70707488ccda9 -->

```csharp
public sealed class Inno.Adapter.UI.RmlUi.RmlUiBackendProvider : Inno.Adapter.UI.UiBackendProvider
```

Supplies independently owned retained UI backend generations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiBackendProvider.cs#L8).

## `#ctor`

<a id="api-c568bfee6f020879"></a>
<!-- api: M:Inno.Adapter.UI.RmlUi.RmlUiBackendProvider.#ctor 648a60394af9211a8027b14f024ccbf91a22652808c00aa192b621a37910a7d3 -->

```csharp
public Inno.Adapter.UI.RmlUi.RmlUiBackendProvider.RmlUiBackendProvider()
```

Creates a composition-owned registration for the bundled implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiBackendProvider.cs#L13).

## `CreateBackend`

<a id="api-54d9d9c54436f309"></a>
<!-- api: M:Inno.Adapter.UI.RmlUi.RmlUiBackendProvider.CreateBackend e97665d2f777ada4047caeba6cd37e380979f1a6fa545c4083d5713751c62bef -->

```csharp
public override Inno.UI.IUiBackend Inno.Adapter.UI.RmlUi.RmlUiBackendProvider.CreateBackend()
```

Creates one caller-owned backend generation.

**Returns:** A new backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi/RmlUiBackendProvider.cs#L16).
