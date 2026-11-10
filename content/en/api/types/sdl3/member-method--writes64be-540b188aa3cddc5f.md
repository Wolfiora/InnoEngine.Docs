---
title: "SDLContext.RawApi — Method: WriteS64Be"
description: "Exact Method: WriteS64Be contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.540b188aa3cddc5f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WriteS64Be

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WriteS64Be`

<a id="api-3cacce61344a6d7a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WriteS64Be(Inno.Native.Sdl3.SDLIOStream*,System.Int64) a138887f62cd7d3ad03d70ca072c72123d4a6112fc629a61af0a53eb8bb8e947 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WriteS64Be(Inno.Native.Sdl3.SDLIOStream* dst, long value)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43862).
