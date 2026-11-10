---
title: "SDLContext.RawApi — Method: WriteU64Le"
description: "Exact Method: WriteU64Le contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.acf563142e9642d0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WriteU64Le

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WriteU64Le`

<a id="api-89c1df04ee2cc748"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WriteU64Le(Inno.Native.Sdl3.SDLIOStream*,System.UInt64) 6b2212ac87dfb80accaef6c151e5b80e2a6a7624515d337f886e38d72d5bbb5f -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WriteU64Le(Inno.Native.Sdl3.SDLIOStream* dst, ulong value)
```

Use this function to write 64 bits in native format to an SDL_IOStream as
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45824).
