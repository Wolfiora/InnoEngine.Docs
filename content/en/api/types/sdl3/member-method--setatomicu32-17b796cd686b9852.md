---
title: "SDLContext.RawApi — Method: SetAtomicU32"
description: "Exact Method: SetAtomicU32 contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.17b796cd686b9852
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetAtomicU32

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetAtomicU32`

<a id="api-a20aa1feba52c043"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetAtomicU32(Inno.Native.Sdl3.SDLAtomicU32*,System.UInt32) b212624cfee977d4b30600e17a61c46e40b08aa2661e0c78ca505d5f1356fedb -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.SetAtomicU32(Inno.Native.Sdl3.SDLAtomicU32* a, uint v)
```

Set an atomic variable to a value.
This function also acts as a full memory barrier.
***Note: If you don't know what this function is for, you shouldn't use
it!***

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetAtomicU32

**Parameter `a`:** a pointer to an SDL_AtomicU32 variable to be modified.

**Parameter `v`:** the desired value.

**Returns:** the previous value of the atomic variable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49378).
