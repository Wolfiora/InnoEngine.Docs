---
title: "SDLContext.RawApi — Method: HasMouse"
description: "Exact Method: HasMouse contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f308104ed5f91e48
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasMouse

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasMouse`

<a id="api-8feb8f71e0adc131"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasMouse 569c8002527afe3fdbf547f69f2c7eeb0258b07f4b2bc5be2b51d02ccdbcd080 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasMouse()
```

Return whether a mouse is currently connected.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetMice

**Returns:** true if a mouse is connected, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48914).
