---
title: "SDL — Method: HasEvent"
description: "Exact Method: HasEvent contracts in SDL."
uid: api.inno.native.sdl3.3c7d4cde09541b6b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HasEvent

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasEvent`

<a id="api-2044e7bb4b6acf92"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HasEvent(System.UInt32) 082139e130046cfc7266ccd9a7614af3727e843df4367f4a04b814020fd6f0bc -->

```csharp
public static bool Inno.Native.Sdl3.SDL.HasEvent(uint type)
```

Check for the existence of a certain event type in the event queue.
If you need to check for a range of event types, use SDL_HasEvents()
instead.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasEvents

**Parameter `type`:** the type of event to be queried; see SDL_EventType for details.

**Returns:** true if events matching `type` are present, or false if events
matching `type` are not present.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1615).
