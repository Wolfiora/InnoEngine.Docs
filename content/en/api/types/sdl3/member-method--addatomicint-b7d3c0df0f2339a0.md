---
title: "SDLContext.RawApi — Method: AddAtomicInt"
description: "Exact Method: AddAtomicInt contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b7d3c0df0f2339a0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: AddAtomicInt

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `AddAtomicInt`

<a id="api-6d80f4593da85044"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.AddAtomicInt(Inno.Native.Sdl3.SDLAtomicInt*,System.Int32) c59b29542b615644f3c1a3418b76b8cda7b7985f5de8e6147bc7e00c0d8e250e -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.AddAtomicInt(Inno.Native.Sdl3.SDLAtomicInt* a, int v)
```

Add to an atomic variable.
This function also acts as a full memory barrier.
***Note: If you don't know what this function is for, you shouldn't use
it!***

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_AtomicDecRef

**See also:** SDL_AtomicIncRef

**Parameter `a`:** a pointer to an SDL_AtomicInt variable to be modified.

**Parameter `v`:** the desired value to add.

**Returns:** the previous value of the atomic variable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25471).
