---
title: "SDLContext.RawApi — Method: HidGetManufacturerString"
description: "Exact Method: HidGetManufacturerString contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.067ad769b9a396e5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HidGetManufacturerString

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidGetManufacturerString`

<a id="api-91927c5a8a032aa4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HidGetManufacturerString(Inno.Native.Sdl3.SDLHidDevice*,System.UInt16*,System.UInt64) acdb1967fa4f861fa38c29b3f82a4b6febd4af8e7bbebcc68e1f798d92c81a80 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.HidGetManufacturerString(Inno.Native.Sdl3.SDLHidDevice* dev, ushort* @string, ulong maxlen)
```

Get The Manufacturer String from a HID device.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dev`:** a device handle returned from SDL_hid_open().

**Parameter `string`:** a wide string buffer to put the data into.

**Parameter `maxlen`:** the length of the buffer in multiples of wchar_t.

**Returns:** 0 on success or a negative error code on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30867).
