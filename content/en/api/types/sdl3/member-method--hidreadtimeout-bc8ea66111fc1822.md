---
title: "SDLContext.RawApi — Method: HidReadTimeout"
description: "Exact Method: HidReadTimeout contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.bc8ea66111fc1822
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HidReadTimeout

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidReadTimeout`

<a id="api-f4ace91a0a429032"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HidReadTimeout(Inno.Native.Sdl3.SDLHidDevice*,System.Byte*,System.UInt64,System.Int32) fdf0b7fd49c122b1713115cc00f15be7e04879b28766207a97e7640336c48c25 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.HidReadTimeout(Inno.Native.Sdl3.SDLHidDevice* dev, byte* data, ulong length, int milliseconds)
```

Read an Input report from a HID device with timeout.
Input reports are returned to the host through the INTERRUPT IN endpoint.
The first byte will contain the Report number if the device uses numbered
reports.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dev`:** a device handle returned from SDL_hid_open().

**Parameter `data`:** a buffer to put the read data into.

**Parameter `length`:** the number of bytes to read. For devices with multiple
reports, make sure to read an extra byte for the report
number.

**Parameter `milliseconds`:** timeout in milliseconds or -1 for blocking wait.

**Returns:** the actual number of bytes read and -1 on on failure; call
SDL_GetError() for more information. If no packet was available to
be read within the timeout period, this function returns 0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20343).
