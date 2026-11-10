---
title: "SDLContext.RawApi — Method: WriteS32Be"
description: "Exact Method: WriteS32Be contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a4825f29bd0d4b97
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WriteS32Be

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WriteS32Be`

<a id="api-df235ab9223afa15"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WriteS32Be(Inno.Native.Sdl3.SDLIOStream*,System.Int32) a005a605a15776defb5af45a3f780dfd1edcd64c48f6ecba68d7515304db44b6 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WriteS32Be(Inno.Native.Sdl3.SDLIOStream* dst, int value)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41261).
