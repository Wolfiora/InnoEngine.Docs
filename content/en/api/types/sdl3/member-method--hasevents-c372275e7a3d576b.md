---
title: "SDLContext.RawApi — Method: HasEvents"
description: "Exact Method: HasEvents contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c372275e7a3d576b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasEvents

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasEvents`

<a id="api-c6ab9bac6cb968b8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasEvents(System.UInt32,System.UInt32) f1fccbe5f4f49a86a49d3037fe18c6c3218eb3ed07e75bfef2fae5f33dc1adb1 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasEvents(uint minType, uint maxType)
```

Check for the existence of certain event types in the event queue.
If you need to check for a single event type, use SDL_HasEvent() instead.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasEvents

**Parameter `minType`:** the low end of event type to be queried, inclusive; see
SDL_EventType for details.

**Parameter `maxType`:** the high end of event type to be queried, inclusive; see
SDL_EventType for details.

**Returns:** true if events with type >= `minType` and
<
= `maxType` are
present, or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21850).
