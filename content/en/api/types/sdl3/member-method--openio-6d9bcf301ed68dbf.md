---
title: "SDLContext.RawApi — Method: OpenIo"
description: "Exact Method: OpenIo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6d9bcf301ed68dbf
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: OpenIo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OpenIo`

<a id="api-6d26459970836bd1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.OpenIo(Inno.Native.Sdl3.SDLIOStreamInterface*,System.Void*) c1450d64557fc37d81a0dc1755cb48f5fe04b9b1a0d1a1647cec916a3057b156 -->

```csharp
public Inno.Native.Sdl3.SDLIOStream* Inno.Native.Sdl3.SDLContext.RawApi.OpenIo(Inno.Native.Sdl3.SDLIOStreamInterface* iface, void* userdata)
```

Create a custom SDL_IOStream.
Applications do not need to use this function unless they are providing
their own SDL_IOStream implementation. If you just need an SDL_IOStream to
read/write a common data source, you should use the built-in
implementations in SDL, like SDL_IOFromFile() or SDL_IOFromMem(), etc.
This function makes a copy of `iface` and the caller does not need to keep
it around after this call.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CloseIO

**See also:** SDL_INIT_INTERFACE

**See also:** SDL_IOFromConstMem

**See also:** SDL_IOFromFile

**See also:** SDL_IOFromMem

**Parameter `iface`:** the interface that implements this SDL_IOStream, initialized
using SDL_INIT_INTERFACE().

**Parameter `userdata`:** the pointer that will be passed to the interface functions.

**Returns:** a pointer to the allocated memory on success or NULL on failure;
call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41885).
