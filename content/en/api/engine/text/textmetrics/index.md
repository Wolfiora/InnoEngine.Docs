---
uid: api.inno.text.ac7c1fd5668efd67
symbol: "engine:Inno.Text:T:Inno.Text.TextMetrics"
source: xml
reviewed: c10485d9b8b87d4cd354723d07dee18f6048fe96e32827abc381f5429ec5fce9
title: "TextMetrics"
kind: api
owners: [Inno.Text]
apiSurface: source-clr
contracts:
- project.inno-text#shaping-and-glyph-contract
aliases: []
---

Describes scalable metrics for one font face and logical size.

## Parameters

**Parameter `ascender`:** The scaled face ascender in logical pixels, using the backend's coordinate convention.

**Parameter `descender`:** The scaled face descender in logical pixels, using the backend's coordinate convention.

**Parameter `lineHeight`:** The recommended line spacing in logical pixels for the selected face and size.

**Parameter `underlinePosition`:** The scaled underline position relative to the baseline in logical pixels.

**Parameter `underlineThickness`:** The scaled underline thickness in logical pixels.
