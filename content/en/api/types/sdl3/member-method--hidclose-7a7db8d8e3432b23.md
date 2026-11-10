---
title: "SDLContext.RawApi — Method: HidClose"
description: "Exact Method: HidClose contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7a7db8d8e3432b23
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HidClose

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidClose`

<a id="api-d1ce8f9f22436675"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HidClose(Inno.Native.Sdl3.SDLHidDevice*) e05dccbb4f8dc926e4d5a0ad9bf95c5f0c1d35ad81700d461ec2cd1fe1675dca -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.HidClose(Inno.Native.Sdl3.SDLHidDevice* dev)
```

Close a HID device.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dev`:** a device handle returned from SDL_hid_open().

**Returns:** 0 on success or a negative error code on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47068).
