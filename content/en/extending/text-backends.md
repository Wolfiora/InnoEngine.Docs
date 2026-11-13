---
title: Add a text backend
description: Implement neutral shaping, register a provider and transfer one
  backend to each runtime session.
uid: extending.text-backends
kind: how-to
owners:
  - Inno.Adapter.Text
  - Inno.Text
contracts:
  - project.inno-adapter-text#provider-and-ownership-contract
  - project.inno-text#shaping-and-glyph-contract
---
# Add a text backend

Implement `ITextBackend` when a product needs another shaping or rasterization implementation. Keep native library details inside that backend; scripts continue to use the Text facade and neutral value types.

## Implement the service boundary

1. Create one isolated backend instance for each requested session.
2. Load an encoded font face and return a valid local `TextFontHandle`. Copy input when it must outlive the call; never retain an unprotected caller span.
3. Shape a Unicode run into glyph IDs, clusters, advances, offsets and scaled metrics. State cluster units and implemented style options explicitly.
4. Rasterize a glyph from the same face into tightly packed 8-bit coverage. Return managed result data whose lifetime does not depend on an unprotected native buffer.
5. Release individual faces and all remaining native state when the owner disposes the backend. Keep failure and thread requirements explicit.

Do not persist handles, infer a rendering system, create a GPU atlas or add scene policy to this service. Font fallback, paragraph wrapping and richer typography require their own declared capability; an upstream library feature is not automatically an InnoEngine promise.

## Register and compose

Derive a `TextBackendProvider` with a unique stable ID and implement `CreateBackend`. Put the provider in the composition-owned `TextBackendCatalog`, validate the product selection and transfer the returned backend to `TextRuntime`. Provider construction should describe availability without allocating the native service early.

The catalog rejects duplicate IDs and null products. It is not a dynamic discovery or plugin-lifetime owner: if a plugin supplies a provider, its surrounding composition must preserve that provider's resources until all created backends have retired.

## Verify behavior

Test invalid fonts and faces, Unicode clusters, explicit directions, empty text, invalid sizes, buffer layout, handle retirement and construction/cleanup failures. Use the owning native environment for actual rasterization checks. A managed catalog test alone does not validate the font library or target deployment.

The [FreeType/HarfBuzz implementation](../backends/text.md) is a concrete reference. [Runtime ownership](../architecture/projects/inno-text-runtime.md) describes the consumer's artifact leases and stop sequence.
