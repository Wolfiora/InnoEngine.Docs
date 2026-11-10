---
title: "SDLContext.RawApi — Method: IoFromDynamicMem"
description: "Exact Method: IoFromDynamicMem contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7f231af24300942a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: IoFromDynamicMem

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IoFromDynamicMem`

<a id="api-a81c5df73d4b9711"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.IoFromDynamicMem 893cf775f94bf98835b59b929d4ef632c8bc506534cb564e735689c34f9c25c6 -->

```csharp
public Inno.Native.Sdl3.SDLIOStream* Inno.Native.Sdl3.SDLContext.RawApi.IoFromDynamicMem()
```

Use this function to create an SDL_IOStream that is backed by dynamically
allocated memory.
This supports the following properties to provide access to the memory and
control over allocations:
- `SDL_PROP_IOSTREAM_DYNAMIC_MEMORY_POINTER`: a pointer to the internal
memory of the stream. This can be set to NULL to transfer ownership of
the memory to the application, which should free the memory with
SDL_free(). If this is done, the next operation on the stream must be
SDL_CloseIO().
- `SDL_PROP_IOSTREAM_DYNAMIC_CHUNKSIZE_NUMBER`: memory will be allocated in
multiples of this size, defaulting to 1024.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CloseIO

**See also:** SDL_ReadIO

**See also:** SDL_SeekIO

**See also:** SDL_TellIO

**See also:** SDL_WriteIO

**Returns:** a pointer to a new SDL_IOStream structure or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39771).
