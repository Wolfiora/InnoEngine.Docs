---
title: "SDLContext.RawApi — Method: CreateThreadWithPropertiesRuntime"
description: "Exact Method: CreateThreadWithPropertiesRuntime contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f9a464c69ca8d2fd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateThreadWithPropertiesRuntime

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateThreadWithPropertiesRuntime`

<a id="api-45746dc68a7acd24"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateThreadWithPropertiesRuntime(System.UInt32,,) 053502b18a050774db16717a766e28ef3b6628b04e78950764a507d19fc386d7 -->

```csharp
public Inno.Native.Sdl3.SDLThread* Inno.Native.Sdl3.SDLContext.RawApi.CreateThreadWithPropertiesRuntime(uint props, delegate* unmanaged[Cdecl]<void> pfnBeginThread, delegate* unmanaged[Cdecl]<void> pfnEndThread)
```

The actual entry point for SDL_CreateThreadWithProperties.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `props`:** the properties to use

**Parameter `pfnBeginThread`:** the C runtime's _beginthreadex (or whatnot). Can be NULL.

**Parameter `pfnEndThread`:** the C runtime's _endthreadex (or whatnot). Can be NULL.

**Returns:** an opaque pointer to the new thread object on success, NULL if the
new thread could not be created; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43135).
