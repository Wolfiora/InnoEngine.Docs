---
title: "SDL — Method: EventEnabled"
description: "Exact Method: EventEnabled contracts in SDL."
uid: api.inno.native.sdl3.f2e49997e9a74894
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: EventEnabled

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `EventEnabled`

<a id="api-8a84cdfe753b1783"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.EventEnabled(System.UInt32) 49a47569186476df7cbab9b202351f6cd560192a95d79aa412f262f8d0410d21 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.EventEnabled(uint type)
```

Query the state of processing events by type.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetEventEnabled

**Parameter `type`:** the type of event; see SDL_EventType for details.

**Returns:** true if the event is being processed, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1739).
