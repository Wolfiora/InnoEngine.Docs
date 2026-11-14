---
uid: api.965b1be18123680c36c4c19458469ce2143c9c0b910f844c77fa4c90d3e20bcd
symbol: "engine:Inno.Shell:M:Inno.Shell.Shell.OnSmokeCompleted(System.Int32)"
source: xml
reviewed: 83990c27004211c55fc76e81d6eea68f39871dd6f22305ff085fbbeb79f3f168
title: "Shell.OnSmokeCompleted"
kind: api
owners: [Inno.Shell]
apiSurface: source-clr
---

Receives the final frame count only when a bounded smoke run reaches its requested frame limit. Closing a window or requesting an earlier exit does not report smoke completion.

## Parameters

**Parameter `frameCount`:** Number of product frames completed by the smoke run.
