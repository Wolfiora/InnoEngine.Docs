---
title: "Sdl3HostCapabilities"
description: "Reference for Sdl3HostCapabilities in Inno.Adapter.Platform.Sdl3."
uid: api.inno.adapter.platform.sdl3.6367fe6f82f3145d
kind: api
owners:
  - Inno.Adapter.Platform.Sdl3
apiSurface: source-clr
contracts:
  - project.inno-adapter-platform-sdl3
---
# `Sdl3HostCapabilities`

This reference describes `Sdl3HostCapabilities` in `Inno.Adapter.Platform.Sdl3`. Read the [shared contract](../../../projects/inno-adapter-platform-sdl3.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-82ce3d647a207f01) | Method |
| [`liveResize`](#api-c3ebb0e32afc632b) | Property |
| [`multipleWindows`](#api-cd293e5b8ba6096c) | Property |

## Type declaration

<a id="api-6367fe6f82f3145d"></a>
<!-- api: T:Inno.Adapter.Platform.Sdl3.Sdl3HostCapabilities 026af47dfb2daa5f317301789cfe1e73708d81294fb38f9860e9c611963898a0 -->

```csharp
public sealed class Inno.Adapter.Platform.Sdl3.Sdl3HostCapabilities
```

Declares immutable window and frame scheduling capabilities supplied by the selected host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3HostCapabilities.cs#L6).

## `#ctor`

<a id="api-82ce3d647a207f01"></a>
<!-- api: M:Inno.Adapter.Platform.Sdl3.Sdl3HostCapabilities.#ctor(System.Boolean,System.Boolean) 1ca609552fa86010714dd6bd12b27e889d2f3979770e7310ce2d8c1592bf7c50 -->

```csharp
public Inno.Adapter.Platform.Sdl3.Sdl3HostCapabilities.Sdl3HostCapabilities(bool multipleWindows, bool liveResize)
```

Captures host capabilities without initializing SDL or creating windows.

**Parameter `multipleWindows`:** Whether the host supports more than one concurrently registered window.

**Parameter `liveResize`:** Whether native window move and resize loops require redraw callbacks.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3HostCapabilities.cs#L17).

## `liveResize`

<a id="api-c3ebb0e32afc632b"></a>
<!-- api: P:Inno.Adapter.Platform.Sdl3.Sdl3HostCapabilities.liveResize 860d7f9f832e82d4b316fa4ff341fbceccd8dc3c54307992bb8878d5329e764e -->

```csharp
public bool Inno.Adapter.Platform.Sdl3.Sdl3HostCapabilities.liveResize { get; }
```

Gets whether the application installs the native live-resize scheduling integration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3HostCapabilities.cs#L33).

## `multipleWindows`

<a id="api-cd293e5b8ba6096c"></a>
<!-- api: P:Inno.Adapter.Platform.Sdl3.Sdl3HostCapabilities.multipleWindows c344ecbe3d323fc1703207c0cdf3e53390b72c243e28eb6ddafe20716d8985a0 -->

```csharp
public bool Inno.Adapter.Platform.Sdl3.Sdl3HostCapabilities.multipleWindows { get; }
```

Gets whether the application can register additional native windows.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3HostCapabilities.cs#L28).
