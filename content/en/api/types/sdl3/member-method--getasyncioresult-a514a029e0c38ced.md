---
title: "SDLContext.RawApi — Method: GetAsyncIoResult"
description: "Exact Method: GetAsyncIoResult contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a514a029e0c38ced
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetAsyncIoResult

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetAsyncIoResult`

<a id="api-41e778947050cc30"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetAsyncIoResult(Inno.Native.Sdl3.SDLAsyncIOQueue*,Inno.Native.Sdl3.SDLAsyncIOOutcome*) c34a8383e922401059508ba36e2e2f98e97e108c6a1eddb74f441cb2e799d324 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetAsyncIoResult(Inno.Native.Sdl3.SDLAsyncIOQueue* queue, Inno.Native.Sdl3.SDLAsyncIOOutcome* outcome)
```

Query an async I/O task queue for completed tasks.
If a task assigned to this queue has finished, this will return true and
fill in `outcome` with the details of the task. If no task in the queue has
finished, this function will return false. This function does not block.
If a task has completed, this function will free its resources and the task
pointer will no longer be valid. The task will be removed from the queue.
It is safe for multiple threads to call this function on the same queue at
once; a completed task will only go to one of the threads.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_WaitAsyncIOResult

**Parameter `queue`:** the async I/O task queue to query.

**Parameter `outcome`:** details of a finished task will be written here. May not be
NULL.

**Returns:** true if a task has completed, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18822).
