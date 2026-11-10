---
title: "SDLContext.RawApi — Method: GetJoystickGuid"
description: "Exact Method: GetJoystickGuid contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.025a01a183982cdf
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickGuid

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickGuid`

<a id="api-5d179f5c2b955e5d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickGuid(Inno.Native.Sdl3.SDLJoystick*,Inno.Native.Sdl3.SDLGUID*) 159e7c19375719c45cebddffb900a748474af127584495196a617735d6d8b481 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickGuid(Inno.Native.Sdl3.SDLJoystick* joystick, Inno.Native.Sdl3.SDLGUID* bgcs_result)
```

Get the implementation-dependent GUID for the joystick.
This function requires an open joystick.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickGUIDForID

**See also:** SDL_GUIDToString

**Parameter `joystick`:** the SDL_Joystick obtained from SDL_OpenJoystick().

**Parameter `bgcs_result`:** Native parameter.

**Constraints:** Native result: the GUID of the given joystick. If called on an invalid index,
this function returns a zero GUID; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37116).
