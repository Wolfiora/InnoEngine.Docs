---
title: "SDLContext.RawApi — Method: GetGpuDeviceProperties"
description: "Exact Method: GetGpuDeviceProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7c97f49dbb2540c1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGpuDeviceProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGpuDeviceProperties`

<a id="api-e80d73941901f7b9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGpuDeviceProperties(Inno.Native.Sdl3.SDLGPUDevice*) e524cf3066205438aba87298c9cedb5fcec8dc9d5a2b71866ec1ff83f41a1432 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetGpuDeviceProperties(Inno.Native.Sdl3.SDLGPUDevice* device)
```

Get the properties associated with a GPU device.
All properties are optional and may differ between GPU backends and SDL
versions.
The following properties are provided by SDL:
`SDL_PROP_GPU_DEVICE_NAME_STRING`: Contains the name of the underlying
device as reported by the system driver. This string has no standardized
format, is highly inconsistent between hardware devices and drivers, and is
able to change at any time. Do not attempt to parse this string as it is
bound to fail at some point in the future when system drivers are updated,
new hardware devices are introduced, or when SDL adds new GPU backends or
modifies existing ones.
Strings that have been found in the wild include:
- GTX 970
- GeForce GTX 970
- NVIDIA GeForce GTX 970
- Microsoft Direct3D12 (NVIDIA GeForce GTX 970)
- NVIDIA Graphics Device
- GeForce GPU
- P106-100
- AMD 15D8:C9
- AMD Custom GPU 0405
- AMD Radeon (TM) Graphics
- ASUS Radeon RX 470 Series
- Intel(R) Arc(tm) A380 Graphics (DG2)
- Virtio-GPU Venus (NVIDIA TITAN V)
- SwiftShader Device (LLVM 16.0.0)
- llvmpipe (LLVM 15.0.4, 256 bits)
- Microsoft Basic Render Driver
- unknown device
The above list shows that the same device can have different formats, the
vendor name may or may not appear in the string, the included vendor name
may not be the vendor of the chipset on the device, some manufacturers
include pseudo-legal marks while others don't, some devices may not use a
marketing name in the string, the device string may be wrapped by the name
of a translation interface, the device may be emulated in software, or the
string may contain generic text that does not identify the device at all.
`SDL_PROP_GPU_DEVICE_DRIVER_NAME_STRING`: Contains the self-reported name
of the underlying system driver.
Strings that have been found in the wild include:
- Intel Corporation
- Intel open-source Mesa driver
- Qualcomm Technologies Inc. Adreno Vulkan Driver
- MoltenVK
- Mali-G715
- venus
`SDL_PROP_GPU_DEVICE_DRIVER_VERSION_STRING`: Contains the self-reported
version of the underlying system driver. This is a relatively short version
string in an unspecified format. If SDL_PROP_GPU_DEVICE_DRIVER_INFO_STRING
is available then that property should be preferred over this one as it may
contain additional information that is useful for identifying the exact
driver version used.
Strings that have been found in the wild include:
- 53.0.0
- 0.405.2463
- 32.0.15.6614
`SDL_PROP_GPU_DEVICE_DRIVER_INFO_STRING`: Contains the detailed version
information of the underlying system driver as reported by the driver. This
is an arbitrary string with no standardized format and it may contain
newlines. This property should be preferred over
SDL_PROP_GPU_DEVICE_DRIVER_VERSION_STRING if it is available as it usually
contains the same information but in a format that is easier to read.
Strings that have been found in the wild include:
- 101.6559
- 1.2.11
- Mesa 21.2.2 (LLVM 12.0.1)
- Mesa 22.2.0-devel (git-f226222 2022-04-14 impish-oibaf-ppa)
- v1.r53p0-00eac0.824c4f31403fb1fbf8ee1042422c2129
This string has also been observed to be a multiline string (which has a
trailing newline):
```
Driver Build: 85da404, I46ff5fc46f, 1606794520
Date: 11/30/20
Compiler Version: EV031.31.04.01
Driver Branch: promo490_3_Google
```

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.4.0.

**Parameter `device`:** a GPU context to query.

**Returns:** a valid property ID on success or 0 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22618).
