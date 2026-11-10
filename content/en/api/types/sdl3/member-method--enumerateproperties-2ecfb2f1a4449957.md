---
title: "SDLContext.RawApi — Method: EnumerateProperties"
description: "Exact Method: EnumerateProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2ecfb2f1a4449957
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: EnumerateProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `EnumerateProperties`

<a id="api-18d1af326db098fb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.EnumerateProperties(System.UInt32,,System.Void*) 64391d4f81be7ba5b2a799947f8fd1454342f001b169a072f0de7f0e31869712 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.EnumerateProperties(uint props, delegate* unmanaged[Cdecl]<void*, uint, sbyte*, void> callback, void* userdata)
```

Enumerate the properties contained in a group of properties.
The callback function is called for each property in the group of
properties. The properties are locked during enumeration.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `props`:** the properties to query.

**Parameter `callback`:** the function to call for each property.

**Parameter `userdata`:** a pointer that is passed to `callback`.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38490).
