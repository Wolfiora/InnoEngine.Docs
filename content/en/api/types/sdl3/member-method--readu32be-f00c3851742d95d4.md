---
title: "SDLContext.RawApi — Method: ReadU32Be"
description: "Exact Method: ReadU32Be contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f00c3851742d95d4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ReadU32Be

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ReadU32Be`

<a id="api-8662910e8fba46c5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ReadU32Be(Inno.Native.Sdl3.SDLIOStream*,System.UInt32*) 3e6a16f175fe9e283b0dc9c09031b525b968a824286fa53db9f6b4358c3d9656 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ReadU32Be(Inno.Native.Sdl3.SDLIOStream* src, uint* value)
```

Use this function to read 32 bits of big-endian data from an SDL_IOStream
and return in native format.
SDL byteswaps the data only if necessary, so the data returned will be in
the native byte order.
This function will return false when the data stream is completely read,
and SDL_GetIOStatus() will return SDL_IO_STATUS_EOF. If false is returned
and the stream is not at EOF, SDL_GetIOStatus() will return a different
error value and SDL_GetError() will offer a human-readable message.

**Thread safety:** Do not use the same SDL_IOStream from two threads at once.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `src`:** the stream from which to read data.

**Parameter `value`:** a pointer filled in with the data read.

**Returns:** true on successful read or false on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38058).
