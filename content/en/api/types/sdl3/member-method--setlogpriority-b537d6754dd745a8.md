---
title: "SDLContext — Method: SetLogPriority"
description: "Exact Method: SetLogPriority contracts in SDLContext."
uid: api.inno.native.sdl3.b537d6754dd745a8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: SetLogPriority

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetLogPriority`

<a id="api-4ed19722bd6ed2a7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.SetLogPriority(System.Int32,Inno.Native.Sdl3.SDLLogPriority) f4b36c1fc7659dbd080d95b74544f100c4611cab47780a3de038431c4eb7a481 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.SetLogPriority(int category, Inno.Native.Sdl3.SDLLogPriority priority)
```

Set the priority of a particular log category.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetLogPriority

**See also:** SDL_ResetLogPriorities

**See also:** SDL_SetLogPriorities

**Parameter `category`:** the category to assign a priority to.

**Parameter `priority`:** the SDL_LogPriority to assign.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15096).
