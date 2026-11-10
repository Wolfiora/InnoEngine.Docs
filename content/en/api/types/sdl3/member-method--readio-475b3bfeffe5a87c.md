---
title: "SDLContext.RawApi — Method: ReadIo"
description: "Exact Method: ReadIo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.475b3bfeffe5a87c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ReadIo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ReadIo`

<a id="api-41548bd8a3f87726"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ReadIo(Inno.Native.Sdl3.SDLIOStream*,System.Void*,System.UInt64) 071d712fe3ea256ee2222765132e10b50d51549862a3c6818561474b8341f6d1 -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.RawApi.ReadIo(Inno.Native.Sdl3.SDLIOStream* context, void* ptr, ulong size)
```

Read from a data source.
This function reads up `size` bytes from the data source to the area
pointed at by `ptr`. This function may read less bytes than requested.
This function will return zero when the data stream is completely read, and
SDL_GetIOStatus() will return SDL_IO_STATUS_EOF. If zero is returned and
the stream is not at EOF, SDL_GetIOStatus() will return a different error
value and SDL_GetError() will offer a human-readable message.
A request for zero bytes on a valid stream will return zero immediately
without accessing the stream, so the stream status (EOF, err, etc) will not
change.

**Thread safety:** Do not use the same SDL_IOStream from two threads at once.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_WriteIO

**See also:** SDL_GetIOStatus

**Parameter `context`:** a pointer to an SDL_IOStream structure.

**Parameter `ptr`:** a pointer to a buffer to read data into.

**Parameter `size`:** the number of bytes to read from the data source.

**Returns:** the number of bytes read, or 0 on end of file or other failure;
call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21766).
