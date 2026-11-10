---
title: "SDLContext.RawApi — Method: TryWaitSemaphore"
description: "Exact Method: TryWaitSemaphore contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.bafe2f13609c456b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: TryWaitSemaphore

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `TryWaitSemaphore`

<a id="api-15d6057d3ba1fb0d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.TryWaitSemaphore(Inno.Native.Sdl3.SDLSemaphore*) 41e609e2405cd5a47d5713290fa014e7cff1d7b69808964a30e43964ef93f619 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.TryWaitSemaphore(Inno.Native.Sdl3.SDLSemaphore* sem)
```

See if a semaphore has a positive value and decrement it if it does.
This function checks to see if the semaphore pointed to by `sem` has a
positive value and atomically decrements the semaphore value if it does. If
the semaphore doesn't have a positive value, the function immediately
returns false.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SignalSemaphore

**See also:** SDL_WaitSemaphore

**See also:** SDL_WaitSemaphoreTimeout

**Parameter `sem`:** the semaphore to wait on.

**Returns:** true if the wait succeeds, false if the wait would block.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51991).
