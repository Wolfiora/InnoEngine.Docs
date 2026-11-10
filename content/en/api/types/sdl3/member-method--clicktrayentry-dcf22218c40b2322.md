---
title: "SDLContext.RawApi — Method: ClickTrayEntry"
description: "Exact Method: ClickTrayEntry contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.dcf22218c40b2322
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ClickTrayEntry

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ClickTrayEntry`

<a id="api-e3523626cd8c181b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ClickTrayEntry(Inno.Native.Sdl3.SDLTrayEntry*) f5d9c511714e6a8ba89d0b0a99f643dd60d6a759c397d83a4ec88149f4ae1a91 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.ClickTrayEntry(Inno.Native.Sdl3.SDLTrayEntry* entry)
```

Simulate a click on a tray entry.

**Thread safety:** This function should be called on the thread that created the
tray.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `entry`:** The entry to activate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26471).
