---
title: "SDLContext.RawApi — Method: SetHintWithPriority"
description: "Exact Method: SetHintWithPriority contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.dccbc3c7a80acadd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetHintWithPriority

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetHintWithPriority`

<a id="api-4af9619f9c82b177"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetHintWithPriority(System.SByte*,System.SByte*,Inno.Native.Sdl3.SDLHintPriority) 0a41edba800aeeba033f1735381193ee36ab9bde467d7a84dccfbc334e92af1e -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetHintWithPriority(sbyte* name, sbyte* value, Inno.Native.Sdl3.SDLHintPriority priority)
```

Set a hint with a specific priority.
The priority controls the behavior when setting a hint that already has a
value. Hints will replace existing hints of their priority and lower.
Environment variables are considered to have override priority.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetHint

**See also:** SDL_ResetHint

**See also:** SDL_SetHint

**Parameter `name`:** the hint to set.

**Parameter `value`:** the value of the hint variable.

**Parameter `priority`:** the SDL_HintPriority level for the hint.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27956).
