---
title: "SDLContext.RawApi — Method: ReadS64Le"
description: "Exact Method: ReadS64Le contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.52db6ea4acdf5446
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ReadS64Le

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ReadS64Le`

<a id="api-de5b2638d4bd7f16"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ReadS64Le(Inno.Native.Sdl3.SDLIOStream*,System.Int64*) 47d3c39b2821e9a9a9ca356ab30e8a4ce46bf575b7e99afad1d9082f1da99437 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ReadS64Le(Inno.Native.Sdl3.SDLIOStream* src, long* value)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30286).
