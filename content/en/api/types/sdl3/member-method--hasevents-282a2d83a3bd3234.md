---
title: "SDL — Method: HasEvents"
description: "Exact Method: HasEvents contracts in SDL."
uid: api.inno.native.sdl3.282a2d83a3bd3234
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HasEvents

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasEvents`

<a id="api-9ea9968cab274058"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HasEvents(System.UInt32,System.UInt32) fb50a4e1563597d24898d9c52b6c3d804a4d6acf4d21ebc7a0e02c06c159927c -->

```csharp
public static bool Inno.Native.Sdl3.SDL.HasEvents(uint minType, uint maxType)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L775).
