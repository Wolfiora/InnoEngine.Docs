---
title: "SDLContext.RawApi — Method: ReadS8"
description: "Exact Method: ReadS8 contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.acf3f55fcb01b41c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ReadS8

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ReadS8`

<a id="api-2212b0368d888282"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ReadS8(Inno.Native.Sdl3.SDLIOStream*,System.SByte*) d6b32828d111ab6b9356edf7c546dc5fa193779c6d4dae44e5da9b7472606df0 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ReadS8(Inno.Native.Sdl3.SDLIOStream* src, sbyte* value)
```

Use this function to read a signed byte from an SDL_IOStream.
This function will return false when the data stream is completely read,
and SDL_GetIOStatus() will return SDL_IO_STATUS_EOF. If false is returned
and the stream is not at EOF, SDL_GetIOStatus() will return a different
error value and SDL_GetError() will offer a human-readable message.

**Thread safety:** Do not use the same SDL_IOStream from two threads at once.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `src`:** the SDL_IOStream to read from.

**Parameter `value`:** a pointer filled in with the data read.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32586).
