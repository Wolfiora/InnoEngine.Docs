---
title: "SDLContext.RawApi — Method: GetAtomicU32"
description: "Exact Method: GetAtomicU32 contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.661a63bf65ad1894
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetAtomicU32

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetAtomicU32`

<a id="api-92af1321dd2dda17"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetAtomicU32(Inno.Native.Sdl3.SDLAtomicU32*) c2299e85dc819d31c61a49bb8dffbc72495e4c04f87dcdf1765b8b86d9431572 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetAtomicU32(Inno.Native.Sdl3.SDLAtomicU32* a)
```

Get the value of an atomic variable.
***Note: If you don't know what this function is for, you shouldn't use
it!***

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetAtomicU32

**Parameter `a`:** a pointer to an SDL_AtomicU32 variable.

**Returns:** the current value of an atomic variable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28523).
