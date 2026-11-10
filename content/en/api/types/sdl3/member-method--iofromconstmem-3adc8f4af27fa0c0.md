---
title: "SDLContext.RawApi — Method: IoFromConstMem"
description: "Exact Method: IoFromConstMem contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3adc8f4af27fa0c0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: IoFromConstMem

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IoFromConstMem`

<a id="api-7df0fed56a88c7fc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.IoFromConstMem(System.Void*,System.UInt64) 0a04f5d13f800e8c2a6ed0e10032f105b712633415892f7283ce55a80acec9c8 -->

```csharp
public Inno.Native.Sdl3.SDLIOStream* Inno.Native.Sdl3.SDLContext.RawApi.IoFromConstMem(void* mem, ulong size)
```

Use this function to prepare a read-only memory buffer for use with
SDL_IOStream.
This function sets up an SDL_IOStream struct based on a memory area of a
certain size. It assumes the memory area is not writable.
Attempting to write to this SDL_IOStream stream will report an error
without writing to the memory buffer.
This memory buffer is not copied by the SDL_IOStream; the pointer you
provide must remain valid until you close the stream.
If you need to write to a memory buffer, you should use SDL_IOFromMem()
with a writable buffer of memory instead.
The following properties will be set at creation time by SDL:
- `SDL_PROP_IOSTREAM_MEMORY_POINTER`: this will be the `mem` parameter that
was passed to this function.
- `SDL_PROP_IOSTREAM_MEMORY_SIZE_NUMBER`: this will be the `size` parameter
that was passed to this function.
Additionally, the following properties are recognized:
- `SDL_PROP_IOSTREAM_MEMORY_FREE_FUNC_POINTER`: if this property is set to
a non-NULL value it will be interpreted as a function of SDL_free_func
type and called with the passed `mem` pointer when closing the stream. By
default it is unset, i.e., the memory will not be freed.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_IOFromMem

**See also:** SDL_CloseIO

**See also:** SDL_ReadIO

**See also:** SDL_SeekIO

**See also:** SDL_TellIO

**Parameter `mem`:** a pointer to a read-only buffer to feed an SDL_IOStream stream.

**Parameter `size`:** the buffer size, in bytes.

**Returns:** a pointer to a new SDL_IOStream structure or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35855).
