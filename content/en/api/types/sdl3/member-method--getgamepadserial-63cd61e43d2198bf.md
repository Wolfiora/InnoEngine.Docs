---
title: "SDLContext.RawApi — Method: GetGamepadSerial"
description: "Exact Method: GetGamepadSerial contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.63cd61e43d2198bf
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadSerial

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadSerial`

<a id="api-b6e905acad9567c5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadSerial(Inno.Native.Sdl3.SDLGamepad*) 107acc200f740d104499f5f3dcb6fd397f49acbdd0be07f3208e4192c0aa4031 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadSerial(Inno.Native.Sdl3.SDLGamepad* gamepad)
```

Get the serial number of an opened gamepad, if available.
Returns the serial number of the gamepad, or NULL if it is not available.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `gamepad`:** the gamepad object to query.

**Returns:** the serial number, or NULL if unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39574).
