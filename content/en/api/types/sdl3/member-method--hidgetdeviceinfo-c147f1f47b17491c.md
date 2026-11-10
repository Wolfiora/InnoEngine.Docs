---
title: "SDLContext.RawApi — Method: HidGetDeviceInfo"
description: "Exact Method: HidGetDeviceInfo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c147f1f47b17491c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HidGetDeviceInfo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidGetDeviceInfo`

<a id="api-16912b76f0bdb1a2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HidGetDeviceInfo(Inno.Native.Sdl3.SDLHidDevice*) b18e00fcfce3e020de55b5cac7f41dc04a5819d8e648cee499d552da8c8edc0f -->

```csharp
public Inno.Native.Sdl3.SDLHidDeviceInfo* Inno.Native.Sdl3.SDLContext.RawApi.HidGetDeviceInfo(Inno.Native.Sdl3.SDLHidDevice* dev)
```

Get the device info from a HID device.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dev`:** a device handle returned from SDL_hid_open().

**Returns:** a pointer to the SDL_hid_device_info for this hid_device or NULL
on failure; call SDL_GetError() for more information. This struct
is valid until the device is closed with SDL_hid_close().


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44722).
