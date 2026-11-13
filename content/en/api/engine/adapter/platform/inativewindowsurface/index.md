---
uid: api.inno.adapter.platform.2c6ba4b4de7adc1f
symbol: "engine:Inno.Adapter.Platform:T:Inno.Adapter.Platform.INativeWindowSurface"
source: xml
reviewed: a2f39f77d2804399bdd62cfdf6b91487eb610811e9228538d2dd60104335fc08
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
