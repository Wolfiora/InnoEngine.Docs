---
title: "SDLContext.RawApi — Method: SaveFileIo"
description: "Exact Method: SaveFileIo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.17898ff3533867b1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SaveFileIo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SaveFileIo`

<a id="api-959fe158f66d6dfc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SaveFileIo(Inno.Native.Sdl3.SDLIOStream*,System.Void*,System.UInt64,System.Byte) 9601e040dfaa7ba4c8d29bd66d81f285bbcf8c72de2b021352ea4d61cee2d74e -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SaveFileIo(Inno.Native.Sdl3.SDLIOStream* src, void* data, ulong datasize, byte closeio)
```

Save all the data into an SDL data stream.

**Thread safety:** Do not use the same SDL_IOStream from two threads at once.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SaveFile

**See also:** SDL_LoadFile_IO

**Parameter `src`:** the SDL_IOStream to write all data to.

**Parameter `data`:** the data to be written. If datasize is 0, may be NULL or a
invalid pointer.

**Parameter `datasize`:** the number of bytes to be written.

**Parameter `closeio`:** if true, calls SDL_CloseIO() on `src` before returning, even
in the case of an error.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42580).
