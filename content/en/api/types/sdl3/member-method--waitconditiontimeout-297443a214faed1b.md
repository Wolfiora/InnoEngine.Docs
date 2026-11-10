---
title: "SDLContext.RawApi — Method: WaitConditionTimeout"
description: "Exact Method: WaitConditionTimeout contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.297443a214faed1b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WaitConditionTimeout

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WaitConditionTimeout`

<a id="api-4e020e9fccc15ecf"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WaitConditionTimeout(Inno.Native.Sdl3.SDLCondition*,Inno.Native.Sdl3.SDLMutex*,System.Int32) 3a8b1ee17c41bf626a7060ce072cd0ad1f73155461a68e9b0c2cdffefcddc156 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WaitConditionTimeout(Inno.Native.Sdl3.SDLCondition* cond, Inno.Native.Sdl3.SDLMutex* mutex, int timeoutMS)
```

Wait until a condition variable is signaled or a certain time has passed.
This function unlocks the specified `mutex` and waits for another thread to
call SDL_SignalCondition() or SDL_BroadcastCondition() on the condition
variable `cond`, or for the specified time to elapse. Once the condition
variable is signaled or the time elapsed, the mutex is re-locked and the
function returns.
The mutex must be locked before calling this function. Locking the mutex
recursively (more than once) is not supported and leads to undefined
behavior.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_BroadcastCondition

**See also:** SDL_SignalCondition

**See also:** SDL_WaitCondition

**Parameter `cond`:** the condition variable to wait on.

**Parameter `mutex`:** the mutex used to coordinate thread access.

**Parameter `timeoutMS`:** the maximum time to wait, in milliseconds, or -1 to wait
indefinitely.

**Returns:** true if the condition variable is signaled, false if the condition
is not signaled in the allotted time.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47307).
