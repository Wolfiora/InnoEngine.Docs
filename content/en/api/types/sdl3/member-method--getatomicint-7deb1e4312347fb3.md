---
title: "SDLContext.RawApi — Method: GetAtomicInt"
description: "Exact Method: GetAtomicInt contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7deb1e4312347fb3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetAtomicInt

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetAtomicInt`

<a id="api-ccb3ecef19725759"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetAtomicInt(Inno.Native.Sdl3.SDLAtomicInt*) 21c7c6250738a978f103f5011983f69f6a0379c05efbc33b1bc511c98309d7fd -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetAtomicInt(Inno.Native.Sdl3.SDLAtomicInt* a)
```

Get the value of an atomic variable.
***Note: If you don't know what this function is for, you shouldn't use
it!***

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetAtomicInt

**Parameter `a`:** a pointer to an SDL_AtomicInt variable.

**Returns:** the current value of an atomic variable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43565).
