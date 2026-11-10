---
title: "SDLContext.RawApi — Method: HidGetInputReport"
description: "Exact Method: HidGetInputReport contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.92b0366663825ce0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HidGetInputReport

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidGetInputReport`

<a id="api-c42dce717d6bfb9f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HidGetInputReport(Inno.Native.Sdl3.SDLHidDevice*,System.Byte*,System.UInt64) ee11b7ad2c2afee84da0c7f65a3a0faefda5ec8c4750a17ae58ac34d3fdfc47b -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.HidGetInputReport(Inno.Native.Sdl3.SDLHidDevice* dev, byte* data, ulong length)
```

Get an input report from a HID device.
Set the first byte of `data` to the Report ID of the report to be read.
Make sure to allow space for this extra byte in `data`. Upon return, the
first byte will still contain the Report ID, and the report data will start
in data[1].

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dev`:** a device handle returned from SDL_hid_open().

**Parameter `data`:** a buffer to put the read data into, including the Report ID.
Set the first byte of `data` to the Report ID of the report to
be read, or set it to zero if your device does not use numbered
reports.

**Parameter `length`:** the number of bytes to read, including an extra byte for the
report ID. The buffer can be longer than the actual report.

**Returns:** the number of bytes read plus one for the report ID (which is
still in the first byte), or -1 on on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21293).
