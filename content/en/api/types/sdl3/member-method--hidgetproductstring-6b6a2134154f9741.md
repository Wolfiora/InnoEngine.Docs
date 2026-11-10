---
title: "SDLContext.RawApi — Method: HidGetProductString"
description: "Exact Method: HidGetProductString contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6b6a2134154f9741
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HidGetProductString

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidGetProductString`

<a id="api-3d90170249f61ae0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HidGetProductString(Inno.Native.Sdl3.SDLHidDevice*,System.UInt16*,System.UInt64) ebd75bb6d2f20b67638c90a83a2ca1b3af3e6597ea1bcc78b9eab4ef87912ca3 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.HidGetProductString(Inno.Native.Sdl3.SDLHidDevice* dev, ushort* @string, ulong maxlen)
```

Get The Product String from a HID device.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dev`:** a device handle returned from SDL_hid_open().

**Parameter `string`:** a wide string buffer to put the data into.

**Parameter `maxlen`:** the length of the buffer in multiples of wchar_t.

**Returns:** 0 on success or a negative error code on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27877).
