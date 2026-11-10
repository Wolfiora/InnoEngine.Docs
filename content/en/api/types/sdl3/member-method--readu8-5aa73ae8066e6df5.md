---
title: "SDLContext.RawApi — Method: ReadU8"
description: "Exact Method: ReadU8 contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5aa73ae8066e6df5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ReadU8

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ReadU8`

<a id="api-15fdb93fd2fc7dad"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ReadU8(Inno.Native.Sdl3.SDLIOStream*,System.Byte*) 4dd221c8f286361d3c73144e0994a960b5d1fee92b3d0d99f41d6b5ba28be10a -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ReadU8(Inno.Native.Sdl3.SDLIOStream* src, byte* value)
```

Use this function to read a byte from an SDL_IOStream.
This function will return false when the data stream is completely read,
and SDL_GetIOStatus() will return SDL_IO_STATUS_EOF. If false is returned
and the stream is not at EOF, SDL_GetIOStatus() will return a different
error value and SDL_GetError() will offer a human-readable message.

**Thread safety:** Do not use the same SDL_IOStream from two threads at once.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `src`:** the SDL_IOStream to read from.

**Parameter `value`:** a pointer filled in with the data read.

**Returns:** true on success or false on failure or EOF; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43108).
