---
title: "SDL — Method: CleanupTls"
description: "Exact Method: CleanupTls contracts in SDL."
uid: api.inno.native.sdl3.2ac879718dcb0ea7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: CleanupTls

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CleanupTls`

<a id="api-1897953b9d23d25e"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.CleanupTls a44287a120fedfe3efd3f2cac801befafae80133c18720afc119a49d132115e6 -->

```csharp
public static void Inno.Native.Sdl3.SDL.CleanupTls()
```

Cleanup all TLS data for this thread.
If you are creating your threads outside of SDL and then calling SDL
functions, you should call this function before your thread exits, to
properly clean up SDL memory.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3910).
