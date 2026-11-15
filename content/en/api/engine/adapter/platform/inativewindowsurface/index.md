---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.adapter.platform.2c6ba4b4de7adc1f
symbol: engine:Inno.Adapter.Platform:T:Inno.Adapter.Platform.INativeWindowSurface
title: INativeWindowSurface
kind: api
owners:
- Inno.Adapter.Platform
apiSurface: source-clr
reviewed: a2f39f77d2804399bdd62cfdf6b91487eb610811e9228538d2dd60104335fc08

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- project.inno-adapter-platform
aliases: []
---

Supplies borrowed native presentation handles to cooperating adapters.

## Remarks

Window implementations opt into this SPI when they support native rendering integration. Shared platform, Shell, and Player contracts do not expose these ABI details.
