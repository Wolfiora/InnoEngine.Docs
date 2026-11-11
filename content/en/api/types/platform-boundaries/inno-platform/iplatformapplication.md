---
title: "IPlatformApplication"
description: "Reference for IPlatformApplication in Inno.Platform."
uid: api.inno.platform.5c7ce70fc414f6ba
kind: api
owners:
  - Inno.Platform
apiSurface: source-clr
contracts:
  - project.inno-platform
---
# `IPlatformApplication`

This reference describes `IPlatformApplication` in `Inno.Platform`. Read the [shared contract](../../../projects/inno-platform.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`redrawRequested`](#api-b6cee2d6f0c1a5ba) | Event |
| [`CreateWindow`](#api-b8e711d55426817d) | Method |
| [`GetWindows`](#api-97cbf9cefd01b1bf) | Method |
| [`PollEvent`](#api-17446ca6c565e2c5) | Method |

## Type declaration

<a id="api-5c7ce70fc414f6ba"></a>
<!-- api: T:Inno.Platform.IPlatformApplication 6e271827ad48a94e23ed8193400adfa541b2e120103ce68ac7f2be6e04815b36 -->

```csharp
public interface Inno.Platform.IPlatformApplication : System.IDisposable
```

Defines the backend-neutral lifetime, window creation, and event-polling contract for a platform session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/IPlatformApplication.cs#L10).

## `redrawRequested`

<a id="api-b6cee2d6f0c1a5ba"></a>
<!-- api: E:Inno.Platform.IPlatformApplication.redrawRequested da8f49bae4842d65a2e673620f68e80a07c3ca14326aeddfdfdf96f67863ad68 -->

```csharp
System.Action<uint>? Inno.Platform.IPlatformApplication.redrawRequested
```

Requests one complete host frame on the event-pump thread while the operating system
owns a modal window resize loop. Handlers must not poll events or reenter an active frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/IPlatformApplication.cs#L16).

## `CreateWindow`

<a id="api-b8e711d55426817d"></a>
<!-- api: M:Inno.Platform.IPlatformApplication.CreateWindow(Inno.Platform.PlatformWindowOptions) ed3d8e9bd8a0adef1107e0d9e7b9c54757bcb3e3c059142f94e030c480db5b09 -->

```csharp
Inno.Platform.IPlatformWindow Inno.Platform.IPlatformApplication.CreateWindow(Inno.Platform.PlatformWindowOptions options)
```

Creates a window owned by this platform session.

**Parameter `options`:** The validated initial window properties.

**Returns:** The newly created window. The caller may dispose it before disposing the application.

**Throws `System.ObjectDisposedException`:** Thrown when the platform application has already been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/IPlatformApplication.cs#L30).

## `GetWindows`

<a id="api-97cbf9cefd01b1bf"></a>
<!-- api: M:Inno.Platform.IPlatformApplication.GetWindows 079c7a0e0bd4a0b5e4e84a7b0f66db97bb88e45133be93f54f367b0f6edaff51 -->

```csharp
System.Collections.Generic.IReadOnlyList<Inno.Platform.IPlatformWindow> Inno.Platform.IPlatformApplication.GetWindows()
```

Captures the currently valid windows owned or tracked by this platform session.

**Returns:** An immutable-by-convention snapshot of the current windows.

**Throws `System.ObjectDisposedException`:** Thrown when the platform application has already been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/IPlatformApplication.cs#L55).

## `PollEvent`

<a id="api-17446ca6c565e2c5"></a>
<!-- api: M:Inno.Platform.IPlatformApplication.PollEvent(Inno.Core.Events.Event@) da5ced128c064a0cba259b1f7e198d88526031de55e84b14f3b616f511afe368 -->

```csharp
bool Inno.Platform.IPlatformApplication.PollEvent(out Inno.Core.Events.Event? evnt)
```

Attempts to dequeue the next backend-neutral platform event.

**Parameter `evnt`:** The translated event when one is available; otherwise, `null`.

**Returns:** `true` when an event was returned; otherwise, `false`.

**Throws `System.ObjectDisposedException`:** Thrown when the platform application has already been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/IPlatformApplication.cs#L44).
