---
title: "UiCapabilityUnavailableException"
description: "Reference for UiCapabilityUnavailableException in Inno.UI."
uid: api.inno.ui.0e259825bed2d713
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UiCapabilityUnavailableException`

This reference describes `UiCapabilityUnavailableException` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.NotSupportedException`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-70a4dc8ba3a203df) | Method |
| [`capability`](#api-5862a27a90c87331) | Property |

## Type declaration

<a id="api-0e259825bed2d713"></a>
<!-- api: T:Inno.UI.UiCapabilityUnavailableException 05158e859c19db0bd75fcf09f722afd46fcce1be2200c7af7e089a0035d28c97 -->

```csharp
public sealed class Inno.UI.UiCapabilityUnavailableException : System.NotSupportedException
```

Reports that the selected backend cannot perform an explicitly requested optional operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiBackendCapabilities.cs#L72).

## `#ctor`

<a id="api-70a4dc8ba3a203df"></a>
<!-- api: M:Inno.UI.UiCapabilityUnavailableException.#ctor(Inno.UI.UiBackendCapability) 17441e50fd2cbd624c50e6e0edd6feaeac8083488badfd040c6ce67d87feb40f -->

```csharp
public Inno.UI.UiCapabilityUnavailableException.UiCapabilityUnavailableException(Inno.UI.UiBackendCapability capability)
```

Creates a capability failure without naming a concrete implementation.

**Parameter `capability`:** Unavailable neutral capability.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiBackendCapabilities.cs#L80).

## `capability`

<a id="api-5862a27a90c87331"></a>
<!-- api: P:Inno.UI.UiCapabilityUnavailableException.capability 7f03094539b2b8563fc6295e2a0085b764554a5b8443bc3d99f0ac3117543c10 -->

```csharp
public Inno.UI.UiBackendCapability Inno.UI.UiCapabilityUnavailableException.capability { get; }
```

Gets the unavailable capability.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiBackendCapabilities.cs#L87).
