---
title: "SDLContext.RawApi — Method: SetAtomicInt"
description: "Exact Method: SetAtomicInt contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4c113292f68abc2f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetAtomicInt

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetAtomicInt`

<a id="api-f5ed3a23f7f622e7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetAtomicInt(Inno.Native.Sdl3.SDLAtomicInt*,System.Int32) f8c7fb9b5d4544936eb5c8b282623625c1776d61827447214aa4b6d7ae67426c -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.SetAtomicInt(Inno.Native.Sdl3.SDLAtomicInt* a, int v)
```

Set an atomic variable to a value.
This function also acts as a full memory barrier.
***Note: If you don't know what this function is for, you shouldn't use
it!***

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetAtomicInt

**Parameter `a`:** a pointer to an SDL_AtomicInt variable to be modified.

**Parameter `v`:** the desired value.

**Returns:** the previous value of the atomic variable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20981).
