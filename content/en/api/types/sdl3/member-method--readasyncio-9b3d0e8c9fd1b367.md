---
title: "SDLContext.RawApi — Method: ReadAsyncIo"
description: "Exact Method: ReadAsyncIo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9b3d0e8c9fd1b367
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ReadAsyncIo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ReadAsyncIo`

<a id="api-68a90978cb7a3b73"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ReadAsyncIo(Inno.Native.Sdl3.SDLAsyncIO*,System.Void*,System.UInt64,System.UInt64,Inno.Native.Sdl3.SDLAsyncIOQueue*,System.Void*) 6f4598520cdaf9ce40099c5b9601e6ecedfdc7d31b8190435baa77bc540f90cb -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ReadAsyncIo(Inno.Native.Sdl3.SDLAsyncIO* asyncio, void* ptr, ulong offset, ulong size, Inno.Native.Sdl3.SDLAsyncIOQueue* queue, void* userdata)
```

Start an async read.
This function reads up to `size` bytes from `offset` position in the data
source to the area pointed at by `ptr`. This function may read less bytes
than requested.
This function returns as quickly as possible; it does not wait for the read
to complete. On a successful return, this work will continue in the
background. If the work begins, even failure is asynchronous: a failing
return value from this function only means the work couldn't start at all.
`ptr` must remain available until the work is done, and may be accessed by
the system at any time until then. Do not allocate it on the stack, as this
might take longer than the life of the calling function to complete!
An SDL_AsyncIOQueue must be specified. The newly-created task will be added
to it when it completes its work.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_WriteAsyncIO

**See also:** SDL_CreateAsyncIOQueue

**Parameter `asyncio`:** a pointer to an SDL_AsyncIO structure.

**Parameter `ptr`:** a pointer to a buffer to read data into.

**Parameter `offset`:** the position to start reading in the data source.

**Parameter `size`:** the number of bytes to read from the data source.

**Parameter `queue`:** a queue to add the new SDL_AsyncIO to.

**Parameter `userdata`:** an app-defined pointer that will be provided with the task
results.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43647).
