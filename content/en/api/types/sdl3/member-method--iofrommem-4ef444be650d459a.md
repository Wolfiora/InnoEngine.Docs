---
title: "SDLContext.RawApi — Method: IoFromMem"
description: "Exact Method: IoFromMem contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4ef444be650d459a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: IoFromMem

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IoFromMem`

<a id="api-f866a255b380fd37"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.IoFromMem(System.Void*,System.UInt64) 515ec0329b7c5c71b39e61e8f4eab011bdf5d5105e1fd88df7f9f5caafd24de2 -->

```csharp
public Inno.Native.Sdl3.SDLIOStream* Inno.Native.Sdl3.SDLContext.RawApi.IoFromMem(void* mem, ulong size)
```

Use this function to prepare a read-write memory buffer for use with
SDL_IOStream.
This function sets up an SDL_IOStream struct based on a memory area of a
certain size, for both read and write access.
This memory buffer is not copied by the SDL_IOStream; the pointer you
provide must remain valid until you close the stream.
If you need to make sure the SDL_IOStream never writes to the memory
buffer, you should use SDL_IOFromConstMem() with a read-only buffer of
memory instead.
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

**See also:** SDL_IOFromConstMem

**See also:** SDL_CloseIO

**See also:** SDL_FlushIO

**See also:** SDL_ReadIO

**See also:** SDL_SeekIO

**See also:** SDL_TellIO

**See also:** SDL_WriteIO

**Parameter `mem`:** a pointer to a buffer to feed an SDL_IOStream stream.

**Parameter `size`:** the buffer size, in bytes.

**Returns:** a pointer to a new SDL_IOStream structure or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27041).
