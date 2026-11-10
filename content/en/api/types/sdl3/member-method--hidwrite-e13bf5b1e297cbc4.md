---
title: "SDLContext.RawApi — Method: HidWrite"
description: "Exact Method: HidWrite contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e13bf5b1e297cbc4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HidWrite

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidWrite`

<a id="api-2e7bd3503a57e8df"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HidWrite(Inno.Native.Sdl3.SDLHidDevice*,System.Byte*,System.UInt64) af55f68f6e462fc0a08a9fc97aa55d00425515f0c705b568756085b6d6d35ed4 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.HidWrite(Inno.Native.Sdl3.SDLHidDevice* dev, byte* data, ulong length)
```

Write an Output report to a HID device.
The first byte of `data` must contain the Report ID. For devices which only
support a single report, this must be set to 0x0. The remaining bytes
contain the report data. Since the Report ID is mandatory, calls to
SDL_hid_write() will always contain one more byte than the report contains.
For example, if a hid report is 16 bytes long, 17 bytes must be passed to
SDL_hid_write(), the Report ID (or 0x0, for devices with a single report),
followed by the report data (16 bytes). In this example, the length passed
in would be 17.
SDL_hid_write() will send the data on the first OUT endpoint, if one
exists. If it does not, it will send the data through the Control Endpoint
(Endpoint 0).

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dev`:** a device handle returned from SDL_hid_open().

**Parameter `data`:** the data to send, including the report number as the first
byte.

**Parameter `length`:** the length in bytes of the data to send.

**Returns:** the actual number of bytes written and -1 on on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32652).
