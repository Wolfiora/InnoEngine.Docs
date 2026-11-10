---
title: "SDL — Method: SetLogPriority"
description: "Exact Method: SetLogPriority contracts in SDL."
uid: api.inno.native.sdl3.5d827317da11086d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: SetLogPriority

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetLogPriority`

<a id="api-603191afcb2264c3"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.SetLogPriority(System.Int32,Inno.Native.Sdl3.SDLLogPriority) 06c723aada93ec22c9cac65247a9ac89e5319b8d4199350aa18c10f15b68ba19 -->

```csharp
public static void Inno.Native.Sdl3.SDL.SetLogPriority(int category, Inno.Native.Sdl3.SDLLogPriority priority)
```

Set the priority of a particular log category.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetLogPriority

**See also:** SDL_ResetLogPriorities

**See also:** SDL_SetLogPriorities

**Parameter `category`:** the category to assign a priority to.

**Parameter `priority`:** the SDL_LogPriority to assign.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3088).
