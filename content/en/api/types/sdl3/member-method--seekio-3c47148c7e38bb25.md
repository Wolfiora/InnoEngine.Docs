---
title: "SDLContext.RawApi — Method: SeekIo"
description: "Exact Method: SeekIo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3c47148c7e38bb25
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SeekIo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SeekIo`

<a id="api-0cad493789e5121e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SeekIo(Inno.Native.Sdl3.SDLIOStream*,System.Int64,Inno.Native.Sdl3.SDLIOWhence) 92085f2bf1e6007e1a8f808dccf30e83df78732bb6fab4d949bb7696e065a745 -->

```csharp
public long Inno.Native.Sdl3.SDLContext.RawApi.SeekIo(Inno.Native.Sdl3.SDLIOStream* context, long offset, Inno.Native.Sdl3.SDLIOWhence whence)
```

Seek within an SDL_IOStream data stream.
This function seeks to byte `offset`, relative to `whence`.
`whence` may be any of the following values:
- `SDL_IO_SEEK_SET`: seek from the beginning of data
- `SDL_IO_SEEK_CUR`: seek relative to current read point
- `SDL_IO_SEEK_END`: seek relative to the end of data
If this stream can not seek, it will return -1.

**Thread safety:** Do not use the same SDL_IOStream from two threads at once.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_TellIO

**Parameter `context`:** a pointer to an SDL_IOStream structure.

**Parameter `offset`:** an offset in bytes, relative to `whence` location; can be
negative.

**Parameter `whence`:** any of `SDL_IO_SEEK_SET`, `SDL_IO_SEEK_CUR`,
`SDL_IO_SEEK_END`.

**Returns:** the final offset in the data stream after the seek or -1 on
failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35910).
