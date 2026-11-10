---
title: "SDLContext.RawApi — Method: WriteS32Le"
description: "Exact Method: WriteS32Le contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2e07a630ba2f716c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WriteS32Le

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WriteS32Le`

<a id="api-a9e1d950f84c381d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WriteS32Le(Inno.Native.Sdl3.SDLIOStream*,System.Int32) 6fbfec9f30b3d291d48060c36daf6a0395ae807227a03bf40611b2d0e31384d8 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WriteS32Le(Inno.Native.Sdl3.SDLIOStream* dst, int value)
```

Use this function to write 32 bits in native format to an SDL_IOStream as
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37473).
