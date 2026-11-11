---
title: Shape text and rasterize glyphs
description: Turn an imported font and Unicode text into positioned glyphs and CPU coverage pixels.
uid: manual.text.shape-text
kind: how-to
owners:
  - Inno.Text
  - Inno.Text.Runtime
contracts:
  - project.inno-text#shaping-and-glyph-contract
  - project.inno-text-runtime#font-lifetime-contract
exampleMode: runtime-script
exampleProjects:
  - Inno.Text
---
# Shape text and rasterize glyphs

Use the Text service to produce glyph positions and 8-bit coverage from an imported font. Your presentation system owns atlas allocation, GPU upload, line arrangement and drawing; Text does not create a scene component or render a label.

## Prerequisites

- Import a `.ttf`, `.otf`, `.ttc` or `.otc` asset through the standard asset pipeline. The importer stages encoded `font-data` and compact runtime metadata.
- Obtain a live `FontAsset` in the current asset scope. A Missing asset or absent runtime payload cannot act as a default font.
- Run inside an active runtime frame whose product includes a Text backend. The session binds the script facade; a host tool can explicitly enter its owned `TextRuntime` scope.

The importer validates the source container header and collection count. This is not a full font validator: the selected backend can still reject malformed tables while loading or shaping.

## Shape a run

```csharp
using InnoEngine.Text;

public static class CaptionLayout
{
    public static TextLayout Shape(FontAsset font)
        => Text.Shape(font, "Hello Inno", new TextStyle(24f));

    public static GlyphBitmap RasterizeFirstGlyph(
        FontAsset font,
        TextLayout layout
    ) {
        if (layout.glyphs.Count == 0)
            throw new System.ArgumentException("The layout has no glyphs.", nameof(layout));
        return Text.Rasterize(font, 0, layout.glyphs[0].glyphId, 24f);
    }
}
```

The example uses face zero and the same size for both operations. Keep the originating font, face and content generation associated with the layout. A glyph ID is a face-specific index, not a Unicode code point or persistent resource identity.

Pass `TextShapingOptions` when a run needs an explicit language, script or direction. Automatic shaping guesses run properties; it is not a complete paragraph layout, font fallback or bidirectional text segmentation service.

## Position and draw

For each glyph, place its bitmap using the pen position, glyph offsets and bitmap bearings, then advance the pen by `advanceX` and `advanceY`. The default backend reports logical pixel measurements and returns cluster indices into the UTF-8 input. Do not use a cluster directly to index a C# UTF-16 string.

`GlyphBitmap.pixels` is tightly packed, row-major 8-bit coverage. It contains no color, GPU texture or texture ownership. Consume the result as read-only data and release any rendering resources through the presentation system that created them.

## Current boundaries

The FreeType/HarfBuzz backend shapes a supplied face and applies letter spacing. `TextStyle.weight` and `style` express requests, but this implementation does not select another face or synthesize bold/italic from those fields. Select the appropriate imported face explicitly.

`TextLayout.width` is the aggregate horizontal advance, and `height` is the nonnegative face line height in this backend. Neither is a tight ink rectangle or a wrapped multiline extent. Vertical direction changes glyph advances but does not turn this object into a paragraph layout engine.

Keep operations on the runtime/backend owner thread. A stopped runtime rejects calls. Session retirement releases loaded faces and artifact leases; do not transfer a native face handle to a new session.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| No active Text service | Product composition and the runtime execution scope. |
| Missing font or metadata | Asset resolution, import result and deployed `font-data`. |
| Face index rejected | The selected index must be smaller than imported `faceCount`. |
| Unexpected glyph positions | Run direction, shaping hints, face choice and UTF-8 cluster interpretation. |
| Native initialization fails | The selected product's matching Text deployment; do not substitute an unrelated cached library. |

See the [Text API](../../api/projects/inno-text.md), [backend guide](../../backends/text.md) and [backend extension contract](../../extending/text-backends.md).
