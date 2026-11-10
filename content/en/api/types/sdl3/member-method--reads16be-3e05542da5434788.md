---
title: "SDLContext.RawApi — Method: ReadS16Be"
description: "Exact Method: ReadS16Be contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3e05542da5434788
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ReadS16Be

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ReadS16Be`

<a id="api-cea53ae88b2ecbcc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ReadS16Be(Inno.Native.Sdl3.SDLIOStream*,System.Int16*) ad7c09fa2b6728bf90be1cf9d2836fbbb35f1ef3a9d493fe8acf1f18b3e7d6ec -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ReadS16Be(Inno.Native.Sdl3.SDLIOStream* src, short* value)
```

Use this function to read 16 bits of big-endian data from an SDL_IOStream
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40205).
