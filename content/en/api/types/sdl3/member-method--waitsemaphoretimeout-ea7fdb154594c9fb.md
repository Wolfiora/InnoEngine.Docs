---
title: "SDLContext.RawApi — Method: WaitSemaphoreTimeout"
description: "Exact Method: WaitSemaphoreTimeout contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ea7fdb154594c9fb
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WaitSemaphoreTimeout

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WaitSemaphoreTimeout`

<a id="api-250458c819479df6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WaitSemaphoreTimeout(Inno.Native.Sdl3.SDLSemaphore*,System.Int32) f6fef60ef8724ce248fccb5e2f716962c62e633496aac56c9bf3d612063f4b2a -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WaitSemaphoreTimeout(Inno.Native.Sdl3.SDLSemaphore* sem, int timeoutMS)
```

Wait until a semaphore has a positive value and then decrements it.
This function suspends the calling thread until either the semaphore
pointed to by `sem` has a positive value or the specified time has elapsed.
If the call is successful it will atomically decrement the semaphore value.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SignalSemaphore

**See also:** SDL_TryWaitSemaphore

**See also:** SDL_WaitSemaphore

**Parameter `sem`:** the semaphore to wait on.

**Parameter `timeoutMS`:** the length of the timeout, in milliseconds, or -1 to wait
indefinitely.

**Returns:** true if the wait succeeds or false if the wait times out.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22474).
