---
title: "SDLContext.RawApi — Method: SignalSemaphore"
description: "Exact Method: SignalSemaphore contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5414d44107eee552
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SignalSemaphore

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SignalSemaphore`

<a id="api-5c625efecf64a3db"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SignalSemaphore(Inno.Native.Sdl3.SDLSemaphore*) 8c5492dc0b3bbcd24ac84b945ba0306336ddf362d686aa1cc8a9e02530b41a0f -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.SignalSemaphore(Inno.Native.Sdl3.SDLSemaphore* sem)
```

Atomically increment a semaphore's value and wake waiting threads.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_TryWaitSemaphore

**See also:** SDL_WaitSemaphore

**See also:** SDL_WaitSemaphoreTimeout

**Parameter `sem`:** the semaphore to increment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26837).
