---
title: "SDLContext.RawApi — Method: WaitCondition"
description: "Exact Method: WaitCondition contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.971b2558e66fe543
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WaitCondition

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WaitCondition`

<a id="api-5b5964e7793e723d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WaitCondition(Inno.Native.Sdl3.SDLCondition*,Inno.Native.Sdl3.SDLMutex*) cbb987eb19ac799b0bbf7c7d763a194bb670b7d115defc32fe5eedbeb6526ebc -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.WaitCondition(Inno.Native.Sdl3.SDLCondition* cond, Inno.Native.Sdl3.SDLMutex* mutex)
```

Wait until a condition variable is signaled.
This function unlocks the specified `mutex` and waits for another thread to
call SDL_SignalCondition() or SDL_BroadcastCondition() on the condition
variable `cond`. Once the condition variable is signaled, the mutex is
re-locked and the function returns.
The mutex must be locked before calling this function. Locking the mutex
recursively (more than once) is not supported and leads to undefined
behavior.
This function is the equivalent of calling SDL_WaitConditionTimeout() with
a time length of -1.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_BroadcastCondition

**See also:** SDL_SignalCondition

**See also:** SDL_WaitConditionTimeout

**Parameter `cond`:** the condition variable to wait on.

**Parameter `mutex`:** the mutex used to coordinate thread access.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47099).
