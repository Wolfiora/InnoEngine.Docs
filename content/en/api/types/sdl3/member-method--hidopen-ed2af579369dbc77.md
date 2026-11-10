---
title: "SDLContext.RawApi — Method: HidOpen"
description: "Exact Method: HidOpen contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ed2af579369dbc77
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HidOpen

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidOpen`

<a id="api-8c389905fc1c5ee7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HidOpen(System.UInt16,System.UInt16,System.UInt16*) e5cab82594b05f41ba85de73ef0a60a0946a60bb16df6a729cc4b96c12ccb930 -->

```csharp
public Inno.Native.Sdl3.SDLHidDevice* Inno.Native.Sdl3.SDLContext.RawApi.HidOpen(ushort vendor_id, ushort product_id, ushort* serial_number)
```

Open a HID device using a Vendor ID (VID), Product ID (PID) and optionally
a serial number.
If `serial_number` is NULL, the first device with the specified VID and PID
is opened.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `vendor_id`:** the Vendor ID (VID) of the device to open.

**Parameter `product_id`:** the Product ID (PID) of the device to open.

**Parameter `serial_number`:** the Serial Number of the device to open (Optionally
NULL).

**Returns:** a pointer to a SDL_hid_device object on success or NULL on
failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23888).
