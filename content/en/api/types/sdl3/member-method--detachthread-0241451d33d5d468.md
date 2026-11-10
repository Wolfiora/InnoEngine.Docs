---
title: "SDLContext.RawApi — Method: DetachThread"
description: "Exact Method: DetachThread contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0241451d33d5d468
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DetachThread

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DetachThread`

<a id="api-4c8f84c00e1a7b58"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DetachThread(Inno.Native.Sdl3.SDLThread*) 6257d199a0728f498a6def7f288d28ade942261164464bec2e23ab7e1759bc41 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DetachThread(Inno.Native.Sdl3.SDLThread* thread)
```

Let a thread clean up on exit without intervention.
A thread may be "detached" to signify that it should not remain until
another thread has called SDL_WaitThread() on it. Detaching a thread is
useful for long-running threads that nothing needs to synchronize with or
further manage. When a detached thread is done, it simply goes away.
There is no way to recover the return code of a detached thread. If you
need this, don't detach the thread and instead use SDL_WaitThread().
Once a thread is detached, you should usually assume the SDL_Thread isn't
safe to reference again, as it will become invalid immediately upon the
detached thread's exit, instead of remaining until someone has called
SDL_WaitThread() to finally clean it up. As such, don't detach the same
thread more than once.
If a thread has already exited when passed to SDL_DetachThread(), it will
stop waiting for a call to SDL_WaitThread() and clean up immediately. It is
not safe to detach a thread that might be used with SDL_WaitThread().
You may not call SDL_WaitThread() on a thread that has been detached. Use
either that function or this one, but not both, or behavior is undefined.
It is safe to pass NULL to this function; it is a no-op.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateThread

**See also:** SDL_WaitThread

**Parameter `thread`:** the SDL_Thread pointer that was returned from the
SDL_CreateThread() call that started this thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34294).
