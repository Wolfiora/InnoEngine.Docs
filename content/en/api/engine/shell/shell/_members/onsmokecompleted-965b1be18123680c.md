---
uid: api.965b1be18123680c36c4c19458469ce2143c9c0b910f844c77fa4c90d3e20bcd
symbol: "engine:Inno.Shell:M:Inno.Shell.Shell.OnSmokeCompleted(System.Int32)"
source: xml
reviewed: d4a8ff1876dcbf326590de7a76cea5893fb7fcf35e220b5d1f8e5350249a11ac
title: "OnSmokeCompleted"
kind: api
owners: [Inno.Shell]
apiSurface: source-clr
---

Receives the final frame count only when a bounded smoke run reaches its requested frame limit. Closing a window or requesting an earlier exit does not report smoke completion.

**Parameter `frameCount`:** Number of product frames completed by the smoke run.
