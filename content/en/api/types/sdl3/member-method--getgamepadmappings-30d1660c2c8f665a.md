---
title: "SDLContext.RawApi — Method: GetGamepadMappings"
description: "Exact Method: GetGamepadMappings contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.30d1660c2c8f665a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadMappings

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadMappings`

<a id="api-36577ac9cae91455"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadMappings(System.Int32*) 1d7a36a484b50eb0ba9a247d8b7fbd6f37d38a1747136bc0214c60b21f3b2c13 -->

```csharp
public sbyte** Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadMappings(int* count)
```

Get the current gamepad mappings.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `count`:** a pointer filled in with the number of mappings returned, can
be NULL.

**Returns:** an array of the mapping strings, NULL-terminated, or NULL on
failure; call SDL_GetError() for more information. This is a
single allocation that should be freed with SDL_free() when it is
no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22641).
