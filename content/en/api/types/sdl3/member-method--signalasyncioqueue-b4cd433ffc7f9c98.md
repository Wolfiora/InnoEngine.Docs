---
title: "SDLContext.RawApi — Method: SignalAsyncIoQueue"
description: "Exact Method: SignalAsyncIoQueue contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b4cd433ffc7f9c98
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SignalAsyncIoQueue

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SignalAsyncIoQueue`

<a id="api-ba4ef150de9fee81"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SignalAsyncIoQueue(Inno.Native.Sdl3.SDLAsyncIOQueue*) 3f70472eeecfea3024ce121292a9e2af3659b07df41f90eef703482fc571503a -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.SignalAsyncIoQueue(Inno.Native.Sdl3.SDLAsyncIOQueue* queue)
```

Wake up any threads that are blocking in SDL_WaitAsyncIOResult().
This will unblock any threads that are sleeping in a call to
SDL_WaitAsyncIOResult for the specified queue, and cause them to return
from that function.
This can be useful when destroying a queue to make sure nothing is touching
it indefinitely. In this case, once this call completes, the caller should
take measures to make sure any previously-blocked threads have returned
from their wait and will not touch the queue again (perhaps by setting a
flag to tell the threads to terminate and then using SDL_WaitThread() to
make sure they've done so).

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_WaitAsyncIOResult

**Parameter `queue`:** the async I/O task queue to signal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38084).
