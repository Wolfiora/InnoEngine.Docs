---
title: "SDLContext.RawApi — Method: SetHint"
description: "Exact Method: SetHint contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.26ba1aebb815f776
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetHint

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetHint`

<a id="api-7af24fd72a8957e8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetHint(System.SByte*,System.SByte*) 20c5b32f243c81274d03844f87c6f993e035ead8317049390532ef18be7356f6 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetHint(sbyte* name, sbyte* value)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52342).
