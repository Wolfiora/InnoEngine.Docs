---
title: "SDLContext.RawApi — Method: WaitThread"
description: "Exact Method: WaitThread contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0b9451afdaa1b88c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WaitThread

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WaitThread`

<a id="api-d45b05a194db88ae"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WaitThread(Inno.Native.Sdl3.SDLThread*,System.Int32*) 0d7f6f6ed6d6f61a5f1a0f6e078959f229494d4b912384ad14fc621241deca12 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.WaitThread(Inno.Native.Sdl3.SDLThread* thread, int* status)
```

Wait for a thread to finish.
Threads that haven't been detached will remain until this function cleans
them up. Not doing so is a resource leak.
Once a thread has been cleaned up through this function, the SDL_Thread
that references it becomes invalid and should not be referenced again. As
such, only one thread may call SDL_WaitThread() on another.
The return code from the thread function is placed in the area pointed to
by `status`, if `status` is not NULL.
You may not wait on a thread that has been used in a call to
SDL_DetachThread(). Use either that function or this one, but not both, or
behavior is undefined.
It is safe to pass a NULL thread to this function; it is a no-op.
Note that the thread pointer is freed by this function and is not valid
afterward.

**Thread safety:** It is safe to call this function from any thread, but only a
single thread can wait any specific thread to finish.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateThread

**See also:** SDL_DetachThread

**Parameter `thread`:** the SDL_Thread pointer that was returned from the
SDL_CreateThread() call that started this thread.

**Parameter `status`:** a pointer filled in with the value returned from the thread
function by its 'return', or -1 if the thread has been
detached or isn't valid, may be NULL.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22030).
