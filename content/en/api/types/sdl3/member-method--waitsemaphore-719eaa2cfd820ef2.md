---
title: "SDLContext.RawApi — Method: WaitSemaphore"
description: "Exact Method: WaitSemaphore contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.719eaa2cfd820ef2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WaitSemaphore

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WaitSemaphore`

<a id="api-87d8a5f7ea932af0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WaitSemaphore(Inno.Native.Sdl3.SDLSemaphore*) bbefa293e002989a64bd18f2ffcae20eff91f50cd5211478101c0dbc683dfb27 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.WaitSemaphore(Inno.Native.Sdl3.SDLSemaphore* sem)
```

Wait until a semaphore has a positive value and then decrements it.
This function suspends the calling thread until the semaphore pointed to by
`sem` has a positive value, and then atomically decrement the semaphore
value.
This function is the equivalent of calling SDL_WaitSemaphoreTimeout() with
a time length of -1.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SignalSemaphore

**See also:** SDL_TryWaitSemaphore

**See also:** SDL_WaitSemaphoreTimeout

**Parameter `sem`:** the semaphore wait on.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34606).
