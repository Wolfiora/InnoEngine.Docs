---
title: "SDLContext.RawApi — Method: WriteS64Le"
description: "Exact Method: WriteS64Le contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c4c730ae20737c37
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WriteS64Le

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WriteS64Le`

<a id="api-71a3843f9ff7dc65"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WriteS64Le(Inno.Native.Sdl3.SDLIOStream*,System.Int64) a2370b1f41114c009a7c885cff4580980c281d4aaca1fec72b6f8b89c54bea1a -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WriteS64Le(Inno.Native.Sdl3.SDLIOStream* dst, long value)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18223).
