---
title: "SDL — Method: RegisterEvents"
description: "Exact Method: RegisterEvents contracts in SDL."
uid: api.inno.native.sdl3.2dbfee93ade5b296
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: RegisterEvents

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RegisterEvents`

<a id="api-548117b7953634a1"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.RegisterEvents(System.Int32) 8d8dbb7627c5181539bcf4a571e51f6bb90fed250ca9d7cf88c2911ea9c6bc04 -->

```csharp
public static uint Inno.Native.Sdl3.SDL.RegisterEvents(int numevents)
```

Allocate a set of user-defined events, and return the beginning event
number for that set of events.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_PushEvent

**Parameter `numevents`:** the number of events to be allocated.

**Returns:** the beginning event number, or 0 if numevents is invalid or if
there are not enough user-defined events left.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1630).
