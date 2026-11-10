---
title: "SDLContext.RawApi — Method: GetJoystickGuidInfo"
description: "Exact Method: GetJoystickGuidInfo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7a95194cbd789dec
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickGuidInfo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickGuidInfo`

<a id="api-6da7f761d186ee1a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickGuidInfo(Inno.Native.Sdl3.SDLGUID*,System.UInt16*,System.UInt16*,System.UInt16*,System.UInt16*) b9551c247dba63c49724154fea50337cbd50365a63a7cda19932a47660dd5d67 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickGuidInfo(Inno.Native.Sdl3.SDLGUID* guid, ushort* vendor, ushort* product, ushort* version, ushort* crc16)
```

Get the device information encoded in a SDL_GUID structure.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickGUIDForID

**Parameter `guid`:** the SDL_GUID you wish to get info about.

**Parameter `vendor`:** a pointer filled in with the device VID, or 0 if not
available.

**Parameter `product`:** a pointer filled in with the device PID, or 0 if not
available.

**Parameter `version`:** a pointer filled in with the device version, or 0 if not
available.

**Parameter `crc16`:** a pointer filled in with a CRC used to distinguish different
products with the same VID/PID, or 0 if not available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23466).
