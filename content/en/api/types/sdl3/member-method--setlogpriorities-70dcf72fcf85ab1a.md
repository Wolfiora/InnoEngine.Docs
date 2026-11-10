---
title: "SDLContext — Method: SetLogPriorities"
description: "Exact Method: SetLogPriorities contracts in SDLContext."
uid: api.inno.native.sdl3.70dcf72fcf85ab1a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: SetLogPriorities

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetLogPriorities`

<a id="api-85c3432790e4bed1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.SetLogPriorities(Inno.Native.Sdl3.SDLLogPriority) 6cb7731da676fe089ea63e6aae5e8953bc2a485f43b1baa26047723fe8b0868a -->

```csharp
public void Inno.Native.Sdl3.SDLContext.SetLogPriorities(Inno.Native.Sdl3.SDLLogPriority priority)
```

Set the priority of all log categories.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ResetLogPriorities

**See also:** SDL_SetLogPriority

**Parameter `priority`:** the SDL_LogPriority to assign.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12208).
