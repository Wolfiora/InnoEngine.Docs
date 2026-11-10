---
title: "SDLContext — Method: HidDeviceChangeCount"
description: "Exact Method: HidDeviceChangeCount contracts in SDLContext."
uid: api.inno.native.sdl3.197ce0d76d53778e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HidDeviceChangeCount

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidDeviceChangeCount`

<a id="api-73070a1e4e6d64d8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HidDeviceChangeCount 1353823a335b8bd4058b81b33299ee427728e1d622b340ec0bc7959f8586eba0 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.HidDeviceChangeCount()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16071).
