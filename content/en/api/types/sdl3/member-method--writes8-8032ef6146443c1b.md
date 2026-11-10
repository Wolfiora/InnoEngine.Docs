---
title: "SDLContext.RawApi — Method: WriteS8"
description: "Exact Method: WriteS8 contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8032ef6146443c1b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WriteS8

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WriteS8`

<a id="api-f8bad6240e83d857"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WriteS8(Inno.Native.Sdl3.SDLIOStream*,System.SByte) b3b74ed3a17d3bdfba32e72a42c0b294cc080d22faafffac9873825ae626cb3d -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WriteS8(Inno.Native.Sdl3.SDLIOStream* dst, sbyte value)
```

Use this function to write a signed byte to an SDL_IOStream.

**Thread safety:** Do not use the same SDL_IOStream from two threads at once.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dst`:** the SDL_IOStream to write to.

**Parameter `value`:** the byte value to write.

**Returns:** true on successful write or false on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28172).
