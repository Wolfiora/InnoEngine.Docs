---
title: Text import and native shaping tests
description: Font metadata, encoded artifacts, and actual FreeType/HarfBuzz shaping and rasterization.
uid: project.inno-text-tests
kind: project
owners:
  - Inno.Text.Tests
---
# Text import and native shaping tests

`Inno.Text.Tests` combines metadata/import contracts with actual FreeType/HarfBuzz execution. It declares the `player` native product even though its evidence layer is `contract`. A managed-only run cannot certify the entire suite.

## Behavior covered

`TextServiceTests` checks metadata codec round-tripping and corruption rejection, then imports the supplied font into runtime metadata plus a separate `font-data` artifact. The imported encoded bytes must match the source.

The native scenario loads the fixture font, shapes text, asserts nonempty glyphs and positive dimensions, then rasterizes a glyph and checks the coverage buffer length. It releases the font handle before disposing the backend.

The fixture supplies `TestData/LatoLatin-Regular.ttf`; it does not rely on an arbitrary system font. The current native scenario's string is `Hello, UI!`: its method name is not evidence of comprehensive Unicode shaping coverage or platform font fallback.

## Prepare and run

Follow [native validation](../validate-change.md#native-and-process-requirements) to prepare the exact target/configuration, product deployment index and Text closure. Existing libraries elsewhere in the checkout do not substitute for valid deployment.

The fixture owns its identity scope, module/type/serialization services, logs, asset session and temporary root. Its cleanup order is part of the test environment. Missing font data or native deployment is a failure, not a skip that certifies shaping.

Read [shape text and rasterize glyphs](../../manual/text/shape-text.md) and [the backend boundary](../../backends/text.md) for actual capability limits. The test entry points are not product APIs.

[Browse the complete assertions and project inputs](https://github.com/Wolfiora/InnoEngine/tree/80fbbb550f0de634b04605b31abc4d96b3d526f6/tests/text/Inno.Text.Tests).
