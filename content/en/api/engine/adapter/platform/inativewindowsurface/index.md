---
uid: api.inno.adapter.platform.2c6ba4b4de7adc1f
symbol: "engine:Inno.Adapter.Platform:T:Inno.Adapter.Platform.INativeWindowSurface"
source: xml
reviewed: dc93c953df7a593f808b4c9e85d78fd7194d4bae0f1925ea5fdbab5d91ac8d97
title: "INativeWindowSurface"
kind: api
owners: [Inno.Adapter.Platform]
apiSurface: source-clr
contracts:
- project.inno-adapter-platform
aliases: []
---

Supplies borrowed native presentation handles to cooperating adapters.

## Remarks

Window implementations opt into this SPI when they support native rendering integration. Shared platform, Shell, and Player contracts do not expose these ABI details.
