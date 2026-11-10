---
title: "SDLContext — Method: RegisterEvents"
description: "Exact Method: RegisterEvents contracts in SDLContext."
uid: api.inno.native.sdl3.7fc9e066f6982aa3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: RegisterEvents

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RegisterEvents`

<a id="api-2b7e7685659aff1d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RegisterEvents(System.Int32) 583f2505891065f34345699d4344a99e2c4ab2d78091fdfd0d8161f5946c750b -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RegisterEvents(int numevents)
```

Allocate a set of user-defined events, and return the beginning event
number for that set of events.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_PushEvent

**Parameter `numevents`:** the number of events to be allocated.

**Returns:** the beginning event number, or 0 if numevents is invalid or if
there are not enough user-defined events left.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13323).
