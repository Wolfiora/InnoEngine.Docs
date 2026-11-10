---
title: "SDLContext.RawApi — Method: HidOpenPath"
description: "Exact Method: HidOpenPath contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.54925fa97745b20e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HidOpenPath

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidOpenPath`

<a id="api-d2f1ff74ee02294b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HidOpenPath(System.SByte*) ae5354cdb3d066a91a2f6c59f80b312b65418a7f1b3514196429dee1a1618765 -->

```csharp
public Inno.Native.Sdl3.SDLHidDevice* Inno.Native.Sdl3.SDLContext.RawApi.HidOpenPath(sbyte* path)
```

Open a HID device by its path name.
The path name be determined by calling SDL_hid_enumerate(), or a
platform-specific path name can be used (eg: /dev/hidraw0 on Linux).

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `path`:** the path name of the device to open.

**Returns:** a pointer to a SDL_hid_device object on success or NULL on
failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32960).
