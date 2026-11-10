---
title: "SDL — Method: RemoveTimer"
description: "Exact Method: RemoveTimer contracts in SDL."
uid: api.inno.native.sdl3.59f9b032ca078c9a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: RemoveTimer

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RemoveTimer`

<a id="api-b308f40f5dd5a2fd"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.RemoveTimer(System.UInt32) 3e42f2c040d1078fce98b8a4fdfed2974da5edb22de7c90c9e63cbb622095d1b -->

```csharp
public static bool Inno.Native.Sdl3.SDL.RemoveTimer(uint id)
```

Remove a timer created with SDL_AddTimer().

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_AddTimer

**Parameter `id`:** the ID of the timer to remove.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2278).
