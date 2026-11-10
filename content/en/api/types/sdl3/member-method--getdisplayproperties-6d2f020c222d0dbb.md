---
title: "SDL — Method: GetDisplayProperties"
description: "Exact Method: GetDisplayProperties contracts in SDL."
uid: api.inno.native.sdl3.6d2f020c222d0dbb
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetDisplayProperties

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDisplayProperties`

<a id="api-f00d59bdf8408474"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetDisplayProperties(System.UInt32) 4533b71cda5e4a4b436dfadc1c211c3eff0f61df5fa1fa7f3bb8fdc5df5ed0c9 -->

```csharp
public static uint Inno.Native.Sdl3.SDL.GetDisplayProperties(uint displayID)
```

Get the properties associated with a display.
The following read-only properties are provided by SDL:
- `SDL_PROP_DISPLAY_HDR_ENABLED_BOOLEAN`: true if the display has HDR
headroom above the SDR white point. This is for informational and
diagnostic purposes only, as not all platforms provide this information
at the display level.
On KMS/DRM:
- `SDL_PROP_DISPLAY_KMSDRM_PANEL_ORIENTATION_NUMBER`: the "panel
orientation" property for the display in degrees of clockwise rotation.
Note that this is provided only as a hint, and the application is
responsible for any coordinate transformations needed to conform to the
requested display orientation.
On Wayland:
- `SDL_PROP_DISPLAY_WAYLAND_WL_OUTPUT_POINTER`: the wl_output associated
with the display
On Windows:
- `SDL_PROP_DISPLAY_WINDOWS_HMONITOR_POINTER`: the monitor handle
(HMONITOR) associated with the display

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `displayID`:** the instance ID of the display to query.

**Returns:** a valid property ID on success or 0 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1848).
