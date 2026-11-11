---
title: "ApplicationSuspensionChangedEvent"
description: "Reference for ApplicationSuspensionChangedEvent in Inno.Core.Events."
uid: api.inno.core.events.2e381feb534c056b
kind: api
owners:
  - Inno.Core.Events
apiSurface: source-clr
contracts:
  - project.inno-core-events#dispatch-and-lifetime-contract
---
# `ApplicationSuspensionChangedEvent`

This reference describes `ApplicationSuspensionChangedEvent` in `Inno.Core.Events`. Read the [shared contract](../../projects/inno-core-events.md#dispatch-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Events.ApplicationEvent`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-bff0ad61bb347584) | Method |
| [`isSuspended`](#api-7ab9210301dde954) | Property |

## Type declaration

<a id="api-2e381feb534c056b"></a>
<!-- api: T:Inno.Core.Events.ApplicationSuspensionChangedEvent ca96365cafc4c0347145845b2163ca58ffbf379306cbc09074188c7794100b43 -->

```csharp
public sealed class Inno.Core.Events.ApplicationSuspensionChangedEvent : Inno.Core.Events.ApplicationEvent
```

Reports whether the application must stop advancing frames until the platform resumes it.

**Parameter `isSuspended`:** Whether the platform has suspended application execution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/ApplicationSuspensionChangedEvent.cs#L9).

## `#ctor`

<a id="api-bff0ad61bb347584"></a>
<!-- api: M:Inno.Core.Events.ApplicationSuspensionChangedEvent.#ctor(System.Boolean) 6d81b065b18fa8b4c00add214bdfc6665b726212e39b03f26f2cdf72ee98909f -->

```csharp
public Inno.Core.Events.ApplicationSuspensionChangedEvent.ApplicationSuspensionChangedEvent(bool isSuspended)
```

Reports whether the application must stop advancing frames until the platform resumes it.

**Parameter `isSuspended`:** Whether the platform has suspended application execution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/ApplicationSuspensionChangedEvent.cs#L9).

## `isSuspended`

<a id="api-7ab9210301dde954"></a>
<!-- api: P:Inno.Core.Events.ApplicationSuspensionChangedEvent.isSuspended 7fd6d16fba81951a8780c00bfaf251cb32950ba74dbbf391fd978262d955b459 -->

```csharp
public bool Inno.Core.Events.ApplicationSuspensionChangedEvent.isSuspended { get; }
```

Gets whether application execution is suspended after this notification.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/ApplicationSuspensionChangedEvent.cs#L14).
