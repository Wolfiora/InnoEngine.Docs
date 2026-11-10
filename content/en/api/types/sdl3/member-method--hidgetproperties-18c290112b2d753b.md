---
title: "SDLContext.RawApi — Method: HidGetProperties"
description: "Exact Method: HidGetProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.18c290112b2d753b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HidGetProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidGetProperties`

<a id="api-426ad382e05e2869"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HidGetProperties(Inno.Native.Sdl3.SDLHidDevice*) a9448438884f4a57aeee624a6a9236f8e17d6d489bc39a2f60e02c059c4a7d6d -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.HidGetProperties(Inno.Native.Sdl3.SDLHidDevice* dev)
```

Get the properties associated with an SDL_hid_device.
The following read-only properties are provided by SDL:
- `SDL_PROP_HIDAPI_LIBUSB_DEVICE_HANDLE_POINTER`: the libusb_device_handle
associated with the device, if it was opened using libusb.

**Upstream availability:** This function is available since SDL 3.4.0.

**Parameter `dev`:** a device handle returned from SDL_hid_open().

**Returns:** a valid property ID on success or 0 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43752).
