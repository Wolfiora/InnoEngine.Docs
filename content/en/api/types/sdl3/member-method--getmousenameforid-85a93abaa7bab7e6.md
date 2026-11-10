---
title: "SDLContext.RawApi — Method: GetMouseNameForId"
description: "Exact Method: GetMouseNameForId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.85a93abaa7bab7e6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetMouseNameForId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetMouseNameForId`

<a id="api-5dc9bb3c9ab5e032"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetMouseNameForId(System.UInt32) c704f8833784c3cd80de316a61b3b3e7c03311d9052c7932fe1675922f621efe -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetMouseNameForId(uint instance_id)
```

Get the name of a mouse.
This function returns "" if the mouse doesn't have a name.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetMice

**Parameter `instance_id`:** the mouse instance ID.

**Returns:** the name of the selected mouse, or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25838).
