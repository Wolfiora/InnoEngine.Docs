---
title: "Sdl3PlatformWindow"
description: "Reference for Sdl3PlatformWindow in Inno.Adapter.Platform.Sdl3."
uid: api.inno.adapter.platform.sdl3.b8cc87840be7bd8d
kind: api
owners:
  - Inno.Adapter.Platform.Sdl3
apiSurface: source-clr
contracts:
  - project.inno-adapter-platform-sdl3
---
# `Sdl3PlatformWindow`

This reference describes `Sdl3PlatformWindow` in `Inno.Adapter.Platform.Sdl3`. Read the [shared contract](../../../projects/inno-adapter-platform-sdl3.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Platform.IPlatformWindow`, `Inno.Adapter.Platform.INativeWindowSurface`.

## Members

| Member | Kind |
| --- | --- |
| [`Dispose`](#api-3f4ca3f6a4c240a1) | Method |
| [`RequestClose`](#api-b5762052a71294fb) | Method |
| [`height`](#api-f8027526ef46fdca) | Property |
| [`isClosed`](#api-a29cf215d555242c) | Property |
| [`isFocused`](#api-529601dbf11fe502) | Property |
| [`nativeHandles`](#api-7cdaccd3c7fdcc64) | Property |
| [`pixelHeight`](#api-567bc0b8b7335fdb) | Property |
| [`pixelWidth`](#api-fd095466aed82a5c) | Property |
| [`sdlWindowHandle`](#api-dc86ce109d208bf2) | Property |
| [`title`](#api-f3aac10c2590cfe3) | Property |
| [`width`](#api-a51df2b7531f9a0c) | Property |
| [`windowId`](#api-33549594baecdd42) | Property |

## Type declaration

<a id="api-b8cc87840be7bd8d"></a>
<!-- api: T:Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow 6417c146af3a4b704d077eeb56185a487c4bd85480abfb2318c66ec57d263f29 -->

```csharp
public sealed class Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow : Inno.Platform.IPlatformWindow, Inno.Adapter.Platform.INativeWindowSurface
```

Represents a native platform window.

Represents a native platform window.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3PlatformWindow.cs#L10).

## `Dispose`

<a id="api-3f4ca3f6a4c240a1"></a>
<!-- api: M:Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow.Dispose ce218c69025a4deeed2e04d6acc2d4c0aa4a5d7e39f9f29cef700d8da21b93f1 -->

```csharp
public void Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow.Dispose()
```

Releases the resources owned by this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3PlatformWindow.cs#L83).

## `RequestClose`

<a id="api-b5762052a71294fb"></a>
<!-- api: M:Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow.RequestClose 2f28c5652f533d4cf9f2e0d0d2f51ae6e7dbd594eb133813dfd35ddad47bf539 -->

```csharp
public void Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow.RequestClose()
```

Queues a close request for processing at the next platform safety point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3PlatformWindow.cs#L78).

## `height`

<a id="api-f8027526ef46fdca"></a>
<!-- api: P:Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow.height dc9954a201d10cb9d2f96b68d6493622030e21a77c5fdc864b7606958e8e1e14 -->

```csharp
public int Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow.height { get; }
```

Gets the current window height in platform-independent logical units.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3PlatformWindow.cs#L30).

## `isClosed`

<a id="api-a29cf215d555242c"></a>
<!-- api: P:Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow.isClosed 436f05e4a04114df9757a733aa4ef0729d27a5e206366ccb81a8b2d1320fd3b8 -->

```csharp
public bool Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow.isClosed { get; }
```

Gets whether this window has been marked as closed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3PlatformWindow.cs#L45).

## `isFocused`

<a id="api-529601dbf11fe502"></a>
<!-- api: P:Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow.isFocused ef74475c5c488f81c8335414d079401715d24e7e0957b9df214e2c32c9d7eea6 -->

```csharp
public bool Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow.isFocused { get; }
```

Gets whether this window currently owns platform input focus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3PlatformWindow.cs#L50).

## `nativeHandles`

<a id="api-7cdaccd3c7fdcc64"></a>
<!-- api: P:Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow.nativeHandles c5125afff2f2cd16e69b25840074f568055ad56ca3ae1f1e04140a10513a3bd4 -->

```csharp
public Inno.Adapter.Platform.PlatformNativeHandles Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow.nativeHandles { get; }
```

Gets native window handles for graphics backends and platform integration.

**Throws `System.ObjectDisposedException`:** The window owner has released its native surface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3PlatformWindow.cs#L58).

## `pixelHeight`

<a id="api-567bc0b8b7335fdb"></a>
<!-- api: P:Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow.pixelHeight f2bba53e13335b3cf785a2ccb576a1195ab0a17941f1c8ee88b2ffbeceaf25b0 -->

```csharp
public int Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow.pixelHeight { get; }
```

Gets the current drawable height in physical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3PlatformWindow.cs#L40).

## `pixelWidth`

<a id="api-fd095466aed82a5c"></a>
<!-- api: P:Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow.pixelWidth 07aa354f92fe75efc8e0f94c39bfa4ee146f08e05b3bd87ab219b2c5e83e2bec -->

```csharp
public int Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow.pixelWidth { get; }
```

Gets the current drawable width in physical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3PlatformWindow.cs#L35).

## `sdlWindowHandle`

<a id="api-dc86ce109d208bf2"></a>
<!-- api: P:Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow.sdlWindowHandle 578136b9f39d4252bf340f74ebb6115a6464a1c25ba8787666aad0b51e37efba -->

```csharp
public nint Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow.sdlWindowHandle { get; }
```

Gets the opaque SDL3 window identity used only by cooperating SDL3 adapter assemblies.

**Constraints:** Runtime, Editor feature, and rendering contracts must use `Inno.Platform.IPlatformWindow` instead.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3PlatformWindow.cs#L73).

## `title`

<a id="api-f3aac10c2590cfe3"></a>
<!-- api: P:Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow.title 30df8e230485d985db885063ddc68bcd415e8a361878230ee5b5339d8b4be21b -->

```csharp
public string Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow.title { get; }
```

Gets the window title.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3PlatformWindow.cs#L20).

## `width`

<a id="api-a51df2b7531f9a0c"></a>
<!-- api: P:Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow.width 8d4045a0d7b36a4d42af48c218ed15f13853ccb59378335cad97c72673cdb559 -->

```csharp
public int Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow.width { get; }
```

Gets the current window width in platform-independent logical units.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3PlatformWindow.cs#L25).

## `windowId`

<a id="api-33549594baecdd42"></a>
<!-- api: P:Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow.windowId 2ec598c5b09b4d540725c61f4a96f2ceda6c8039531fa197b9c3fc2b31a1ab3d -->

```csharp
public uint Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow.windowId { get; }
```

Gets the platform window identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3PlatformWindow.cs#L15).
