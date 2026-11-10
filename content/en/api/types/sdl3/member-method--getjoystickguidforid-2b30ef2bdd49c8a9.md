---
title: "SDLContext.RawApi — Method: GetJoystickGuidForId"
description: "Exact Method: GetJoystickGuidForId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2b30ef2bdd49c8a9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickGuidForId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickGuidForId`

<a id="api-9b700f492ca66b05"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickGuidForId(System.UInt32,Inno.Native.Sdl3.SDLGUID*) 4e154bb634b81caeb8fcccb39a4df1b60e76a7dcdc810bfeadb7184a84634d99 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickGuidForId(uint instance_id, Inno.Native.Sdl3.SDLGUID* bgcs_result)
```

Get the implementation-dependent GUID of a joystick.
This can be called before any joysticks are opened.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickGUID

**See also:** SDL_GUIDToString

**Parameter `instance_id`:** the joystick instance ID.

**Parameter `bgcs_result`:** Native parameter.

**Constraints:** Native result: the GUID of the selected joystick. If called with an invalid
instance_id, this function returns a zero GUID.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30893).
