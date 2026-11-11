---
title: "Sdl3WindowOperations"
description: "Reference for Sdl3WindowOperations in Inno.Adapter.Platform.Sdl3."
uid: api.inno.adapter.platform.sdl3.0adbdc085b94bc0e
kind: api
owners:
  - Inno.Adapter.Platform.Sdl3
apiSurface: source-clr
contracts:
  - project.inno-adapter-platform-sdl3
---
# `Sdl3WindowOperations`

This reference describes `Sdl3WindowOperations` in `Inno.Adapter.Platform.Sdl3`. Read the [shared contract](../../../projects/inno-adapter-platform-sdl3.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CreateWindow`](#api-5a3bdc3e3a892423) | Method |
| [`ReadFocus`](#api-8513762f50b84c53) | Method |

## Type declaration

<a id="api-0adbdc085b94bc0e"></a>
<!-- api: T:Inno.Adapter.Platform.Sdl3.Sdl3WindowOperations 15e1ce6365d3c0681cde97a49a8d6cf5f55096f23b33e376cf8274f75582f688 -->

```csharp
public static class Inno.Adapter.Platform.Sdl3.Sdl3WindowOperations
```

Implements shared SDL window operations without selecting a system host or registering windows.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3WindowOperations.cs#L10).

## `CreateWindow`

<a id="api-5a3bdc3e3a892423"></a>
<!-- api: M:Inno.Adapter.Platform.Sdl3.Sdl3WindowOperations.CreateWindow(Inno.Platform.PlatformWindowOptions,System.Boolean) 2d9601130a6b85d3c8950c0824929c86b5544c6757a4d32c2554f330e8baf1fd -->

```csharp
public static nint Inno.Adapter.Platform.Sdl3.Sdl3WindowOperations.CreateWindow(Inno.Platform.PlatformWindowOptions options, bool requireOpenGl)
```

Creates an SDL window and transfers its native destruction responsibility to the caller.

**Parameter `options`:** The title, logical extent, visibility, resizing and pixel density requested by the product.

**Parameter `requireOpenGl`:** Whether the selected host requires an OpenGL-capable window.

**Returns:** A nonzero opaque SDL handle. Temporary creation properties are always released.

**Throws `System.ArgumentException`:** The title is null or the logical extent is not positive.

**Throws `System.InvalidOperationException`:** SDL could not allocate properties, apply an option or create the window.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3WindowOperations.cs#L30).

## `ReadFocus`

<a id="api-8513762f50b84c53"></a>
<!-- api: M:Inno.Adapter.Platform.Sdl3.Sdl3WindowOperations.ReadFocus(System.IntPtr) c8e3f7806e30e6a8cce7c11c7b0103e2d2bab2c371c865e37ef08e9f3b9aaba9 -->

```csharp
public static bool Inno.Adapter.Platform.Sdl3.Sdl3WindowOperations.ReadFocus(nint windowHandle)
```

Reads native focus without registering the window or changing its input state.

**Parameter `windowHandle`:** A live SDL window whose owner keeps it alive for this call.

**Returns:** Whether SDL currently reports keyboard focus for this window.

**Throws `System.ArgumentException`:** The handle is zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3WindowOperations.cs#L75).
