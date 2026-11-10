---
title: "SDLContext.RawApi — Method: GetGamepadPowerInfo"
description: "Exact Method: GetGamepadPowerInfo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b583c874e5553d8f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadPowerInfo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadPowerInfo`

<a id="api-3235edecc66cc709"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadPowerInfo(Inno.Native.Sdl3.SDLGamepad*,System.Int32*) 5d65d581132c0a6a339b5982c19bb0fdf09e5b762a2fbe985399e0f0cef9fde7 -->

```csharp
public Inno.Native.Sdl3.SDLPowerState Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadPowerInfo(Inno.Native.Sdl3.SDLGamepad* gamepad, int* percent)
```

Get the battery state of a gamepad.
You should never take a battery status as absolute truth. Batteries
(especially failing batteries) are delicate hardware, and the values
reported here are best estimates based on what that hardware reports. It's
not uncommon for older batteries to lose stored power much faster than it
reports, or completely drain when reporting it has 20 percent left, etc.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `gamepad`:** the gamepad object to query.

**Parameter `percent`:** a pointer filled in with the percentage of battery life
left, between 0 and 100, or NULL to ignore. This will be
filled in with -1 we can't determine a value or there is no
battery.

**Returns:** the current battery state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34941).
