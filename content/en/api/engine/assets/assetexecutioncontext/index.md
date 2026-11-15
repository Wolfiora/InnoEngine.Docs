---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.assets.6f83482cacbfa610
symbol: engine:Inno.Assets:T:Inno.Assets.AssetExecutionContext
title: AssetExecutionContext
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: 8ad45459f9bf6c318cb3e106458d63a8ffc8e6d4c072339b34431f022009863f

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- project.inno-assets
aliases: []
---

Binds one host-owned asset lookup to the current asynchronous script execution context.

## Remarks

This type is a composition boundary for Editor and Player hosts. Game code should use `T:Inno.Assets.Assets` instead of managing execution scopes directly.
