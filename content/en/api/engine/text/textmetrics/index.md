---
uid: api.inno.text.ac7c1fd5668efd67
symbol: "engine:Inno.Text:T:Inno.Text.TextMetrics"
source: xml
reviewed: 315555a8e32567b27e74211c765d13d7c21489fc0bd8559a2e482746349a942e
title: "TextMetrics"
kind: api
owners: [Inno.Text]
apiSurface: source-clr
contracts:
- project.inno-text#shaping-and-glyph-contract
aliases: []
---

Describes scalable metrics for one font face and logical size.

**Parameter `ascender`:** The scaled face ascender in logical pixels, using the backend's coordinate convention.

**Parameter `descender`:** The scaled face descender in logical pixels, using the backend's coordinate convention.

**Parameter `lineHeight`:** The recommended line spacing in logical pixels for the selected face and size.

**Parameter `underlinePosition`:** The scaled underline position relative to the baseline in logical pixels.

**Parameter `underlineThickness`:** The scaled underline thickness in logical pixels.
