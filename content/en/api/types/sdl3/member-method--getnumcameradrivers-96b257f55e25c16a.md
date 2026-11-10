---
title: "SDLContext — Method: GetNumCameraDrivers"
description: "Exact Method: GetNumCameraDrivers contracts in SDLContext."
uid: api.inno.native.sdl3.96b257f55e25c16a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetNumCameraDrivers

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumCameraDrivers`

<a id="api-da3eb19197b37913"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetNumCameraDrivers 43e5c0f57ee67a8fc421b3881c13613c72d0a60014f238fa4a31479ea6ab3d29 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.GetNumCameraDrivers()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14907).
