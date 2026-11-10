---
title: "SDLContext.RawApi — Method: HidGetReportDescriptor"
description: "Exact Method: HidGetReportDescriptor contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d4ed2bc50e332565
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HidGetReportDescriptor

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidGetReportDescriptor`

<a id="api-2665492071a6eb9d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HidGetReportDescriptor(Inno.Native.Sdl3.SDLHidDevice*,System.Byte*,System.UInt64) adcddd8659816f420c733d56f554cfd4c6be5508df9afeccf12742f0504bbc8d -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.HidGetReportDescriptor(Inno.Native.Sdl3.SDLHidDevice* dev, byte* buf, ulong buf_size)
```

Get a report descriptor from a HID device.
User has to provide a preallocated buffer where descriptor will be copied
to. The recommended size for a preallocated buffer is 4096 bytes.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dev`:** a device handle returned from SDL_hid_open().

**Parameter `buf`:** the buffer to copy descriptor into.

**Parameter `buf_size`:** the size of the buffer in bytes.

**Returns:** the number of bytes actually copied or -1 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47966).
