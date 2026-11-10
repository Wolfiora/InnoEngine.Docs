---
title: "SDLContext.RawApi — Method: CreateSemaphore"
description: "Exact Method: CreateSemaphore contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ed00278d5de99c34
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateSemaphore

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateSemaphore`

<a id="api-a55859ca87106b48"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateSemaphore(System.UInt32) 67f9374ab563192cbbc8528e0aa0888128e481cb321f15e494eb3d20402c20f7 -->

```csharp
public Inno.Native.Sdl3.SDLSemaphore* Inno.Native.Sdl3.SDLContext.RawApi.CreateSemaphore(uint initial_value)
```

Create a semaphore.
This function creates a new semaphore and initializes it with the value
`initial_value`. Each wait operation on the semaphore will atomically
decrement the semaphore value and potentially block if the semaphore value
is 0. Each post operation will atomically increment the semaphore value and
wake waiting threads and allow them to retry the wait operation.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DestroySemaphore

**See also:** SDL_SignalSemaphore

**See also:** SDL_TryWaitSemaphore

**See also:** SDL_GetSemaphoreValue

**See also:** SDL_WaitSemaphore

**See also:** SDL_WaitSemaphoreTimeout

**Parameter `initial_value`:** the starting value of the semaphore.

**Returns:** a new semaphore or NULL on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21068).
