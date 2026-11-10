---
title: "SDL — Method: FlushEvents"
description: "Exact Method: FlushEvents contracts in SDL."
uid: api.inno.native.sdl3.11963f8939eb3fec
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: FlushEvents

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `FlushEvents`

<a id="api-a7203ea9b797cf45"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.FlushEvents(System.UInt32,System.UInt32) cb4156c724ec37ffa498b38e8959d1de0b06a28d707a9ad38453c0c205b41ea8 -->

```csharp
public static void Inno.Native.Sdl3.SDL.FlushEvents(uint minType, uint maxType)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3870).
