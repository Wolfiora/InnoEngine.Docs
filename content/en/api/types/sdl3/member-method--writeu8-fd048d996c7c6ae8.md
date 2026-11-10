---
title: "SDLContext.RawApi — Method: WriteU8"
description: "Exact Method: WriteU8 contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fd048d996c7c6ae8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WriteU8

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WriteU8`

<a id="api-489cdc7a5b46125c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WriteU8(Inno.Native.Sdl3.SDLIOStream*,System.Byte) 210c9d48778b23f0259bbf878a29a4fbfca680a820abe4ba340838b69bd606b5 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WriteU8(Inno.Native.Sdl3.SDLIOStream* dst, byte value)
```

Use this function to write a byte to an SDL_IOStream.

**Thread safety:** Do not use the same SDL_IOStream from two threads at once.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dst`:** the SDL_IOStream to write to.

**Parameter `value`:** the byte value to write.

**Returns:** true on successful write or false on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37446).
