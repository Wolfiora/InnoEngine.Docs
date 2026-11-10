---
title: "SDLContext.RawApi — Method: HidRead"
description: "Exact Method: HidRead contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d575e528e266ff82
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HidRead

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidRead`

<a id="api-411cb666a08454c2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HidRead(Inno.Native.Sdl3.SDLHidDevice*,System.Byte*,System.UInt64) 6bd9c04c88540e4936c9c0756033377ee74e89294c0312f28a4f9b05bf6dd8f0 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.HidRead(Inno.Native.Sdl3.SDLHidDevice* dev, byte* data, ulong length)
```

Read an Input report from a HID device.
Input reports are returned to the host through the INTERRUPT IN endpoint.
The first byte will contain the Report number if the device uses numbered
reports.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dev`:** a device handle returned from SDL_hid_open().

**Parameter `data`:** a buffer to put the read data into.

**Parameter `length`:** the number of bytes to read. For devices with multiple
reports, make sure to read an extra byte for the report
number.

**Returns:** the actual number of bytes read and -1 on failure; call
SDL_GetError() for more information. If no packet was available to
be read and the handle is in non-blocking mode, this function
returns 0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43597).
