---
title: "SDLContext.RawApi — Method: WriteU32Be"
description: "Exact Method: WriteU32Be contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.81313c6650cb1cb8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WriteU32Be

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WriteU32Be`

<a id="api-5f76c2683fa3bb54"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WriteU32Be(Inno.Native.Sdl3.SDLIOStream*,System.UInt32) 7f74830b038b5a5eb05d13ea31a4b3dd49a99224b4f1711957929be409f46809 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WriteU32Be(Inno.Native.Sdl3.SDLIOStream* dst, uint value)
```

Use this function to write 32 bits in native format to an SDL_IOStream as
big-endian data.
SDL byteswaps the data only if necessary, so the application always
specifies native format, and the data written will be in big-endian format.

**Thread safety:** Do not use the same SDL_IOStream from two threads at once.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dst`:** the stream to which data will be written.

**Parameter `value`:** the data to be written, in native format.

**Returns:** true on successful write or false on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44485).
