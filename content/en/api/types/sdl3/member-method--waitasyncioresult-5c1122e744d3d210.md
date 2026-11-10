---
title: "SDLContext.RawApi — Method: WaitAsyncIoResult"
description: "Exact Method: WaitAsyncIoResult contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5c1122e744d3d210
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WaitAsyncIoResult

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WaitAsyncIoResult`

<a id="api-a1884a1f73f9099d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WaitAsyncIoResult(Inno.Native.Sdl3.SDLAsyncIOQueue*,Inno.Native.Sdl3.SDLAsyncIOOutcome*,System.Int32) 6d31491be45d7d2f142e08059a36a3dbec4c927da3a4e21d9f042a77636c68b0 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WaitAsyncIoResult(Inno.Native.Sdl3.SDLAsyncIOQueue* queue, Inno.Native.Sdl3.SDLAsyncIOOutcome* outcome, int timeoutMS)
```

Block until an async I/O task queue has a completed task.
This function puts the calling thread to sleep until there a task assigned
to the queue that has finished.
If a task assigned to the queue has finished, this will return true and
fill in `outcome` with the details of the task. If no task in the queue has
finished, this function will return false.
If a task has completed, this function will free its resources and the task
pointer will no longer be valid. The task will be removed from the queue.
It is safe for multiple threads to call this function on the same queue at
once; a completed task will only go to one of the threads.
Note that by the nature of various platforms, more than one waiting thread
may wake to handle a single task, but only one will obtain it, so
`timeoutMS` is a _maximum_ wait time, and this function may return false
sooner.
This function may return false if there was a system error, the OS
inadvertently awoke multiple threads, or if SDL_SignalAsyncIOQueue() was
called to wake up all waiting threads without a finished task.
A timeout can be used to specify a maximum wait time, but rather than
polling, it is possible to have a timeout of -1 to wait forever, and use
SDL_SignalAsyncIOQueue() to wake up the waiting threads later.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SignalAsyncIOQueue

**Parameter `queue`:** the async I/O task queue to wait on.

**Parameter `outcome`:** details of a finished task will be written here. May not be
NULL.

**Parameter `timeoutMS`:** the maximum time to wait, in milliseconds, or -1 to wait
indefinitely.

**Returns:** true if task has completed, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44702).
