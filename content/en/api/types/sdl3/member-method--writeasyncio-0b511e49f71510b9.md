---
title: "SDLContext.RawApi — Method: WriteAsyncIo"
description: "Exact Method: WriteAsyncIo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0b511e49f71510b9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WriteAsyncIo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WriteAsyncIo`

<a id="api-9b80629f4fded0d1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WriteAsyncIo(Inno.Native.Sdl3.SDLAsyncIO*,System.Void*,System.UInt64,System.UInt64,Inno.Native.Sdl3.SDLAsyncIOQueue*,System.Void*) 412a4337c7e503d18c22e2fdde5a8af3e73b37d2e99c09466142a021fd651f30 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WriteAsyncIo(Inno.Native.Sdl3.SDLAsyncIO* asyncio, void* ptr, ulong offset, ulong size, Inno.Native.Sdl3.SDLAsyncIOQueue* queue, void* userdata)
```

Start an async write.
This function writes `size` bytes from `offset` position in the data source
to the area pointed at by `ptr`.
This function returns as quickly as possible; it does not wait for the
write to complete. On a successful return, this work will continue in the
background. If the work begins, even failure is asynchronous: a failing
return value from this function only means the work couldn't start at all.
`ptr` must remain available until the work is done, and may be accessed by
the system at any time until then. Do not allocate it on the stack, as this
might take longer than the life of the calling function to complete!
An SDL_AsyncIOQueue must be specified. The newly-created task will be added
to it when it completes its work.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ReadAsyncIO

**See also:** SDL_CreateAsyncIOQueue

**Parameter `asyncio`:** a pointer to an SDL_AsyncIO structure.

**Parameter `ptr`:** a pointer to a buffer to write data from.

**Parameter `offset`:** the position to start writing to the data source.

**Parameter `size`:** the number of bytes to write to the data source.

**Parameter `queue`:** a queue to add the new SDL_AsyncIO to.

**Parameter `userdata`:** an app-defined pointer that will be provided with the task
results.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51083).
