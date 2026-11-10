---
title: "SDL — Method: SetHint"
description: "Exact Method: SetHint contracts in SDL."
uid: api.inno.native.sdl3.c42dfe18aec64999
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: SetHint

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetHint`

<a id="api-5d26d17b788e8589"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.SetHint(System.String,System.String) 2b1ad8cc36a33a973479c3b58c5fe5cb1b6b4962eaf02b39cc7e9123eabd23a4 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.SetHint(string name, string? value)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L4236).
