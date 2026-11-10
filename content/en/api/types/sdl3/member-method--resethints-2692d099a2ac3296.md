---
title: "SDLContext — Method: ResetHints"
description: "Exact Method: ResetHints contracts in SDLContext."
uid: api.inno.native.sdl3.2692d099a2ac3296
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: ResetHints

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ResetHints`

<a id="api-9404ea255739a6f2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.ResetHints 865835d8f12532fb65f51af30b73f24102e3545675d1a0bd1e5b913f84b36df8 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.ResetHints()
```

Reset all hints to the default values.
This will reset all hints to the value of the associated environment
variable, or NULL if the environment isn't set. Callbacks will be called
normally with this change.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ResetHint


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14473).
