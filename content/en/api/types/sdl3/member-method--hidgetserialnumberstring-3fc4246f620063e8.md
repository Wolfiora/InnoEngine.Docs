---
title: "SDLContext.RawApi — Method: HidGetSerialNumberString"
description: "Exact Method: HidGetSerialNumberString contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3fc4246f620063e8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HidGetSerialNumberString

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidGetSerialNumberString`

<a id="api-59d087c9688a25a0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HidGetSerialNumberString(Inno.Native.Sdl3.SDLHidDevice*,System.UInt16*,System.UInt64) 010de56c7751fd4c8966d9f99fa664b711fe3dab939508e35c11e3a236f3e61d -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.HidGetSerialNumberString(Inno.Native.Sdl3.SDLHidDevice* dev, ushort* @string, ulong maxlen)
```

Get The Serial Number String from a HID device.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dev`:** a device handle returned from SDL_hid_open().

**Parameter `string`:** a wide string buffer to put the data into.

**Parameter `maxlen`:** the length of the buffer in multiples of wchar_t.

**Returns:** 0 on success or a negative error code on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43800).
