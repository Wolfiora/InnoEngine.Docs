---
title: "SDLContext — Method: SetHint"
description: "Exact Method: SetHint contracts in SDLContext."
uid: api.inno.native.sdl3.100cfec2abf86ed8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: SetHint

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetHint`

<a id="api-112a234123e80fb5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.SetHint(System.String,System.String) 4c1c252d78435170b6d988b60df88ced1a36ed6bd2ed6442d446e55fe754a792 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.SetHint(string name, string? value)
```

Set a hint with normal priority.
Hints will not be set if there is an existing override hint or environment
variable that takes precedence. You can use SDL_SetHintWithPriority() to
set the hint with override priority instead.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetHint

**See also:** SDL_ResetHint

**See also:** SDL_SetHintWithPriority

**Parameter `name`:** the hint to set.

**Parameter `value`:** the value of the hint variable.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16505).
