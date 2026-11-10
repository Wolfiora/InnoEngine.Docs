---
title: "SDLContext.RawApi — Method: HidGetIndexedString"
description: "Exact Method: HidGetIndexedString contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.601b71122b5d336f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HidGetIndexedString

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidGetIndexedString`

<a id="api-533f18f931ecab70"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HidGetIndexedString(Inno.Native.Sdl3.SDLHidDevice*,System.Int32,System.UInt16*,System.UInt64) 047a21cc973d9b4ca12f15ccd38dfa1280ebbd080530cac0c11d0dbc24e22868 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.HidGetIndexedString(Inno.Native.Sdl3.SDLHidDevice* dev, int string_index, ushort* @string, ulong maxlen)
```

Get a string from a HID device, based on its string index.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dev`:** a device handle returned from SDL_hid_open().

**Parameter `string_index`:** the index of the string to get.

**Parameter `string`:** a wide string buffer to put the data into.

**Parameter `maxlen`:** the length of the buffer in multiples of wchar_t.

**Returns:** 0 on success or a negative error code on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29615).
