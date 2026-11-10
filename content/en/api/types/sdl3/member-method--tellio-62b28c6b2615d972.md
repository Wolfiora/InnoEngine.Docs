---
title: "SDLContext.RawApi — Method: TellIo"
description: "Exact Method: TellIo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.62b28c6b2615d972
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: TellIo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `TellIo`

<a id="api-bf74c19b39d03b47"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.TellIo(Inno.Native.Sdl3.SDLIOStream*) b5a9b9e2ebf275c661b03f32408b43fefa64a3972c6e6be4f1657d3a7ea52a94 -->

```csharp
public long Inno.Native.Sdl3.SDLContext.RawApi.TellIo(Inno.Native.Sdl3.SDLIOStream* context)
```

Determine the current read/write offset in an SDL_IOStream data stream.
SDL_TellIO is actually a wrapper function that calls the SDL_IOStream's
`seek` method, with an offset of 0 bytes from `SDL_IO_SEEK_CUR`, to
simplify application development.

**Thread safety:** Do not use the same SDL_IOStream from two threads at once.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SeekIO

**Parameter `context`:** an SDL_IOStream data stream object from which to get the
current offset.

**Returns:** the current offset in the stream, or -1 if the information can not
be determined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40038).
