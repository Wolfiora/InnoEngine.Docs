---
title: "SDLContext.RawApi — Method: GetGamepadFirmwareVersion"
description: "Exact Method: GetGamepadFirmwareVersion contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9974d3a2670a96af
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadFirmwareVersion

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadFirmwareVersion`

<a id="api-55f0d0089721d97d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadFirmwareVersion(Inno.Native.Sdl3.SDLGamepad*) 07be8b73a6335d6beda616e838ae6684a0ba7f8084987b99c461d26059fbe89d -->

```csharp
public ushort Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadFirmwareVersion(Inno.Native.Sdl3.SDLGamepad* gamepad)
```

Get the firmware version of an opened gamepad, if available.
If the firmware version isn't available this function returns 0.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `gamepad`:** the gamepad object to query.

**Returns:** the gamepad firmware version, or zero if unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31004).
