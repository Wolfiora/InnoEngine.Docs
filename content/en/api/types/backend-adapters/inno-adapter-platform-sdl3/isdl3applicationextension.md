---
title: "ISdl3ApplicationExtension"
description: "Reference for ISdl3ApplicationExtension in Inno.Adapter.Platform.Sdl3."
uid: api.inno.adapter.platform.sdl3.b11fe4018e52bcb9
kind: api
owners:
  - Inno.Adapter.Platform.Sdl3
apiSurface: source-clr
contracts:
  - project.inno-adapter-platform-sdl3
---
# `ISdl3ApplicationExtension`

This reference describes `ISdl3ApplicationExtension` in `Inno.Adapter.Platform.Sdl3`. Read the [shared contract](../../../projects/inno-adapter-platform-sdl3.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`OnApplicationDisposing`](#api-1c1baf347f8832eb) | Method |
| [`PrepareLiveResizeWindow`](#api-9c52fec81a2e1639) | Method |
| [`ProcessNativeEvent`](#api-3fdf69d168198596) | Method |

## Type declaration

<a id="api-b11fe4018e52bcb9"></a>
<!-- api: T:Inno.Adapter.Platform.Sdl3.ISdl3ApplicationExtension ae6296b9112751939fb5d8924d2ba51f0fcd155dc597b87266cce4cd99d6166c -->

```csharp
public interface Inno.Adapter.Platform.Sdl3.ISdl3ApplicationExtension
```

Defines the synchronous SDL3 callbacks required by an SDL3-specific integration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/ISdl3ApplicationExtension.cs#L8).

## `OnApplicationDisposing`

<a id="api-1c1baf347f8832eb"></a>
<!-- api: M:Inno.Adapter.Platform.Sdl3.ISdl3ApplicationExtension.OnApplicationDisposing(Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication) 815675f4758ab1d28ef0fcd8c3a969fc02169ab87522ef4fb9d4d0ef676a6cdc -->

```csharp
void Inno.Adapter.Platform.Sdl3.ISdl3ApplicationExtension.OnApplicationDisposing(Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication application)
```

Releases application-bound integration state before platform resources are destroyed.

**Parameter `application`:** The platform application being disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/ISdl3ApplicationExtension.cs#L44).

## `PrepareLiveResizeWindow`

<a id="api-9c52fec81a2e1639"></a>
<!-- api: M:Inno.Adapter.Platform.Sdl3.ISdl3ApplicationExtension.PrepareLiveResizeWindow(Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication,System.UInt32) e419c6ea20cb083ad959f5bd3ed68f2216226a1f5c276cb4ccda1ec2b2199e36 -->

```csharp
void Inno.Adapter.Platform.Sdl3.ISdl3ApplicationExtension.PrepareLiveResizeWindow(Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication application, uint windowId)
```

Synchronizes integration window state before the host renders a complete live-resize frame.

**Parameter `application`:** The platform application requesting the redraw.

**Parameter `windowId`:** The platform window identifier being resized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/ISdl3ApplicationExtension.cs#L33).

## `ProcessNativeEvent`

<a id="api-3fdf69d168198596"></a>
<!-- api: M:Inno.Adapter.Platform.Sdl3.ISdl3ApplicationExtension.ProcessNativeEvent(Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication,System.ReadOnlySpan{System.Byte}) f6050c8400963100fd26b49b2fe96fe7ebfc14fccb0383258ed3c5b2adb9e6b4 -->

```csharp
void Inno.Adapter.Platform.Sdl3.ISdl3ApplicationExtension.ProcessNativeEvent(Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication application, scoped System.ReadOnlySpan<byte> nativeEventData)
```

Processes one backend-native event before it is translated into an engine event.

**Parameter `application`:** The platform application dispatching the event.

**Parameter `nativeEventData`:** A read-only view over one SDL event. The span is valid only for this callback and must not be retained.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/ISdl3ApplicationExtension.cs#L19).
