---
title: "SDLContext.RawApi — Method: GetGamepadProduct"
description: "Exact Method: GetGamepadProduct contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8069984cc0f4a43e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadProduct

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadProduct`

<a id="api-41fa8922bc63bca6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadProduct(Inno.Native.Sdl3.SDLGamepad*) a1be87226f216169a8dd13135fead6d7fb31b71b664bc727f2150d0eb62bb9d6 -->

```csharp
public ushort Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadProduct(Inno.Native.Sdl3.SDLGamepad* gamepad)
```

Get the USB product ID of an opened gamepad, if available.
If the product ID isn't available this function returns 0.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadProductForID

**Parameter `gamepad`:** the gamepad object to query.

**Returns:** the USB product ID, or zero if unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34867).
