---
title: Text backend implementation boundary
description: The native bridge used by the engine's managed font and shaping adapter.
uid: project.inno-native-text
kind: project
owners:
  - Inno.Native.Text
---
# Text backend implementation boundary

Inno.Native.Text connects the managed text adapter to FreeType and HarfBuzz through the engine's narrow native facade. Application code uses [Inno.Text](inno-text.md); host composition uses the [managed adapter](inno-adapter-text-freetypeharfbuzz.md).

## Native lifetime contract

The adapter owns each native runtime and its font faces. It keeps source and module ownership valid while shaping or rasterizing, checks transfer results and capacities, and releases native state after consumers finish. Native handles remain within this boundary; they are not persistent asset identities or script services.

Use [shape text and rasterize glyphs](../../manual/text/shape-text.md) for the engine's logical-pixel and cluster conventions, and [Text backend integration](../../backends/text.md) for provider composition and threading constraints.

## Documentation scope

The native facade's C ABI and generated bindings are implementation details and have no type/member reference here. The [Text toolchain](inno-build-toolchains-text.md) retains the engine's actual preparation and deployment requirements.
