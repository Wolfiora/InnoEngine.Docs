---
title: "SDLContext.RawApi — Method: ReadU64Le"
description: "Exact Method: ReadU64Le contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5a0b1091d37eedc7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ReadU64Le

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ReadU64Le`

<a id="api-60d1a68188c499e5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ReadU64Le(Inno.Native.Sdl3.SDLIOStream*,System.UInt64*) 39e1504014a0a094b43047276643fb499839640263e7f3e13373fc43eaa25832 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ReadU64Le(Inno.Native.Sdl3.SDLIOStream* src, ulong* value)
```

Use this function to read 64 bits of little-endian data from an
SDL_IOStream and return in native format.
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24938).
