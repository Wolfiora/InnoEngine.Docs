---
title: "SDL — Method: SetLogPriorities"
description: "Exact Method: SetLogPriorities contracts in SDL."
uid: api.inno.native.sdl3.856be34a1d10d3b2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: SetLogPriorities

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetLogPriorities`

<a id="api-9b079573f58105c7"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.SetLogPriorities(Inno.Native.Sdl3.SDLLogPriority) c4be79507134f3170be4c823111109eb15a13407e4f427c4aa9a6c09806cb0ce -->

```csharp
public static void Inno.Native.Sdl3.SDL.SetLogPriorities(Inno.Native.Sdl3.SDLLogPriority priority)
```

Set the priority of all log categories.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ResetLogPriorities

**See also:** SDL_SetLogPriority

**Parameter `priority`:** the SDL_LogPriority to assign.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L715).
