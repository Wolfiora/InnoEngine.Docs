---
# Generated metadata. Maintained by project synchronization tooling.
uid: project.inno-text-native-tests
symbol: project:Inno.Text.Native.Tests
title: Inno.Text.Native.Tests
kind: project
owners:
- Inno.Text.Native.Tests
sourceFingerprint: 270396ef1dbdc216206df8ddb0797cb74c295272c349f721e24078859e1d44d7
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: InnoEngine contributors
description:
- Font metadata, encoded artifacts, and actual FreeType/HarfBuzz shaping and rasterization.
outdated: false
---
# Inno.Text.Native.Tests

`Inno.Text.Native.Tests` combines metadata/import contracts with actual FreeType/HarfBuzz execution. It declares the `player` native product even though its evidence layer is `contract`. A managed-only run cannot certify the entire suite.

## Behavior covered

`TextServiceTests` checks metadata codec round-tripping and corruption rejection, then imports the supplied font into runtime metadata plus a separate `font-data` artifact. The imported encoded bytes must match the source.

The native scenario loads the fixture font, shapes text, asserts nonempty glyphs and positive dimensions, then rasterizes a glyph and checks the coverage buffer length. It releases the font handle before disposing the backend.

The fixture supplies `TestData/LatoLatin-Regular.ttf`; it does not rely on an arbitrary system font. The current native scenario's string is `Hello, UI!`: its method name is not evidence of comprehensive Unicode shaping coverage or platform font fallback.

## Prepare and run

Follow [native validation](../../validate-change.md#native-and-process-requirements) to prepare the exact target/configuration, product deployment index and Text closure. Existing libraries elsewhere in the checkout do not substitute for valid deployment.

The fixture owns its identity scope, module/type/serialization services, logs, asset session and temporary root. Its cleanup order is part of the test environment. Missing font data or native deployment is a failure, not a skip that certifies shaping.

Read [shape text and rasterize glyphs](../../../manual/text/shape-text.md) and [the backend boundary](../../../backends/text.md) for actual capability limits. The test entry points are not product APIs.

[Browse the complete assertions and project inputs](https://github.com/Wolfiora/InnoEngine/tree/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/services/text/Inno.Text.Native.Tests).
