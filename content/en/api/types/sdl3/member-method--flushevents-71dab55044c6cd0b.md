---
title: "SDLContext — Method: FlushEvents"
description: "Exact Method: FlushEvents contracts in SDLContext."
uid: api.inno.native.sdl3.71dab55044c6cd0b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: FlushEvents

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `FlushEvents`

<a id="api-25cb526399fe8873"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.FlushEvents(System.UInt32,System.UInt32) 9ca65f18ad63adb26a2cbccbcef85f0cb1219e0d0f08849ea32956acb2fc8064 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.FlushEvents(uint minType, uint maxType)
```

Clear events of a range of types from the event queue.
This will unconditionally remove any events from the queue that are in the
range of `minType` to `maxType`, inclusive. If you need to remove a single
event type, use SDL_FlushEvent() instead.
It's also normal to just ignore events you don't care about in your event
loop without calling this function.
This function only affects currently queued events. If you want to make
sure that all pending OS events are flushed, you can call SDL_PumpEvents()
on the main thread immediately before the flush call.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_FlushEvent

**Parameter `minType`:** the low end of event type to be cleared, inclusive; see
SDL_EventType for details.

**Parameter `maxType`:** the high end of event type to be cleared, inclusive; see
SDL_EventType for details.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16050).
