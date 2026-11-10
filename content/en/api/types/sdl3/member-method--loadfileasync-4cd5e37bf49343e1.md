---
title: "SDLContext.RawApi — Method: LoadFileAsync"
description: "Exact Method: LoadFileAsync contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4cd5e37bf49343e1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: LoadFileAsync

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LoadFileAsync`

<a id="api-a93454c9fa4a4746"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.LoadFileAsync(System.SByte*,Inno.Native.Sdl3.SDLAsyncIOQueue*,System.Void*) d5d98d76f4d32ce8c9d5cbc6b65ed374e13d4981c6f02825342d5c80b0d4c55c -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.LoadFileAsync(sbyte* file, Inno.Native.Sdl3.SDLAsyncIOQueue* queue, void* userdata)
```

Load all the data from a file path, asynchronously.
This function returns as quickly as possible; it does not wait for the read
to complete. On a successful return, this work will continue in the
background. If the work begins, even failure is asynchronous: a failing
return value from this function only means the work couldn't start at all.
The data is allocated with a zero byte at the end (null terminated) for
convenience. This extra byte is not included in SDL_AsyncIOOutcome's
bytes_transferred value.
This function will allocate the buffer to contain the file. It must be
deallocated by calling SDL_free() on SDL_AsyncIOOutcome's buffer field
after completion.
An SDL_AsyncIOQueue must be specified. The newly-created task will be added
to it when it completes its work.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_LoadFile_IO

**Parameter `file`:** the path to read all available data from.

**Parameter `queue`:** a queue to add the new SDL_AsyncIO to.

**Parameter `userdata`:** an app-defined pointer that will be provided with the task
results.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20610).
