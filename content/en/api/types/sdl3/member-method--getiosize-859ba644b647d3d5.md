---
title: "SDLContext.RawApi — Method: GetIoSize"
description: "Exact Method: GetIoSize contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.859ba644b647d3d5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetIoSize

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetIoSize`

<a id="api-f2b81d1033da598c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetIoSize(Inno.Native.Sdl3.SDLIOStream*) cc894a6dc6959482b8fe20a33c03e59a7328e082ef7ec8600bc6aaba71535fed -->

```csharp
public long Inno.Native.Sdl3.SDLContext.RawApi.GetIoSize(Inno.Native.Sdl3.SDLIOStream* context)
```

Use this function to get the size of the data stream in an SDL_IOStream.

**Thread safety:** Do not use the same SDL_IOStream from two threads at once.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `context`:** the SDL_IOStream to get the size of the data stream from.

**Returns:** the size of the data stream in the SDL_IOStream on success or a
negative error code on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27124).
