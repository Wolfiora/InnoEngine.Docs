---
title: "SDLContext.RawApi — Method: HidEnumerate"
description: "Exact Method: HidEnumerate contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2156f31ca3f5b5f3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HidEnumerate

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidEnumerate`

<a id="api-a5c2fcac981d974f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HidEnumerate(System.UInt16,System.UInt16) 786bdcabe1e787391ebb5281cb04868952ff1a1aa4e342265cd629cf86918999 -->

```csharp
public Inno.Native.Sdl3.SDLHidDeviceInfo* Inno.Native.Sdl3.SDLContext.RawApi.HidEnumerate(ushort vendor_id, ushort product_id)
```

Enumerate the HID Devices.
This function returns a linked list of all the HID devices attached to the
system which match vendor_id and product_id. If `vendor_id` is set to 0
then any vendor matches. If `product_id` is set to 0 then any product
matches. If `vendor_id` and `product_id` are both set to 0, then all HID
devices will be returned.
By default SDL will only enumerate controllers, to reduce risk of hanging
or crashing on bad drivers, but SDL_HINT_HIDAPI_ENUMERATE_ONLY_CONTROLLERS
can be set to "0" to enumerate all HID devices.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_hid_device_change_count

**Parameter `vendor_id`:** the Vendor ID (VID) of the types of device to open, or 0
to match any vendor.

**Parameter `product_id`:** the Product ID (PID) of the types of device to open, or 0
to match any product.

**Returns:** a pointer to a linked list of type SDL_hid_device_info, containing
information about the HID devices attached to the system, or NULL
in the case of failure. Free this linked list by calling
SDL_hid_free_enumeration().


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49574).
