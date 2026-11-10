---
title: "SDL — Method: GetNumCameraDrivers"
description: "Exact Method: GetNumCameraDrivers contracts in SDL."
uid: api.inno.native.sdl3.c1a3ade9df485288
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetNumCameraDrivers

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumCameraDrivers`

<a id="api-fd272d41c64dfefb"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetNumCameraDrivers 288aec2c789a412653f4a6b301d039294afb9ebcc98b2c1bd7beea46f8951233 -->

```csharp
public static int Inno.Native.Sdl3.SDL.GetNumCameraDrivers()
```

Use this function to get the number of built-in camera drivers.
This function returns a hardcoded number. This never returns a negative
value; if there are no drivers compiled into this build of SDL, this
function returns zero. The presence of a driver in this list does not mean
it will function, it just means SDL is capable of interacting with that
interface. For example, a build of SDL might have v4l2 support, but if
there's no kernel support available, SDL's v4l2 driver would fail if used.
By default, SDL tries all drivers, in its preferred order, until one is
found to be usable.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetCameraDriver

**Returns:** the number of built-in camera drivers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2935).
