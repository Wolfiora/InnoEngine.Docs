---
title: "SDLContext.RawApi — Method: HidSetNonblocking"
description: "Exact Method: HidSetNonblocking contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e14e1a11da160571
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HidSetNonblocking

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidSetNonblocking`

<a id="api-021b9dff5265dcba"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HidSetNonblocking(Inno.Native.Sdl3.SDLHidDevice*,System.Int32) 0d62e88131665ed029c8678f823053eefa6ac886e357f3d5226e523ab3241e1c -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.HidSetNonblocking(Inno.Native.Sdl3.SDLHidDevice* dev, int nonblock)
```

Set the device handle to be non-blocking.
In non-blocking mode calls to SDL_hid_read() will return immediately with a
value of 0 if there is no data to be read. In blocking mode, SDL_hid_read()
will wait (block) until there is data to read before returning.
Nonblocking can be turned on and off at any time.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dev`:** a device handle returned from SDL_hid_open().

**Parameter `nonblock`:** enable or not the nonblocking reads - 1 to enable
nonblocking - 0 to disable nonblocking.

**Returns:** 0 on success or a negative error code on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51498).
