---
title: "SDLContext.RawApi — Method: AddTimerNs"
description: "Exact Method: AddTimerNs contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.dca9ae1ef733ae44
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: AddTimerNs

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `AddTimerNs`

<a id="api-e6a0df1202136353"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.AddTimerNs(System.UInt64,,System.Void*) 6592becd30be0829c75f95571361955ad0e67aa316bbc232795227d88364e407 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.AddTimerNs(ulong interval, delegate* unmanaged[Cdecl]<void*, uint, ulong, ulong> callback, void* userdata)
```

Call a callback function at a future time.
The callback function is passed the current timer interval and the user
supplied parameter from the SDL_AddTimerNS() call and should return the
next timer interval. If the value returned from the callback is 0, the
timer is canceled and will be removed.
The callback is run on a separate thread, and for short timeouts can
potentially be called before this function returns.
Timers take into account the amount of time it took to execute the
callback. For example, if the callback took 250 ns to execute and returned
1000 (ns), the timer would only wait another 750 ns before its next
iteration.
Timing may be inexact due to OS scheduling. Be sure to note the current
time with SDL_GetTicksNS() or SDL_GetPerformanceCounter() in case your
callback needs to adjust for variances.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_AddTimer

**See also:** SDL_RemoveTimer

**Parameter `interval`:** the timer delay, in nanoseconds, passed to `callback`.

**Parameter `callback`:** the SDL_TimerCallback function to call when the specified
`interval` elapses.

**Parameter `userdata`:** a pointer that is passed to `callback`.

**Returns:** a timer ID or 0 on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51181).
