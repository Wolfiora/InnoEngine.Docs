---
title: "SDLContext.RawApi — Method: GetPowerInfo"
description: "Exact Method: GetPowerInfo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ab3867b84a16e629
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetPowerInfo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetPowerInfo`

<a id="api-bd13d74927a696d2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetPowerInfo(System.Int32*,System.Int32*) 9905c5f0e39aa9170d371be18f1af00c8ea0b17e8f61dc2f30806a4643e37440 -->

```csharp
public Inno.Native.Sdl3.SDLPowerState Inno.Native.Sdl3.SDLContext.RawApi.GetPowerInfo(int* seconds, int* percent)
```

Get the current power supply details.
You should never take a battery status as absolute truth. Batteries
(especially failing batteries) are delicate hardware, and the values
reported here are best estimates based on what that hardware reports. It's
not uncommon for older batteries to lose stored power much faster than it
reports, or completely drain when reporting it has 20 percent left, etc.
Battery status can change at any time; if you are concerned with power
state, you should call this function frequently, and perhaps ignore changes
until they seem to be stable for a few seconds.
It's possible a platform can only report battery percentage or time left
but not both.
On some platforms, retrieving power supply details might be expensive. If
you want to display continuous status you could call this function every
minute or so.

**Thread safety:** This function is not thread safe.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `seconds`:** a pointer filled in with the seconds of battery life left,
or NULL to ignore. This will be filled in with -1 if we
can't determine a value or there is no battery.

**Parameter `percent`:** a pointer filled in with the percentage of battery life
left, between 0 and 100, or NULL to ignore. This will be
filled in with -1 when we can't determine a value or there
is no battery.

**Returns:** the current battery state or `SDL_POWERSTATE_ERROR` on failure;
call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41558).
