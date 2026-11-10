---
title: "SDLContext.RawApi — Method: WriteU16Le"
description: "Exact Method: WriteU16Le contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.96a9db5b1eb9cd5f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WriteU16Le

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WriteU16Le`

<a id="api-0203fd9d05b9e26c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WriteU16Le(Inno.Native.Sdl3.SDLIOStream*,System.UInt16) 5119c1650d22def372dd25a9b175f959e270c072d076b8dafdfb3bfd57589bd8 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WriteU16Le(Inno.Native.Sdl3.SDLIOStream* dst, ushort value)
```

Use this function to write 16 bits in native format to an SDL_IOStream as
little-endian data.
SDL byteswaps the data only if necessary, so the application always
specifies native format, and the data written will be in little-endian
format.

**Thread safety:** Do not use the same SDL_IOStream from two threads at once.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dst`:** the stream to which data will be written.

**Parameter `value`:** the data to be written, in native format.

**Returns:** true on successful write or false on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51034).
