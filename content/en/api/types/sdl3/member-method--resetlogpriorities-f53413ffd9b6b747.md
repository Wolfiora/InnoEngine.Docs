---
title: "SDLContext — Method: ResetLogPriorities"
description: "Exact Method: ResetLogPriorities contracts in SDLContext."
uid: api.inno.native.sdl3.f53413ffd9b6b747
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: ResetLogPriorities

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ResetLogPriorities`

<a id="api-d5ba9085e9880a72"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.ResetLogPriorities 09b5a2dc43d0cce6ce93e46e46a5b50e50b73b8073d3a2ca7461b4fc70d56d71 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.ResetLogPriorities()
```

Reset all priorities to default.
This is called by SDL_Quit().

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetLogPriorities

**See also:** SDL_SetLogPriority


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13497).
