---
title: "SDLContext.RawApi — Method: GetGamepadGuidForId"
description: "Exact Method: GetGamepadGuidForId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b42f134cfd40705f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadGuidForId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadGuidForId`

<a id="api-7790a6cd64d0a98c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadGuidForId(System.UInt32,Inno.Native.Sdl3.SDLGUID*) f6dbfa7352e220345036b684e4863a0900f9aac45507993f8428b873aff7cd29 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadGuidForId(uint instance_id, Inno.Native.Sdl3.SDLGUID* bgcs_result)
```

Get the implementation-dependent GUID of a gamepad.
This can be called before any gamepads are opened.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GUIDToString

**See also:** SDL_GetGamepads

**Parameter `instance_id`:** the joystick instance ID.

**Parameter `bgcs_result`:** Native parameter.

**Constraints:** Native result: the GUID of the selected gamepad. If called on an invalid index,
this function returns a zero GUID.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17218).
