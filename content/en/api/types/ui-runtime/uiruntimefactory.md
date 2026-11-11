---
title: "UiRuntimeFactory"
description: "Reference for UiRuntimeFactory in Inno.UI.Runtime."
uid: api.inno.ui.runtime.bd5d2a8d10518d7e
kind: api
owners:
  - Inno.UI.Runtime
apiSurface: source-clr
contracts:
  - project.inno-ui-runtime#session-and-font-ownership
---
# `UiRuntimeFactory`

This reference describes `UiRuntimeFactory` in `Inno.UI.Runtime`. Read the [shared contract](../../projects/inno-ui-runtime.md#session-and-font-ownership) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Runtime.Contracts.IRuntimeSubsystemFactory`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-00b596699091cd76) | Method |
| [`Create`](#api-a48a93bd9bf0a092) | Method |
| [`descriptor`](#api-ce2f86909f4e5d80) | Property |

## Type declaration

<a id="api-bd5d2a8d10518d7e"></a>
<!-- api: T:Inno.UI.Runtime.UiRuntimeFactory 927c6c35e6298bd4d07e3ede5e4a78cad3ca5a50a284a229057082cae2fa071c -->

```csharp
public sealed class Inno.UI.Runtime.UiRuntimeFactory : Inno.Runtime.Contracts.IRuntimeSubsystemFactory
```

Creates one UI service for every isolated runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntimeFactory.cs#L11).

## `#ctor`

<a id="api-00b596699091cd76"></a>
<!-- api: M:Inno.UI.Runtime.UiRuntimeFactory.#ctor(System.Func{Inno.Runtime.Contracts.RuntimeSubsystemContext,Inno.UI.Runtime.UiRuntime}) ae69bcdabfc7c37371b1a7730614ecd27a667f9acc7e0926432f1c436634fcc8 -->

```csharp
public Inno.UI.Runtime.UiRuntimeFactory.UiRuntimeFactory(System.Func<Inno.Runtime.Contracts.RuntimeSubsystemContext, Inno.UI.Runtime.UiRuntime> runtimeFactory)
```

Creates a reusable UI runtime factory.

**Parameter `runtimeFactory`:** The callback that creates one runtime per session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntimeFactory.cs#L21).

## `Create`

<a id="api-a48a93bd9bf0a092"></a>
<!-- api: M:Inno.UI.Runtime.UiRuntimeFactory.Create(Inno.Runtime.Contracts.RuntimeSubsystemContext) 0a5bb0a28136a071257e5458e0bfc6082d5cb981849e11cce97b98083d739260 -->

```csharp
public Inno.Runtime.Contracts.IRuntimeSubsystem Inno.UI.Runtime.UiRuntimeFactory.Create(Inno.Runtime.Contracts.RuntimeSubsystemContext context)
```

Creates one session-owned UI runtime.

**Parameter `context`:** The isolated session construction context.

**Returns:** The unattached runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntimeFactory.cs#L46).

## `descriptor`

<a id="api-ce2f86909f4e5d80"></a>
<!-- api: P:Inno.UI.Runtime.UiRuntimeFactory.descriptor 17a0d810c8bea92a39c4d4154a58bdb793a1e6f6048efec04bc9cfe8fd4b41a7 -->

```csharp
public Inno.Runtime.Contracts.RuntimeSubsystemDescriptor Inno.UI.Runtime.UiRuntimeFactory.descriptor { get; }
```

Gets stable ordering metadata that makes UI available before scene simulation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Runtime/UiRuntimeFactory.cs#L29).
