---
title: "SDLContext.RawApi — Method: HidSendFeatureReport"
description: "Exact Method: HidSendFeatureReport contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.740bf10eab5e2361
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HidSendFeatureReport

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidSendFeatureReport`

<a id="api-dc5469130f7c4a39"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HidSendFeatureReport(Inno.Native.Sdl3.SDLHidDevice*,System.Byte*,System.UInt64) bc7558ac45c7b05af219d2f013be45698737ac6516425a3dbb4e767a1439a4aa -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.HidSendFeatureReport(Inno.Native.Sdl3.SDLHidDevice* dev, byte* data, ulong length)
```

Send a Feature report to the device.
Feature reports are sent over the Control endpoint as a Set_Report
transfer. The first byte of `data` must contain the Report ID. For devices
which only support a single report, this must be set to 0x0. The remaining
bytes contain the report data. Since the Report ID is mandatory, calls to
SDL_hid_send_feature_report() will always contain one more byte than the
report contains. For example, if a hid report is 16 bytes long, 17 bytes
must be passed to SDL_hid_send_feature_report(): the Report ID (or 0x0, for
devices which do not use numbered reports), followed by the report data (16
bytes). In this example, the length passed in would be 17.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dev`:** a device handle returned from SDL_hid_open().

**Parameter `data`:** the data to send, including the report number as the first
byte.

**Parameter `length`:** the length in bytes of the data to send, including the report
number.

**Returns:** the actual number of bytes written and -1 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16790).
