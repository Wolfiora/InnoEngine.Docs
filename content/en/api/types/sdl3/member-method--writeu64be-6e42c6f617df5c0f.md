---
title: "SDLContext.RawApi — Method: WriteU64Be"
description: "Exact Method: WriteU64Be contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6e42c6f617df5c0f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WriteU64Be

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WriteU64Be`

<a id="api-75159b8136868738"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WriteU64Be(Inno.Native.Sdl3.SDLIOStream*,System.UInt64) 1cc0607dfb7eb9b55d52881d4bfc47970f2e50e51734658b169a4660de298d62 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WriteU64Be(Inno.Native.Sdl3.SDLIOStream* dst, ulong value)
```

Use this function to write 64 bits in native format to an SDL_IOStream as
big-endian data.
SDL byteswaps the data only if necessary, so the application always
specifies native format, and the data written will be in big-endian format.

**Thread safety:** Do not use the same SDL_IOStream from two threads at once.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dst`:** the stream to which data will be written.

**Parameter `value`:** the data to be written, in native format.

**Returns:** true on successful write or false on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37142).
