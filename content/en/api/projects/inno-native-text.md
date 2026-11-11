---
title: Inno.Native.Text
description: Generated managed ABI for the narrow FreeType/HarfBuzz font adapter facade.
uid: project.inno-native-text
kind: project
owners:
  - Inno.Native.Text
---
# Inno.Native.Text

The handwritten C++ `TextRuntime.hpp` facade hides FreeType and HarfBuzz behind a PImpl. One BGCS generation produces the C ABI bridge and managed bindings from that facade. The Text adapter, native tests and build tooling consume this surface; game scripts do not.

## Native lifetime contract

A native Runtime owns its font library and loaded faces. Its unique owner destroys it after all operations finish; destruction releases faces before the library. A copied pointer or numeric face handle does not create ownership, preserve lifetime or establish a different generation. Coordinate operations on one owner thread.

`LoadFont` copies the complete input bytes. Collection indices must be nonnegative. Raw output pointers and capacities belong to the caller and remain valid for the call. `Glyph`, `Metrics` and `Bitmap` storage follows the generated ABI layout assertions; arbitrary pointer casts are not validated ownership.

| Operation | Required handling |
| --- | --- |
| `CreateRuntime` / `DestroyRuntime` | Return one owned Runtime, then destroy it exactly once after its users finish. |
| `LoadFont` / `ReleaseFont` | Retain the local face handle only inside its Runtime. Zero or unknown handles have explicit failure results. |
| `GetMetrics` | Supply output storage and a finite positive logical pixel size. |
| `ShapeUtf8` | Length is UTF-8 bytes. Null glyph storage and zero capacity query the required count; insufficient non-null storage returns `BufferTooSmall`. |
| `RasterizeGlyph` | Query dimensions with null pixels, then provide adequate coverage storage. The result is tightly packed 8-bit data. |
| `ResultMessage` | Borrow process-lifetime UTF-8 explanation text; no caller-owned native allocation is returned. |

Bridge status and the domain `Result` are separate. Check both. A returned `BgcsInnoTextError*` belongs to that call; read its message and release it through `BgcsInnoTextErrorRelease`, including failure paths. `Result.Success` is 1; zero is `UnknownError` and must not be treated as success.

`InvalidArgument` identifies an invalid pointer, capacity, size or zero handle; `InvalidHandle` identifies a face absent from the selected Runtime. Font loading can return `InvalidFont` or `OutOfMemory`. Glyph rendering can return `BackendError`. A buffer-size query does not authorize writing past the supplied capacity on the subsequent call.

The bitmap's `ByteLength` covers tightly packed `Width * Height` pixels; bearings and advances position them relative to the pen. Glyph fields contain the face-local `GlyphId`, UTF-8 `Cluster`, logical-pixel advances and placement offsets. Metrics contain scaled ascender, descender, line height and underline measurements. Opaque Runtime/error carrier structs identify native objects; constructing a managed carrier value does not allocate the corresponding object.

## Initialization and target selection

The handwritten partial `TextNative` initializes the generated module through runtime imports, static bindings or `NativeDllLoader`, according to the selected build symbols. Dynamic loading consumes explicitly deployed `inno-text-debug` or `inno-text-release`; a missing deployment is an error, not a request to search arbitrary build caches.

The generated context owns function access, not every font Runtime allocated through it. Keep the module available through native cleanup. Binding profiles determine the target ABI; the component does not maintain a second platform selection table. HostSource files and TargetArtifacts generations remain distinct build outputs.

`TextNativeContext.Load` opens the selected library; `FromProvider` uses an explicit module provider. Initialization validates pointer width, byte order, storage layout and required exports, and disposes its candidate session if initialization fails. The static facade installs a shared context and disposes the previous one on replacement. Its `Dispose`/`DisposeAsync` clear that context; `IsInitialized` reports only whether a shared context exists, not whether a particular font Runtime is alive. Raw calls borrow module access for the call and do not acquire a lasting face lease.

## Reference and limits

[Generated declarations](../types/native-text/index.md) retain every captured public symbol. Many generated members have no individual XML description and rely on this explicit shared ABI contract. Declaration coverage does not establish that every target or failure path was executed.

Use the [managed adapter](inno-adapter-text-freetypeharfbuzz.md) for ordinary host work and [Text toolchain](inno-build-toolchains-text.md) for preparation. Do not add a parallel handwritten C export layer.
