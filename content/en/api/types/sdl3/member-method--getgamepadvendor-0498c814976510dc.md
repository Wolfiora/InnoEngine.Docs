---
title: "SDLContext.RawApi — Method: GetGamepadVendor"
description: "Exact Method: GetGamepadVendor contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0498c814976510dc
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadVendor

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadVendor`

<a id="api-94824ae8035e6828"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadVendor(Inno.Native.Sdl3.SDLGamepad*) c1cea55536afb1f8a3a85ba9e0aabcf98f0180a5e63dfe8af4ac1f637c0dc3a4 -->

```csharp
public ushort Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadVendor(Inno.Native.Sdl3.SDLGamepad* gamepad)
```

Get the USB vendor ID of an opened gamepad, if available.
If the vendor ID isn't available this function returns 0.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadVendorForID

**Parameter `gamepad`:** the gamepad object to query.

**Returns:** the USB vendor ID, or zero if unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24440).
