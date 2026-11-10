---
title: "SDLContext.RawApi — Method: WriteS16Le"
description: "Exact Method: WriteS16Le contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e553f673e3d7d5f0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WriteS16Le

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WriteS16Le`

<a id="api-06127e810a83b09d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WriteS16Le(Inno.Native.Sdl3.SDLIOStream*,System.Int16) a66d3445553eae002b1a7f431c2e0cc39001c5b115b0f07a3c40c64daf277a11 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WriteS16Le(Inno.Native.Sdl3.SDLIOStream* dst, short value)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45548).
