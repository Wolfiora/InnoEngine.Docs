---
title: "SDLContext.RawApi — Method: GetKeyboardNameForId"
description: "Exact Method: GetKeyboardNameForId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.692a7a8ebdb67994
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetKeyboardNameForId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetKeyboardNameForId`

<a id="api-3cc21ca61eebd974"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetKeyboardNameForId(System.UInt32) 472136f8203fc6417525504fa14f9a956e7cf2f65993d593712a50e49eb30569 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetKeyboardNameForId(uint instance_id)
```

Get the name of a keyboard.
This function returns "" if the keyboard doesn't have a name.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetKeyboards

**Parameter `instance_id`:** the keyboard instance ID.

**Returns:** the name of the selected keyboard or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26292).
