---
title: "SDLContext.RawApi — Method: DestroyAsyncIoQueue"
description: "Exact Method: DestroyAsyncIoQueue contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ac67ff99de4d33bb
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DestroyAsyncIoQueue

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DestroyAsyncIoQueue`

<a id="api-8f0f06784854caf8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DestroyAsyncIoQueue(Inno.Native.Sdl3.SDLAsyncIOQueue*) c3ca05cd18e3740585a0d4ee2d38fdc3ca22fd479efe0c080257ca55af0f7709 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DestroyAsyncIoQueue(Inno.Native.Sdl3.SDLAsyncIOQueue* queue)
```

Destroy a previously-created async I/O task queue.
If there are still tasks pending for this queue, this call will block until
those tasks are finished. All those tasks will be deallocated. Their
results will be lost to the app.
Any pending reads from SDL_LoadFileAsync() that are still in this queue
will have their buffers deallocated by this function, to prevent a memory
leak.
Once this function is called, the queue is no longer valid and should not
be used, including by other threads that might access it while destruction
is blocking on pending tasks.
Do not destroy a queue that still has threads waiting on it through
SDL_WaitAsyncIOResult(). You can call SDL_SignalAsyncIOQueue() first to
unblock those threads, and take measures (such as SDL_WaitThread()) to make
sure they have finished their wait and won't wait on the queue again.

**Thread safety:** It is safe to call this function from any thread, so long as
no other thread is waiting on the queue with
SDL_WaitAsyncIOResult.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `queue`:** the task queue to destroy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23759).
