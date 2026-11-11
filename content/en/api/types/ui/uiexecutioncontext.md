---
title: "UiExecutionContext"
description: "Reference for UiExecutionContext in Inno.UI."
uid: api.inno.ui.76f09d8d79a995a1
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UiExecutionContext`

This reference describes `UiExecutionContext` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`EnterScope`](#api-796005657aa6ffca) | Method |
| [`current`](#api-56fb25775bca139d) | Property |

## Type declaration

<a id="api-76f09d8d79a995a1"></a>
<!-- api: T:Inno.UI.UiExecutionContext 449827572ba077d73b957c5ceaabb5558aa531ad1e37ffa59cfd35a3a6110339 -->

```csharp
public static class Inno.UI.UiExecutionContext
```

Binds one UI service to the current asynchronous execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UI.cs#L11).

## `EnterScope`

<a id="api-796005657aa6ffca"></a>
<!-- api: M:Inno.UI.UiExecutionContext.EnterScope(Inno.UI.IUiService) 5a4143c2e801f7e836a577bfc76e4dc6a65c9af249c51bb151b9eefab8963baa -->

```csharp
public static System.IDisposable Inno.UI.UiExecutionContext.EnterScope(Inno.UI.IUiService ui)
```

Binds a UI service until the returned strict last-in-first-out scope is disposed.

**Parameter `ui`:** The host-owned UI service.

**Returns:** The caller-owned binding scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UI.cs#L29).

## `current`

<a id="api-56fb25775bca139d"></a>
<!-- api: P:Inno.UI.UiExecutionContext.current f7ec1095423827966a965d5860f623fc110b5b558be80be8a1db45169f847d99 -->

```csharp
public static Inno.UI.IUiService Inno.UI.UiExecutionContext.current { get; }
```

Gets the UI service bound to the current execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UI.cs#L18).
