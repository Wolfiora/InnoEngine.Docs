---
title: "SDLContext.RawApi — Method: WriteU16Be"
description: "Exact Method: WriteU16Be contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.990fec5c3a9d1d5d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WriteU16Be

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WriteU16Be`

<a id="api-214899253bdf5c78"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WriteU16Be(Inno.Native.Sdl3.SDLIOStream*,System.UInt16) 02426cd6e5bc8c5c249b8103787aa849dd7e81c2faa0868bc2ebf098905bf0dd -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WriteU16Be(Inno.Native.Sdl3.SDLIOStream* dst, ushort value)
```

Use this function to write 16 bits in native format to an SDL_IOStream as
big-endian data.
SDL byteswaps the data only if necessary, so the application always
specifies native format, and the data written will be in big-endian format.

**Thread safety:** Do not use the same SDL_IOStream from two threads at once.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dst`:** the stream to which data will be written.

**Parameter `value`:** the data to be written, in native format.

**Returns:** true on successful write or false on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22234).
