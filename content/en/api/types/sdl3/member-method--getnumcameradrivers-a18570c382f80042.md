---
title: "SDLContext.RawApi — Method: GetNumCameraDrivers"
description: "Exact Method: GetNumCameraDrivers contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a18570c382f80042
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetNumCameraDrivers

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumCameraDrivers`

<a id="api-3268c633a7f21e55"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetNumCameraDrivers 408560653cea52b821e9c4820be5f8fc08c617475649a6e2481e4e632ae2fb09 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetNumCameraDrivers()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39714).
