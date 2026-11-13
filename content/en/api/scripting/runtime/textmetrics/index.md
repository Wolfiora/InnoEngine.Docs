---
uid: api.inno.text.runtime-script.ff9c6dbdd807afda
symbol: "scripting:Inno.Text:T:InnoEngine.Text.TextMetrics"
source: xml
reviewed: af84f90da1c70d6f582b5597d2f0631c79de945c8c2c90a6bb3a42d153b5f43f
title: "TextMetrics"
kind: api
owners: [Inno.Text]
apiSurface: editor-script
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-text#shaping-and-glyph-contract
aliases: []
---

Describes scalable metrics for one font face and logical size.

**Parameter `ascender`:** The scaled face ascender in logical pixels, using the backend's coordinate convention.

**Parameter `descender`:** The scaled face descender in logical pixels, using the backend's coordinate convention.

**Parameter `lineHeight`:** The recommended line spacing in logical pixels for the selected face and size.

**Parameter `underlinePosition`:** The scaled underline position relative to the baseline in logical pixels.

**Parameter `underlineThickness`:** The scaled underline thickness in logical pixels.
