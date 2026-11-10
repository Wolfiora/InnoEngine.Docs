---
title: "SDLContext.RawApi — Method: FlushEvent"
description: "Exact Method: FlushEvent contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.099a98ab44cfb396
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: FlushEvent

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `FlushEvent`

<a id="api-acf0e347e86a0fde"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.FlushEvent(System.UInt32) 80825d5caccd0b131e22d04139eb032703a84848b5ba6f2939e89440ac8844ab -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.FlushEvent(uint type)
```

Clear events of a specific type from the event queue.
This will unconditionally remove any events from the queue that match
`type`. If you need to remove a range of event types, use SDL_FlushEvents()
instead.
It's also normal to just ignore events you don't care about in your event
loop without calling this function.
This function only affects currently queued events. If you want to make
sure that all pending OS events are flushed, you can call SDL_PumpEvents()
on the main thread immediately before the flush call.
If you have user events with custom data that needs to be freed, you should
use SDL_PeepEvents() to remove and clean up those events before calling
this function.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_FlushEvents

**Parameter `type`:** the type of event to be cleared; see SDL_EventType for details.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52640).
