---
title: "SDL — Method: ResetLogPriorities"
description: "Exact Method: ResetLogPriorities contracts in SDL."
uid: api.inno.native.sdl3.bf713021f417a2d3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: ResetLogPriorities

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ResetLogPriorities`

<a id="api-7afd4cdc472044a3"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.ResetLogPriorities 573bf10fb822313c6a033f1beb0b46107df8dc1ab53c191a4eedcc2b0272602c -->

```csharp
public static void Inno.Native.Sdl3.SDL.ResetLogPriorities()
```

Reset all priorities to default.
This is called by SDL_Quit().

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetLogPriorities

**See also:** SDL_SetLogPriority


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1759).
