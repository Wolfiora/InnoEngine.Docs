---
title: "SDLContext.RawApi — Method: LoadFileIo"
description: "Exact Method: LoadFileIo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e2243bb76db537e0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: LoadFileIo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LoadFileIo`

<a id="api-59f07ef27d5be7d9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.LoadFileIo(Inno.Native.Sdl3.SDLIOStream*,System.UInt64*,System.Byte) 9da06d2b1b7ccbaa3e4d1ea932fde48b740f4b580b9e6fa16d1415e354f33f5d -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.LoadFileIo(Inno.Native.Sdl3.SDLIOStream* src, ulong* datasize, byte closeio)
```

Load all the data from an SDL data stream.
The data is allocated with a zero byte at the end (null terminated) for
convenience. This extra byte is not included in the value reported via
`datasize`.
The data should be freed with SDL_free().

**Thread safety:** Do not use the same SDL_IOStream from two threads at once.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_LoadFile

**See also:** SDL_SaveFile_IO

**Parameter `src`:** the SDL_IOStream to read all available data from.

**Parameter `datasize`:** a pointer filled in with the number of bytes read, may be
NULL.

**Parameter `closeio`:** if true, calls SDL_CloseIO() on `src` before returning, even
in the case of an error.

**Returns:** the data or NULL on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27799).
