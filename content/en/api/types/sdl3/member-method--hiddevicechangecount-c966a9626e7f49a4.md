---
title: "SDL — Method: HidDeviceChangeCount"
description: "Exact Method: HidDeviceChangeCount contracts in SDL."
uid: api.inno.native.sdl3.c966a9626e7f49a4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HidDeviceChangeCount

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidDeviceChangeCount`

<a id="api-5b0a4e05221c08dc"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HidDeviceChangeCount 8c2ad28d095928bdcda24a2b9664f1c04759f1636d949b4482ed962e08d5bbb2 -->

```csharp
public static uint Inno.Native.Sdl3.SDL.HidDeviceChangeCount()
```

Check to see if devices may have been added or removed.
Enumerating the HID devices is an expensive operation, so you can call this
to see if there have been any system device changes since the last call to
this function. A change in the counter returned doesn't necessarily mean
that anything has changed, but you can call SDL_hid_enumerate() to get an
updated device list.
Calling this function for the first time may cause a thread or other system
resource to be allocated to track device change notifications.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_hid_enumerate

**Returns:** a change counter that is incremented with each potential device
change, or 0 if device change detection isn't available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3887).
