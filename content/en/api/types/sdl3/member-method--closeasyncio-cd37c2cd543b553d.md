---
title: "SDLContext.RawApi — Method: CloseAsyncIo"
description: "Exact Method: CloseAsyncIo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.cd37c2cd543b553d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CloseAsyncIo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CloseAsyncIo`

<a id="api-e0d8bbcbe77acf5c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CloseAsyncIo(Inno.Native.Sdl3.SDLAsyncIO*,System.Byte,Inno.Native.Sdl3.SDLAsyncIOQueue*,System.Void*) a3405492bde4dce3a9d9f644d66eb5addb4879f2d10eaf68aa8d84cd0e1374f3 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.CloseAsyncIo(Inno.Native.Sdl3.SDLAsyncIO* asyncio, byte flush, Inno.Native.Sdl3.SDLAsyncIOQueue* queue, void* userdata)
```

Close and free any allocated resources for an async I/O object.
Closing a file is _also_ an asynchronous task! If a write failure were to
happen during the closing process, for example, the task results will
report it as usual.
Closing a file that has been written to does not guarantee the data has
made it to physical media; it may remain in the operating system's file
cache, for later writing to disk. This means that a successfully-closed
file can be lost if the system crashes or loses power in this small window.
To prevent this, call this function with the `flush` parameter set to true.
This will make the operation take longer, and perhaps increase system load
in general, but a successful result guarantees that the data has made it to
physical storage. Don't use this for temporary files, caches, and
unimportant data, and definitely use it for crucial irreplaceable files,
like game saves.
This function guarantees that the close will happen after any other pending
tasks to `asyncio`, so it's safe to open a file, start several operations,
close the file immediately, then check for all results later. This function
will not block until the tasks have completed.
Once this function returns true, `asyncio` is no longer valid, regardless
of any future outcomes. Any completed tasks might still contain this
pointer in their SDL_AsyncIOOutcome data, in case the app was using this
value to track information, but it should not be used again.
If this function returns false, the close wasn't started at all, and it's
safe to attempt to close again later.
An SDL_AsyncIOQueue must be specified. The newly-created task will be added
to it when it completes its work.

**Thread safety:** It is safe to call this function from any thread, but two
threads should not attempt to close the same object.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `asyncio`:** a pointer to an SDL_AsyncIO structure to close.

**Parameter `flush`:** true if data should sync to disk before the task completes.

**Parameter `queue`:** a queue to add the new SDL_AsyncIO to.

**Parameter `userdata`:** an app-defined pointer that will be provided with the task
results.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20096).
