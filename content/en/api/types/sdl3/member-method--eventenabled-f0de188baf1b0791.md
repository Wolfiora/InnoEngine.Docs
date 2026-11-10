---
title: "SDLContext — Method: EventEnabled"
description: "Exact Method: EventEnabled contracts in SDLContext."
uid: api.inno.native.sdl3.f0de188baf1b0791
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: EventEnabled

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `EventEnabled`

<a id="api-99ccafa4c75589ee"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.EventEnabled(System.UInt32) 45b2dba6ef271ee81e40b1902aea2d8a9094316c0077bcb8b8c4840957dec51d -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.EventEnabled(uint type)
```

Query the state of processing events by type.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetEventEnabled

**Parameter `type`:** the type of event; see SDL_EventType for details.

**Returns:** true if the event is being processed, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13469).
