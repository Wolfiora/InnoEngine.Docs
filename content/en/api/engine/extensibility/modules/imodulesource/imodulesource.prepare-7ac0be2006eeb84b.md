---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7ac0be2006eeb84be91bd3d8fc6960d6b9793950f88680f57dc4044cb76626fb
symbol: engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.IModuleSource.Prepare(Inno.Extensibility.Modules.ModuleSourceContext)
title: IModuleSource.Prepare
kind: api
owners:
- Inno.Extensibility.Modules
apiSurface: source-clr
reviewed: e8a0288a3a2b5a1a16ac8700b47d84214bc39bcd3c0fc11dcef44ea5e4970894
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The immutable candidate dependency closure and retirement owner.

## Returns

A complete unpublished contribution; failure retires every acquired resource through the context.
