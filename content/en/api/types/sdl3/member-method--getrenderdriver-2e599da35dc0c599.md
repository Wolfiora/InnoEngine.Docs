---
title: "SDLContext.RawApi — Method: GetRenderDriver"
description: "Exact Method: GetRenderDriver contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2e599da35dc0c599
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRenderDriver

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRenderDriver`

<a id="api-d1909bd7c96b1783"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRenderDriver(System.Int32) c67c6823b6df0a668737bafa25770e5d2709fb2f5e24bd95b24a4229c3583992 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetRenderDriver(int index)
```

Use this function to get the name of a built in 2D rendering driver.
The list of rendering drivers is given in the order that they are normally
initialized by default; the drivers that seem more reasonable to choose
first (as far as the SDL developers believe) are earlier in the list.
The names of drivers are all simple, low-ASCII identifiers, like "opengl",
"direct3d12" or "metal". These never have Unicode characters, and are not
meant to be proper names.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetNumRenderDrivers

**Parameter `index`:** the index of the rendering driver; the value ranges from 0 to
SDL_GetNumRenderDrivers() - 1.

**Returns:** the name of the rendering driver at the requested index, or NULL
if an invalid index was specified.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36142).
