---
title: "SDLContext.RawApi — Method: WriteS16Be"
description: "Exact Method: WriteS16Be contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d9f764e37c21597d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WriteS16Be

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WriteS16Be`

<a id="api-d129bba2657d4616"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WriteS16Be(Inno.Native.Sdl3.SDLIOStream*,System.Int16) ced99d79f6de3d4197e5b1c648520055a14dccbf1f5bd77842d8e992fbf01c22 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WriteS16Be(Inno.Native.Sdl3.SDLIOStream* dst, short value)
```

Use this function to write 16 bits in native format to an SDL_IOStream as
big-endian data.
SDL byteswaps the data only if necessary, so the application always
specifies native format, and the data written will be in big-endian format.

**Thread safety:** Do not use the same SDL_IOStream from two threads at once.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dst`:** the stream to which data will be written.

**Parameter `value`:** the data to be written, in native format.

**Returns:** true on successful write or false on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48127).
