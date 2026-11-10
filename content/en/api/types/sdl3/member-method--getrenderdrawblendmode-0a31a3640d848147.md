---
title: "SDLContext.RawApi — Method: GetRenderDrawBlendMode"
description: "Exact Method: GetRenderDrawBlendMode contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0a31a3640d848147
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRenderDrawBlendMode

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRenderDrawBlendMode`

<a id="api-c755a31ed874cb19"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRenderDrawBlendMode(Inno.Native.Sdl3.SDLRenderer*,System.UInt32*) 45b065bcd432aa35f40887cdde9662d45f43ffaa7c98aff8324f416d745aa094 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetRenderDrawBlendMode(Inno.Native.Sdl3.SDLRenderer* renderer, uint* blendMode)
```

Get the blend mode used for drawing operations.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetRenderDrawBlendMode

**Parameter `renderer`:** the rendering context.

**Parameter `blendMode`:** a pointer filled in with the current SDL_BlendMode.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17027).
