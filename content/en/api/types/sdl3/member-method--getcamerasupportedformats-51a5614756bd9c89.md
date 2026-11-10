---
title: "SDLContext.RawApi — Method: GetCameraSupportedFormats"
description: "Exact Method: GetCameraSupportedFormats contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.51a5614756bd9c89
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetCameraSupportedFormats

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCameraSupportedFormats`

<a id="api-13d7f8a4327a5e4f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetCameraSupportedFormats(System.UInt32,System.Int32*) ffc017d5c3e4c790db40fc15b4c5d0c307e9927754d956a88fea15ebfdc764f4 -->

```csharp
public Inno.Native.Sdl3.SDLCameraSpec** Inno.Native.Sdl3.SDLContext.RawApi.GetCameraSupportedFormats(uint instance_id, int* count)
```

Get the list of native formats/sizes a camera supports.
This returns a list of all formats and frame sizes that a specific camera
can offer. This is useful if your app can accept a variety of image formats
and sizes and so want to find the optimal spec that doesn't require
conversion.
This function isn't strictly required; if you call SDL_OpenCamera with a
NULL spec, SDL will choose a native format for you, and if you instead
specify a desired format, it will transparently convert to the requested
format on your behalf.
If `count` is not NULL, it will be filled with the number of elements in
the returned array.
Note that it's legal for a camera to supply an empty list. This is what
will happen on Emscripten builds, since that platform won't tell _anything_
about available cameras until you've opened one, and won't even tell if
there _is_ a camera until the user has given you permission to check
through a scary warning popup.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetCameras

**See also:** SDL_OpenCamera

**Parameter `instance_id`:** the camera device instance ID.

**Parameter `count`:** a pointer filled in with the number of elements in the list,
may be NULL.

**Returns:** a NULL terminated array of pointers to SDL_CameraSpec or NULL on
failure; call SDL_GetError() for more information. This is a
single allocation that should be freed with SDL_free() when it is
no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45622).
